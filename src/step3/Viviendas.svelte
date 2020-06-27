<script>
  // Svelte
  import { createEventDispatcher, onMount } from "svelte";

  // Stores
  import { selectedViviendas } from "../msf-store";

  // Exports
  export let name, viviendas;

  // Functions
  const dispatch = createEventDispatcher();
</script>

<div class="msf-viviendas">

  {#each viviendas as vivienda}
    <label
      class="msf-vivienda active w-radio"
      class:active={$selectedViviendas === vivienda['Nombre']}>

      <input
        type="radio"
        {name}
        data-name={name}
        id={vivienda['Nombre']}
        value={vivienda['Nombre']}
        required="required"
        class="w-form-formradioinput msf-hidden w-radio-input"
        bind:group={$selectedViviendas}
        on:input={() => {
          dispatch('select', { key: name, data: vivienda });
        }} />

      <span for={vivienda['Nombre']} class="msf-vivienda-label w-form-label">
        {vivienda['Nombre']}
      </span>

      <div class="msf-vivienda-images">
        <div>
          <img
            src={vivienda['Renders'][0].thumbnails.large.url}
            alt="Planta Baja"
            class="msf-vivienda-image" />
          <div class="msf-vivienda-image-label">Planta Baja</div>
        </div>
        <div>
          <img
            src={vivienda['Renders'][1].thumbnails.large.url}
            alt="Planta Alta"
            class="msf-vivienda-image" />
          <div class="msf-vivienda-image-label">Planta Alta</div>
        </div>
        <div>
          <img
            src={vivienda['Renders'][2].thumbnails.large.url}
            alt="Terraza"
            class="msf-vivienda-image" />
          <div class="msf-vivienda-image-label">Terraza</div>
        </div>
      </div>

    </label>
  {/each}

</div>
