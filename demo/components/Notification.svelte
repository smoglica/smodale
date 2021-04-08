<script>
  import Alert from './Alert.svelte';

  const { notification = {}, onRemove = () => ({}) } = $$restProps;
</script>

<div class="margin-sm">
  <Alert on:remove={onRemove} severity={notification?.type}>
    <div class="text-sm">
      {@html notification.text}
    </div>
  </Alert>
</div>
