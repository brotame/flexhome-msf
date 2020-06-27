import { writable } from 'svelte/store';

// Current Step & Tipo Store
export const currentStep = writable(1);
export const currentTipo = writable(1);

// Available Itemsc Stores
export const availableViviendas = writable([]);
export const availableAtributos = writable([]);

// Selected Stores
export const selectedFraccionamientos = writable();
export const selectedViviendas = writable();

const selectedAtributosStore = writable([]);

export const selectedAtributos = {
  subscribe: selectedAtributosStore.subscribe,
  set: selectedAtributosStore.set,
  modify: (data) => {
    selectedAtributosStore.update((items) => {
      console.log(items);
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

// Error while fetching store
export const fetchError = writable(false);
