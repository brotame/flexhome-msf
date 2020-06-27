<script>
  // Svelte
  import { createEventDispatcher } from "svelte";

  // Stores
  import { currentTipo, selectedAtributos } from "../msf-store";

  // Exports
  export let name, atributos;

  // Variables
  const tipos = [];

  // Functions
  const dispatch = createEventDispatcher();

  function getTipos() {
    atributos.forEach(atributo => {
      const index = tipos.findIndex(tipo => tipo.nombre === atributo["Tipo"]);

      if (index >= 0) tipos[index].atributos.push(atributo);
      else tipos.push({ nombre: atributo["Tipo"], atributos: [atributo] });
    });
  }

  getTipos();
</script>

{#each tipos as tipo, index (tipo)}
  <div class="msf-atributos-wrap" class:last={index === tipos.length - 1}>

    <h3>{tipo.nombre}</h3>

    <div class="msf-atributos">

      {#each tipo.atributos as atributo}
        <label
          class="msf-atributo w-radio"
          class:active={tipo.selected === atributo['Nombre']}>

          <input
            type="radio"
            data-name={tipo.nombre}
            id={atributo['Nombre']}
            name={tipo.nombre}
            value={atributo['Nombre']}
            class="w-form-formradioinput msf-hidden w-radio-input"
            bind:group={tipo.selected}
            on:input={() => {
              dispatch('select', { key: name, data: atributo });
            }} />

          <!-- Imagen -->
          <img
            src={atributo['Renders'][0].thumbnails.large.url}
            alt={atributo['Nombre']}
            class="msf-atributo-image" />

          <!-- Info -->
          <div class="msf-atributo-info">
            <!-- Nombre -->
            <div for={atributo['Nombre']} class="msf-atributo-name">
              {atributo['Nombre']}
            </div>

            <!-- Descripcion -->
            <p class="msf-atributo-description">{atributo['Descripcion']}</p>

            <!-- Precio -->
            <div class="msf-atributo-price">${atributo['Precio']}</div>
          </div>

        </label>
      {/each}
    </div>
  </div>
{/each}
