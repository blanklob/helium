// General
const path = require('path')

// Webpack plugins
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const RemoveEmptyScriptsPlugin = require('webpack-remove-empty-scripts')
const MediaQueryPlugin = require('media-query-plugin')
const SizePlugin = require('size-plugin')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

// Directories
const rootDir = path.dirname(__dirname)
const nodeDir = path.join(rootDir, 'node_modules')
const srcDir = path.join(rootDir, 'src')
const stylesDir = path.join(srcDir, 'styles')
const scriptsDir = path.join(srcDir, 'app')
const entries = new Object()

// Add sections ass you wish (must be the same name as file)
const sections = ['index']

// Creating entries
sections.map((sectionName) => {
  let sectionPath = path.join(
    stylesDir,
    `sections/_sections.${sectionName}.scss`
  )
  let entryName = `section-${sectionName}`
  entries[entryName] = sectionPath
})

// Common configuration
module.exports = {
  // Entry
  entry: {
    base: [path.join(scriptsDir, 'base.ts'), path.join(stylesDir, 'base.scss')],
    ...entries,
  },
  // Output
  output: {
    filename: '[name].js',
    path: path.resolve(rootDir, 'assets'),
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
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: require(path.join(
                __dirname,
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
      App: scriptsDir,
      Styles: stylesDir,
      NodeModules: nodeDir,
    },
    extensions: ['.ts', '.js'],
    plugins: [
      new TsconfigPathsPlugin({
        configFile: path.join(rootDir, 'tsconfig.json'),
      }),
    ],
  },
  stats: {
    preset: 'errors-warnings',
    version: false,
  },
}
