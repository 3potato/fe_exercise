
var arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];

// 1 toString
// let res = arr.toString().split(",").sort((a,b) => { return a - b }).map(Number)
// console.log(res);

// 2 flat
// arr.flat(Infinity)


// 3 循环
function flatten(arr) {
    while (arr.some(item => Array.isArray(item))) {
        arr = [].concat(...arr);
    }
    return arr;
}
flatten(arr)


// 4 递归
const deepFlatten = arr => [].concat(...arr.map(v => (Array.isArray(v) ? deepFlatten(v) : v)));
deepFlatten(arr)


// 5 递归
function flatDeep(array) {
    if (!Array.isArray(array)) {
        console.log('类型不符合')
        return
    }
    var arr = []
    var _flatDeep = function (array) {
        array.forEach(item => {
            if (Array.isArray(item)) {
                _flatDeep(item)
            } else {
                arr.push(item)
            }
        })
    }
    _flatDeep(arrary)
    return arr
}