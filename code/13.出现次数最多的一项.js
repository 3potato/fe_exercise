function findMax (arr) {
    let hash = {}
    arr.forEach(i => {
        hash[i] ? hash[i]+=1 : hash[i] = 1
    })
    let newArr = []
    for(let k in hash) {
        newArr.push(hash[k])
    }
    newArr.sort((a, b) => b-a)
    let first = newArr[0]
    let res
    for(let k in hash) {
        if (hash[k] === first) {
            res = k
        }
    }
    return res
}