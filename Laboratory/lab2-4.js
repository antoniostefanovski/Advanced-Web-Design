function group(arr, len) {

    let howManyElems = Math.ceil(arr.length / len);
    // 14/4 = 4

    const rez = new Array(howManyElems).fill().map(() => []);


    for (let i = 0; i < arr.length; i++) {
        rez[i % howManyElems].push(arr[i]);
    }

    return rez;

}

console.log(group([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], 4))
