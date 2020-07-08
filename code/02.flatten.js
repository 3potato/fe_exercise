
var arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];

// 1 toString
// let res = arr.toString().split(",").sort((a,b) => { return a - b }).map(Number)
// console.log(res);

// 2 循环
function flatten(arr) {
    while (arr.some(item => Array.isArray(item))) {
        arr = [].concat(...arr);
    }
    return arr;
}
flatten(arr)


// 3 递归
const deepFlatten = arr => [].concat(...arr.map(v => (Array.isArray(v) ? deepFlatten(v) : v)));
deepFlatten(arr)
