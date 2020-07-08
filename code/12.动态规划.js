// 斐波那契数列
function fb1 (index) {
    let pre = 1, cur = 1, res = 0
    if (index < 2) return index
    for (let i = 1; i< index; i++) {
        res = pre + cur
        pre = cur
        cur = res
    }
    return res
}

function fb2 (index, pre = 1, cur = 1) {
    if (index < 2) return cur
    return fb2(--index, cur, pre + cur)
}

// 杨辉三角
function print (num) {
    var arr = [[1]]
    loop([1])
    function loop(preArr) {
        if (preArr.length < num) {
            let newArr = new Array(preArr.length+1).fill(1)
            for (let i = 0; i < preArr.length - 1; i++) {
                newArr[i+1] = preArr[i] + preArr[i+1]
            }
            arr.push(newArr)
            loop(newArr)
        }
    }
    return arr
}