<script>
  // Svelte
  import { createEventDispatcher, onMount } from "svelte";

  // Stores
  import { selectedVivienda } from "../msf-stores";

  // Exports
  export let name, viviendas;

  // Functions
  const dispatch = createEventDispatcher();

  function deleteExtension(filename) {
    return filename.replace(/\.[^/.]+$/, "");
  }
</script>

<!-- Viviendas -->
<div class="msf-viviendas">

  {#each viviendas as vivienda (vivienda.id)}
    <!-- Label -->
    <label
      class="msf-vivienda active w-radio"
      class:active={$selectedVivienda === vivienda['Nombre']}>

      <!-- Input -->
      <input
        type="radio"
        {name}
        data-name={name}
        id={vivienda.id}
        value={vivienda['Nombre']}
        required="required"
        class="w-form-formradioinput msf-hidden w-radio-input"
        bind:group={$selectedVivienda}
        on:input={() => {
          dispatch('select', { key: name, data: vivienda });
        }} />

      <!-- Nombre -->
      <span for={vivienda['Nombre']} class="msf-vivienda-label w-form-label">
        {vivienda['Nombre']}
      </span>

      <!-- Imagenes -->
      <div class="msf-vivienda-images">

        <!-- Planta Baja -->
        <div>
          <img
            src={vivienda['Renders'][0].thumbnails.large.url}
            alt="Planta Baja"
            class="msf-vivienda-image" />
          <div class="msf-vivienda-image-label">
            {deleteExtension(vivienda['Renders'][0].filename)}
          </div>
        </div>

        <!-- Planta Alta -->
        <div>
          <img
            src={vivienda['Renders'][1].thumbnails.large.url}
            alt="Planta Alta"
            class="msf-vivienda-image" />
          <div class="msf-vivienda-image-label">
            {deleteExtension(vivienda['Renders'][1].filename)}
          </div>
        </div>

        <!-- Terraza -->
        <div>
          <img
            src={vivienda['Renders'][2].thumbnails.large.url}
            alt="Terraza"
            class="msf-vivienda-image" />
          <div class="msf-vivienda-image-label">
            {deleteExtension(vivienda['Renders'][2].filename)}
          </div>
        </div>
      </div>

    </label>
  {/each}

</div>
