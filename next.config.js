/* eslint-env node */
const webpackConfig = require('./webpack.config')
const update = require('immutability-helper')

module.exports = {
  webpack(config) {
    return update(config, { resolve: { alias: { $merge: webpackConfig.resolve.alias } } })
  }
}
