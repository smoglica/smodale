<script>
  import Notifications from 'svelte-notifications';
  import Notification from './components/Notification.svelte';
  import ModalWithButtons from './components/examples/ModalWithButtons.svelte';
  import ModalWithCloseBtnInHeader from './components/examples/ModalWithCloseBtnInHeader.svelte';
  import { notifySuccess, notifyWarning, notify } from './lib/notifier';
  import modal, { Modal } from '../src';

  const modalProps = {
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
    },
  };

  const showStaticModal = () => modal
    .show('static-modal')
    .then(() => notifySuccess('Hide: Confirmed'))
    .catch((data) => notifyWarning(`Cancel${data ? `: <code>${data}</code>` : ''}`));
  const showDynamicModal = () => {
    modal.show(ModalWithCloseBtnInHeader, null, null, modalProps);
  };
  const onStaticModalOpened = () => notify('Event: <code>opened</code>');
  const onStaticModalClosed = () => notify('Event: <code>closed</code>');
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
    on:opened={onStaticModalOpened}
    on:closed={onStaticModalClosed}
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
