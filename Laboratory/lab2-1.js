var fib_next = (function() {
    var prev = 0;
    var current = 1;

    return function() {
        var next = prev + current;
        prev = current;
        current = next;

        return prev;
    }

})();

fib_next()

console.log(fib_next(),fib_next(), fib_next());