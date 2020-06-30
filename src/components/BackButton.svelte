<script>
  // Stores
  import { currentStep, currentTipo, editMode } from "../msf-stores";

  // Exports
  export let steps;

  // Icons
  import BackIcon from "../icons/back-icon.svg";
</script>

<!-- Back Button, no se muestra ni en el primer ni último Step -->
{#if $currentStep > 1 && $currentStep < steps.length && !$editMode}
  <div class="msf-back" on:click>
    <div class="msf-back-icon">
      <BackIcon />
    </div>
    <span>Atrás</span>
  </div>
{/if}
