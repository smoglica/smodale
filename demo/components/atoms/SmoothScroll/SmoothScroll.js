const SmoothScroll = function SmoothScroll(element) {
  if (!Util.cssSupports('color', 'var(--color-var)')) {
    return;
  }

  this.element = element;
  this.scrollDuration = parseInt(this.element.getAttribute('data-duration'), 10) || 300;
  this.dataElementY =
    this.element.getAttribute('data-scrollable-element-y') ||
    this.element.getAttribute('data-scrollable-element') ||
    this.element.getAttribute('data-element');
  this.scrollElementY = this.dataElementY ? document.querySelector(this.dataElementY) : window;
  this.dataElementX = this.element.getAttribute('data-scrollable-element-x');
  this.scrollElementX = this.dataElementY ? document.querySelector(this.dataElementX) : window;

  this.initScroll();
};

SmoothScroll.prototype.initScroll = function initScroll() {
  const self = this;

  this.element.addEventListener('click', function onClick(event) {
    event.preventDefault();

    const targetId = event.target
      .closest('.js-smooth-scroll')
      .getAttribute('href')
      .replace('#', '');
    const target = document.getElementById(targetId);

    if (!target) {
      return;
    }

    const targetTabIndex = target.getAttribute('tabindex');
    let windowScrollTop = self.scrollElementY.scrollTop || document.documentElement.scrollTop;

    // scroll vertically
    if (!self.dataElementY) windowScrollTop = window.scrollY || document.documentElement.scrollTop;

    const scrollElementY = self.dataElementY ? self.scrollElementY : false;
    const fixedHeight = self.getFixedElementHeight(); // check if there's a fixed element on the page

    Util.scrollTo(
      target.getBoundingClientRect().top + windowScrollTop - fixedHeight,
      self.scrollDuration,
      function onScroll() {
        // scroll horizontally
        self.scrollHorizontally(target, fixedHeight);
        // move the focus to the target element - don't break keyboard navigation
        Util.moveFocus(target);
        window.history.pushState(false, false, `#${targetId}`);
        self.resetTarget(target, targetTabIndex);
      },
      scrollElementY
    );
  });
};

SmoothScroll.prototype.scrollHorizontally = function scrollHorizontally(target, delta) {
  const scrollEl = this.dataElementX ? this.scrollElementX : false;
  const windowScrollLeft = this.scrollElementX
    ? this.scrollElementX.scrollLeft
    : document.documentElement.scrollLeft;
  const final = target.getBoundingClientRect().left + windowScrollLeft - delta;
  const duration = this.scrollDuration;

  const element = scrollEl || window;
  let start = element.scrollLeft || document.documentElement.scrollLeft;
  let currentTime = null;

  if (!scrollEl) start = window.scrollX || document.documentElement.scrollLeft;
  // return if there's no need to scroll
  if (Math.abs(start - final) < 5) return;

  const animateScroll = function animateScroll(timestamp) {
    if (!currentTime) currentTime = timestamp;

    let progress = timestamp - currentTime;

    if (progress > duration) progress = duration;

    const val = Math.easeInOutQuad(progress, start, final - start, duration);

    element.scrollTo({ left: val });

    if (progress < duration) {
      window.requestAnimationFrame(animateScroll);
    }
  };

  window.requestAnimationFrame(animateScroll);
};

SmoothScroll.prototype.resetTarget = function resetTarget(el, tabindex) {
  const target = el;

  if (parseInt(target.getAttribute('tabindex'), 10) < 0) {
    target.style.outline = 'none';

    if (!tabindex) {
      target.removeAttribute('tabindex');
    }
  }
};

SmoothScroll.prototype.getFixedElementHeight = function getFixedElementHeight() {
  const scrollElementY = this.dataElementY ? this.scrollElementY : document.documentElement;

  let fixedElementDelta = parseInt(
    getComputedStyle(scrollElementY).getPropertyValue('scroll-padding'),
    10
  );

  if (Number.isNaN(fixedElementDelta)) {
    // scroll-padding not supported
    fixedElementDelta = 0;

    const fixedElement = document.querySelector(this.element.getAttribute('data-fixed-element'));

    if (fixedElement) {
      fixedElementDelta = parseInt(fixedElement.getBoundingClientRect().height, 10);
    }
  }

  return fixedElementDelta;
};

export default SmoothScroll;
