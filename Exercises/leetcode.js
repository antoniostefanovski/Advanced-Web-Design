// 1
let arr = [1, 2, 3, 4];

function sum(acc, curr) {
    return acc + curr ** 2;
}

var reduce = function(arr, sum, init) {

    if(arr.length == 0) return init;

    let result = arr.reduce((acc, curr) => {
        return sum(acc, curr)
    }, init);

    return result;

}

console.log(reduce(arr, sum, 100));