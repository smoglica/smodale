import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import css from 'rollup-plugin-css-only';
import pkg from './package.json';

const { preprocess } = require('./svelte.config');

const name = pkg.name
  .replace(/^(@\S+\/)?(svelte-)?(\S+)/, '$3')
  .replace(/^\w/, (m) => m.toUpperCase())
  .replace(/-\w/g, (m) => m[1].toUpperCase());

export default {
  input: 'src/index.js',
  output: [
    { file: pkg.module, format: 'es', exports: 'named' },
    {
      file: pkg.main,
      format: 'umd',
      exports: 'named',
      name,
    },
  ],
  plugins: [svelte({ preprocess }), css({ output: 'smodale.css' }), resolve()],
};
