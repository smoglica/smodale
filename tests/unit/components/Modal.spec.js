import { render } from '@testing-library/svelte';
import Modal from 'smodale/components/Modal';

describe('Modal', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(Modal);
  });

  it('should instantiate correctly', async () => {
    expect(wrapper.container).toMatchSnapshot();
  });
});
