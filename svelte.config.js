/* eslint-disable import/no-extraneous-dependencies */
const preprocess = require('svelte-preprocess');
const autoprefixer = require('autoprefixer');

/**
 * Usage Svelte with VS Code
 *
 * @see {@link https://marketplace.visualstudio.com/items?itemName=JamesBirtles.svelte-vscode|Svelte for VS Code}
 * @see {@link https://github.com/sveltejs/svelte-preprocess#with-svelte-vs-code|With Svelte VS Code}
 */
module.exports = {
  preprocess: preprocess({
    postcss: {
      plugins: [autoprefixer],
    },
    scss: {
      prependData: `
        @import 'codyhouse-framework/main/assets/css/base/mixins';
        @import 'codyhouse-framework/main/assets/css/base/breakpoints';
      `,
    },
  }),
};
