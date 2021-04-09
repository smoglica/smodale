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
const showStaticModal = (name, resolve, reject) => {
  store.update((modals) => ({
    static: [...modals?.static, { props: { name }, resolve, reject }],
    dynamic: modals?.dynamic,
  }));
};

const createModalsStore = () => ({
  ...store,
  show(...args) {
    const [name] = args;

    if (!name) {
      return Promise;
    }

    return new Promise((resolve, reject) => {
      const modal = getModalByName(name);

      if (modal) {
        // eslint-disable-next-line no-console
        console.error(`[smodal] Modal ${name} already exists. You must provide an unique name.`);
        return;
      }

      if (typeof name === 'string') {
        showStaticModal(name, resolve, reject);
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
