/* 

sum(1,2,3) = 1+2+3
sum(1)(2)(3)
sum(1,2)(3)
sum(1)(2,3)

sum(1)(2) ==> function (1) { 1 + 2 };

*/

var curry = function(fn) {
    let nums = [];

    return function curried(...args) { // ...args kolku so sakame parametri
        nums = [...nums, ...args];

        if(fn.length === nums.length) { // broj argumenti so gi prima funkcijata so tie so gi povikuvame nie dolu
            let res = fn(...nums)
            nums = [];
            return res;
        }
        else {
            return curried; // primer ako imame csum(1)(2,3) --> prvo imame 1 argument a toa e vrednosta 1, 1 !== 3 taka sto ja povikuvame rekurzivno uste ednas so ostanatite 2
        } 
    }
}

function sum(a, b, c) { return a + b + c; }

const csum = curry(sum);

// console.log(csum(1)(2, 3))

function date(a, b, c) {
    return `${a}.${b}.${c}`;
}

const cdate = curry(date);

console.log(`${cdate(1, 15, 2020)} --- ${cdate(1, 15)(2020)}`);

