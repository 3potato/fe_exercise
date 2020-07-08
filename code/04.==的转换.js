// 下面代码中 a 在什么情况下会打印 1？

var a = '';
if(a == 1 && a == 2 && a == 3){
    console.log(1);
}

// 1
let a = [1,2,3];
a.toString = a.shift;
if( a == 1 && a == 2 && a == 3 ) {
    console.log(1);
}

// 2
let a = {
    i: 1,
    valueOf () {
        return a.i++
    }
}

if(a == 1 && a == 2 && a == 3) {
    console.log('1');
}



let a = {
    i: 1,
    toString () {
        return a.i++
    }
}

if(a == 1 && a == 2 && a == 3) {
    console.log('1');
}
