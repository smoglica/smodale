/* eslint-disable no-console, import/prefer-default-export */
export const error = (message) => {
  if (!message) {
    return;
  }

  console.error(`[smodale] ${message}`);
};
