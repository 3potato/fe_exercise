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



// 4. 选择排序
// sort 方法排序
// 选择排序
// 比较 第 minIndex 和 【2 -  结束的】 谁比一小 谁和换
function selectSort(array) {
    var temp  = ''
    var minIndex = ''
    for (let i = 0; i < array.length-1; i++) {
        minIndex = i // 假设 最小值的索引等于i=0
        for(let j = i+1; j<array.length; j++) {
            if(array[i]< array[j]) {
                [ array[i], array[j]] = [array[j], array[i]]
            }
        }
    }
    return array
}
console.log(selectSort([3,1,2,4,6]), 'selectSort')
// 选择排序
function selectionSort(arr) {
    var len = arr.length;
    var minIndex, temp;
    for (var i = 0; i < len - 1; i++) {
        minIndex = i;
        for (var j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {     // 寻找最小的数
                minIndex = j;                 // 将最小数的索引保存
            }
        }
        temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    return arr;
}
console.log(selectionSort([4,2,1,6,7,1], 'selectionSort'))
