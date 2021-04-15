import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import image from '@rollup/plugin-image';
import alias from '@rollup/plugin-alias';
import json from '@rollup/plugin-json';
import css from 'rollup-plugin-css-only';
import license from 'rollup-plugin-license';
import browsersync from 'rollup-plugin-browsersync';
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';

const { settings } = require('./.eslintrc');
const { preprocess } = require('./svelte.config');

const { extensions, map: aliases } = settings['import/resolver'].alias;

export default (argv) => {
  const watch = process.env.ROLLUP_WATCH || argv.watch;
  const demo = process.env.demo || false;
  const name = pkg.name
    .replace(/^(@\S+\/)?(svelte-)?(\S+)/, '$3')
    .replace(/^\w/, (m) => m.toUpperCase())
    .replace(/-\w/g, (m) => m[1].toUpperCase());

  return watch || demo
    ? {
        input: 'demo/main',
        output: {
          sourcemap: true,
          format: 'iife',
          name: 'app',
          file: 'public/bundle.js',
        },
        plugins: [
          svelte({ preprocess, compilerOptions: { dev: !demo } }),
          css({ output: 'bundle.css' }),
          resolve({
            browser: true,
            dedupe: ['svelte'],
            extensions,
          }),
          image(),
          json(),
          alias({
            entries: aliases.map(([find, replacement]) => ({ find, replacement })),
          }),
          demo && terser(),
          !demo &&
            browsersync({
              server: 'public',
              port: 5000,
              open: false,
              files: ['public/index.html'],
            }),
        ].filter(Boolean),
      }
    : {
        input: 'src',
        output: [
          { file: pkg.module, format: 'es', exports: 'named' },
          {
            file: pkg.main,
            format: 'umd',
            name,
            exports: 'named',
          },
        ],
        plugins: [
          svelte({ preprocess }),
          css({ output: 'smodale.min.css' }),
          resolve(),
          license({
            banner: {
              commentStyle: 'ignored',
              content: `
              @package <%= pkg.name %>
              @author  <%= pkg.author.name %> <<%= pkg.author.email %>>
              @version <%= pkg.version %>
              @build   <%= moment().format('LLLL') %>
          `,
            },
          }),
        ],
      };
};
