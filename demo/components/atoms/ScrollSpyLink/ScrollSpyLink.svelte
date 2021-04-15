<script>
  import { scrollSpy } from 'Demo/components/organisms/ScrollSpy';

  export let id = '';

  $: current = $scrollSpy.currentSectionId === id;

  const updateScrollSpyState = (currentSectionId) =>
    scrollSpy.update((state) => ({ ...state, currentSectionId, clickScrolling: true }));

  const onMounted = () => {
    const hashId = window.location.hash.replace('#', '');

    if (hashId !== id) {
      return;
    }

    updateScrollSpyState(hashId);
  };
</script>

<div
  class="scroll-spy-link"
  class:scroll-spy-link--current={current}
  on:click={updateScrollSpyState(id)}
  use:onMounted
>
  <slot prop={current} />
</div>
