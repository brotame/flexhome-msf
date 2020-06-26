<script>
  // Exports
  export let steps, currentStep;

  // Variables
  $: scaleX = `transform: scale3d(${(1 / steps.length) * currentStep}, 1, 1)`;
</script>

<div class="msf-steps-wrap">

  <!-- Steps -->
  <div class="msf-steps">
    {#each steps as step, index}
      <div class="msf-step">
        <div>{index + 1}. {step}</div>
        <div class="msf-step-icon w-embed">
          <svg
            viewBox="0 0 512 512"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M136.955 4.06434L114.063 26.9548C108.646 32.3728 108.646
              41.1577 114.063 46.5768L322.988 256L114.063 465.423C108.646
              470.841 108.646 479.626 114.063 485.045L136.955 507.937C142.373
              513.354 151.158 513.354 156.577 507.937L398.702 265.811C404.12
              260.393 404.12 251.609 398.702 246.189L156.577 4.06434C151.158
              -1.35478 142.373 -1.35478 136.955 4.06434V4.06434Z" />
          </svg>
        </div>
      </div>
    {/each}
  </div>

  <!-- Progress Bar -->
  <div class="msf-progress-wrap">
    <div class="msf-progress" style={scaleX} />
  </div>

</div>
