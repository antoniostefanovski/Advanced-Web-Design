function incrementItems(arr) {
    return arr.map(e => Number(e) + 1)
}

tmp = '0, 1, 2, 3'

arr = tmp.split(', ')

console.log(incrementItems(arr))