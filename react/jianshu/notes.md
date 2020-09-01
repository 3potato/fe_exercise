# React

### react 基础
1. 特点

    声名式开发
        减少大量DOM操作
    可以与其他框架并存
    组件化
    单向数据流
        子组件不能改变父组件数据
    视图层框架
        只关注视图层的搭建，大型项目需引入redux,flux等数据框架进行数据处理
    函数式编程
        更容易实现前端自动化测试


### react 高级
1. state，props改变时，render函数会被重新执行一次

2. 虚拟DOM 数据视图更新原理
    1. state 数据
    2. JSX 模板
    3. 数据 + 模板 结合，生成真实的DOM，来显示
    4. state 发生改变
    5. 数据 + 模板 结合，生成真实的DOM，替换原始的DOM

    缺陷：
    第一次生成了一个完整的DOM片段
    第二次生成了一个完整的DOM片段
    第二次的DOM替换第一次的DOM，非常耗性能

    1. state 数据
    2. JSX 模板
    3. 数据 + 模板 结合，生成真实的DOM，来显示
    4. state 发生改变
    5. 数据 + 模板 结合，生成真实的DOM，并不替换原始的DOM
    6. 新的DOM（DocumentFragment） 和原始的DOM做比对，找差异
    7. 找出发生了变化的DOM
    8. 只用发生变化的新的DOM，替换老的DOM元素

    缺陷：
    性能的提升并不明显

    1. state 数据
    2. JSX 模板
    3. 数据 + 模板 结合，生成虚拟DOM（虚拟DOM就是一个JS对象，用它来描述真实DOM）   （损耗了性能）
          ['div', {id: 'abc'}, ['span', {}, 'hello world']]
    4. 用虚拟DOM的结构生成真实的DOM，来显示
        <div id='abc'><span>hello world</span></div>
    5. state 发生变化
    6. 数据 + 模板 生成新的虚拟DOM （极大的提升了性能）
        ['div', {id: 'abc'}, ['span', {}, 'bye bye']]
    7. 比较原始虚拟DOM和新的虚拟DOM的区别，找到区别是span中内容  （极大的提升了性能）
    8. 直接操作DOM，改变span中的内容

    直接对比JS对象，比直接对比真实DOM，可以极大的节省性能

3. 虚拟DOM 深入
    1. JSX -> createELement -> 虚拟DOM（JS对象） -> 真实的DOM
    2. 优点
        1. 性能提升
        2. 它使得跨端应用得以实现，React Native

4. Diff算法
    1. setState 异步 多次虚拟DOM比对合并成一次 render一次 提高性能
    2. 虚拟DOM 同层比对
    3. 引入key值可以提高性能，循环不建议用index，因为会变化

5. ref 获取当前DOM元素，注意setState异步，DOM获取不及时，可以写入setState的第二个参数中

6. 生命周期函数是指在某一时刻组件会自动调用执行的函数
    1. initialization
        state props
    2. mounting (挂载-组件第一次渲染到页面)
        componentWillMount
            在组件即将被挂载到页面的时刻自动执行

        render

        componentDidMount
            在组件被挂载到页面之后自动执行
            ajax请求放在这里

    3. updation
    
        props
        
            componentWillReceiveProps
                组件从父组件接收参数
                只要父组件的render函数重新被执行，它就执行
                    如果这个组件第一次存在于父组件中，不会执行
                    如果这个组件不是第一次存在于父组件中，会执行

        states
        
            shouldComponentUpdate
                组件被更新之前，它会自动被执行
                返回Boolean，决定组件是否更新，返回false，后面的生命周期函数都不会被执行

            componentWillUpdate
                组件被更新之前，它会自动被执行
                但是它在shouldComponentUpdate之后被执行
                如果shouldComponentUpdate返回true它才执行
                如果返回false，这个函数就不会被执行了

            render
                父组件render函数执行的时候，子组件的render函数也被执行

            componentDidUpdate
                组件更新完成后，它会被执行

    4. unmounting
    
        componentWillUnmount
            当组件即将被从页面中剔除时，它会自动被执行

    5. react 性能提升
    
        1. constructor 改变方法作用域 作用域方法只执行一次
        2. setState 异步执行
        3. 虚拟DOM 同层比对 引入key值 提高比对性能
        4. 生命周期shouldComponentUpdate, 减少不必要的render


### Redux 入门
1. Redux = Reducer + Flux

2. reducer可以接受state，但是绝不能修改state

3. redux三个原则
    store是唯一的
    只有store能够改变自己的内容
    reducer必须是纯函数
        纯函数是指，给定固定的输入，就一定会有固定的输出，而且不会有任何副作用


### redux 进阶
1. UI组件负责渲染，容器组件负责逻辑

2. 无状态组件是一个函数，参数是props，性能高，只有一个render函数时就可以使用无状态组件定义

3. redux-thunk,使action支持函数。
    原理：对dispatch进行二次封装
    中间件：指action和store之间的中间件，是redux的中间件而不是react中间件

4. generator函数


### 实战

1. immutable 对象的set方法，会结合之前immutable对象的值和设置的值，返回一个全新的对象

2. PureComponent内置了componentShouldUpdate方法,可进行性能优化，需要配合 immutable.js使用，否则有坑，不如直接写componentShouldUpdate方法

3. 单页面，整个网站在访问过程中，只会加载一次HTML页面。减少HTML请求，页面切换流畅

4. a标签加载HTML比较耗性能

5. 动态路由 detail/:id 生成detail/1  detail/2 取参数简单match.params.id

6. 异步加载组件 react-loadable














