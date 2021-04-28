import context, { getModalContext } from 'smodale/context';
import svelte from 'svelte';

jest.mock('svelte', () => ({
  getContext: jest.fn(),
}));

describe('context', () => {
  it('should return the context', () => {
    expect(typeof context).toBe('object');
    expect(typeof context.hide).toBe('function');
    expect(typeof context.cancel).toBe('function');
    expect(context.component).toBe(null);
    expect(context.hide()).toEqual({});
    expect(context.cancel()).toEqual({});
  });

  describe('getModalContext', () => {
    it('should get context from svelte', () => {
      getModalContext();

      const args = svelte.getContext.mock.calls[0][0];

      expect(svelte.getContext).toHaveBeenCalled();
      expect(typeof args.hide).toBe('function');
      expect(typeof args.cancel).toBe('function');
      expect(args.component).toBe(null);
      expect(args.hide()).toEqual({});
      expect(args.cancel()).toEqual({});
    });
  });
});
