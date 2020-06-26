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
  import Step5 from "./steps/Step5.svelte";

  // Stores
  import {
    currentStep,
    selectedFraccionamientos,
    selectedViviendas,
    selectedAtributos,
    availableViviendas,
    availableAtributos
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
  $: console.log($selectedFraccionamientos);
  $: console.log($selectedViviendas);
  $: console.log($selectedAtributos);

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
    if (checkInputs()) {
      $currentStep += 1;
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  }

  function handleInput(e) {
    const { data, key } = e.detail;

    // Comprobar si falta algun input
    checkInputs();

    // Guardar item seleccionado
    if (key === "Atributos") selectedAtributos.modify(data);

    if (key === "Fraccionamientos") {
      // Guardar viviendas disponibles
      $availableViviendas = data.fields["Viviendas"];

      // Borrar viviendas y atributos seleccionados
      $selectedViviendas = null;
      $selectedAtributos = {};
    }

    if (key === "Viviendas") {
      // Guardar atributos disponibles
      $availableAtributos = data.fields["Atributos"];

      // Borrar viviendas y atributos seleccionados
      $selectedAtributos = {};
    }
  }
</script>

<ProgressBar {steps} />

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

<NextButton {steps} {missingInputs} on:nextstep={nextStep} />
