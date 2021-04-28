import { error } from 'smodale/logger';

describe('logger', () => {
  describe('error', () => {
    let spy;

    beforeEach(() => {
      spy = jest.spyOn(console, 'error').mockImplementation();
    });

    it('should do nothing when no message provided', () => {
      error();

      expect(spy).not.toHaveBeenCalled();
    });

    it('should log an error message when message provided', () => {
      error('An error message');

      expect(spy).toHaveBeenCalledWith('[smodale] An error message');
    });
  });
});
