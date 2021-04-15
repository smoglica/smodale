<script context="module">
  import { writable } from 'svelte/store';

  export const currentSectionId = writable();
</script>

<script>
  const onMount = (node) => {
    const sectionsElms = [...node.getElementsByClassName('js-scroll-spy-section')];
    let intersectionObserver = null;

    if (sectionsElms.length) {
      let timeoutId = 0;

      const onIntersectionObserved = (entries) => {
        entries.forEach(() => {
          if (timeoutId) {
            clearTimeout(timeoutId);
          }

          timeoutId = setTimeout(() => {
            const halfWindowHeight = window.innerHeight / 2;
            const id = sectionsElms.reduce((acc, elm) => {
              const { top } = elm.getBoundingClientRect();

              if (top < halfWindowHeight) {
                return elm.id;
              }

              return acc;
            }, '');

            currentSectionId.set(id);

            timeoutId = 0;
          }, 240);
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
</script>

<div use:onMount>
  <slot />
</div>
