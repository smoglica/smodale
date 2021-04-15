<script>
  import { scrollSpy } from 'Demo/components/organisms/ScrollSpy';

  export let id = '';

  $: current = $scrollSpy.currentSectionId === id;

  const onClick = () =>
    scrollSpy.update((state) => ({ ...state, currentSectionId: id, clickScrolling: true }));
</script>

<div class:current on:click={onClick}>
  <slot prop={current} />
</div>
