module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  plugins: ['svelte3'],
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  overrides: [
    {
      files: ['*.svelte'],
      processor: 'svelte3/svelte3',
      rules: {
        'import/no-mutable-exports': 'off',
        'import/prefer-default-export': 'off',
        'import/first': 'off',
      },
    },
  ],
  rules: {
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  },
};
