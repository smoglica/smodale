<script>
  import Alert from './Alert.svelte';

  const { notification = {}, onRemove = () => ({}) } = $$restProps;
</script>

<div class="margin-sm shadow-sm radius-md">
  <Alert on:remove={onRemove} severity={notification?.type}>
    <div class="text-sm">
      {@html notification.text}
    </div>
  </Alert>
</div>
