<script>
  import Notifications from 'svelte-notifications';
  import Notification from './components/Notification.svelte';
  import ModalWithButtons from './components/examples/ModalWithButtons.svelte';
  import ModalWithModal from './components/examples/ModalWithModal.svelte';
  import { notifySuccess, notifyWarning, notify } from './lib/notifier';
  import smodale, { Modal } from '../src';

  const modalProps = {
    padding: 'var(--component-padding)',
    breakpoints: {
      '32rem': {
        maxWidth: '500px',
        margin: 'var(--component-padding)',
        borderRadius: 'var(--radius-md)',
        height: 'auto',
        scrollable: true,
        centered: true,
      },
      '48rem': {
        maxWidth: '800px',
      },
    },
  };

  const closed = () => notify('Event: <code>opened</code>');
  const opened = () => notify('Event: <code>closed</code>');
  const showStaticModal = () => smodale
    .show('static-modal')
    .then(() => notifySuccess('Hide: Confirmed'))
    .catch((data) => notifyWarning(`Cancel${data ? `: <code>${data}</code>` : ''}`));
  const showDynamicModal = () => {
    smodale.show(ModalWithModal, null, modalProps, { closed, opened });
  };
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
        <button type="button" class="btn btn--accent" on:click={showDynamicModal}>
          Show a dynamic modal
        </button>
      </div>
    </div>
  </section>

  <Modal
    name="static-modal"
    {...modalProps}
    on:opened={opened}
    on:closed={closed}
  >
    <ModalWithButtons />
  </Modal>
</Notifications>

<style>
  :root {
    --font-primary: 'Inter', system-ui, sans-serif;
  }

  :global(code) {
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New,
      monospace;
    font-weight: 600;
  }

  :global(code::before),
  :global(code::after) {
    content: '`';
  }

  :global([class*='default-position-style-']) {
    width: 100% !important;
    z-index: 100;
  }

  @media (min-width: 32rem) {
    :global([class*='default-position-style-']) {
      width: auto !important;
      max-width: 500px;
    }
  }
</style>
