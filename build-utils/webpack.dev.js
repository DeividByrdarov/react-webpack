const webpack = require("webpack")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

const port = process.env.PORT || 3000

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  plugins: [
    new webpack.HotModuleReplacementPlugin({}),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
  ],
  module: {
    rules: [
      // Style Loader
      {
        test: /\.module\.(s*)[a|c]ss$/,
        loader: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
              sourceMap: true,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(s*)[a|c]ss$/,
        exclude: /\.module\.(s*)[a|c]ss$/,
        loader: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
    clientLogLevel: "warning",
    host: "localhost",
    port,
    hot: true,
  },
}
