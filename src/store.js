import { writable, get } from 'svelte/store';
import { error } from './logger';
import Modals from './components/Modals.svelte';

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
const showDynamicModal = (
  component,
  componentProps,
  componentEvents,
  props,
  events,
  resolve,
  reject,
) => {
  const modalsElm = document.getElementsByClassName('js-modals')[0];

  if (!modalsElm) {
    // eslint-disable-next-line no-new
    new Modals({ target: document.body });
  }

  store.update((modals) => ({
    static: modals?.static,
    dynamic: [
      ...modals?.dynamic,
      {
        component,
        componentProps,
        componentEvents,
        props: {
          name: modals.length,
          ...props,
        },
        events,
        resolve,
        reject,
      },
    ],
  }));
};

const createModalsStore = () => ({
  ...store,
  show(...args) {
    const [name] = args;

    if (!name) {
      error('name missing');
      return Promise;
    }

    return new Promise((resolve, reject) => {
      const modal = getModalByName(name);

      if (modal) {
        error(`Name ${name} already exists. You must provide an unique one.`);
        return;
      }

      if (typeof name === 'string') {
        showStaticModal(name, resolve, reject);
      } else if (typeof name === 'function') {
        showDynamicModal(...[args, resolve, reject]);
      } else {
        error('Invalid name or component');
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
