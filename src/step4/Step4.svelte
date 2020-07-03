<script>
  // Svelte
  import { fade } from "svelte/transition";

  // Stores
  import { fetchedTipos } from "../msf-stores";

  // Components
  import Loader from "../components/Loader.svelte";
  import Tipos from "./Tipos.svelte";
  import ErrorMessage from "../components/ErrorMessage.svelte";

  // Exports
  export let name;
</script>

<div class="msf-content" in:fade={{ duration: 250 }}>

  <!-- Atributos -->
  {#await $fetchedTipos}
    <Loader />
  {:then tipos}
    <Tipos {name} {tipos} on:select />
  {:catch error}
    <ErrorMessage />
  {/await}

</div>
