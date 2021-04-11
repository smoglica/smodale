import { writable, get } from 'svelte/store';

export default {
  ...writable({ static: [], dynamic: [] }),
  getState() {
    return get(this);
  },
};
