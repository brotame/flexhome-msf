<script>
  // Airtable
  import { getItems } from "../airtable";

  // Svelte
  import { fade } from "svelte/transition";

  // Stores
  import { atributosDisponibles } from "../msf-store";

  // Components
  import Loader from "../components/Loader.svelte";
  import Atributos from "../components/Atributos.svelte";

  // Exports
  export let name;
</script>

<div class="msf-content" transition:fade>

  <!-- Header -->
  <div class="msf-header">
    <h2>Selecciona el tipo de vivienda</h2>
    <p>Esto es un subtítulo</p>
  </div>

  {#await getItems({ base: 'Atributos', records: $atributosDisponibles })}
    <Loader />
  {:then atributos}
    <Atributos {name} {atributos} on:select />
  {/await}

</div>
