
var compose = function(functions) {

    return function(x) {

        let flength = functions.length;

        if(flength == 0) return x;

        for(let i=flength-1; i>=0; i--) {
            x = functions[i](x);
        }

        return x;

    }

};

const fn = compose([x => x + 1, x => 2 * x])
console.log(fn(4))