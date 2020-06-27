<script>
  // Airtable
  import { getFraccionamientos } from "../airtable";

  // Svelte
  import { fade } from "svelte/transition";

  // Components
  import Loader from "../components/Loader.svelte";
  import Fraccionamientos from "./Fraccionamientos.svelte";
  import ErrorMessage from "../components/ErrorMessage.svelte";

  // Exports
  export let name;
</script>

<div class="msf-content" in:fade={{ duration: 250 }}>

  <!-- Header -->
  <div class="msf-header">
    <h2>Selecciona el fraccionamiento</h2>
    <p>Esto es un subtítulo</p>
  </div>

  <!-- Fraccionamientos -->
  {#await getFraccionamientos()}
    <Loader />
  {:then fraccionamientos}
    <Fraccionamientos {name} {fraccionamientos} on:select />
  {:catch error}
    <ErrorMessage />
  {/await}

</div>
