<script>
  // Helpers
  import { checkRequiredInputs, scrollTop } from "./helpers";

  // Components
  import ProgressBar from "./components/ProgressBar.svelte";
  import NextButton from "./components/NextButton.svelte";
  import BackButton from "./components/BackButton.svelte";
  import Step1 from "./step1/Step1.svelte";
  import Step2 from "./step2/Step2.svelte";
  import Step3 from "./step3/Step3.svelte";
  import Step4 from "./step4/Step4.svelte";
  import Step5 from "./step5/Step5.svelte";

  // Stores
  import {
    currentStep,
    currentTipo,
    editMode,
    selectedFraccionamiento,
    selectedVivienda,
    selectedAtributos,
    availableViviendas,
    availableAtributos,
    numberOfTipos
  } from "./msf-stores";

  // Variables
  let missingInputs;
  const steps = [
    "Introducción",
    "Fraccionamiento",
    "Vivienda",
    "Personaliza",
    "Resultado"
  ];

  // Functions
  function checkInputs() {
    // Revisar inputs requeridos
    const allFilled = checkRequiredInputs();

    if (allFilled) {
      missingInputs = false;
      return true;
    } else {
      missingInputs = true;
      return false;
    }
  }

  function handleInput(e) {
    const { data, key } = e.detail;

    // Comprobar si falta algun input
    checkInputs();

    // Guardar atributo seleccionado
    if (key === "Atributos") selectedAtributos.modify(data);

    if (key === "Fraccionamientos") {
      // Guardar viviendas disponibles
      $availableViviendas = data["Viviendas"];
      $selectedFraccionamiento = data;

      // Borrar viviendas y atributos seleccionados
      $selectedVivienda = null;
      $selectedAtributos = [];
    }

    if (key === "Viviendas") {
      // Guardar atributos y tips disponibles
      $availableAtributos = {
        tipos: Array.from(new Set(data["Tipos"])),
        atributos: data["Atributos"]
      };

      // Borrar viviendas y atributos seleccionados
      $selectedAtributos = [];
    }
  }

  function nextStep() {
    // Revisar inputs requeridos
    if (!checkInputs()) return;

    // Actuar según estado
    if ($editMode) {
      $currentStep = steps.length;
      $currentTipo = $numberOfTipos.length;
      $editMode = false;
    } else if ($currentStep === 4 && $currentTipo < $numberOfTipos.length)
      $currentTipo += 1;
    else $currentStep += 1;

    // Scroll a la parte superior del formulario
    scrollTop();
  }

  function lastStep() {
    // Volver al paso anterior
    if ($currentTipo !== 1) $currentTipo -= 1;
    else $currentStep -= 1;

    // Scroll a la parte superior del formulario
    scrollTop();
  }
</script>

<!-- Barra de progreso y pasos -->
<ProgressBar {steps} />

<!-- Contenido de los pasos -->
{#if $currentStep === 1}
  <Step1 />
{:else if $currentStep === 2}
  <Step2 name="Fraccionamientos" on:select={handleInput} />
{:else if $currentStep === 3}
  <Step3 name="Viviendas" on:select={handleInput} />
{:else if $currentStep === 4}
  <Step4 name="Atributos" on:select={handleInput} />
{:else if $currentStep === 5}
  <Step5 />
{/if}

<!-- Botones de navegacion -->
<div class="msf-nav">
  <BackButton {steps} on:click={lastStep} />
  <NextButton {steps} {missingInputs} on:nextstep={nextStep} />
</div>
