<script>
  // Svelte
  import { createEventDispatcher } from "svelte";
  import { fade } from "svelte/transition";

  // Stores
  import { selectedAtributos, currentStep } from "../../msf-store";

  // Exports
  export let atributo;

  // Icons
  import EditIcon from "../../icons/edit-icon.svg";
  import TrashIcon from "../../icons/trash-icon.svg";

  // Functions
  function editSelected() {
    $currentStep = 4;
  }

  function deleteSelected() {
    selectedAtributos.delete(atributo);
  }
</script>

<div class="msf-result-atributo" transition:fade={{ duration: 250 }}>
  <!-- Name -->
  <div class="msf-result-atributo-name">
    <strong>{atributo}:</strong>
    {$selectedAtributos[atributo]['Nombre']}
  </div>

  <!-- Price  -->
  <div class="msf-result-atributo-price">
    $ {$selectedAtributos[atributo]['Precio']}
  </div>

  <!-- Controls -->
  <div class="msf-result-atributo-controls">

    <!-- Edit -->
    <div class="msf-edit-icon w-embed" on:click={editSelected}>
      <EditIcon />
    </div>

    <!-- Remove -->
    <div class="msf-remove-icon w-embed" on:click={deleteSelected}>
      <TrashIcon />
    </div>
  </div>
</div>
