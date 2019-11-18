/* eslint-env node */
const withCSS = require('@zeit/next-css')
const webpackConfig = require('./webpack.config')
const webpackMerge = require('webpack-merge')
const defaultEnv = {
  API_ENDPOINT: "https://staging-api.gamejitsu.io",
  SOCKET_ENDPOINT: "wss://staging-api.gamejitsu.io"
}
module.exports = withCSS({
  cssLoaderOptions: {
    url: false
  },
  env: {
    API_ENDPOINT: process.env.API_ENDPOINT || defaultEnv.API_ENDPOINT,
    SOCKET_ENDPOINT: process.env.SOCKET_ENDPOINT || defaultEnv.SOCKET_ENDPOINT
  },
  webpack(config) {
    return webpackMerge(config, webpackConfig)
  }
})
