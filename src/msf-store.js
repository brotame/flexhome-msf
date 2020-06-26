import { writable } from 'svelte/store';

// Current Step Store
export const currentStep = writable(1);

// Available Items
export const availableViviendas = writable([]);
export const availableAtributos = writable([]);

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

export const selectedFraccionamientos = writable();
export const selectedViviendas = writable();
const selectedAtributesStore = writable({});

export const selectedAtributos = {
  subscribe: selectedAtributosStore.subscribe,
  set: selectedAtributesStore.set,
  modify: (data) => {
    selectedAtributosStore.update((items) => {
      const atributos = {
        ...items,
        [data.fields['Tipo']]: data.fields,
      };

      return { ...atributos };
    });
  },
  delete: (key) => {
    selectedAtributosStore.update((items) => {
      delete items[key];
      return items;
    });
  },
};

export const fetchError = writable(false);

/* 
selectedAtributos = [
  tipo: 'Flex Room',
  data: {...}
]
*/
