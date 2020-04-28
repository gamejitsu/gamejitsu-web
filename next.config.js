const path = require('path')
const withCSS = require('@zeit/next-css')
const withSASS = require('@zeit/next-sass')
const webpackMerge = require('webpack-merge')

const defaultEnv = {
  API_ENDPOINT: "https://staging-api.gamejitsu.io",
  SOCKET_ENDPOINT: "wss://staging-api.gamejitsu.io",
  STRIPE_PUBLIC_KEY: "pk_test_gO4hZHVOjk7E3GjH0etoiBAO00c0qpfX0m"
}

module.exports = withCSS(withSASS({
  cssLoaderOptions: { url: false },
  env: {
    API_ENDPOINT: process.env.API_ENDPOINT || defaultEnv.API_ENDPOINT,
    SOCKET_ENDPOINT: process.env.SOCKET_ENDPOINT || defaultEnv.SOCKET_ENDPOINT,
    STRIPE_PUBLIC_KEY: process.env.STRIPE_PUBLIC_KEY || defaultEnv.STRIPE_PUBLIC_KEY
  },
  webpack(config) {
    return webpackMerge(config, {
      resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        alias: {
          gamejitsu: path.resolve(__dirname, 'lib/'),
        }
      }
    })
  }
}))
