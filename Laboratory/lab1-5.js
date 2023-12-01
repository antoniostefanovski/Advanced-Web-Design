const merge = function(arr1, arr2) {

    const merged = [];

    for(let i=0; i<arr1.length; i++) {
        merged.push([arr1[i], arr2[i]]);
    }

    return merged;

}

console.log(merge([1, 2, 3, 4, 5], [100, 200, 300, 400, 500]))

/* i pishi se gospodine oti e use strict :D */