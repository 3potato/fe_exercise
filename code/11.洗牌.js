
function shuffle (arr) {
    for(let i = arr.length - 1; i > 0; i--) {
        let randomIndex = Math.floor(Math.random() * (i))
        let RandomItem = arr[randomIndex]
        arr[randomIndex] = arr[i]
        arr[i] = RandomItem
    }
    return arr
}