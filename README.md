# vancl

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```






### 在线预览
在线预览地址：  https://ysnjust.github.io/vancl/ (PC端请在浏览器的移动端模式下查看)


### 技术栈
在此项目中使用了以下技术
* vue2.0
* vue-router
* webpack
* mint-ui
* es6



### 使用依赖
 * vue-router
 * webpack
 * mint-ui
 * iconfont



### 目录结构
<pre>
├── README.md           
├── webpack.config.js  		// 项目不同环境的配置
├── index.html         		// 项目入口文件
├── package.json      		// 项目配置文件
├── src               		// 生产目录
│   ├── assets        		// css、js、图片资源
│   │	├── css
│   │	├── img
│   │	└── js
│   │	       ├── router.js		// 路由
│   │	       └──iconfont.js   // 矢量图标
│   ├── components     		// 各种组件
│   │	├── common
│   │	├── content
│   │	├── footer
│   │	└── login
│   ├──App.vue
│   ├──main.js 	    // Webpack 预编译入口
├── data     	  		// json数据文件夹
│   ├──channel.json		    // 频道页面数据
│   ├── classify.json 	    // 分类页面数据
│   ├── home.json			// 主页页面数据		
│   └── new_region.json	    // 新品专区页面数据
│         
└── 

</pre>
