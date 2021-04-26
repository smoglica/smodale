const Details = function Details(element, index) {
  this.element = element;
  this.summary = this.element.querySelector('.js-details__summary');
  this.details = this.element.querySelector('.js-details__content');
  this.htmlElSupported = 'open' in this.element;

  this.initDetails(index);
  this.initDetailsEvents();
};

Details.prototype.initDetails = function initDetails(index) {
  Util.setAttributes(this.summary, {
    'aria-expanded': 'false',
    'aria-controls': `details--${index}`,
    role: 'button',
  });
  Util.setAttributes(this.details, { 'aria-hidden': 'true', id: `details--${index}` });
};

Details.prototype.initDetailsEvents = function initDetailsEvents() {
  const self = this;

  if (this.htmlElSupported) {
    this.element.addEventListener('toggle', function onToggle() {
      const ariaValues = self.element.open ? ['true', 'false'] : ['false', 'true'];

      self.updateAriaValues(ariaValues);
    });
  } else {
    this.summary.addEventListener('click', function onToggle(event) {
      event.preventDefault();
      const isOpen = self.element.getAttribute('open');
      let ariaValues = [];

      if (isOpen) {
        self.element.removeAttribute('open');
      } else {
        self.element.setAttribute('open', 'true');
      }

      ariaValues = isOpen ? ['false', 'true'] : ['true', 'false'];
      self.updateAriaValues(ariaValues);
    });
  }
};

Details.prototype.updateAriaValues = function updateAriaValues(values) {
  this.summary.setAttribute('aria-expanded', values[0]);
  this.details.setAttribute('aria-hidden', values[1]);
};

export default Details;
