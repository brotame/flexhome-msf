<script>
  // Svelte
  import { createEventDispatcher } from "svelte";

  // Exports
  export let steps, currentStep, missingInputs;

  // Variables
  $: buttonText = missingInputs
    ? "Faltan Campos"
    : currentStep === 1
    ? "Calcular precio"
    : currentStep >= 2 && currentStep < steps.length - 1
    ? "Siguiente"
    : currentStep === steps.length - 1
    ? "Ver Resumen"
    : (currentStep = steps.length)
    ? "Enviar"
    : "Error";

  // Functions
  const dispatch = createEventDispatcher();
</script>

{#if currentStep < steps.length}
  <button
    type="button"
    class="msf-button w-button"
    class:alert={missingInputs}
    on:click={() => dispatch('nextstep')}>
    {buttonText}
  </button>
{:else}
  <input
    type="submit"
    value="Enviar"
    data-wait="Por favor, espera..."
    class="msf-button w-button"
    class:alert={missingInputs} />
{/if}
