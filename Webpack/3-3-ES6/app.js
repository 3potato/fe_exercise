let fun = () => {}
const num = 45

let arr = [1, 2, 3, 4, 5]
let arrMap = arr.map((item) => {
  return item * 2
})

console.log('new Set(arrMap)', new Set(arrMap))
console.log('arr.includes(10)', arr.includes(10))

function *funGen() {

}