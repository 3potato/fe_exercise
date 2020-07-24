1. NPM
    1. 源码分发
    2. 二进制
        1. pre-built binaries
        2. node-gyp(依赖Python)
    3. 与node绑定在一起
    4. 前后端代码共享
    5. Browserify/webpack
2. NPM1&2 依赖地狱
    1. 生态简陋
    2. 发布没有门槛
    3. 简单粗暴直接嵌套依赖目录
3. NPM3 
    1. 理念
        1. 摊平
        2. 去重
    2. 结果
        1. 更快的安装速度
        2. 目录结构的不确定性
        3. 并未彻底解决重复依赖的问题
4. YARN（2016）
    1.     目标 为大型工程项目优化
    2.     改进点
        1.         确定性 lock
        2.         resolution  强制指定（嵌套）依赖的版本
    3.     CLI的易用性优化
5. NPM5&6
    1.     默认save
    2.     package-lock.json
    3.     offline mode
    4.     npm ci
    5.     npm audit
    6.     网络优化
6. 区别
    1. package-lock.json 约束性更强
    2. yarn中每个依赖的位置需要根据yarn.lock+package.json 一起动态计算出来
    3. yarn.lock 可以轻松的diff出区别 package-lock.json很困难
7. 如何为安装加速
    1. 网络栈优化
        1.     并发
        2.     规划下载队列
    2. 强缓存
        1.     复制缓存
        2.     硬链接+软链接
8. Yarn的设计权衡
    1. Symlink
        1. 平台一致性较差（主要是windows）
        2. 依赖循环
        3. JS生态较多工具不支持
        4. watch实现有问题
    2. hardlink
        1. 同样存在windows支持的问题
        2. 编辑项目中的node_modules可能会影响到其他项目
        3. 较新的文件系统已经实现
        4. 没人实现
9. PNPM
    1. 全局缓存硬链接
    2. 局部依赖使用symlink展开，严格遵守node模块解析路径
    3. 其他工具修正兼容性问题
10. yarn plugin play
    1. 错的是node，不是包管理器
    2. 全局缓存
    3. 改module loader （.pnp.js）
    4. 生态支持有限
11. Registry/源
    1. 最早基于couchDB
    2. 后来couchDB+Manta对象存储
    3. yarnpkg
    4. cnpm
        1. 完整镜像
        2. MySQL+阿里云对象存储
12. nrm  快速切换npm源
13. 自建registry
    1. 为什么需要自建
        1. 内网加速
        2. 免费的private scoped package
        3. 临时为第三方依赖打补丁
    2. 自建的选择
        1. cnpmjs.org
            1. 功能较全
            2. MySQL+多种对象存储
            3. 适合大型企业
        2. vedaccio
            1. 本质上是实现了一个代理
            2. 适合本地测试或者小公司
    

