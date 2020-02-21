const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
  mode: "production",
  devtool: "source-map",
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[hash].css",
      chunkFilename: "[id].[hash].css",
    }),
  ],
  module: {
    rules: [
      // Style Loader
      {
        test: /\.module\.(s*)[a|c]ss$/,
        loader: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: true,
              sourceMap: false,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: false,
            },
          },
        ],
      },
      {
        test: /\.(s*)[a|c]ss$/,
        exclude: /\.module\.(s*)[a|c]ss$/,
        loader: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              sourceMap: false,
            },
          },
        ],
      },
    ],
  },
}
