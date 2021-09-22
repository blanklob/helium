// General
const path = require('path')
const sectionsEntries = require('./utils/sections')
const componentsEntries = require('./utils/components')

// Webpack plugins
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const RemoveEmptyScriptsPlugin = require('webpack-remove-empty-scripts')
const MediaQueryPlugin = require('media-query-plugin')
const SizePlugin = require('size-plugin')

// Directories
const rootDir = path.dirname(path.dirname(__dirname))
const configDir = path.dirname(__dirname)

const nodeDir = path.join(rootDir, 'node_modules')
const srcDir = path.join(rootDir, 'src')

const baseDir = path.join(srcDir, 'base')
const sectionsDir = path.join(srcDir, 'sections')
const componentsDir = path.join(srcDir, 'components')

// Common configuration
module.exports = {
  // Entry
  entry: {
    base: [
      path.join(baseDir, 'scripts/base.js'),
      path.join(baseDir, 'styles/base.scss'),
    ],
    ...sectionsEntries(),
    ...componentsEntries(),
  },
  // Output
  output: {
    filename: '[name].js',
    path: path.resolve(rootDir, 'assets'),
    /* Remove this option to integrate it with your existing theme */
    clean: true,
  },
  // Plugins
  plugins: [
    // #1: Remove empty JS files
    new RemoveEmptyScriptsPlugin(),
    // #2: Extract CSS to separate css file
    new MiniCssExtractPlugin({ filename: '[name].css' }),
    // #3: Split CSS using media queries
    new MediaQueryPlugin({
      include: ['base'],
      queries: {
        'screen and (min-width: 1440px)': 'desktop',
        'screen and (min-width: 1200px)': 'desktop',
        'screen and (min-width: 1025px)': 'desktop',
        'screen and (min-width: 800px)': 'desktop',

        'screen and (max-width: 799px)': 'mobile',
        'screen and (max-width: 499px)': 'mobile',
        'screen and (max-width: 319px)': 'mobile',
      },
    }),
    // #4: Prints the gzipped sizes of assets.
    new SizePlugin({
      publish: false,
      writeFile: false,
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
          MediaQueryPlugin.loader,
          // Postcss
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: require(path.join(
                configDir,
                'postcss.config.js'
              )),
            },
          },
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
      minSize: 30000,
      name: 'vendors',
    },
  },
  resolve: {
    alias: {
      base: baseDir,
      sections: sectionsDir,
      components: componentsDir,
      nodeModules: nodeDir,
    },
  },
  stats: {
    preset: 'errors-warnings',
    version: false,
  },
}
