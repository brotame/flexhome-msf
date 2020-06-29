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
  $: if (missingInputs) buttonText = "Faltan Campos";
  else if ($currentStep === 1) buttonText = "Calcular precio";
  else if ($currentStep > 1 && $currentStep < steps.length - 1)
    buttonText = "Siguiente";
  else if ($currentTipo === $fetchedTipos.length) {
    if ($currentStep === steps.length - 1) buttonText = "Ver Resumen";
    else if ($currentStep === steps.length) buttonText = "Enviar";
  }
  buttonText = "Enviar";
  $: if ($editMode) buttonText = "Modificar";
  $: if ($fetchError) buttonText = "Volver a empezar";

  // Functions
  const dispatch = createEventDispatcher();
</script>

<!-- Next Button -->
{#if $fetchError}
  <button
    type="button"
    class="msf-button w-button alert"
    on:click={() => location.reload()}>
    {buttonText}
  </button>
{:else if $currentStep < steps.length}
  <button
    type="button"
    class="msf-button w-button"
    class:alert={missingInputs}
    on:click={() => dispatch('nextstep')}>
    {buttonText}
  </button>
{:else if $currentStep === steps.length}
  <input
    type="submit"
    value="Enviar"
    data-wait="Por favor, espera..."
    class="msf-button w-button"
    class:alert={missingInputs} />
{/if}
