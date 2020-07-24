
###  Webpack 的配置参数
Entry：配置模块入口
Output：配置如何输出最终想要的代码
Module：配置处理模块的规则
Resolve：配置寻找模块的规则
Plugins：配置扩展插件
DevServer：配置DevServer，就是起一个服务
其他配置项：其他零散的配置项
整体配置结构：整体的描述各配置项的结构
多种配置类型：配置文件不不止可以返回一个 Object，还可以返回其他格式
配置总结：寻找配置Webpack 的规则，减少思维负担


```text

JS模块化
commonJS AMD UMD  ESmodule

CSS模块化
OOCSS  BEM

Webpack
Bundle  
code split 
loader

V1     打包 代码分割 loader HMR热更新
V2     tree shaking      ESmodule    动态import    新的文档
V3     作用域提升  magic comment (配合动态import)

核心概念
Entry
代码入口
打包入口
单个或多个
对象  可以用于chunk

output
打包成的文件bundle
一个或多个
自定义规则
配合CDN

loaders
处理文件
转化为模块

编译相关
Babel-loader  ts-loader
样式相关
Style-loader  css-loader  less-loader	postcss-loader
文件相关
file-loader URL-loader

Plugins
参与打包整个过程
打包优化和压缩
配置编译时的变量
极其灵活

优化相关
Commonschunkplugin
Uglifyjs webpack plugin

功能相关
ExtractTextWebpackPlugin
HTMLWebpackPlugin
HotModuleReplacementPlugin
CopyWebpackPlugin

名词
chunk  代码块
bundle  
Module

JS打包
浏览器不解析模块化语法
Webpack打包后浏览器可执行

提取公共代码

减少冗余
提高加载速度

CommonsChunkPlugin

代码分割 懒加载
方法
webpack method
ES6

场景
分离业务代码和第三方依赖
分离业务代码和业务公共代码和第三方依赖
分离首次加载和访问后加载的代码

CSS 
引入
module
配置
提取CSS代码

style-loader   创建标签 引入HTML中
css-loader      js中引入css

PostCSS

Treeshaking

常规优化
引入第三方库的某一个功能

文件处理

图片
字体文件
第三方库

图片处理
 	CSS 图片    file-loader
 	合成雪碧图 postcss-sprites
 	压缩图片    img-loader
 	base64（较小的图片）    url-loader


```