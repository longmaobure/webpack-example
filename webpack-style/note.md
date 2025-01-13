- css-loader：该 Loader 会将 CSS 等价翻译为形如 module.exports = "${css}" 的JavaScript 代码，使得 Webpack 能够如同处理 JS 代码一样解析 CSS 内容与资源依赖；
- style-loader：该 Loader 将在产物中注入一系列 runtime 代码，这些代码会将 CSS 内容注入到页面的 `<style>` 标签，使得样式生效；
- mini-css-extract-plugin：该插件会将 CSS 代码抽离到单独的 .css 文件，并将文件通过 `<link>` 标签方式插入到页面中。

- postcss + postcss-loader: 它的主要作用是通过插件生态系统实现 CSS 的各种功能扩展和优化。PostCSS 本身只是一个工具框架，其功能完全依赖于所使用的插件。
  - autoprefixer: 自动添加浏览器前缀插件

- sass + sass-loader: 将 scss/sass 代码编译为 css