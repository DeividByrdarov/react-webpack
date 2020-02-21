const HtmlWebpackPlugin = require("html-webpack-plugin")
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin")
const commonPaths = require("./common-paths")

module.exports = {
  entry: "./src/index.js",
  output: {
    path: commonPaths.outputPath,
    publicPath: "/",
    filename: "bundle.[hash].js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
      favicon: "public/favicon.ico",
    }),
  ],
  module: {
    rules: [
      // Babel Loader
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },

      // Typescript Loader
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },

      // Image Loader
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          "url-loader?limit=10000",
          "img-loader",
        ],
      },

      // Fonts Loader
      {
        test: /\.(woff(2)?|ttf|eot)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "fonts/",
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".json"],
    plugins: [
      new TsconfigPathsPlugin({ configFile: commonPaths.projectRoot }),
    ],
  },
}