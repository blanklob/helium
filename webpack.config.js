// General libs
const path = require('path')

// Webpack plugins
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyPlugin = require('copy-webpack-plugin')

// Directories
const viewsDir = path.join(__dirname, 'views')
const stylesDir = path.join(__dirname, 'styles')
const scriptsDir = path.join(__dirname, 'scripts')
const settingsDir = path.join(__dirname, 'settings')
const distDir = path.join(__dirname, 'dist')
const nodeDir = path.join(__dirname, 'node_modules')

// Env variables
const DEV_ENV = process.env.NODE_ENV || 'production'

module.exports = {
  // Mode
  mode: DEV_ENV,
  // Entry
  entry: {
    theme: [
      path.join(scriptsDir, 'index.js'),
      path.join(stylesDir, 'index.scss'),
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
        { from: settingsDir, to: distDir },
        { from: viewsDir, to: distDir },
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
