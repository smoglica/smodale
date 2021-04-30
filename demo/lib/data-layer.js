export const getDataLayer = () => {
  window.dataLayer = window.dataLayer || [];

  return dataLayer;
};

export const push = (...args) => {
  if (process.env.NODE_ENV === 'development') {
    return;
  }

  const dataLayer = getDataLayer();

  dataLayer.push(...args);
};
