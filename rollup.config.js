import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import image from '@rollup/plugin-image';
import css from 'rollup-plugin-css-only';
import license from 'rollup-plugin-license';
import browsersync from 'rollup-plugin-browsersync';
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';

const { preprocess } = require('./svelte.config');

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
        resolve({ browser: true, dedupe: ['svelte'] }),
        image(),
        demo && terser(),
        !demo
            && browsersync({
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
