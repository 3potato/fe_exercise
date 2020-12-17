### babel 学习

```markdown

Babel参考
https://www.jianshu.com/p/e4eb352b4a16
https://segmentfault.com/a/1190000016231512
https://www.jianshu.com/p/947dcde62667
https://www.jianshu.com/p/ee902bad4ca6
https://www.jianshu.com/p/e9b94b2d52e2
https://www.jianshu.com/p/e9b94b2d52e2?utm_campaign=maleskine&utm_content=note&utm_medium=seo_notes&utm_source=recommendation
https://zhuanlan.zhihu.com/p/27289600  ***
https://segmentfault.com/a/1190000008390268 




在babel 6中，将babel拆分成两个包：babel-cli和babel-core

Babel提供babel-cli工具，用于命令行转码。

如果某些代码需要调用Babel的API进行转码，就要使用babel-core模块

Babel默认只转换新的JavaScript句法（syntax），而不转换新的API，比如Iterator、Generator、Set、Maps、Proxy、Reflect、Symbol、Promise等全局对象，以及一些定义在全局对象上的方法（比如Object.assign）都不会转码。

Babel默认不转码的API非常多，详细清单可以查看babel-plugin-transform-runtime模块的definitions.js文件。

因为这是一个 polyfill （它需要在你的源代码之前运行），我们需要让它成为一个 dependency, 而不是一个 devDependency.

Babel 包含一个可自定义 regenerator runtime 和 core-js 的 polyfill .

先说说babel-polyfill，它的做法比较暴力，就是将全局对象通通污染一遍，这样做的坏处有几点：
1. 可能会增加很多根本没有用到的polyfill；
2. 可能会污染子模块的局部作用域，严重的或许会导致冲突；

接着，再来说说babel-runtime，相对而言，它的处理方式比较温柔，套用步步高的广告词就是哪里需要加哪里，比如说你需要Promise，你只需要import Promise from 'babel-runtime/core-js/promise'即可，这样不仅避免污染全局对象，而且可以减少不必要的代码。

编译插件
Babel的配置文件是.babelrc

presets字段设定转码规则






```