function hasSameBread (arr1, arr2) {
    return arr1[0] == arr2[0] && arr1[arr1.length-1] == arr2[arr2.length-1]
}

arr1 = ['white bread', 'tomato', 'white bread']
arr2 = ['white bread', 'lettuce', 'white bread']

console.log(hasSameBread(arr1, arr2))