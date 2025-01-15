const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
module.exports = {
  output: {
    filename: "[name].[contenthash].js",
    path: path.join(__dirname, "./dist"),
  },
  resolve: {
    // 使引用模块时可以不带扩展名
    extensions: [".vue", ".js"],
  },
  module: {
    rules: [{ test: /.vue$/, use: "vue-loader" }],
  },
  plugins:[new VueLoaderPlugin()]
};
