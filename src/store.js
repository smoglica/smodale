import { writable, get } from 'svelte/store';

const store = writable({ static: [], dynamic: [] });
const getState = () => get(store);
const getModalByName = (name) => {
  const state = getState();

  return [...state.static, ...state.dynamic].find((m) => m?.props?.name === name);
};
const removeModalByName = (name) => {
  store.update((modals) => ({
    static: modals?.static.filter((m) => m?.props?.name !== name),
    dynamic: modals?.dynamic.filter((m) => m?.props?.name !== name),
  }));
};

const createModalsStore = () => ({
  ...store,
  show(name) {
    return new Promise((resolve, reject) => {
      if (typeof name === 'string') {
        this.update((modals) => ({
          static: [...modals?.static, { props: { name }, resolve, reject }],
          dynamic: modals?.dynamic,
        }));
      }
    });
  },
  hide(name, payload) {
    const modal = getModalByName(name);

    if (!modal) {
      return;
    }

    modal?.resolve(payload);

    removeModalByName(name);
  },
  cancel(name, payload) {
    const modal = getModalByName(name);

    if (!modal) {
      return;
    }

    if (payload) {
      modal?.reject(payload);
    }

    removeModalByName(name);
  },
});

export default createModalsStore();
