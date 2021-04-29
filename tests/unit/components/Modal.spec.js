import { render } from '@testing-library/svelte';
import Modal, { toggleClass } from 'smodale/components/Modal';

describe('Modal', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(Modal);
  });

  it('should instantiate correctly', async () => {
    expect(wrapper.container).toMatchSnapshot();
  });

  describe('toggleClass', () => {
    const elm = { classList: { add: jest.fn(), remove: jest.fn() } };

    toggleClass(elm, 'hidden', true);
    expect(elm.classList.add).toHaveBeenCalledWith('hidden');

    toggleClass(elm, 'hidden', false);
    expect(elm.classList.remove).toHaveBeenCalledWith('hidden');
  });
});
