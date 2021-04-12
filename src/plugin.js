import store from './store';
import Modals from './components/Modals.svelte';
import { error } from './logger';

const getModalByName = (name) => {
  const state = store.getState();

  return [...state.static, ...state.dynamic].find((m) => m?.props?.name === name);
};

const removeModalByName = (name) => {
  store.update((modals) => ({
    static: modals?.static.filter((m) => m?.props?.name !== name),
    dynamic: modals?.dynamic.filter((m) => m?.props?.name !== name),
  }));
};

const showStaticModal = (name, resolve, reject, hide, cancel) => {
  store.update((modals) => ({
    static: [
      ...modals?.static,
      {
        props: { name },
        resolve,
        reject,
        hide,
        cancel,
      },
    ],
    dynamic: modals?.dynamic,
  }));
};

const showDynamicModal = (
  resolve,
  reject,
  hide,
  cancel,
  component,
  componentProps,
  componentEvents,
  props,
  events,
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
          name: String(modals?.dynamic.length),
          ...props,
        },
        events,
        resolve,
        reject,
        hide,
        cancel,
      },
    ],
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

export default {
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
        showStaticModal(name, resolve, reject, this.hide, this.cancel);
      } else if (typeof name === 'function') {
        showDynamicModal(...[resolve, reject, this.hide, this.cancel, ...args]);
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
};
