

1. 利用浏览器自带的moduel import功能，来实现文件的加载
2. 支持import vue
  原理就是 从node_module里面获取
  1. import xx from 'vue' 改造一下 变成 import xx from '/@modules/vue'
  2. koa拦截@module开头的请求，去node_module找
3. 支持.vue单文件组件
  只有js和template
  解析.vue文件，把script拿出来




4. 支持css ，我们可以看下vite怎么支持ts的，怎么热更新灯


描述项目
1. 数据量变大
2. 网络不稳定，或者对体验要求i高

1. 文件上传这个小项目
  1. axios.post
  2. 进度条
  3. 断点
  时间切片算md5
  web-workd
  切片hash
  异步并发控制
  慢启动
