<script>
  import store from '../store';

  export let clickOutsideToClose = false;
  export let escapeToClose = true;
  export let breakpoints = {};
  export let backdropColor;
  export let backgroundColor;

  let modal;
  let currentBreakPoint;

  const { name } = $$props;

  $: visible = !!modal;
  $: sortedBreakpoints = Object.entries(breakpoints)
    .map(([key, value]) => [key, value, parseInt(key.replace(/px|em|rem/, ''), 10)])
    .sort((a, b) => b[2] - a[2])
    .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});
  $: sortedBreakpointList = Object.entries(sortedBreakpoints);
  $: hasBreakpoints = !!sortedBreakpointList.length;

  store.subscribe((modals) => {
    modal = [...modals?.static, ...modals?.dynamic].find((m) => m?.props?.name === name);
  });

  const onWindowResize = () => {
    if (!visible) {
      return;
    }

    const index = sortedBreakpointList.findIndex(
      ([breakpoint]) => window.matchMedia(`(min-width: ${breakpoint})`).matches,
    );

    if (index > -1) {
      const config = sortedBreakpointList
        .filter((item, i) => index <= i)
        .reverse()
        // eslint-disable-next-line no-unused-vars
        .reduce((acc, [key, value]) => ({ ...acc, ...value }), {});

      currentBreakPoint = { config, index };

      return;
    }

    currentBreakPoint = null;
  };
</script>

<svelte:window on:resize={onWindowResize} />

{#if visible}
  <div class="modal">
    <div class="modal__dialog">
      <div
        class="modal__content"
        role="alertdialog"
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <slot />
      </div>
    </div>
  </div>
{/if}

<style>
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 50;
  }

  .modal__dialog {
    position: relative;
    width: auto;
    height: 100%;
  }

  .modal__content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
    overflow-y: auto;
  }

  :global(.modal__content > *) {
    width: inherit;
    height: inherit;
  }
</style>
