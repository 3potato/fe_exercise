let arr = [15, 12, 324, 2, 45, 43, 1341, 4, 54, 3, 2, 54, 1]

// 1. 冒泡

// function swap(arr, i, j) {
//     let temp = arr[i]
//     arr[i] = arr[j]
//     arr[j] = temp
// }

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // swap(arr, i, j)
                [ arr[j], arr[j + 1] ] = [ arr[j + 1], arr[j] ]
            }
        }
    }
    console.log(arr);
}

// 2. 插入排序



// 3. 快排
function quickSort (arr) {
    if (arr.length <= 1) return arr
    let left = []
    let right = []
    let middle = Math.floor(arr.length / 2)
    arr.forEach((i, idx) => {
        if (idx === middle) return
        if (i > arr[middle]) {
            right.push(i)
        } else {
            left.push(i)
        }
    })
    return [...quickSort(left), arr[middle], ...quickSort(right)]
}