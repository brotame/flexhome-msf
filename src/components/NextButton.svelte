<script>
  // Svelte
  import { createEventDispatcher } from "svelte";

  // Stores
  import {
    currentStep,
    currentTipo,
    editMode,
    fetchedTipos,
    fetchError
  } from "../msf-stores";

  // Exports
  export let steps, missingInputs;

  // Variables
  let buttonText;

  // Reactive
  $: if ($editMode) buttonText = "Modificar";
  else {
    if ($currentStep === 1) buttonText = "Calcular precio";
    else if ($currentStep > 1 && $currentStep < steps.length - 1)
      buttonText = "Siguiente";
    else if ($currentTipo === $fetchedTipos.length) {
      if ($currentStep === steps.length - 1) buttonText = "Ver Resumen";
      else if ($currentStep === steps.length) buttonText = "Enviar";
    }
  }

  $: console.log(missingInputs);

  // Functions
  const dispatch = createEventDispatcher();
</script>

<!-- Error Fetching Button -->
{#if $fetchError}
  <button
    type="button"
    class="msf-button w-button alert"
    on:click={() => location.reload()}>
    Volver a empezar
  </button>
  <!-- Next Button -->
{:else if $currentStep < steps.length}
  <button
    type="button"
    class="msf-button w-button"
    class:alert={missingInputs}
    on:click={() => dispatch('nextstep')}>
    {missingInputs ? 'Faltan Campos' : buttonText}
  </button>
  <!-- Submit Button -->
{:else if $currentStep === steps.length}
  <input
    type="submit"
    value="Enviar"
    data-wait="Por favor, espera..."
    class="msf-button w-button" />
{/if}
