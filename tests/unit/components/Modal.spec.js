import { render } from '@testing-library/svelte';
import Modal, { toggleClass, toInlineCss } from 'smodale/components/Modal';

describe('Modal', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(Modal);
  });

  it('should instantiate correctly', async () => {
    expect(wrapper.container).toMatchSnapshot();
  });

  describe('toggleClass', () => {
    it('should toggle an element class correctly', () => {
      const elm = { classList: { add: jest.fn(), remove: jest.fn() } };

      toggleClass(elm, 'hidden', true);
      expect(elm.classList.add).toHaveBeenCalledWith('hidden');

      toggleClass(elm, 'hidden', false);
      expect(elm.classList.remove).toHaveBeenCalledWith('hidden');
    });
  });

  describe('toInlineCss', () => {
    it('should update valid element styles', () => {
      const elm = { style: { backgroundColor: '', zIndex: '' } };

      toInlineCss(elm, { backgroundColor: '#FFF', zIndex: 100, foo: 'bar' });

      expect(elm.style.foo).toBe(undefined);
      expect(elm.style).toEqual(
        expect.objectContaining({
          backgroundColor: '#FFF',
          zIndex: 100,
        })
      );
    });
  });
});
