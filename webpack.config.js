// General libs
const path = require('path')

// Webpack plugins
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyPlugin = require('copy-webpack-plugin')

// Directories
const srcDir = path.join(__dirname, 'src')
const stylesDir = path.join(srcDir, 'styles')
const scriptsDir = path.join(srcDir, 'app')
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
      path.join(stylesDir, 'layouts/_layouts.theme.scss'),
    ],
    password: [
      path.join(scriptsDir, 'password.js'),
      path.join(stylesDir, 'layouts/_layouts.password.scss'),
    ],
    giftcard: [
      path.join(scriptsDir, 'giftcard.js'),
      path.join(stylesDir, 'layouts/_layouts.giftcard.scss'),
    ],
  },
  // Output
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'assets'),
    clean: true,
  },
  // Plugins
  plugins: [
    // #1: Extract CSS from JS to separate css file
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
  // Webpack Loaders
  module: {
    rules: [
      // #1: Bundling JavaScript
      {
        test: /\.m?js$/,
        exclude: nodeDir,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      // #2: Bundling SCSS
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
  // Extracting vendor code into a seperate file for caching.
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
