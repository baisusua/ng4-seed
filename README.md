#Angular4单页面应用实例

> [Angular4 文档地址](https://angular.io/docs)

> [Webpack2 文档地址](http://webpack.github.io/)

> 项目基于 [angular2-webpack-starter](https://github.com/AngularClass/angular2-webpack-starter) 进行构建，更多细节和构建方案请参考 [angular2-webpack-starter](https://github.com/AngularClass/angular2-webpack-starter) 项目

>默认使用AOT模式

>推荐使用 [ngrx](https://github.com/ngrx/platform) 来管理应用状态

>建议搭配 [ng4-tool](https://www.npmjs.com/package/ng4-tool) 使用

>angular2 [填充库](https://angular.cn/docs/ts/latest/guide/browser-support.html) 配置文件：`src/polyfill.browser.ts`

>暂时只支持单元测试模式~

>项目构建相关文件统一放在 `task` 目录下

开发模式

* 使用dll插件提升构建速度
* 默认开启热加载模式
* 使用 `npm run start` 命令进入开发模式

生产模式

* 默认使用hash路由风格
* 使用Webpack编译文件
* 使用Gulp发布文件
* 通过push触发部署脚本自动部署

## 目录结构
```
angular4-seed/
 │──task/                          * 项目构建任务
 │   │config.json                * 项目构建配置
 │   ├── ~/                        * 其它文件
 │
 │──src/                             * 项目代码
 │   ├──main.browser.ts                      * 开发入口
 │   │
 │   ├──main.browser.aot.ts                * 生产入口
 │   │
 │   ├──index.html                               * html模板
 │   │
 │   ├──styles/                      * 全局样式
 │   │   ├── ~/                      * 样式文件
 │   │
 │   │──assets/                     * 静态资源
 │   │   ├── ~/                      * 字体、icon、img等
 │   │
 │   ├──app/                         * 业务代码
 │   │   ├──app.module.ts                    * 项目入口模块
 │   │   ├──app.routes.ts                      * 根路由（路由需要依赖组件，故暂时与模块文件放在一起）
 │   │   ├──app.ngrx.ts                         * ngrx相关部分
 │   │   ├──app.providers.ts                 * service相关部分
 │   │   ├──environment.ts                   * 环境配置
 │   │   ├──common/                           * 项目公共部分
 │   │   └──pages/                 				  * 项目页面
 │   │
 │   ├──assets/                    * 资源目录
 │   │   ├──css/                   * 样式资源（webpac处理） 
 │   │   ├──images/                * 图片资源（webpack处理）
 │   │   └──static/                * 静态资源（无需webpack处理）
 │
 ├──gulpfile.js                    * gulp任务入口
 └──webpack.config.js              * webpack开发模式入口

```
## 开发
* `npm install`
* `npm run start`（默认读取`task/config.json`中dev的api配置）
* `http://localhost:3000`

## 发布
* 在 `task/config.json` 中配置环境A
* 在 `gulpfile.js` 中添加任务A（参考product任务）
*  `gulp A`
* CDN资源地址为: `config.A.url+config.v`
* CDN暂时只支持七牛云
* 将打包好的index.html上传到发布仓库和对应分支，触发部署脚本自动部署发布

## 路由风格切换
* 暂不支持路由风格切换

## task/config.json配置模板
* 参考 `task/config.template.json` 文件

