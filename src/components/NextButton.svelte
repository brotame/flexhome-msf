<script>
  // Svelte
  import { createEventDispatcher } from "svelte";

  // Stores
  import {
    currentStep,
    currentTipo,
    editMode,
    numberOfTipos,
    fetchError
  } from "../msf-stores";

  // Exports
  export let steps, missingInputs;

  // Variables
  let buttonText;

  // Reactive
  $: if ($currentStep === 1) buttonText = "Calcular precio";
  else if ($currentTipo === $numberOfTipos.length) {
    if ($currentStep === steps.length - 1) buttonText = "Ver Resumen";
    else if ($currentStep === steps.length) buttonText = "Enviar";
  } else buttonText = "Siguiente";

  // Functions
  const dispatch = createEventDispatcher();
</script>

<!-- Error Fetching Button, se muestra cuando hay un error haciendo fetch -->
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
    {missingInputs ? 'Faltan Campos' : $editMode ? 'Modificar' : buttonText}
  </button>

  <!-- Submit Button, se muestra en el último paso -->
{:else if $currentStep === steps.length}
  <input
    type="submit"
    value="Enviar"
    data-wait="Por favor, espera..."
    class="msf-button w-button" />
{/if}
