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

  const menu = [
    {
      label: 'Getting started',
      items: [
        {
          id: 'introduction',
          label: 'Introduction',
          component: null,
        },
        {
          id: 'installation',
          label: 'Installation',
          component: null,
        },
      ],
    },
    {
      label: 'Component',
      items: [
        {
          id: 'api',
          label: 'Api',
          component: null,
        },
        {
          id: 'properties',
          label: 'Properties',
          component: null,
        },
        {
          id: 'events',
          label: 'Events',
          component: null,
        },
      ],
    },
    {
      label: 'Examples',
      items: [
        {
          id: 'long-content',
          label: 'Long content',
          component: null,
        },
        {
          id: 'vertically-centered',
          label: 'Vertically centered',
          component: null,
        },
        {
          id: 'nested-modals',
          label: 'Nested modals',
          component: null,
        },
      ],
    },
    {
      label: 'Other',
      items: [
        {
          id: 'troubleshooting',
          label: 'Troubleshooting',
          component: null,
        },
        {
          id: 'support',
          label: 'Support',
          component: null,
        },
      ],
    },
  ];

  $: sections = menu.reduce((acc, menuItem) => [...acc, ...menuItem.items], []);
</script>

<Notifications>
  <div class="container max-width-adaptive-md">
    <ScrollSpy>
      <SidebarLayout>
        <svelte:fragment slot="aside">
          <Sidenav>
            {#each menu as { label, items }, i}
              <SidenavLabel>{label}</SidenavLabel>
              <SidenavList>
                {#each items as { id, label }, j}
                  <ScrollSpyLink let:prop={current} {id}>
                    <SidenavListItem href={`#${id}`} {current}>{label}</SidenavListItem>
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

          {#each sections as { id, label }, i}
            <ScrollSpySection {id}>
              <h2>{label}</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, voluptatem! Officia
                officiis at corrupti minima. Libero deserunt tenetur sunt incidunt ullam illum esse
                alias quidem. Quia debitis velit autem facilis.
              </p>
            </ScrollSpySection>
          {/each}
        </div>
      </SidebarLayout>
    </ScrollSpy>
  </div>
</Notifications>

<style src="./scss/main.scss"></style>
