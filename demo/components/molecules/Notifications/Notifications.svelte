<script>
  import Notifications from 'svelte-notifications';
  import Notification from 'Demo/components/atoms/Notification';
</script>

<Notifications item={Notification}>
  <slot />
</Notifications>

<style src="_index.scss"></style>
