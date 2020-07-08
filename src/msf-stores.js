import { writable, derived } from 'svelte/store';
import { getFraccionamientos, getItems } from './airtable';

// Global Stores
export const currentStep = writable(1);
export const currentTipo = writable(1);
export const numberOfTipos = writable([]);
export const editMode = writable(false);

// Available Items Stores
export const availableViviendas = writable([]);
export const availableAtributos = writable({});

// Fetched Items Stores
export const fetchedFraccionamientos = writable(getFraccionamientos());

export const fetchedViviendas = derived(
  availableViviendas,
  ($availableViviendas) => {
    if ($availableViviendas.length > 0)
      return getItems({
        table: 'Viviendas',
        records: $availableViviendas,
        sort: 'Nombre',
      });
  }
);

export const fetchedTipos = derived(
  availableAtributos,
  async ($availableAtributos) => {
    if (Object.keys($availableAtributos).length === 0) return;

    const atributos = await getItems({
      table: 'Atributos',
      records: $availableAtributos.atributos,
      sort: 'Orden',
    });
    const tipos = await getItems({
      table: 'Tipos',
      records: $availableAtributos.tipos,
      sort: 'Orden',
    });

    tipos.forEach((tipo) => {
      tipo['Atributos'] = tipo['Atributos'].reduce((acc, curr) => {
        const data = atributos.find((atributo) => atributo.id === curr);

        if (data) acc.push(data);

        return acc;
      }, []);

      tipo['Atributos'].sort((a, b) => a['Orden'] - b['Orden']);
    });

    numberOfTipos.set(tipos.map((tipo) => tipo['Nombre']));

    return tipos;
  }
);

// Error while fetching store
export const fetchError = writable(false);

// Selected Inputs Stores
export const selectedFraccionamiento = writable();

export const selectedVivienda = writable();

const selectedAtributosStore = writable([]);

export const selectedAtributos = {
  subscribe: selectedAtributosStore.subscribe,
  set: selectedAtributosStore.set,
  modify: (data) => {
    selectedAtributosStore.update((items) => {
      const index = items.findIndex((item) => item['Tipo'] === data['Tipo']);

      if (index >= 0) items[index] = data;
      else items.push(data);

      return items;
    });
  },
  delete: (tipo) => {
    selectedAtributosStore.update((items) =>
      items.filter((item) => item['Tipo'] !== tipo)
    );
  },
};
