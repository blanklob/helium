// General
const path = require('path')

// Webpack plugins
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const RemoveEmptyScriptsPlugin = require('webpack-remove-empty-scripts')
const MediaQueryPlugin = require('media-query-plugin')

// Directories
const srcDir = path.join(__dirname, 'src')
const stylesDir = path.join(srcDir, 'styles')
const scriptsDir = path.join(srcDir, 'app')
const nodeDir = path.join(__dirname, 'node_modules')
const entries = new Object()

// Add sections ass you wish (must be the same name as file)
const sections = [
  'index',
]

// Creating entries
sections.map(sectionName => {
  let sectionPath = path.join(stylesDir, `sections/_sections.${sectionName}.scss`)
  let entryName = `section-${sectionName}`
  entries[entryName] = sectionPath
})

// Common configuration
module.exports = {
  // Entry
  entry: {
    base: [
      path.join(scriptsDir, 'base.ts'),
      path.join(stylesDir, 'base.scss')
    ],
    ...entries
  },
  // Output
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'assets'),
    clean: true,
  },
  // Plugins
  plugins: [
    // #1: Remove empty JS files
    new RemoveEmptyScriptsPlugin(),
    // #2: Extract CSS to separate css file
    new MiniCssExtractPlugin({filename: '[name].css'}),
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
      }
  })
  ],
  // Webpack Loaders
  module: {
    rules: [
      // #1: Bundling JavaScript
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: nodeDir,
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
      minSize: 30000,
      name: 'vendors',
    },
  },
  resolve: {
    alias: {
      App: scriptsDir,
      Styles: stylesDir,
      NodeModules: nodeDir,
    },
    extensions: ['.ts', '.js']
  },
}
