<script>
  import { fade } from 'svelte/transition';
  import smodale, { Modal } from 'smodale';
  import Notifications from 'svelte-notifications';
  import Notification from 'Demo/components/atoms/Notification';
  import ModalWithButtons from 'Demo/components/examples/ModalWithButtons';
  import ModalWithModal from 'Demo/components/examples/ModalWithModal';
  import SidebarLayout from 'Demo/components/templates/SidebarLayout';
  import { notifySuccess, notifyWarning, notify } from 'Demo/lib/notifier';

  const modalProps = {
    name: 'example',
    padding: 'var(--component-padding)',
    transition: fade,
    transitionParams: { duration: 150 },
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
  const showStaticModal = () =>
    smodale
      .show('example')
      .then(() => notifySuccess('Hide: Confirmed'))
      .catch((data) => notifyWarning(`Cancel${data ? `: <code>${data}</code>` : ''}`));
  const showDynamicModal = () => {
    smodale.show(ModalWithModal, null, modalProps, { closed, opened });
  };
</script>

<Notifications item={Notification}>
  <SidebarLayout>
    <div slot="aside">Sidebar content</div>
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
    <Modal {...modalProps} on:opened={opened} on:closed={closed}>
      <ModalWithButtons />
    </Modal>
  </SidebarLayout>
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
