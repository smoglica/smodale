<script>
  import { currentSectionId } from 'Demo/components/organisms/ScrollSpy';

  export let id = '';

  $: current = $currentSectionId === id;
</script>

<div class:current>
  <slot prop={current} />
</div>
