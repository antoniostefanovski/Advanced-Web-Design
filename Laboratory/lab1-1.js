'use strict'

var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

rl.question('', (p1) => {

        p1 = p1.split(", ")
        console.log(footballPoints(Number(p1[0]),Number(p1[1]),Number(p1[2])))

        rl.close();

});

// DO NOT CHANGE ABOVE THIS LINE!!!!

function footballPoints() { 
        return a * 3 + b * 1 + c * 0;
}


