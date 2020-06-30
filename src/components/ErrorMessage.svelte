<script>
  // Svelte
  import { onMount } from "svelte";

  // Stores
  import { fetchError } from "../msf-stores";

  // Functions
  onMount(() => {
    $fetchError = true;
  });
</script>

<!-- Mensaje de error, se carga cuando ocurre un problema haciendo fetch en Airtable -->
<div class="msf-error">
  <div>Ups! Algo fue mal, por favor, vuelve a intentarlo.</div>
</div>
