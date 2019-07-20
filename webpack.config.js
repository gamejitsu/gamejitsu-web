const PnpWebpackPlugin = require('pnp-webpack-plugin')

module.exports = {
  resolve: {
    plugins: [PnpWebpackPlugin]
  },
  resolveLoader: {
    plugins: [PnpWebpackPlugin.moduleLoader(module)]
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: require.resolve('ts-loader'),
        options: PnpWebpackPlugin.tsLoaderOptions({})
      }
    ]
  }
}
