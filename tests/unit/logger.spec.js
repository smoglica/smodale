import { error } from 'smodale/logger';

describe('logger', () => {
  describe('error', () => {
    it('should do nothing when no message provided', () => {
      error();
    });
  });
});
