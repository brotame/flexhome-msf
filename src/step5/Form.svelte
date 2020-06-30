<script>
  import {
    selectedFraccionamiento,
    selectedVivienda,
    selectedAtributos
  } from "../msf-stores";
</script>

<!-- Formulario -->
<div class="msf-contact">

  <!-- Heading -->
  <h2 class="msf-contact-heading">Envía el resumen</h2>

  <!-- Contact Inputs -->
  <div class="msf-contact-form">

    <!-- Nombre -->
    <input
      type="text"
      class="msf-text-input w-input"
      maxlength="256"
      name="Nombre"
      data-name="Nombre"
      placeholder="Tu Nombre"
      id="nombre"
      required="required" />

    <!-- Email -->
    <input
      type="text"
      class="msf-text-input w-input"
      maxlength="256"
      name="Email"
      data-name="Email"
      placeholder="Tu email"
      id="email"
      required="required" />

    <!-- Pregunta -->
    <textarea
      placeholder="¿Tienes alguna pregunta para nosotros?"
      maxlength="5000"
      id="pregunta"
      name="Pregunta"
      data-name="Pregunta"
      class="msf-textarea-input w-input" />

    <!-- Hidden inputs dinámicos según lo que el usuario haya escogido -->
    <!-- Fraccionamiento -->
    <input
      id="fraccionamiento"
      name="Fraccionamiento"
      type="hidden"
      value={$selectedFraccionamiento} />

    <!-- Vivienda -->
    <input
      id="vivienda"
      name="Vivienda"
      type="hidden"
      value={$selectedVivienda} />

    <!-- Atributos -->
    {#each $selectedAtributos as atributo, index}
      <input
        id="atributo-{index}"
        name={atributo['Tipo']}
        type="hidden"
        value={atributo['Nombre']} />
    {/each}
  </div>
</div>
