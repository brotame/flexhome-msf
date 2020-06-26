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
  import Global from "../components/result/Global.svelte";
  import Atributo from "../components/result/Atributo.svelte";
  import Extra from "../components/result/Extra.svelte";
  import Form from "../components/result/Form.svelte";

  // Variables
  $: total = calculateTotal($selectedAtributos);
  $: impuestos = total * 0.2;
  $: atributos = Object.keys($selectedAtributos);

  // Functions
  function calculateTotal(store) {
    let sum = 0;

    for (const atributo in store) {
      sum += store[atributo]["Precio"];
    }

    return sum;
  }
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

      {#each atributos as atributo (atributo)}
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
