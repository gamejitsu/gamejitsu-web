/* eslint-env node */
const webpackConfig = require('./webpack.config')
const webpackMerge = require('webpack-merge')

module.exports = {
  env: {
    API_ENDPOINT: process.env.API_ENDPOINT
  },
  webpack(config) {
    return webpackMerge(config, webpackConfig)
  }
}
