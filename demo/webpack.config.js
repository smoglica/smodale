const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { join, dirname, resolve } = require('path');

const mode = process.env.NODE_ENV || 'development';
const prod = mode === 'production';

module.exports = {
  mode,
  devtool: prod ? false : 'source-map',
  entry: {
    'build/bundle': ['./src/main.js'],
  },
  output: {
    path: join(__dirname, '/public'),
    filename: '[name].js',
    chunkFilename: '[name].[id].js',
  },
  module: {
    rules: [
      {
        test: /\.svelte$/,
        use: {
          loader: 'svelte-loader',
          options: {
            compilerOptions: {
              dev: !prod,
            },
            emitCss: prod,
            hotReload: !prod,
          },
        },
      },
      {
        test: /node_modules\/svelte\/.*\.mjs$/,
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
  devServer: {
    hot: true,
    port: 5000,
    host: '0.0.0.0',
  },
  resolve: {
    alias: {
      '@': join(__dirname, '/src'),
      svelte: dirname(require.resolve('svelte/package.json')),
      smodale: resolve(__dirname, '../dist/index.mjs'),
    },
    extensions: ['.mjs', '.js', '.svelte'],
    mainFields: ['svelte', 'browser', 'module', 'main'],
  },
};
