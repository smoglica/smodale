<script>
  import { slide } from 'svelte/transition';
  import Alert from 'Demo/components/Alert';

  const { notification = {}, onRemove = () => ({}) } = $$restProps;
</script>

<div class="margin-sm shadow-sm radius-md" role="status" aria-live="polite" in:slide out:slide>
  <Alert on:remove={onRemove} severity={notification?.type}>
    <div class="text-sm">
      {@html notification.text}
    </div>
  </Alert>
</div>
