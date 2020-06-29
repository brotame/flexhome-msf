<script>
  // Svelte
  import { createEventDispatcher } from "svelte";
  import { fade } from "svelte/transition";

  // Stores
  import { currentTipo, fetchedTipos } from "../msf-stores";

  // Exports
  export let name, atributos;

  // Reactive
  $: tipo = $fetchedTipos[$currentTipo - 1];

  // Functions
  const dispatch = createEventDispatcher();

  (function getTipos() {
    const tipos = [];
    atributos.forEach(atributo => {
      const index = tipos.findIndex(tipo => tipo.nombre === atributo["Tipo"]);
      if (index >= 0) tipos[index].atributos.push(atributo);
      else tipos.push({ nombre: atributo["Tipo"], atributos: [atributo] });
    });
    $fetchedTipos = tipos;
  })();
</script>

<!-- Header -->
<div class="msf-header">
  <h2>Qué {tipo.nombre.toLowerCase()} te gustaría tener en tu vivienda?</h2>
  <p>Desarrollamos diseños teniendo en cuenta sus necesidades únicas.</p>
</div>

<!-- Atributos -->
<div class="msf-atributos">
  {#each tipo.atributos as atributo, index (atributo['Nombre'])}
    <label
      class="msf-atributo w-radio"
      class:active={tipo.selected === atributo['Nombre']}
      in:fade={{ duration: 250 }}>

      <input
        type="radio"
        data-name={tipo.nombre}
        id={atributo['Nombre']}
        name={tipo.nombre}
        value={atributo['Nombre']}
        required="required"
        bind:group={tipo.selected}
        class="w-form-formradioinput msf-hidden w-radio-input"
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
