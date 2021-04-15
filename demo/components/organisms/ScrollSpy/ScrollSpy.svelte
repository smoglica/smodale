<script context="module">
  import { writable } from 'svelte/store';

  export const scrollSpy = writable({ currentSectionId: '', clickScrolling: false });
</script>

<script>
  const delay = 240;
  let scrollTimeoutId = 0;

  const onMount = (node) => {
    const sectionsElms = [...node.getElementsByClassName('js-scroll-spy-section')];
    let intersectionObserver = null;

    if (sectionsElms.length) {
      let timeoutId = 0;

      const onIntersectionObserved = (entries) => {
        if ($scrollSpy.clickScrolling) {
          return;
        }

        entries.forEach(() => {
          if (timeoutId) {
            clearTimeout(timeoutId);
          }

          timeoutId = setTimeout(() => {
            const halfWindowHeight = window.innerHeight / 2;
            const currentSectionId = sectionsElms.reduce((acc, elm) => {
              const { top } = elm.getBoundingClientRect();

              if (top < halfWindowHeight) {
                return elm.id;
              }

              return acc;
            }, '');

            scrollSpy.update((state) => ({ ...state, currentSectionId }));

            timeoutId = 0;
          }, delay);
        });
      };

      intersectionObserver = new IntersectionObserver(onIntersectionObserved, {
        threshold: [0, 0.1],
        rootMargin: '0px 0px -70% 0px',
      });

      sectionsElms.forEach((elm) => intersectionObserver.observe(elm));
    }

    return {
      destroy() {
        if (!intersectionObserver) {
          return;
        }

        intersectionObserver.disconnect();
      },
    };
  };

  const onWindowScroll = () => {
    clearTimeout(scrollTimeoutId);

    scrollTimeoutId = setTimeout(
      () => scrollSpy.update((state) => ({ ...state, clickScrolling: false })),
      delay,
    );
  };
</script>

<svelte:window on:scroll={onWindowScroll} />

<div use:onMount>
  <slot />
</div>
