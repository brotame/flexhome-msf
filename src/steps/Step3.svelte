<script>
  // Airtable
  import { getItems } from "../airtable";

  // Svelte
  import { fade } from "svelte/transition";

  // Stores
  import { availableViviendas } from "../msf-store";

  // Components
  import Loader from "../components/Loader.svelte";
  import ErrorMessage from "../components/ErrorMessage.svelte";
  import Viviendas from "../components/Viviendas.svelte";

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
  {#await getItems({ base: name, records: $availableViviendas })}
    <Loader />
  {:then viviendas}
    <Viviendas {name} {viviendas} on:select />
  {:catch error}
    <ErrorMessage />
  {/await}

</div>
