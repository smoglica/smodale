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
const resolvePromiseAndRemoveModal = (method, name, data) => {
  const modal = getModalByName(name);

  if (!modal) {
    return;
  }

  modal[method](data);

  removeModalByName(name);
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
  hide(name, data) {
    resolvePromiseAndRemoveModal('resolve', name, data);
  },
  cancel(name, data) {
    resolvePromiseAndRemoveModal('reject', name, data);
  },
});

export default createModalsStore();
