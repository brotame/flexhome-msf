<script>
  // Svelte
  import { fade } from "svelte/transition";

  // Stores
  import {
    selectedFraccionamientos,
    selectedViviendas,
    selectedAtributos,
    currentStep
  } from "../msf-store";

  // Components
  import Global from "./Global.svelte";
  import Atributo from "./Atributo.svelte";
  import Extra from "./Extra.svelte";
  import Form from "./Form.svelte";

  // Variables
  // $: total = calculateTotal($selectedAtributos);
  $: total = $selectedAtributos.reduce((acc, cur) => {
    return acc + cur["Precio"];
  }, 0);
  $: impuestos = total * 0.2;
</script>

<div class="msf-content" in:fade={{ duration: 250 }}>
  <!-- Header -->
  <div class="msf-header">
    <h2 class="msf-result-heading">Tu coste estimado</h2>
    <div class="msf-result-total">$ {total + impuestos}</div>
  </div>

  <!-- Result -->
  <div class="msf-result">

    <!-- Globales -->
    <div class="msf-result-globals">
      <Global name="Fraccionamientos" />
      <Global name="Viviendas" />
    </div>

    <!-- Atributos -->
    <div class="msf-result-atributos">

      {#each $selectedAtributos as atributo (atributo)}
        <Atributo {atributo} />
      {/each}

    </div>

    <!-- Extras -->
    <div class="msf-result-extras">
      <Extra name="Total" price={`$ ${total}`} />
      <Extra name="Impuestos" price={`+ $ ${impuestos}`} />
    </div>
  </div>

  <!-- Contact -->
  <Form />
</div>
