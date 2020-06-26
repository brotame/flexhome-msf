<script>
  // Svelte
  import { onMount } from "svelte";

  // Stores
  import { fetchError } from "../msf-store";

  // Functions
  onMount(() => {
    $fetchError = true;
  });
</script>

<div class="msf-error">
  <div>Ups! Algo fue mal, por favor, vuelve a intentarlo.</div>
</div>
