const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  entry: { index: "./index.ts" },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    library: {
      name: "BattisJsxApiComponents",
      type: "umd",
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: "ts-loader",
          options: { configFile: "tsconfig.dist.json" },
        },
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    fallback: {
      path: require.resolve("path-browserify"),
    },
  },
  plugins: [new CleanWebpackPlugin()],
  devtool: "inline-source-map",
  externals: [
    "@battis/jsx-api",
    "@battis/jsx-components",
    "@battis/jsx-factory",
    "@battis/typescript-tricks",
    "path-browserify",
    "vanilla-router",
  ],
};
