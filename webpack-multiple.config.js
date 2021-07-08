const path = require("path");
const glob = require('glob');
const webpack = require("webpack");

module.exports = function(_env, argv) {
  const isProduction = "production";

  let components = glob.sync(`./src/**/index.js`);
  let entries = {};

  components.forEach(componentPath => {
    let componentPathArr = componentPath.split("/");
    let componentName = componentPathArr[componentPathArr.length-2];
    entries[componentName] = componentPath;
  })

  return {
    entry: entries,
    output: {
      path: path.resolve(__dirname, "dist/components"),
      filename: '[name].js',
      publicPath: "/"
    },
    optimization:{
      minimize: false, // <---- disables uglify.
    },
    module: {
      rules: [
        {
          test: /\.(jsx|js)?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [["@babel/preset-env", {
                "targets": {
                  "esmodules": true
                }
              }], ["@babel/preset-react"]]
            }
          }

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