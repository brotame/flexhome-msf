<script>
  // Components
  import Atributos from "./Atributos.svelte";

  // Stores
  import { currentTipo } from "../msf-stores";

  // Exports
  export let name, tipos;

  // Reactive
  $: tipo = tipos[$currentTipo - 1];
</script>

<!-- Header -->
<div class="msf-header">
  <h2 class="msf-title">{tipo['Titulo']}</h2>
  <p>{tipo['Subtitulo']}</p>
</div>

<!-- Atributos -->
<Atributos {tipo} {name} on:select />
