function cancelSidebarEvents(sidebar) {
  // mobile layout only
  // remove event listeners
  sidebar.element.removeEventListener('keydown', sidebar);
  sidebar.element.removeEventListener('click', sidebar);
}

function closeSidebar(instance) {
  const sidebar = instance;

  // mobile layout only
  Util.removeClass(sidebar.element, sidebar.showClass);
  sidebar.firstFocusable = null;
  sidebar.lastFocusable = null;

  if (sidebar.selectedTrigger) {
    sidebar.selectedTrigger.focus();
  }

  sidebar.element.removeAttribute('tabindex');
  cancelSidebarEvents(sidebar);
}

function initClick(sidebar, event) {
  // mobile layout only
  // close sidebar when clicking on close button or sidebar bg layer
  if (
    !event.target.closest('.js-sidebar__close-btn') &&
    !Util.hasClass(event.target, 'js-sidebar')
  ) {
    return;
  }

  event.preventDefault();
  closeSidebar(sidebar);
}

function trapFocus(sidebar, event) {
  // mobile layout only
  if (sidebar.firstFocusable === document.activeElement && event.shiftKey) {
    // on Shift+Tab -> focus last focusable element when focus moves out of sidebar
    event.preventDefault();
    sidebar.lastFocusable.focus();
  }
  if (sidebar.lastFocusable === document.activeElement && !event.shiftKey) {
    // on Tab -> focus first focusable element when focus moves out of sidebar
    event.preventDefault();
    sidebar.firstFocusable.focus();
  }
}

function initKeyDown(sidebar, event) {
  // mobile layout only
  if ((event.keyCode && event.keyCode === 27) || (event.key && event.key === 'Escape')) {
    // close sidebar window on esc
    closeSidebar(sidebar);
  } else if ((event.keyCode && event.keyCode === 9) || (event.key && event.key === 'Tab')) {
    // trap focus inside sidebar
    trapFocus(sidebar, event);
  }
}

function getFirstVisible(instance, elements) {
  const sidebar = instance;

  // get first visible focusable element inside the sidebar
  for (let i = 0; i < elements.length; i += 1) {
    if (
      elements[i].offsetWidth ||
      elements[i].offsetHeight ||
      elements[i].getClientRects().length
    ) {
      sidebar.firstFocusable = elements[i];
      return true;
    }
  }

  return false;
}

function getLastVisible(instance, elements) {
  const sidebar = instance;

  // get last visible focusable element inside the sidebar
  for (let i = elements.length - 1; i >= 0; i -= 1) {
    if (
      elements[i].offsetWidth ||
      elements[i].offsetHeight ||
      elements[i].getClientRects().length
    ) {
      sidebar.lastFocusable = elements[i];
      return true;
    }
  }

  return false;
}

function getFocusableElements(sidebar) {
  // get all focusable elements inside the drawer
  const allFocusable = sidebar.element.querySelectorAll(
    '[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex]:not([tabindex="-1"]), [contenteditable], audio[controls], video[controls], summary'
  );

  getFirstVisible(sidebar, allFocusable);
  getLastVisible(sidebar, allFocusable);
}

function showSidebar(sidebar) {
  // mobile layout only
  Util.addClass(sidebar.element, sidebar.showClass);
  getFocusableElements(sidebar);
  Util.moveFocus(sidebar.element);
}

function initSidebarEvents(sidebar) {
  // mobile layout only
  // add event listeners
  sidebar.element.addEventListener('keydown', sidebar);
  sidebar.element.addEventListener('click', sidebar);
}

function getCustomStaticClass(instance) {
  const element = instance;
  const customClasses = element.element.getAttribute('data-static-class');

  if (customClasses) {
    element.customStaticClass = ` ${customClasses}`;
  }
}

function checkSidebarLayout(instance) {
  const sidebar = instance;
  const layout = getComputedStyle(sidebar.element, ':before')
    .getPropertyValue('content')
    .replace(/'|"/g, '');

  if (layout === sidebar.layout) {
    return;
  }

  sidebar.layout = layout;

  if (layout !== 'static') {
    Util.addClass(sidebar.element, 'is-hidden');
  }

  Util.toggleClass(
    sidebar.element,
    sidebar.staticClass + sidebar.customStaticClass,
    layout === 'static'
  );

  if (layout !== 'static') {
    setTimeout(() => Util.removeClass(sidebar.element, 'is-hidden'));
  }

  // reset element role
  if (layout === 'static') {
    sidebar.element.removeAttribute('role', 'alertdialog');
  } else {
    sidebar.element.setAttribute('role', 'alertdialog');
  }

  // reset mobile behaviour
  if (layout === 'static' && Util.hasClass(sidebar.element, sidebar.showClass))
    closeSidebar(sidebar);
}

function initSidebarResize(sidebar) {
  // custom event emitted when window is resized - detect only if the sidebar--static@{breakpoint} class was added
  const beforeContent = getComputedStyle(sidebar.element, ':before').getPropertyValue('content');

  if (beforeContent && beforeContent !== '' && beforeContent !== 'none') {
    checkSidebarLayout(sidebar);

    sidebar.element.addEventListener('update-sidebar', function onUpdateSidebar() {
      checkSidebarLayout(sidebar);
    });
  }

  Util.addClass(sidebar.element, sidebar.readyClass);
}

function initSidebar(instance) {
  const sidebar = instance;

  initSidebarResize(sidebar); // handle changes in layout -> mobile to static and viceversa

  if (sidebar.triggers) {
    // open sidebar when clicking on trigger buttons - mobile layout only
    for (let i = 0; i < sidebar.triggers.length; i += 1) {
      sidebar.triggers[i].addEventListener('click', function onClick(event) {
        event.preventDefault();

        if (Util.hasClass(sidebar.element, sidebar.showClass)) {
          sidebar.selectedTrigger = event.target;
          closeSidebar(sidebar);
          return;
        }

        sidebar.selectedTrigger = event.target;
        showSidebar(sidebar);
        initSidebarEvents(sidebar);
      });
    }
  }
}

const Sidebar = function Sidebar(element) {
  this.element = element;
  this.triggers = document.querySelectorAll(`[aria-controls="${this.element.getAttribute('id')}"]`);
  this.firstFocusable = null;
  this.lastFocusable = null;
  this.selectedTrigger = null;
  this.showClass = 'sidebar--is-visible';
  this.staticClass = 'sidebar--static';
  this.customStaticClass = '';
  this.readyClass = 'sidebar--loaded';
  this.layout = false; // this will be static or mobile
  getCustomStaticClass(this); // custom classes for static version
  initSidebar(this);
};

Sidebar.prototype.close = function close() {
  closeSidebar(this);
};

Sidebar.prototype.handleEvent = function handleEvent(event) {
  // mobile layout only
  switch (event.type) {
    case 'click': {
      initClick(this, event);
      break;
    }
    case 'keydown': {
      initKeyDown(this, event);
      break;
    }
    default:
  }
};

Sidebar.prototype.resetLayout = function resetLayout() {
  this.element.dispatchEvent(new CustomEvent('update-sidebar'));
};

export default Sidebar;
