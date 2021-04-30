import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import image from '@rollup/plugin-image';
import alias from '@rollup/plugin-alias';
import json from '@rollup/plugin-json';
import { babel } from '@rollup/plugin-babel';
import css from 'rollup-plugin-css-only';
import license from 'rollup-plugin-license';
import browsersync from 'rollup-plugin-browsersync';
import { terser } from 'rollup-plugin-terser';
import replace from '@rollup/plugin-replace';
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
  const watchOrDemo = watch || demo;
  const commonPlugins = [
    image(),
    json(),
    svelte({ preprocess, compilerOptions: { dev: !demo } }),
    resolve({
      browser: true,
      dedupe: ['svelte'],
      extensions,
    }),
    alias({
      entries: aliases.map(([find, replacement]) => ({ find, replacement })),
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify(watch ? 'development' : 'production'),
      preventAssignment: true,
    }),
  ];

  return watchOrDemo
    ? [
        watchOrDemo && {
          input: 'demo/main',
          output: {
            format: 'es',
            file: 'public/dist/main.esm.js',
            sourcemap: true,
            exports: 'named',
          },
          plugins: [
            ...commonPlugins,
            css({ output: 'main.css' }),
            !demo &&
              browsersync({
                server: {
                  baseDir: 'public',
                  routes: {
                    '/demo': 'demo',
                  },
                },
                port: 5000,
                open: false,
                files: ['public/index.html'],
              }),
            demo && terser(),
          ].filter(Boolean),
        },
        demo && {
          input: 'demo/main',
          output: {
            sourcemap: true,
            format: 'iife',
            name: 'app',
            file: 'public/dist/main.js',
          },
          plugins: [
            ...commonPlugins,
            commonjs(),
            css({ output: false }),
            babel({
              extensions: ['.js', '.svelte'],
              presets: [['@babel/preset-env', { useBuiltIns: 'usage', corejs: 3 }]],
              babelHelpers: 'runtime',
              exclude: [/core-js/],
              plugins: ['@babel/plugin-transform-runtime'],
            }),
            terser(),
          ],
        },
      ].filter(Boolean)
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
