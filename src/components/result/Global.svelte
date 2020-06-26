<script>
  // Svelte
  import { createEventDispatcher } from "svelte";

  // Store
  import { selectedStore, currentStep } from "../../msf-store";

  // Exports
  export let name;

  // Icons
  import FraccionamientoIcon from "../../icons/fraccionamiento-icon.svg";
  import ViviendaIcon from "../../icons/vivienda-icon.svg";

  // Functions
  function editSelected() {
    if (name === "Fraccionamientos") $currentStep = 2;
    if (name === "Viviendas") $currentStep = 3;
  }
</script>

<div class="msf-result-global" on:click={editSelected}>
  <!-- Icon -->
  <div class="msf-result-global-icon w-embed">
    {#if name === 'Fraccionamientos'}
      <FraccionamientoIcon />
    {:else if name === 'Viviendas'}
      <ViviendaIcon />
    {/if}
  </div>

  <!-- Name -->
  <div class="msf-result-global-name">{$selectedStore[name]}</div>
</div>
