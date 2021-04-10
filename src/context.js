import { getContext } from 'svelte';

const context = {
  hide: () => ({}),
  cancel: () => ({}),
  component: null,
};

export const getModalContext = () => getContext(context);

export default context;
