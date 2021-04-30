/**
 * Init Google Analytics
 *
 * @see https://developers.google.com/analytics/devguides/collection/analyticsjs
 */
export default () => {
  if (process.env.NODE_ENV === 'development') {
    return;
  }

  window.ga =
    window.ga ||
    function ga(...args) {
      (ga.q = ga.q || []).push(...args);
    };

  ga.l = +new Date();

  ga('create', 'G-K01G7CKPDV', 'auto');
  ga('send', 'pageview', { anonymizeIp: true });
};
