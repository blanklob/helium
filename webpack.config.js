// General libs
const path = require('path')

// Webpack plugins
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyPlugin = require('copy-webpack-plugin')

// Directories
const srcDir = path.join(__dirname, 'src')
const stylesDir = path.join(srcDir, 'styles')
const scriptsDir = path.join(srcDir, 'scripts')
const distDir = path.join(__dirname, 'dist')
const nodeDir = path.join(__dirname, 'node_modules')

// Environment
const DEV_ENV = 'production'

module.exports = {
  // Mode
  mode: DEV_ENV,
  // Entry
  entry: {
    theme: [
      path.join(scriptsDir, 'theme.js'),
      path.join(stylesDir, 'theme.scss'),
    ],
  },
  // Output
  output: {
    filename: '[name].js',
    path: path.resolve(distDir, 'assets'),
  },
  // Plugins
  plugins: [
    // #1: Extract CSS from JS to separate css file
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    // #2: Copy files from one dir to another
    new CopyPlugin({
      patterns: [
        { from: path.join(srcDir, 'templates'), to: path.resolve(distDir, 'templates')},
        { from: path.join(srcDir, 'sections'), to: path.resolve(distDir, 'sections')},
        { from: path.join(srcDir, 'snippets'), to: path.resolve(distDir, 'snippets')},
        { from: path.join(srcDir, 'locales'), to: path.resolve(distDir, 'locales')},
        { from: path.join(srcDir, 'layout'), to: path.resolve(distDir, 'layout')},
        { from: path.join(srcDir, 'config'), to: path.resolve(distDir, 'config')},
      ],
    }),
  ],
  // Webpack Loaders
  module: {
    rules: [
      // #1: Bundling Javascript
      {
        test: /\.m?js$/,
        exclude: nodeDir,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  useBuiltIns: 'usage',
                  corejs: 3,
                },
              ],
            ],
          },
        },
      },
      // #2: Bundling CSS
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          // Creates `style` nodes from JS strings
          MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          'css-loader',
          // Postcss
          'postcss-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: 'vendors',
    },
  },
  resolve: {
    alias: {
      App: scriptsDir,
      Styles: stylesDir,
      NodeModules: nodeDir,
    },
  },
}
