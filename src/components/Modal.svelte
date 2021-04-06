<script>
  import { tick } from 'svelte';
  import store from '../store';

  export let clickOutsideToClose = false;
  export let escapeToClose = true;
  export let breakpoints = {};
  export let backdropColor;
  export let backgroundColor;
  export let padding;
  export let borderRadius = '';

  let modal;
  let modalRef;
  let contentRef;
  let dialogRef;
  let currentBreakPoint;

  const { name } = $$props;

  $: visible = !!modal;
  $: sortedBreakpoints = Object.entries(breakpoints)
    .map(([key, value]) => [key, value, parseInt(key.replace(/px|em|rem/, ''), 10)])
    .sort((a, b) => b[2] - a[2])
    .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});
  $: sortedBreakpointList = Object.entries(sortedBreakpoints);
  $: hasBreakpoints = !!sortedBreakpointList.length;
  $: hasCurrentBreakpoint = currentBreakPoint && !!Object.keys(currentBreakPoint).length;

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

    const defaults = {
      ...backdropColor && { backdropColor },
      ...backgroundColor && { backgroundColor },
      ...padding && { padding },
      ...borderRadius && { borderRadius },
    };

    if (index > -1) {
      const config = sortedBreakpointList
        .filter((item, i) => index <= i)
        .reverse()
        // eslint-disable-next-line no-unused-vars
        .reduce((acc, [key, value]) => ({
          ...acc,
          ...defaults,
          ...value,
        }), {});

      currentBreakPoint = { config, index };

      return;
    }

    currentBreakPoint = {};
  };

  const toKebabCase = (string) => string.replace(/([a-z])([A-Z])/g, '$1-$2').replace(/\s+/g, '-').toLowerCase();
  const toInlineCss = (styles = {}) => Object.entries(styles).reduce((acc, [key, value]) => {
    const rule = `${toKebabCase(key)}: ${value};`;

    if (acc) {
      return `${acc} ${rule}`;
    }

    return rule;
  }, '');

  const bindStyles = () => {
    onWindowResize();

    return {
      update: async () => {
        await tick();

        if (!hasBreakpoints) {
          return;
        }

        if (!hasCurrentBreakpoint) {
          dialogRef.removeAttribute('style');
          contentRef.style = toInlineCss({ padding, backgroundColor, borderRadius });
          modalRef.style = toInlineCss({ backgroundColor: backdropColor });

          return;
        }

        const {
          maxWidth,
          margin,
          height,
          backgroundColor: bgColor,
          padding: p,
          borderRadius: br,
          backdropColor: bdc,
          // eslint-disable-next-line no-unused-vars
          ...rest
        } = currentBreakPoint.config;

        modalRef.style = toInlineCss({ backgroundColor: bdc });
        dialogRef.style = toInlineCss({ display: 'flex', justifyContent: 'center', alignItems: 'center' });
        contentRef.style = toInlineCss({
          maxWidth, height, margin, backgroundColor: bgColor, padding: p, borderRadius: br,
        });
      },
    };
  };
</script>

<svelte:window on:resize={onWindowResize} />

{#if visible}
  <div
    class="modal"
    bind:this={modalRef}
    use:bindStyles={{ currentBreakPoint }}
  >
    <div class="modal__dialog" bind:this={dialogRef}>
      <div
        bind:this={contentRef}
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
