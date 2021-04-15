<script>
  import Sidebar from 'Demo/components/templates/SidebarLayout/Sidebar';
  import eRemove from 'Demo/assets/icons/e-remove.svg';
  import HamburgerMenuIcon from 'Demo/components/atoms/HamburgerMenuIcon';
  import { version } from '@@/package.json';

  let sidebar = null;

  const onMount = (elm) => {
    sidebar = new Sidebar(elm);

    if (window.requestAnimationFrame) {
      window.requestAnimationFrame(sidebar.resetLayout.bind(sidebar));
    } else {
      sidebar.resetLayout();
    }

    window.addEventListener('resize', () => {
      if (!window.requestAnimationFrame) {
        setTimeout(sidebar.resetLayout.bind(sidebar), 250);
      } else {
        window.requestAnimationFrame(sidebar.resetLayout.bind(sidebar));
      }
    });
  };
</script>

<div class="hide@md no-js:is-hidden">
  <HamburgerMenuIcon
    ariaControls="sidebar"
    class="btn btn--subtle radius-50% position-fixed top-0 right-0 z-index-fixed-element margin-top-sm margin-right-md"
  />
</div>
<div class="flex@md">
  <aside
    class="sidebar sidebar--static@md sidebar--right-on-mobile js-sidebar"
    data-static-class="position-relative z-index-1 flex-grow max-width-xxxxs border-right sidebar--sticky-on-desktop"
    id="sidebar"
    aria-labelledby="sidebar-title"
    use:onMount
  >
    <div class="sidebar__panel">
      <header class="sidebar__header z-index-2">
        <div>
          <h1 class="text-md text-truncate" id="sidebar-title">Smodale</h1>
          <small class="color-contrast-medium">{`v${version}`}</small>
        </div>
        <button class="btn btn--subtle padding-sm js-sidebar__close-btn js-tab-focus" type="button">
          <img class="icon icon--sm" src={eRemove} alt="Close panel" />
        </button>
      </header>
      <div class="position-relative z-index-1">
        <div class="padding-md">
          <slot name="aside" />
        </div>
      </div>
    </div>
  </aside>
  <main class="position-relative flex-grow height-100%">
    <div class="padding-md">
      <slot prop={{ sidebar }} />
    </div>
  </main>
</div>

<style src="_index.scss"></style>
