<script>
  // Helpers
  import { scrollTop } from "../helpers";

  // Svelte
  import { fade } from "svelte/transition";

  // Stores
  import {
    selectedAtributos,
    currentStep,
    currentTipo,
    editMode,
    numberOfTipos
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
      $numberOfTipos.findIndex(tipo => tipo === atributo["Tipo"]) + 1;
    $editMode = true;

    scrollTop();
  }

  function deleteSelected() {
    selectedAtributos.delete(atributo["Tipo"]);
  }
</script>

<!-- Atributo -->
<div
  class="msf-result-atributo"
  transition:fade={{ duration: 250 }}
  on:click={editSelected}>

  <!-- Nombre -->
  <div class="msf-result-atributo-name">
    <strong>{atributo['Tipo']}:</strong>
    {atributo['Nombre']}
  </div>

  <!-- Precio  -->
  <div class="msf-result-atributo-price">$ {atributo['Precio']}</div>

  <!-- Borrar -->
  <div
    class="msf-remove-icon w-embed"
    on:click|stopPropagation={deleteSelected}>
    <TrashIcon />
  </div>
</div>
