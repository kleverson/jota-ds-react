const path = require("path");
const webpack = require("webpack");

module.exports = function(_env, argv) {
  const isProduction = "production";

  return {
    entry: "./index.js",
    experiments: {
      outputModule: true
    },
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "[name].[contenthash:8].js",
      publicPath: "/",
      library: {
        type: 'module'
      },
      filename: 'jotaReact.js',
    },
    optimization:{
      minimize: false, // <---- disables uglify.
    },
    module: {
      rules: [
        {
          test: /\.(jsx|js)?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        }
      ]
    },
    resolve: {
      extensions: [".js", ".jsx"]
    },
    plugins: [
      new webpack.DefinePlugin({
        "process.env.NODE_ENV": JSON.stringify(
          isProduction ? "production" : "development"
        )
      })
    ]
  };
};