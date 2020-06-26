<script>
  // Svelte
  import { createEventDispatcher } from "svelte";
  import { fade } from "svelte/transition";

  // Stores
  import { selectedStore } from "../msf-store";

  // Exports
  export let name, atributos;

  // Variables
  const tipos = [];

  // Functions
  const dispatch = createEventDispatcher();

  function getTipos() {
    atributos.forEach(atributo => {
      const index = tipos.findIndex(
        tipo => tipo.nombre === atributo.fields["Tipo"]
      );

      if (index >= 0) tipos[index].atributos.push(atributo);
      else tipos.push({ nombre: atributo.fields["Tipo"], atributos: [] });
    });
  }

  getTipos();
</script>

{#each tipos as tipo, index}
  <div
    class="msf-atributos-wrap"
    clas:last={index === tipos.length - 1}
    transition:fade>

    <h3>{tipo.nombre}</h3>

    <div class="msf-atributos">

      {#each tipo.atributos as atributo}
        <label
          class="msf-atributo w-radio"
          class:active={tipo.selected === atributo.fields['Nombre']}>

          <input
            type="radio"
            data-name={tipo.nombre}
            id={atributo.id}
            name={tipo.nombre}
            value={atributo.fields['Nombre']}
            required="required"
            class="w-form-formradioinput msf-hidden w-radio-input"
            bind:group={tipo.selected}
            on:input={() => {
              dispatch('select', { data: atributo, key: name });
            }} />

          <img
            src={atributo.fields['Renders'][0].thumbnails.large.url}
            alt={atributo.fields['Nombre']}
            class="msf-atributo-image" />

          <span for={atributo.id} class="msf-atributo-label w-form-label">
            {atributo.fields['Nombre']}
          </span>

          <div class="msf-atributo-price">{atributo.fields['Precio']}</div>
        </label>
      {/each}
    </div>
  </div>
{/each}
