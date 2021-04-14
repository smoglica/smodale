<script>
  import { fade } from 'svelte/transition';
  import smodale, { Modal } from 'smodale';
  import Notifications from 'Demo/components/molecules/Notifications';
  import ModalWithButtons from 'Demo/components/examples/ModalWithButtons';
  import ModalWithModal from 'Demo/components/examples/ModalWithModal';
  import SidebarLayout from 'Demo/components/templates/SidebarLayout';
  import Sidenav from 'Demo/components/molecules/Sidenav';
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

<Notifications>
  <div class="container max-width-adaptive-md">
    <SidebarLayout>
      <svelte:fragment slot="aside">
        <Sidenav />
      </svelte:fragment>
      <div class="text-component article">
        <section>
          <div class="margin-bottom-md">
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
          <hr />
        </section>

        <section id="introduction">
          <h2>Introduction</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, voluptatem! Officia
            officiis at corrupti minima. Libero deserunt tenetur sunt incidunt ullam illum esse
            alias quidem. Quia debitis velit autem facilis.
          </p>
        </section>

        <section id="installation">
          <h2>Installation</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, voluptatem! Officia
            officiis at corrupti minima. Libero deserunt tenetur sunt incidunt ullam illum esse
            alias quidem. Quia debitis velit autem facilis.
          </p>
        </section>

        <section id="api">
          <h2>API</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, voluptatem! Officia
            officiis at corrupti minima. Libero deserunt tenetur sunt incidunt ullam illum esse
            alias quidem. Quia debitis velit autem facilis.
          </p>
        </section>

        <section id="properties">
          <h2>Properties</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, voluptatem! Officia
            officiis at corrupti minima. Libero deserunt tenetur sunt incidunt ullam illum esse
            alias quidem. Quia debitis velit autem facilis.
          </p>
        </section>

        <section id="events">
          <h2>Events</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, voluptatem! Officia
            officiis at corrupti minima. Libero deserunt tenetur sunt incidunt ullam illum esse
            alias quidem. Quia debitis velit autem facilis.
          </p>
        </section>

        <section id="long-content">
          <h2>Long content</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, voluptatem! Officia
            officiis at corrupti minima. Libero deserunt tenetur sunt incidunt ullam illum esse
            alias quidem. Quia debitis velit autem facilis.
          </p>
        </section>

        <section id="vertically-centered">
          <h2>Vertically centered</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, voluptatem! Officia
            officiis at corrupti minima. Libero deserunt tenetur sunt incidunt ullam illum esse
            alias quidem. Quia debitis velit autem facilis.
          </p>
        </section>

        <section id="nested-modals">
          <h2>Nested modals</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, voluptatem! Officia
            officiis at corrupti minima. Libero deserunt tenetur sunt incidunt ullam illum esse
            alias quidem. Quia debitis velit autem facilis.
          </p>
        </section>

        <section id="troubleshooting">
          <h2>Troubleshooting</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, voluptatem! Officia
            officiis at corrupti minima. Libero deserunt tenetur sunt incidunt ullam illum esse
            alias quidem. Quia debitis velit autem facilis.
          </p>
        </section>

        <section id="support">
          <h2>Support</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, voluptatem! Officia
            officiis at corrupti minima. Libero deserunt tenetur sunt incidunt ullam illum esse
            alias quidem. Quia debitis velit autem facilis.
          </p>
        </section>
      </div>
    </SidebarLayout>
  </div>
</Notifications>

<style src="./scss/main.scss"></style>
