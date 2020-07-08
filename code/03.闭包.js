// 改造下面的代码，使之输出0 - 9

for (var i = 0; i< 10; i++){
    setTimeout(() => {
        console.log(i);
    }, 1000)
}

// 1
for (let i = 0; i < 10; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000)
}

// 2
for (var i = 0; i < 10; i++) {
    (i => {
        setTimeout(() => {
            console.log(i);
        }, 1000)
    })(i)
}