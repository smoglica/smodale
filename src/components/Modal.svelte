<script context="module">
  export const resizeObserverSupported = () => 'ResizeObserver' in window;
  export const ModalDismissReasons = Object.freeze({
    BACKDROP_CLICK: 'BACKDROP_CLICK',
    ESC: 'ESC',
  });

  export const toggleClass = (elm, className, bool) => {
    if (bool) {
      return elm.classList.add(className);
    }

    return elm.classList.remove(className);
  };

  export const toInlineCss = (elm = {}, styles = {}) => {
    const el = elm;

    Object.entries(styles).forEach(([key, value]) => {
      if (!(key in el.style)) {
        return;
      }

      el.style[key] = value || '';
    });
  };
</script>

<script>
  import { setContext, tick, createEventDispatcher } from 'svelte';
  import { get_current_component as getCurrentComponent } from 'svelte/internal';
  import store from '../store';
  import context from '../context';

  const {
    name,
    transition = () => null,
    transitionParams = {},
    breakpoints = {},
    escapeToClose = true,
    clickOutsideToClose = true,
    disableBodyScroll = true,
    focusOnOpen = true,
    focusTrap = true,
    classes = '',
    ...defaults
  } = $$restProps;

  let contentElm;
  let currentBreakpoint;
  let firstFocusableElm;
  let lastFocusableElm;

  $: modals = [...$store.dynamic, ...$store.static];
  $: modal = modals.find((m) => m.props.name === name);
  $: sortedBreakpoints = Object.entries(breakpoints)
    .map(([key, value]) => {
      const regex = /px|em|rem/;
      const [unit] = key.match(regex) || [];
      let rawValue = parseInt(key.replace(regex, ''), 10);

      if (unit && ['em', 'rem'].includes(unit)) {
        const rootFontSize = parseInt(
          window
            .getComputedStyle(document.documentElement)
            .getPropertyValue('font-size')
            .replace('px', ''),
          10,
        );

        rawValue *= rootFontSize;
      }

      return [key, value, rawValue];
    })
    .sort((a, b) => b[2] - a[2])
    .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});
  $: sortedBreakpointList = Object.entries(sortedBreakpoints);

  const getAndSetFocusableElms = (elm) => {
    const allFocusableElm = [
      ...elm.querySelectorAll(
        '[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex]:not([tabindex="-1"]), [contenteditable], audio[controls], video[controls], summary',
      ),
    ];

    if (!allFocusableElm.length) {
      return;
    }

    const elmIsVisible = (element) =>
      element.offsetWidth || element.offsetHeight || element.getClientRects().length;

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

  const emit = createEventDispatcher();
  const hide = (data) => modal.hide(name, data);
  const cancel = (data) => modal.cancel(name, data);
  const onModalClick = ({ target }) => {
    if (target.closest('.js-modal__content')) {
      return;
    }

    cancel(ModalDismissReasons.BACKDROP_CLICK);
  };
  const onWindowKeydown = (event) => {
    if (!event.keyCode === 27 || event.key !== 'Escape') {
      return;
    }

    cancel(ModalDismissReasons.ESC);
  };
  const onModalKeydown = (event) => {
    if (!event.keyCode === 9 || event.key !== 'Tab') {
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

  setContext(context, { hide, cancel, component: getCurrentComponent() });

  const updateBreakpoint = () => {
    if (!modal) {
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
              { height: 'auto', ...defaults },
            )
          : defaults,
    };
  };

  const throttle = (callback, wait, immediate = false) => {
    let timeout = null;
    let initialCall = true;

    return (...args) => {
      const callNow = immediate && initialCall;
      const next = () => {
        callback.apply(this, ...args);
        timeout = null;
      };

      if (callNow) {
        initialCall = false;
        next();
      }

      if (!timeout) {
        timeout = setTimeout(next, wait);
      }
    };
  };

  const onWindowResize = throttle(updateBreakpoint, 240);

  const onMount = (elm) => {
    updateBreakpoint();
    emit('opened');

    let resizeObserver = null;

    if (resizeObserverSupported()) {
      resizeObserver = new ResizeObserver(onWindowResize);
      resizeObserver.observe(elm);
    } else {
      window.addEventListener('resize', onWindowResize);
    }

    if (disableBodyScroll) {
      toInlineCss(document.body, { overflow: 'hidden' });
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

    return {
      async update() {
        await tick();

        const {
          maxWidth,
          margin,
          height,
          backgroundColor = '#fff',
          padding = '20px',
          borderRadius,
          backdropColor = 'rgba(0, 0, 0, 0.6)',
          boxShadow,
          centered,
          scrollable,
          zIndex = '50',
        } = currentBreakpoint.config || {};

        toggleClass(elm, 'modal--centered', centered);
        toggleClass(elm, 'modal--scrollable', scrollable);

        toInlineCss(elm, { zIndex, backgroundColor: backdropColor });
        toInlineCss(contentElm, {
          maxWidth,
          height,
          margin,
          backgroundColor,
          padding,
          borderRadius,
          boxShadow,
        });
      },
      destroy() {
        emit('closed');

        if (disableBodyScroll && !modals.length) {
          toInlineCss(document.body, { overflow: '' });
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

        if (resizeObserverSupported() && resizeObserver) {
          resizeObserver.disconnect();
        } else {
          window.removeEventListener('resize', onWindowResize);
        }
      },
    };
  };
</script>

{#if modal && $$slots.default}
  <div
    class="modal {classes}"
    data-name={name}
    use:onMount={{ currentBreakpoint }}
    transition:transition={transitionParams}
  >
    <div class="modal__dialog">
      <div
        bind:this={contentElm}
        class="modal__content js-modal__content"
        role="alertdialog"
        aria-expanded="true"
      >
        <slot />
      </div>
    </div>
  </div>
{/if}

<style lang="scss">
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;

    &__dialog {
      position: relative;
      width: auto;
      height: 100%;
    }

    &__content {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      overflow-x: hidden;
      overflow-y: auto;
    }

    &--scrollable {
      overflow-y: auto;
    }

    &--scrollable &__dialog {
      min-height: 100%;
      height: auto;
    }

    &--centered &__dialog {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
</style>
