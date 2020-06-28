<script>
  // Svelte
  import { fade } from "svelte/transition";

  // Stores
  import {
    selectedAtributos,
    currentStep,
    currentTipo,
    editMode,
    fetchedTipos
  } from "../msf-stores";

  // Exports
  export let atributo;

  // Icons
  import EditIcon from "../icons/edit-icon.svg";
  import TrashIcon from "../icons/trash-icon.svg";

  // Functions
  function editSelected() {
    $currentStep = 4;
    $currentTipo =
      $fetchedTipos.findIndex(tipo => tipo.nombre === atributo["Tipo"]) + 1;
    $editMode = true;
  }

  function deleteSelected() {
    selectedAtributos.delete(atributo["Tipo"]);
  }
</script>

<div class="msf-result-atributo" transition:fade={{ duration: 250 }}>
  <!-- Name -->
  <div class="msf-result-atributo-name">
    <strong>{atributo['Tipo']}:</strong>
    {atributo['Nombre']}
  </div>

  <!-- Price  -->
  <div class="msf-result-atributo-price">$ {atributo['Precio']}</div>

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
