<script>
  import { tick, onDestroy } from 'svelte';
  import store from '../store';

  const { name, breakpoints = {}, escapeToClose, clickOutsideToClose, ...defaults } = $$restProps;

  let modal;
  let modalRef;
  let contentRef;
  let dialogRef;
  let currentBreakPoint;

  $: visible = !!modal;
  $: sortedBreakpoints = Object.entries(breakpoints)
    .map(([key, value]) => [key, value, parseInt(key.replace(/px|em|rem/, ''), 10)])
    .sort((a, b) => b[2] - a[2])
    .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});
  $: sortedBreakpointList = Object.entries(sortedBreakpoints);

  const unsubscribe = store.subscribe((modals) => {
    modal = [...modals?.static, ...modals?.dynamic].find((m) => m?.props?.name === name);
  });

  onDestroy(unsubscribe);

  const onWindowResize = () => {
    if (!visible) {
      return;
    }

    const index = sortedBreakpointList.findIndex(
      ([breakpoint]) => window.matchMedia(`(min-width: ${breakpoint})`).matches
    );

    currentBreakPoint = {
      index,
      config:
        index > -1
          ? sortedBreakpointList
              .filter((item, i) => index <= i)
              .reverse()
              .reduce(
                // eslint-disable-next-line no-unused-vars
                (acc, [key, value]) => ({
                  ...acc,
                  ...value,
                }),
                defaults
              )
          : defaults,
    };
  };

  const toKebabCase = (string) =>
    string
      .replace(/([a-z])([A-Z])/g, '$1-$2')
      .replace(/\s+/g, '-')
      .toLowerCase();
  const toInlineCss = (styles = {}) =>
    Object.entries(styles).reduce((acc, [key, value]) => {
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

        const {
          maxWidth,
          margin,
          height,
          backgroundColor,
          padding,
          borderRadius,
          backdropColor,
          centered,
        } = currentBreakPoint?.config || {};

        dialogRef.style = centered
          ? toInlineCss({
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            })
          : '';

        modalRef.style = toInlineCss({ backgroundColor: backdropColor });
        contentRef.style = toInlineCss({
          maxWidth,
          height,
          margin,
          backgroundColor,
          padding,
          borderRadius,
        });
      },
    };
  };
</script>

<svelte:window on:resize={onWindowResize} />

{#if visible && $$slots.default}
  <div class="modal" bind:this={modalRef} use:bindStyles={{ currentBreakPoint }}>
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
</style>
