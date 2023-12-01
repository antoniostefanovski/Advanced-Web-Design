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

console.log(flatten([1, [2], [3, [[4]]],[5,6]]))