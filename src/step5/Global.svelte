<script>
  // Svelte
  import { createEventDispatcher } from "svelte";

  // Store
  import {
    selectedFraccionamientos,
    selectedViviendas,
    currentStep,
    currentTipo
  } from "../msf-store";

  // Exports
  export let name;

  // Icons
  import FraccionamientoIcon from "../icons/fraccionamiento-icon.svg";
  import ViviendaIcon from "../icons/vivienda-icon.svg";

  // Functions
  function editSelected() {
    if (name === "Fraccionamientos") $currentStep = 2;
    if (name === "Viviendas") $currentStep = 3;
    $currentTipo = 1;
  }
</script>

<div class="msf-result-global" on:click={editSelected}>

  {#if name === 'Fraccionamientos'}
    <!-- Icon -->
    <div class="msf-result-global-icon w-embed">
      <FraccionamientoIcon />
    </div>

    <!-- Name -->
    <div class="msf-result-global-name">{$selectedFraccionamientos}</div>
  {:else if name === 'Viviendas'}
    <!-- Icon -->
    <div class="msf-result-global-icon w-embed">
      <ViviendaIcon />
    </div>

    <!-- Name -->
    <div class="msf-result-global-name">{$selectedViviendas}</div>
  {/if}

</div>
