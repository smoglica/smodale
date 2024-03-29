const { join } = require('path');

module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  plugins: ['svelte3'],
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  globals: {
    Util: true,
  },
  overrides: [
    {
      files: ['*'],
      excludedFiles: ['*.svelte'],
      extends: ['plugin:prettier/recommended'],
    },
    {
      files: ['*.svelte'],
      processor: 'svelte3/svelte3',
      rules: {
        'import/no-mutable-exports': 'off',
        'import/prefer-default-export': 'off',
        'import/first': 'off',
        'implicit-arrow-linebreak': 'off',
        'no-useless-escape': 'off',
      },
    },
  ],
  rules: {
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  },
  settings: {
    'svelte3/ignore-styles': ({ lang }) => lang === 'scss',
    'import/resolver': {
      alias: {
        extensions: ['.svelte', '.js'],
        map: [
          ['smodale', join(__dirname, 'src')],
          ['Demo', join(__dirname, 'demo')],
          ['@@', __dirname],
        ],
      },
    },
  },
};
