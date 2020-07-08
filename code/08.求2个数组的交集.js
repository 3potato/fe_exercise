// 给定 nums1 = [1, 2, 2, 1]，nums2 = [2, 2]，返回 [2, 2]。

const intersect = (nums1, nums2) => {
    const map = {}
    const res = []
    for (let n of nums1) {
        if (map[n]) {
            map[n]++
        } else {
            map[n] = 1
        }
    }
    for (let n of nums2) {
        if (map[n] > 0) {
            res.push(n)
            map[n]--
        }
    }
    return res
}