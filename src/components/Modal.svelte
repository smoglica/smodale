<script>
  import { setContext, tick, onDestroy } from 'svelte';
  import { get_current_component as getCurrentComponent } from 'svelte/internal';
  import store from '../store';

  const {
    name,
    breakpoints = {},
    escapeToClose = true,
    clickOutsideToClose = true,
    disableBodyScroll = true,
    focusOnOpen = true,
    ...defaults
  } = $$restProps;

  let modal;
  let modalRef;
  let contentRef;
  let dialogRef;
  let currentBreakpoint;

  $: visible = !!modal;
  $: sortedBreakpoints = Object.entries(breakpoints)
    .map(([key, value]) => [key, value, parseInt(key.replace(/px|em|rem/, ''), 10)])
    .sort((a, b) => b[2] - a[2])
    .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});
  $: sortedBreakpointList = Object.entries(sortedBreakpoints);

  const getAndSetFocusableElms = () => {};
  const unsetFocusableElms = () => {};

  const unsubscribe = store.subscribe((modals) => {
    modal = [...modals?.static, ...modals?.dynamic].find((m) => m?.props?.name === name);
  });

  onDestroy(unsubscribe);

  const hide = () => store.hide(name);
  const onModalClick = ({ target }) => {
    if (target.closest('.js-modal__content')) {
      return;
    }

    hide();
  };
  const onWindowKeydown = (event) => {
    if (!event?.keyCode === 27 || event?.key?.toLowerCase() !== 'escape') {
      return;
    }

    hide();
  };

  setContext({ hide, component: getCurrentComponent() });

  const onWindowResize = () => {
    if (!visible) {
      return;
    }

    const index = sortedBreakpointList.findIndex(
      ([breakpoint]) => window.matchMedia(`(min-width: ${breakpoint})`).matches,
    );

    currentBreakpoint = {
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
              defaults,
            )
          : defaults,
    };
  };

  const toggleClass = (el, className, bool) => {
    if (bool) {
      return el.classList.add(className);
    }

    return el.classList.remove(className);
  };
  const toKebabCase = (string) => string
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/\s+/g, '-')
    .toLowerCase();
  const toInlineCss = (styles = {}) => Object.entries(styles)
    .reduce((acc, [key, value]) => {
      const rule = `${toKebabCase(key)}: ${value};`;

      if (acc) {
        return `${acc} ${rule}`;
      }

      return rule;
    }, '');

  const bindStyles = (el) => {
    onWindowResize();

    if (focusOnOpen) {
      getAndSetFocusableElms();
    }

    if (disableBodyScroll) {
      document.body.style.overflow = 'hidden';
    }

    if (clickOutsideToClose) {
      el.addEventListener('click', onModalClick);
    }

    if (escapeToClose) {
      window.addEventListener('keydown', onWindowKeydown);
    }

    return {
      async update() {
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
          scrollable,
          zIndex,
        } = currentBreakpoint?.config || {};

        modalRef.style = toInlineCss({ zIndex, backgroundColor: backdropColor });
        toggleClass(modalRef, 'modal--centered', centered);
        toggleClass(modalRef, 'modal--scrollable', scrollable);
        contentRef.style = toInlineCss({
          maxWidth,
          height,
          margin,
          backgroundColor,
          padding,
          borderRadius,
        });
      },
      destroy() {
        if (disableBodyScroll) {
          document.body.style.overflow = '';
        }

        if (focusOnOpen) {
          unsetFocusableElms();
        }

        if (clickOutsideToClose) {
          el.removeEventListener('click', onModalClick);
        }

        if (escapeToClose) {
          window.removeEventListener('keydown', onWindowKeydown);
        }
      },
    };
  };
</script>

<svelte:window on:resize={onWindowResize} />

{#if visible && $$slots.default}
  <div class="modal" bind:this={modalRef} use:bindStyles={{ currentBreakpoint }}>
    <div class="modal__dialog" bind:this={dialogRef}>
      <div
        bind:this={contentRef}
        class="modal__content js-modal__content"
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

  :global(.modal--scrollable.modal) {
    overflow-y: auto;
  }

  :global(.modal--scrollable .modal__dialog) {
    min-height: 100%;
    height: auto;
  }

  :global(.modal--centered .modal__dialog) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
