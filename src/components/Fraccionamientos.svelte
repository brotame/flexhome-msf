<script>
  // Svelte
  import { createEventDispatcher } from "svelte";
  import { fade } from "svelte/transition";

  // Stores
  import { selectedStore } from "../msf-store";

  // Exports
  export let name, fraccionamientos;

  // Functions
  const dispatch = createEventDispatcher();
</script>

<div class="msf-fraccionamientos" transition:fade>

  {#each fraccionamientos as fraccionamiento, index (fraccionamiento.id)}
    <label
      class="msf-fraccionamiento w-radio"
      class:active={$selectedStore[name] === fraccionamiento.fields['Nombre']}>

      <input
        type="radio"
        {name}
        data-name={name}
        id={fraccionamiento.id}
        value={fraccionamiento.fields['Nombre']}
        required="required"
        class="w-form-formradioinput msf-hidden w-radio-input"
        on:input={() => {
          dispatch('select', { data: fraccionamiento, key: name });
        }} />

      <img
        src={fraccionamiento.fields['Renders'][0].thumbnails.large.url}
        alt={fraccionamiento.fields['Nombre']}
        class="msf-fraccionamiento-image" />

      <span
        for={fraccionamiento.id}
        class="msf-fraccionamiento-label w-form-label">
        {fraccionamiento.fields['Nombre']}
      </span>

    </label>
  {/each}

</div>
