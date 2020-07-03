<script>
  // Svelte
  import { createEventDispatcher } from "svelte";

  // Store
  import {
    selectedFraccionamiento,
    selectedVivienda,
    currentStep,
    currentTipo
  } from "../msf-stores";

  // Exports
  export let name;

  // Icons
  import FraccionamientoIcon from "../icons/fraccionamiento-icon.svg";
  import ViviendaIcon from "../icons/vivienda-icon.svg";

  // Functions
  function editSelected() {
    if (name === "Fraccionamiento") $currentStep = 2;
    if (name === "Vivienda") $currentStep = 3;
    $currentTipo = 1;
  }
</script>

<!-- Global -->
<div class="msf-result-global" on:click={editSelected}>

  <!-- Fraccionamiento -->
  {#if name === 'Fraccionamiento'}
    <!-- Icono -->
    <div class="msf-result-global-icon w-embed">
      <FraccionamientoIcon />
    </div>

    <!-- Nombre -->
    <div class="msf-result-global-name">{$selectedFraccionamiento}</div>

    <!-- Vivienda -->
  {:else if name === 'Vivienda'}
    <!-- Icono -->
    <div class="msf-result-global-icon w-embed">
      <ViviendaIcon />
    </div>

    <!-- Nombre -->
    <div class="msf-result-global-name">{$selectedVivienda}</div>
  {/if}

</div>
