import { writable, derived } from 'svelte/store';
import { getFraccionamientos, getItems } from './airtable';

// Global Stores
export const currentStep = writable(1);
export const currentTipo = writable(1);
export const editMode = writable(false);

// Available Items Stores
export const availableViviendas = writable([]);
export const availableAtributos = writable([]);

// Fetched Items Stores
export const fetchedFraccionamientos = writable(getFraccionamientos());

export const fetchedViviendas = derived(
  availableViviendas,
  ($availableViviendas) =>
    getItems({ table: 'Viviendas', records: $availableViviendas })
);

export const fetchedAtributos = derived(
  availableAtributos,
  ($availableAtributos) =>
    getItems({ table: 'Atributos', records: $availableAtributos })
);

export const fetchedTipos = writable([]);

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
