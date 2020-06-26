<script>
  // Helpers
  import { checkRequiredInputs } from "./helpers";

  // Components
  import ProgressBar from "./components/ProgressBar.svelte";
  import NextButton from "./components/NextButton.svelte";
  import Step1 from "./steps/Step1.svelte";
  import Step2 from "./steps/Step2.svelte";
  import Step3 from "./steps/Step3.svelte";
  import Step4 from "./steps/Step4.svelte";

  // Stores
  import {
    currentStep,
    selectedStore,
    viviendasDisponibles,
    atributosDisponibles
  } from "./msf-store";

  // Variables
  let missingInputs;
  const steps = [
    "Introducción",
    "Fraccionamiento",
    "Vivienda",
    "Personaliza",
    "Resultado"
  ];

  // Reactive
  $: console.log($currentStep);
  $: console.log($selectedStore);

  // Functions
  function checkInputs() {
    const allFilled = checkRequiredInputs();

    if (allFilled) {
      missingInputs = false;
      return true;
    } else {
      missingInputs = true;
      return false;
    }
  }

  function nextStep() {
    if (checkInputs()) $currentStep += 1;
  }

  function handleInput(e) {
    const { data, key } = e.detail;

    // Comprobar si falta algun input
    checkInputs();

    // Guardar item seleccionado
    if (key === "Atributos") {
      selectedStore.modifyAtributos(key, data);
      return;
    }

    selectedStore.modify(key, data.fields["Nombre"]);

    if (key === "Fraccionamientos")
      // Guardar viviendas disponibles
      $viviendasDisponibles = data.fields["Viviendas"];

    if (key === "Viviendas")
      // Guardar atributos disponibles
      $atributosDisponibles = data.fields["Atributos"];
  }
</script>

<ProgressBar {steps} currentStep={$currentStep} />

{#if $currentStep === 1}
  <Step1 />
{:else if $currentStep === 2}
  <Step2 name="Fraccionamientos" on:select={handleInput} />
{:else if $currentStep === 3}
  <Step3 name="Viviendas" on:select={handleInput} />
{:else if $currentStep === 4}
  <Step4 name="Atributos" on:select={handleInput} />
{/if}

<NextButton
  {steps}
  currentStep={$currentStep}
  on:nextstep={nextStep}
  {missingInputs} />
