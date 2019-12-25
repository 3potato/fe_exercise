class Vue {
    constructor(options) {
        console.log(options);
        this.$options = options
        this.compile()
    }
    compile() {
        let el = document.querySelector(this.$options.el)
        let childNodes = el.childNodes
        this.compileNodes(childNodes)
    }
    compileNodes(childNodes) {
        childNodes.forEach((node)=>{
            if(node.nodeType === 3){
                console.log('文本节点')
                let reg = /\{\{(\S+)\}\}/g
                // 正则反向引用 $1 $2
                // {{message}}
                let textContent = node.textContent
                let res = reg.test(textContent)
                if(res) {
                    let $1 = RegExp.$1
                    node.textContent = this.$options.data[$1]
                }
            }else if(node.nodeType === 1){
                console.log('标签')
            }
        })
    }
};