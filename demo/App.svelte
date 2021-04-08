<script>
  import Notifications from 'svelte-notifications';
  import Notification from './components/Notification.svelte';
  import { notifySuccess, notifyError } from './lib/notifier';
  import modal, { Modal } from '../src';

  const staticModalProps = {
    padding: 'var(--component-padding)',
    backgroundColor: 'var(--color-white)',
    backdropColor: 'rgba(0,0,0,0.6)',
    breakpoints: {
      '32rem': {
        maxWidth: '500px',
        margin: 'var(--component-padding)',
        borderRadius: '4px',
        height: 'auto',
        scrollable: true,
        centered: true,
        zIndex: 100,
      },
      '48rem': {
        maxWidth: '800px',
      },
      '80rem': {
        maxWidth: '1140px',
      },
    },
  };

  const showStaticModal = () => modal.show('static-modal')
    .then(() => notifySuccess('Confirmed'))
    .catch(() => notifyError('Cancelled'));
  const hideStaticModal = () => modal.hide('static-modal');
  const cancelStaticModal = () => modal.cancel('static-modal');
</script>

<Notifications item={Notification}>
  <section class="margin-y-xl">
    <div class="container max-width-sm">
      <div class="margin-bottom-md text-component">
        <h1>Smodale</h1>
        <p class="text-md color-contrast-medium">
          A simple, light and highly customizable modal for Svelte
        </p>
      </div>
      <div class="flex flex-column flex-row@xs gap-xs">
        <button type="button" class="btn btn--primary" on:click={showStaticModal}>
          Show a static modal
        </button>
        <button type="button" class="btn btn--accent">Show a dynamic modal</button>
      </div>
    </div>
  </section>

  <Modal name="static-modal" {...staticModalProps}>
    <div class="text-component">
      <h2>Static modal</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam quasi iure tenetur doloremque
        vitae cumque sint iusto, optio laborum ut dolore sequi blanditiis, accusamus qui officiis
        reprehenderit reiciendis excepturi culpa!
      </p>

      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam quasi iure tenetur doloremque
        vitae cumque sint iusto, optio laborum ut dolore sequi blanditiis, accusamus qui officiis
        reprehenderit reiciendis excepturi culpa!
      </p>

      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam quasi iure tenetur doloremque
        vitae cumque sint iusto, optio laborum ut dolore sequi blanditiis, accusamus qui officiis
        reprehenderit reiciendis excepturi culpa!
      </p>
    </div>
    <div class="flex justify-end gap-xs margin-top-md">
      <button type="button" class="btn btn--subtle" on:click={cancelStaticModal}>Cancel</button>
      <button type="button" class="btn btn--primary" on:click={hideStaticModal}>Confirm</button>
    </div>
  </Modal>
</Notifications>
