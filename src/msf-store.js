import { writable } from 'svelte/store';

// Current Step Store
export const currentStep = writable(1);

// Available Items
export const viviendasDisponibles = writable([]);
export const atributosDisponibles = writable([]);

// Selected Store
const selected = writable({});

export const selectedStore = {
  subscribe: selected.subscribe,
  modify: (key, data) => {
    selected.update((items) => ({ ...items, [key]: data }));
  },
  delete: (key) => {
    selected.update((items) => {
      delete items[key];
      return items;
    });
  },
  modifyAtributo: (data) => {
    selected.update((items) => {
      const atributos = {
        ...items['Atributos'],
        [data.fields['Tipo']]: data.fields,
      };

      return { ...items, ['Atributos']: atributos };
    });
  },
  deleteAtributo: (key) => {
    selected.update((items) => {
      delete items['Atributos'][key];
      return items;
    });
  },
};

export const fetchError = writable(false);
