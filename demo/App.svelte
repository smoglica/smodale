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
  import logo from 'Demo/assets/images/logo.svg';
  import logoGithub from 'Demo/assets/icons/logo-github.svg';
  import heart from 'Demo/assets/icons/heart.svg';

  $: sections = routes.reduce((acc, route) => [...acc, ...route.items], []);

  const modalProps = {
    name: 'example',
    padding: 'var(--component-padding)',
    transition: fade,
    transitionParams: { duration: 150 },
    breakpoints: {
      '32rem': {
        maxWidth: 'var(--max-width-xxs)',
        margin: 'var(--component-padding)',
        borderRadius: 'var(--radius-md)',
        scrollable: true,
        centered: true,
      },
      '48rem': {
        maxWidth: 'var(--max-width-sm)',
      },
    },
  };

  const closed = () => notify('Event: <code>closed</code>');
  const opened = () => notify('Event: <code>opened</code>');
  const showStaticModal = () =>
    smodale
      .show('example')
      .then(() => notifySuccess('Hide: Confirmed'))
      .catch((data) => notifyWarning(`Cancel${data ? `: <code>${data}</code>` : ''}`));
  const showDynamicModal = () => smodale.show(ModalWithModal, null, modalProps, { closed, opened });
  const onSidenavListItemClick = (sidebar) => {
    if (sidebar.layout !== 'mobile') {
      return;
    }

    sidebar.close();
  };
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
        <div class="margin-bottom-xxxs text-right@md">
          <a
            class="btn btn--subtle btn--sm inline-flex items-center"
            href="https://github.com/smoglica/smodale"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span class="margin-right-xs">View on GitHub</span>
            <img class="icon icon--xs" src={logoGithub} alt="GitHub" />
          </a>
        </div>
        <h1>
          <a href="/" title="Smodale">
            <figure class="inline-flex">
              <img src={logo} alt="Smodale" width="256" />
            </figure>
          </a>
        </h1>
        <div class="text-component article">
          <section>
            <div class="margin-bottom-md">
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
        <div class="text-component text-sm color-contrast-medium text-center">
          <hr />
          <p>
            Designed and built with <img
              class="icon icon-xs"
              src={heart}
              alt="Heart"
              style="display: inline;"
            />
            by
            <a href="https://skendermoglica.it/" target="_blank" rel="noopener noreferrer">
              Skender Moglica
            </a>
          </p>
          <p>
            Code licensed <a
              href="https://github.com/smoglica/smodale/blob/main/LICENSE.md"
              rel="noopener noreferrer"
              target="_blank">MIT</a
            >. Docs generated with
            <a href="https://svelte.dev/" rel="noopener noreferrer" target="_blank">Svelte</a>
            and proudly hosted on
            <a
              href="https://vercel.com/?utm_source=smodale"
              rel="noopener noreferrer"
              target="_blank">Vercel</a
            >.
          </p>
        </div>
      </SidebarLayout>
    </ScrollSpy>
  </div>
</Notifications>

<style src="./scss/main.scss"></style>
