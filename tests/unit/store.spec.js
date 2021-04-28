import store from 'smodale/store';

describe('store', () => {
  it('should be a valid store contract', () => {
    expect(typeof store.set).toBe('function');
    expect(typeof store.subscribe).toBe('function');
    expect(typeof store.update).toBe('function');

    const unsubscribe = store.subscribe(() => {});

    expect(typeof unsubscribe).toBe('function');

    unsubscribe();
  });

  describe('getState', () => {
    it('should return current store state', () => {
      expect(store.getState()).toEqual({ static: [], dynamic: [] });
    });
  });
});
