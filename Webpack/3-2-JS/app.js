
import sum from './sum'
let minus = require('./minus')


console.log('sum(23, 24)=', sum(23, 24))
console.log('minus(32, 3)=', minus(32, 3))


require(['./muti'], function (muti) {
  console.log('muti(2, 4)=', muti(2, 4))
})