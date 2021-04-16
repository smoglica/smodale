<script>
  import { fade } from 'svelte/transition';
  import smodale, { Modal } from 'smodale';
  import Notifications from 'Demo/components/molecules/Notifications';
  import ModalWithButtons from 'Demo/components/examples/ModalWithButtons';
  import ModalWithModal from 'Demo/components/examples/ModalWithModal';
  import SidebarLayout from 'Demo/components/templates/SidebarLayout';
  import Sidenav from 'Demo/components/molecules/Sidenav';
  import ScrollSpy from 'Demo/components/organisms/ScrollSpy';
  import ScrollSpySection from 'Demo/components/atoms/ScrollSpySection';
  import SidenavLabel from 'Demo/components/atoms/SidenavLabel';
  import SidenavList from 'Demo/components/atoms/SidenavList';
  import SidenavListItem from 'Demo/components/atoms/SidenavListItem';
  import ScrollSpyLink from 'Demo/components/atoms/ScrollSpyLink';
  import routes from 'Demo/routes';
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
  const onSidenavListItemClick = (sidebar) => {
    if (sidebar.layout !== 'mobile') {
      return;
    }

    sidebar.close();
  };
  $: sections = routes.reduce((acc, route) => [...acc, ...route.items], []);
</script>

<Notifications>
  <div class="container max-width-adaptive-md">
    <ScrollSpy>
      <SidebarLayout let:prop={{ sidebar }}>
        <svelte:fragment slot="aside">
          <Sidenav>
            {#each routes as { label, items }, i}
              <SidenavLabel>{label}</SidenavLabel>
              <SidenavList>
                {#each items as { id, label }, j}
                  <ScrollSpyLink let:prop={current} {id}>
                    <SidenavListItem
                      href={`#${id}`}
                      {current}
                      on:click={onSidenavListItemClick(sidebar)}>{label}</SidenavListItem
                    >
                  </ScrollSpyLink>
                {/each}
              </SidenavList>
            {/each}
          </Sidenav>
        </svelte:fragment>
        <div class="text-component article">
          <section>
            <div class="margin-bottom-md">
              <h1>Smodale</h1>
              <p class="text-md color-contrast-medium">
                A simple, light and highly customizable modal for Svelte
              </p>
              <p>
                Designed with the "Mobile-first" approach for serving static and dynamic modals
                which are customizable on specific viewport breakpoints
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
          {#each sections as { id, label, component }, i}
            <ScrollSpySection {id}>
              <h2>{label}</h2>
              <svelte:component this={component} />
            </ScrollSpySection>
          {/each}
        </div>
      </SidebarLayout>
    </ScrollSpy>
  </div>
</Notifications>

<style src="./scss/main.scss"></style>
