PWA 即渐进式web 应用, 原理定义很复杂, 简单理解为**一系列将网页如同独立 APP 般安装到本地的技术集合** ; 借此, 我们既可以保留普通网页轻量级、可链接(SEO 友好)、低门槛(只要有浏览器就能访问) 等优秀特点, 又同时具备独立 APP 离线运行、可安装等优势

在实现上与普通web 应用的开发方法大致相同, 主要区别在于, PWA 需要用一些新技术实现离线与安装功能

- <a href="https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API">ServiceWorker</a> : 可以理解为一种介于网页与服务器之间的本地代理, 主要实现 PWA 应用的离线运行功能. 例如 `ServiceWorker` **可以将页面静态资源缓存到本地, 用户再次运行页面方位这些资源时, `ServiceWorker`可拦截这些请求, 并返回缓存副本**, 即使此刻用户处于离线状态也能正常使用页面;

- `manifest`文件: 描述 pwa 应用信息的 json 格式文件, 用于实现本地安装功能, 通常包括应用名、图标、URL 等内容， 例如：
```json
// manifest.json
{
  "icons": [
    {
      "src": "/icon_120x120.0ce9b3dd087d6df6e196cacebf79eccf.png",
      "sizes": "120x120",
      "type": "image/png"
    }
  ],
  "name": "My Progressive Web App",
  "short_name": "MyPWA",
  "display": "standalone",
  "start_url": ".",
  "description": "My awesome Progressive Web App!"
}
```

- `workbox-webpack-plugin`: 用于自动生成`ServiceWorker`代码的webpack 插件
- <a href="https://github.com/arthurbergmz/webpack-pwa-manifest#readme">`webpack-pwa-manifest` </a>: 根据 webpack 编译结果, 自动生成 PWA Manifest文件的 webpack 插件
