<script context="module">
  export const ModalDismissReasons = Object.freeze({
    BACKDROP_CLICK: 'BACKDROP_CLICK',
    ESC: 'ESC',
  });
</script>

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
    focusTrap = true,
    ...defaults
  } = $$restProps;

  let modal;
  let contentElm;
  let currentBreakpoint;
  let firstFocusableElm;
  let lastFocusableElm;

  $: visible = !!modal;
  $: sortedBreakpoints = Object.entries(breakpoints)
    .map(([key, value]) => [key, value, parseInt(key.replace(/px|em|rem/, ''), 10)])
    .sort((a, b) => b[2] - a[2])
    .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});
  $: sortedBreakpointList = Object.entries(sortedBreakpoints);

  const getAndSetFocusableElms = (elm) => {
    const allFocusableElm = [...elm.querySelectorAll(
      '[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex]:not([tabindex="-1"]), [contenteditable], audio[controls], video[controls], summary',
    )];

    if (!allFocusableElm.length) {
      return;
    }

    const elmIsVisible = (element) => element?.offsetWidth
      || element?.offsetHeight
      || element?.getClientRects()?.length;

    for (let i = 0; i < allFocusableElm.length; i += 1) {
      const el = allFocusableElm[i];

      if (elmIsVisible(el)) {
        firstFocusableElm = el;

        break;
      }
    }

    for (let i = allFocusableElm.length - 1; i >= 0; i -= 1) {
      const el = allFocusableElm[i];

      if (elmIsVisible(el)) {
        lastFocusableElm = el;
        break;
      }
    }

    if (firstFocusableElm) {
      firstFocusableElm.focus();
    }
  };

  const unsubscribe = store.subscribe((modals) => {
    modal = [...modals?.static, ...modals?.dynamic].find((m) => m?.props?.name === name);
  });

  onDestroy(unsubscribe);

  const hide = (data) => store.hide(name, data);
  const cancel = (data) => store.cancel(name, data);
  const onUnhandledrejection = (event) => event.preventDefault();
  const onModalClick = ({ target }) => {
    if (target.closest('.js-modal__content')) {
      return;
    }

    cancel(ModalDismissReasons.BACKDROP_CLICK);
  };
  const onWindowKeydown = (event) => {
    if (!event?.keyCode === 27 || event?.key?.toLowerCase() !== 'escape') {
      return;
    }

    cancel(ModalDismissReasons.ESC);
  };
  const onModalKeydown = (event) => {
    if (!event?.keyCode === 9 || event?.key?.toLowerCase() !== 'tab') {
      return;
    }

    if (firstFocusableElm === document.activeElement && event.shiftKey) {
      event.preventDefault();

      lastFocusableElm.focus();
    }

    if (lastFocusableElm === document.activeElement && !event.shiftKey) {
      event.preventDefault();

      firstFocusableElm.focus();
    }
  };

  setContext({ hide, cancel, component: getCurrentComponent() });

  const updateBreakpoint = () => {
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

  const toggleClass = (elm, className, bool) => {
    if (bool) {
      return elm.classList.add(className);
    }

    return elm.classList.remove(className);
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

  const onMount = (node) => {
    const elm = node;

    updateBreakpoint();

    if (disableBodyScroll) {
      document.body.style.overflow = 'hidden';
    }

    if (focusOnOpen) {
      getAndSetFocusableElms(elm);

      if (focusTrap) {
        elm.addEventListener('keydown', onModalKeydown);
      }
    }

    if (clickOutsideToClose) {
      elm.addEventListener('click', onModalClick);
    }

    if (escapeToClose) {
      window.addEventListener('keydown', onWindowKeydown);
    }

    window.addEventListener('unhandledrejection', onUnhandledrejection);

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

        elm.style = toInlineCss({ zIndex, backgroundColor: backdropColor });
        toggleClass(elm, 'modal--centered', centered);
        toggleClass(elm, 'modal--scrollable', scrollable);
        contentElm.style = toInlineCss({
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

        if (focusOnOpen && focusTrap) {
          elm.removeEventListener('keydown', onModalKeydown);
        }

        if (clickOutsideToClose) {
          elm.removeEventListener('click', onModalClick);
        }

        if (escapeToClose) {
          window.removeEventListener('keydown', onWindowKeydown);
        }

        window.removeEventListener('unhandledrejection', onUnhandledrejection);
      },
    };
  };
</script>

<svelte:window on:resize={updateBreakpoint} />

{#if visible && $$slots.default}
  <div class="modal" use:onMount={{ currentBreakpoint }}>
    <div class="modal__dialog">
      <div
        bind:this={contentElm}
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
