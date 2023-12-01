function add_to(func) {

    let argumentsArr = [];

    function insert(argument) {
        argumentsArr.push(argument);
    }

    function result() {
        
        let currentArgument = argumentsArr[0];

        for(let i=1; i<argumentsArr.length; i++) {
            currentArgument = func(currentArgument, argumentsArr[i]);
        }

        return currentArgument;
    }

    return { 
        insert,
        result
    };

}

let concat_as_str = (a, b)=> (String(a)+b)

let concat_agg = add_to(concat_as_str)

concat_agg.insert(1)

concat_agg.insert(2)

console.log(concat_agg.result())

concat_agg.insert(3)

concat_agg.insert(10)

console.log(concat_agg.result())

/*
    ja povikuvame add_to i isprakjame funkcija concat_as_str
    potoa dodavame element 1
    potoa dodavame element 2
    args = [1, 2]
    pa vikame result
    curr ke e 1
    pa for ciklus kade imame current = concat_as_str(1, 2) => ova ke daj 12
    go vrakjame current=12

    gi vrakjame metodi { insert, result }
*/