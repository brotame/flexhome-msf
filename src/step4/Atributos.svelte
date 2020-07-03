<script>
  // Svelte
  import { createEventDispatcher } from "svelte";
  import { fade } from "svelte/transition";

  // Icons
  import PlusIcon from "../icons/plus-icon.svg";

  // Exports
  export let name, tipo;

  // Functions
  const dispatch = createEventDispatcher();
</script>

<!-- Atributos -->
<div class="msf-atributos">

  {#each tipo[name] as atributo (atributo.id)}
    <!-- Label -->
    <label
      class="msf-atributo w-radio"
      class:active={tipo.selected === atributo['Nombre']}
      in:fade={{ duration: 250 }}>

      <!-- Input -->
      <input
        type="radio"
        data-name={tipo['Nombre']}
        id={atributo.id}
        name={tipo['Nombre']}
        value={atributo['Nombre']}
        required="required"
        bind:group={tipo.selected}
        class="w-form-formradioinput msf-hidden w-radio-input"
        on:input={() => {
          dispatch('select', {
            key: name,
            data: { ...atributo, Tipo: tipo['Nombre'] }
          });
        }} />

      <!-- Imagen -->
      {#if atributo['Renders']}
        <img
          src={atributo['Renders'][0].thumbnails.large.url}
          alt={atributo['Nombre']}
          class="msf-atributo-image" />
      {/if}

      <!-- Info -->
      <div class="msf-atributo-info">

        <!-- Nombre -->
        <div for={atributo['Nombre']} class="msf-atributo-name">
          {atributo['Nombre']}
        </div>

        <!-- Descripcion -->
        {#if atributo['Descripcion']}
          <p class="msf-atributo-description">{atributo['Descripcion']}</p>
        {/if}

        <!-- Precio -->
        {#if atributo['Precio']}
          <div class="msf-atributo-price">$ {atributo['Precio']}</div>
        {/if}

        <!-- Link al CMS -->
        {#if atributo['Webflow']}
          <a
            class="msf-atributo-link w-embed"
            href={atributo['Webflow'] ? atributo['Webflow'] : '#'}
            target="_blank">
            <PlusIcon />
          </a>
        {/if}
      </div>

    </label>
  {/each}
</div>
