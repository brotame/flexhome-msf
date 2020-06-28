<script>
  // Svelte
  import { fade } from "svelte/transition";

  // Stores
  import { fetchedAtributos } from "../msf-stores";

  // Components
  import Loader from "../components/Loader.svelte";
  import Atributos from "./Atributos.svelte";
  import ErrorMessage from "../components/ErrorMessage.svelte";

  // Exports
  export let name;
</script>

<div class="msf-content" in:fade={{ duration: 250 }}>

  <!-- Atributos -->
  {#await $fetchedAtributos}
    <Loader />
  {:then atributos}
    <Atributos {name} {atributos} on:select />
  {:catch error}
    <ErrorMessage />
  {/await}

</div>
