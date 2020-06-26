<script>
  // Svelte
  import { createEventDispatcher, onMount } from "svelte";

  // Stores
  import { selectedStore } from "../msf-store";

  // Exports
  export let name, viviendas;

  // Functions
  const dispatch = createEventDispatcher();

  onMount(() => {
    if (viviendas.length === 1)
      dispatch("select", { data: viviendas[0], key: name });
  });
</script>

<div class="msf-viviendas">

  {#each viviendas as vivienda}
    <label
      class="msf-vivienda active w-radio"
      class:active={$selectedStore[name] === vivienda.fields['Nombre']}>

      <input
        type="radio"
        {name}
        data-name={name}
        id={vivienda.id}
        value={vivienda.fields['Nombre']}
        required="required"
        class="w-form-formradioinput msf-hidden w-radio-input"
        on:input={() => {
          dispatch('select', { data: vivienda, key: name });
        }} />

      <span for={vivienda.id} class="msf-vivienda-label w-form-label">
        {vivienda.fields['Nombre']}
      </span>

      <div class="msf-vivienda-images">
        <div>
          <img
            src={vivienda.fields['Renders'][0].thumbnails.large.url}
            alt="Planta Baja"
            class="msf-vivienda-image" />
          <div class="msf-vivienda-image-label">Planta Baja</div>
        </div>
        <div>
          <img
            src={vivienda.fields['Renders'][1].thumbnails.large.url}
            alt="Planta Alta"
            class="msf-vivienda-image" />
          <div class="msf-vivienda-image-label">Planta Alta</div>
        </div>
        <div>
          <img
            src={vivienda.fields['Renders'][2].thumbnails.large.url}
            alt="Terraza"
            class="msf-vivienda-image" />
          <div class="msf-vivienda-image-label">Terraza</div>
        </div>
      </div>

    </label>
  {/each}

</div>
