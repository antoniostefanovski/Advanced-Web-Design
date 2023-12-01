// let object1 = {"a":1,"b":2}
// let object2 = {"a":10,"c":2}

const extender = function(object1, object2) {
    for(let key in object2) {
        if(!(key in object1)) {
            object1[key] = object2[key];
        }
    }
}