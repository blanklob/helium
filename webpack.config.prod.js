const { merge } = require('webpack-merge')
const PurgecssPlugin = require('purgecss-webpack-plugin')
const glob = require('glob')
const common = require('./webpack.config.js')

module.exports = merge(common, {
  mode: 'production',
  // plugins: [
  //   // #2: Remove unused CSS classes from production build.
  //   new PurgecssPlugin({
  //     paths: glob.sync(`./**/*.liquid`, { nodir: true }),
  //   }),
  // ],
})
