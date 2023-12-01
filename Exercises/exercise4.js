
const arrayPartition = (arr) => arr.slice(1).map((_, i) => [arr.slice(0, i+1), arr.slice(i+1)])

console.log(arrayPartition([1, 2, 3, 4, 5]))