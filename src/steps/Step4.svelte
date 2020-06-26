<script>
  // Airtable
  import { getItems } from "../airtable";

  // Svelte
  import { fade } from "svelte/transition";

  // Stores
  import { availableAtributos } from "../msf-store";

  // Components
  import Loader from "../components/Loader.svelte";
  import ErrorMessage from "../components/ErrorMessage.svelte";
  import Atributos from "../components/Atributos.svelte";

  // Exports
  export let name;
</script>

<div class="msf-content" in:fade={{ duration: 250 }}>

  <!-- Header -->
  <div class="msf-header">
    <h2>Personaliza los atributos</h2>
    <p>Esto es un subtítulo</p>
  </div>

  <!-- Atributos -->
  {#await getItems({ base: 'Atributos', records: $availableAtributos })}
    <Loader />
  {:then atributos}
    <Atributos {name} {atributos} on:select />
  {:catch error}
    <ErrorMessage />
  {/await}

</div>
