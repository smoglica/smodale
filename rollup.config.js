import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import css from 'rollup-plugin-css-only';
import license from 'rollup-plugin-license';
import pkg from './package.json';

const { preprocess } = require('./svelte.config');

const dev = process.env.ROLLUP_WATCH;
const name = pkg.name
  .replace(/^(@\S+\/)?(svelte-)?(\S+)/, '$3')
  .replace(/^\w/, (m) => m.toUpperCase())
  .replace(/-\w/g, (m) => m[1].toUpperCase());

const config = dev
  ? {
    input: 'demo/main.js',
    output: {
      sourcemap: true,
      format: 'iife',
      name: 'app',
      file: 'public/bundle.js',
    },
    plugins: [
      svelte({ preprocess, compilerOptions: { dev } }),
      css({ output: 'public/bundle.css' }),
      resolve({
        browser: true,
        dedupe: ['svelte'],
      }),
    ],
  }
  : {
    input: 'src/index.js',
    output: [
      { file: pkg.module, format: 'es' },
      { file: pkg.main, format: 'umd', name },
    ],
    plugins: [
      svelte({ preprocess }),
      css({ output: 'smodale.min.css' }),
      resolve(),
      license({
        banner: {
          commentStyle: 'ignored',
          content: `
          @package    <%= pkg.name %>
          @author     <%= pkg.author.name %> <<%= pkg.author.email %>>
          @version    <%= pkg.version %>
          @build      <%= moment().format('LLLL') %>
        `,
        },
      }),
    ],
  };

export default config;
