// var S, T;
// var next = [];
//
// // 预计算next数组
// function getNext() {
//     let k = -1,
//         j = 0;
//     next[0] = -1;
//     while (j < len_t) {
//         if (k == -1 || T[j] == T[k]) {
//             ++j;
//             ++k;
//             next[j] = k;
//         } else k = next[k];
//     }
// }
//
// // 返回子串首次出现的位置
// function KMP_Index() //T是模式串，S是 主串
// {
//     let i = 0,
//         j = 0;
//     getNext();
//     console.log(next, 'next');
//     while (j < len_t && i < len_s) {
//         if (j == -1 || T[j] == S[i]) {
//             i++;
//             j++;
//         } else j = next[j];
//     }
//     if (j == len_t) {
//         return i - len_t;
//     } else return -1;
// }
//
// //返回子串出现的次数
// function KMP_Count() {
//     let ans = 0;
//     let i = 0,
//         j = 0;
//
//     getNext();
//     for (i = 0; i < len_s; i++) {
//         while (j > 0 && T[j] != S[i]) {
//             j = next[j];
//         }
//         if (T[j] == S[i]) j++;
//         if (j == len_t) {
//             ans++;
//             j = next[j];
//         }
//     }
//     return ans;
// }
//
// S = "123454321";
// T = "0"
// len_s = S.length;
// len_t = T.length;
//
// //KMP_Index()如果为-1则没有匹配
// console.log(`主串为${S},模式串为${T},模式串首次出现的位置为${KMP_Index()},出现的次数为${KMP_Count()}`);



function index(string, searchString) {
    let next = getLongestPS(searchString);
    let i = 0,
        j = 0;
    while (i <= (string.length - 1) && j <= (searchString.length - 1)) {
        if (string[i] === searchString[j]) {
            i++;
            j++;
        } else {
            // 注意当不匹配时,并不移动字符串,而是移动匹配字符串。(回溯)
            if (j == 0) {
                // 当匹配字符串和字符串第一位不匹配时。继续向后移动字符串。
                i++;
            } else {
                j = next[j];
            }
        }
    }
    if (j > searchString.length - 1) {
        return i - searchString.length;
    }
    return -1;
}


/*
* longestPS
* 求一段字符串的前缀与后缀的最大公共长度;
* */
function getLongestPS(searchString) {
    let i = 0;
    let next = [0];
    let j = 1;
    while (j < searchString.length) {
        if (searchString[i] == searchString[j]) {
            next[j] = i + 1;
            i++;
            j++;
        } else {
            if (i == 0) {
                next[j] = 0
                j++;
            } else {
                i = next[i - 1];
            }
        }
    }
    console.log(next, 'next');
    return next;
}

let string = "sdfabasdlfsaslfjslkadadfjlabab";
let searchString = "abcdababc";

console.log(index(string, searchString));
console.log(string.indexOf(searchString));