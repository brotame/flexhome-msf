<script>
  // Svelte
  import { fade } from "svelte/transition";

  // Stores
  import { fetchedViviendas } from "../msf-stores";

  // Components
  import Loader from "../components/Loader.svelte";
  import Viviendas from "./Viviendas.svelte";
  import ErrorMessage from "../components/ErrorMessage.svelte";

  // Exports
  export let name;
</script>

<div class="msf-content" in:fade={{ duration: 250 }}>

  <!-- Header -->
  <div class="msf-header">
    <h2>Selecciona el tipo de vivienda</h2>
    <p>Esto es un subtítulo</p>
  </div>

  <!-- Viviendas -->
  {#await $fetchedViviendas}
    <Loader />
  {:then viviendas}
    <Viviendas {name} {viviendas} on:select />
  {:catch error}
    <ErrorMessage />
  {/await}

</div>
