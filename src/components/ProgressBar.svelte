<script>
  // Stores
  import { currentStep, currentTipo } from "../msf-stores";

  // Exports
  export let steps;

  // Icons
  import StepIcon from "../icons/step-icon.svg";

  // Reactive
  $: scaleX = `transform: scale3d(${(1 / steps.length) * $currentStep}, 1, 1)`;

  // Functions
  function handleClick(index) {
    if (index + 1 < $currentStep) {
      $currentStep = index + 1;
      $currentTipo = 1;
    }
  }
</script>

<div class="msf-steps-wrap">

  <!-- Steps -->
  <div class="msf-steps">

    {#each steps as step, index}
      <div
        class="msf-step"
        class:current={index + 1 === $currentStep}
        class:completed={index + 1 < $currentStep}
        on:click={() => handleClick(index)}>
        <div>{index + 1}. {step}</div>
        <div class="msf-step-icon w-embed">
          <StepIcon />
        </div>
      </div>
    {/each}

  </div>

  <!-- Progress Bar -->
  <div class="msf-progress-wrap">
    <div class="msf-progress" style={scaleX} />
  </div>

</div>
