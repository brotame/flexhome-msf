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
  modifyAtributos: (key, data) => {
    selected.update((items) => {
      const atributos = {
        ...items[key],
        [data.fields['Tipo']]: data.fields,
      };

      return { ...items, [key]: atributos };
    });
  },
};

/* const selections = {
  fraccionamiento: 'Fraccionamiento A',
  vivienda: 'Inland',
  atributos: {
    'Flex Room': {
      nombre: "Básico",
      precio: "$1000"
    }
  }
};*/
