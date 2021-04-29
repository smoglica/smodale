import plugin from 'smodale/plugin';
import { error } from 'smodale/logger';
import store from 'smodale/store';
import Modals from 'smodale/components/Modals.svelte';

jest.mock('smodale/logger', () => ({ error: jest.fn() }));
jest.mock('smodale/components/Modals.svelte');

describe('plugin', () => {
  beforeEach(() => {
    store.set({ static: [], dynamic: [] });
  });

  describe('show', () => {
    it('should raise an error when a name not provided', () => {
      const res = plugin.show();

      expect(typeof res).toBe('function');
      expect(error).toHaveBeenCalledWith('name missing');
    });

    it('should raise an error when providing an invalid name', () => {
      const calls = [plugin.show(123), plugin.show({}), plugin.show([])];

      expect(error).toHaveBeenCalledTimes(calls.length);
      calls.forEach((item, i) =>
        expect(error).toHaveBeenNthCalledWith(i + 1, 'Invalid name or component')
      );
    });

    it('should not show a modal when the modal name already exists', () => {
      plugin.show('modal-name');
      plugin.show('modal-name');

      const state = store.getState();

      expect(state.static).toHaveLength(1);
      expect(error).toHaveBeenCalledWith(
        'Name modal-name already exists. You must provide an unique one.'
      );
    });

    it('should show a static modal when using a name as a string', () => {
      const res = plugin.show('modal-name');
      const state = store.getState();

      expect(res instanceof Promise).toBeTruthy();
      expect(state.dynamic).toHaveLength(0);
      expect(state.static).toHaveLength(1);
      expect(state.static[0]).toEqual(
        expect.objectContaining({
          props: { name: 'modal-name' },
          resolve: expect.any(Function),
          reject: expect.any(Function),
          hide: expect.any(Function),
          cancel: expect.any(Function),
        })
      );
    });

    it('should show a dynamic modal when using a name as function', () => {
      const res = plugin.show(() => ({}));
      const state = store.getState();

      expect(res instanceof Promise).toBeTruthy();
      expect(Modals).toHaveBeenCalledWith({ target: document.body });
      expect(state.dynamic).toHaveLength(1);
      expect(state.static).toHaveLength(0);
      expect(state.dynamic[0]).toEqual(
        expect.objectContaining({
          component: expect.any(Function),
          componentProps: undefined,
          props: { name: 'modal-0' },
          events: undefined,
          resolve: expect.any(Function),
          reject: expect.any(Function),
          hide: expect.any(Function),
          cancel: expect.any(Function),
        })
      );
    });

    it('should not instantiate modals container when already exists', () => {
      const div = document.createElement('div');
      div.classList.add('js-modals');
      document.body.appendChild(div);

      plugin.show(() => ({}));

      expect(Modals).not.toHaveBeenCalled();
    });

    it('should show a dynamic modal and passing arguments', () => {
      const componentProps = { foo: 'bar' };
      const modalProps = { backgroundColor: '#000', centered: true, name: 'foo' };
      const modalEvents = { closed: jest.fn(), opened: jest.fn() };

      plugin.show(() => {}, componentProps, modalProps, modalEvents);

      const state = store.getState();

      expect(state.dynamic[0]).toEqual(
        expect.objectContaining({
          component: expect.any(Function),
          componentProps,
          props: { ...modalProps, name: 'foo-0' },
          events: modalEvents,
          resolve: expect.any(Function),
          reject: expect.any(Function),
          hide: expect.any(Function),
          cancel: expect.any(Function),
        })
      );
    });
  });

  describe('hide', () => {
    it('should not remove the modal when not matching the name', () => {
      plugin.show('modal-name');

      expect(store.getState().static).toHaveLength(1);

      plugin.hide('wrong-name');

      expect(store.getState().static).toHaveLength(1);
    });

    it('should remove the modal and resolve the promise', () => {
      plugin.show('modal-name');

      expect(store.getState().static).toHaveLength(1);

      const data = { foo: 'bar' };
      const resolve = jest.fn();

      store.set({ static: [{ props: { name: 'modal-name' }, resolve }], dynamic: [] });

      plugin.hide('modal-name', data);

      expect(resolve).toHaveBeenCalledWith(data);
      expect(store.getState().static).toHaveLength(0);
    });
  });

  describe('cancel', () => {
    it('should not remove the modal when not matching the name', () => {
      plugin.show('modal-name');

      expect(store.getState().static).toHaveLength(1);

      plugin.cancel('wrong-name');

      expect(store.getState().static).toHaveLength(1);
    });

    it('should remove the modal and reject the promise', () => {
      plugin.show('modal-name');

      expect(store.getState().static).toHaveLength(1);

      const data = { foo: 'bar' };
      const reject = jest.fn();

      store.set({ static: [{ props: { name: 'modal-name' }, reject }], dynamic: [] });

      plugin.cancel('modal-name', data);

      expect(reject).toHaveBeenCalledWith(data);
      expect(store.getState().static).toHaveLength(0);
    });
  });
});
