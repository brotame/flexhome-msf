<script>
  // Svelte
  import { createEventDispatcher } from "svelte";

  // Stores
  import { selectedFraccionamiento } from "../msf-stores";

  // Exports
  export let name, fraccionamientos;

  // Functions
  const dispatch = createEventDispatcher();
</script>

<!-- Fraccionamientos -->
<div class="msf-fraccionamientos">

  {#each fraccionamientos as fraccionamiento (fraccionamiento.id)}
    <!-- Label -->
    <label
      class="msf-fraccionamiento w-radio"
      class:active={$selectedFraccionamiento === fraccionamiento['Nombre']}>

      <!-- Input -->
      <input
        type="radio"
        {name}
        data-name={name}
        id={fraccionamiento.id}
        value={fraccionamiento['Nombre']}
        required="required"
        class="w-form-formradioinput msf-hidden w-radio-input"
        bind:group={$selectedFraccionamiento}
        on:input={() => {
          dispatch('select', { key: name, data: fraccionamiento });
        }} />

      <!-- Imagen -->
      <img
        src={fraccionamiento['Renders'][0].thumbnails.large.url}
        alt={fraccionamiento['Nombre']}
        class="msf-fraccionamiento-image" />

      <!-- Nombre -->
      <span
        for={fraccionamiento['Nombre']}
        class="msf-fraccionamiento-label w-form-label">
        {fraccionamiento['Nombre']}
      </span>

    </label>
  {/each}

</div>
