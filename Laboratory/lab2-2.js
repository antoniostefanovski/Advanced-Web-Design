function difference(arr1, arr2){
    const unique = [...new Set(flatten(arr1.concat(flatten(arr2))))]
    return unique;
}

function flatten(arr) {
    const final = arr.reduce((acc, currVal) => {
        if(!Array.isArray(currVal)) {
           return acc.concat(currVal)
        } else {
            return acc.concat(flatten(currVal))
        }
    },[])

    return final;
}

console.log(difference([1, 2, 3], [100, 2, 1, 10]))
