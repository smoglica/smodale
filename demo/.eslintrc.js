module.exports = {
  settings: {
    'import/resolver': {
      node: {},
      webpack: {
        config: 'webpack.config.js',
      },
    },
  },
  rules: {
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
        svelte: 'never',
        mjs: 'never',
      },
    ],
  },
};
