function dropUntil(users, func) {

    var rez = [];
    var flag = false;
    
    for(let i=0; i<users.length; i++) {
        if(func(users[i]) || flag) {
            rez.push(users[i]);
            flag = true;
        }
    }


    return rez;

}


var users = [
    { "user": "barney",  "active": false },
    { "user": "fred",    "active": false },
    { "user": "pebbles", "active": true },
    { "user": "cristiano", "active": false }
  ]
  
console.log(dropUntil(users, function(o) { return o.active; }) )

// console.log(dropUntil([2, 3, 5, 10], function(o) { return o%2; }) )