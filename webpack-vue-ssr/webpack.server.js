const Merge = require("webpack-merge");
const path = require("path");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");
const common = require("./webpack.common");
// 服务端资源配置
module.exports = Merge.merge(common, {
  target: "node",
  entry: {
    server: path.join(__dirname, "src/entry-server.js"),
  },
  output: {
    library: {
      // 打包后的产物会在 node 环境使用,
      // 所以此处将模块化语句转换成 commonjs 形式
      type: "commonjs2",
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "vue-style-loader",
          {
            loader: "css-loader",
            options: {
              esModule: false,
            },
          },
        ],
      },
    ],
  },
  plugins: [new WebpackManifestPlugin({ fileName: "manifest-server.json" })],
});
