import { render } from '@testing-library/svelte';
import Modals from 'smodale/components/Modals';

describe('Modals', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(Modals);
  });

  it('should instantiate correctly', () => {
    expect(wrapper.container).toMatchSnapshot();
  });
});
