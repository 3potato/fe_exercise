
let nodes = [
    {"id":2,"title":"第一级1","pid":0},
    {"id":3,"title":"第二级1","pid":2},
    {"id":4,"title":"第二级2","pid":2},
    {"id":5,"title":"第三级1","pid":4},
    {"id":6,"title":"第三级2","pid":3}
];

//  只能解决第一层的拷贝问题
function listToTree(data, pid) {
    let tree = []
    let ret
    for (let i=0; i < data.length; i++){
        if (data[i].pid == pid){
            let sub = JSON.parse(JSON.stringify(data[i]))
            ret = listToTree(data, data[i].id)
            if (ret.length !== 0){
                sub.children = ret
            }
            tree.push(sub)
        }
    }
    return tree
}

//  会改变nodes的值
function listToTree1(data, pid) {
    let tree = []
    let ret
    for (let i=0; i < data.length; i++){
        if (data[i].pid == pid){
            ret = listToTree1(data, data[i].id)
            if (ret.length !== 0){
                data[i].children = ret
            }
            tree.push(data[i])
        }
    }
    return tree
}