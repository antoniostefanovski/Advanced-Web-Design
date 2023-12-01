const sort_by_num_calls = function(functions) {

    function numberOfCalls(func) {

        if(typeof func === 'function') {
            
            let counterCalls = 1;
            let call = func();

            while(typeof call === 'function') {
                counterCalls++;
                call = call();
            }

            return counterCalls;

        }

        return 0;

    }

    return functions.sort((a, b) => numberOfCalls(a) - numberOfCalls(b));

};