<script>
  // Airtable
  import { getItems } from "../airtable";

  // Svelte
  import { fade } from "svelte/transition";

  // Stores
  import { viviendasDisponibles } from "../msf-store";

  // Components
  import Loader from "../components/Loader.svelte";
  import Viviendas from "../components/Viviendas.svelte";

  // Exports
  export let name;
</script>

<div class="msf-content" transition:fade>

  <!-- Header -->
  <div class="msf-header">
    <h2>Selecciona el tipo de vivienda</h2>
    <p>Esto es un subtítulo</p>
  </div>

  <!-- Viviendas -->
  {#await getItems({ base: name, records: $viviendasDisponibles })}
    <Loader />
  {:then viviendas}
    <Viviendas {name} {viviendas} on:select />
  {:catch error}
    <h2>Algo fue mal, por favor, intentalo de nuevo.</h2>
  {/await}

</div>
