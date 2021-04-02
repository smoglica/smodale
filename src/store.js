import { writable } from 'svelte/store';

const createModalsStore = () => ({
  ...writable({ static: [], dynamic: [] }),
  show() {},
  hide() {},
});

export default createModalsStore();
