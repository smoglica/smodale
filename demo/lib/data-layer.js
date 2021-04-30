/* eslint-disable func-names, prefer-rest-params, import/prefer-default-export */
window.dataLayer = window.dataLayer || [];
window.gtag = function () {
  window.dataLayer.push(arguments);
};

export const gtag = (...args) => {
  if (process.env.NODE_ENV === 'development') {
    return;
  }

  window.gtag(...args);
};
