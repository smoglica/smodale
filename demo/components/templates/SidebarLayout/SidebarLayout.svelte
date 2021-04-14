<script>
  import Sidebar from 'Demo/components/templates/SidebarLayout/Sidebar';
  import eRemove from 'Demo/assets/icons/e-remove.svg';
  import HamburgerMenuIcon from 'Demo/components/atoms/HamburgerMenuIcon';

  const onMount = (elm) => {
    const sidebar = new Sidebar(elm);

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

<div class="padding-component hide@md no-js:is-hidden">
  <HamburgerMenuIcon
    ariaControls="sidebar"
    class="btn btn--subtle radius-50% position-fixed top-0 right-0 z-index-fixed-element margin-top-sm margin-right-sm"
  />
</div>

<div class="flex@md">
  <aside
    class="sidebar sidebar--static@md sidebar--right-on-mobile js-sidebar"
    data-static-class="position-relative z-index-1 flex-grow max-width-xxxxs border-right"
    id="sidebar"
    aria-labelledby="sidebar-title"
    use:onMount
  >
    <div class="sidebar__panel">
      <header class="sidebar__header z-index-2">
        <h1 class="text-md text-truncate" id="sidebar-title">Sidebar title</h1>

        <button class="reset sidebar__close-btn js-sidebar__close-btn js-tab-focus">
          <img class="icon" src={eRemove} alt="Close panel" />
        </button>
      </header>

      <div class="position-relative z-index-1">
        <div class="padding-md">
          <slot name="aside" />
        </div>
      </div>
    </div>
  </aside>

  <main class="position-relative z-index-1 flex-grow height-100vh">
    <div class="padding-md">
      <slot />
    </div>
  </main>
</div>

<style src="_index.scss"></style>
