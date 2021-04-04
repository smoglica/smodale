import { writable } from 'svelte/store';

const createModalsStore = () => ({
  ...writable({ static: [], dynamic: [] }),
  show(name) {
    if (typeof name === 'string') {
      this.update((modals) => ({
        static: [...modals?.static, { props: { name } }],
        dynamic: modals?.dynamic,
      }));
    }
  },
  hide(name) {
    this.update((modals) => ({
      static: modals?.static.filter((m) => m?.props?.name !== name),
      dynamic: modals?.dynamic.filter((m) => m?.props?.name !== name),
    }));
  },
});

export default createModalsStore();
