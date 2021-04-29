// eslint-disable-next-line import/no-extraneous-dependencies
const { defaults } = require('jest-config');

module.exports = {
  clearMocks: true,
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.svelte$': ['svelte-jester', { preprocess: true }],
  },
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'svelte'],
  moduleNameMapper: {
    '^smodale/(.*)$': '<rootDir>/src/$1',
  },
};
