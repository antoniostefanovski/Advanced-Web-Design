function Human(name, age) {

    this.name = name;
    this.age = age;

};


Human.prototype.stomach = [];
Human.prototype.eat = function (food) {
    if(this.stomach.length < 10) {
        return this.stomach.push(food);
    }
    return 0;
}
Human.prototype.digest = function () {
    return this.stomach.length = 0;
}
Human.prototype.toString = function () {
    return `${this.name}, ${this.age}`;
}

function Baby(name, age, favToy) {

    this.name = name;
    this.age = age;
    this.favToy = favToy;

}

Baby.prototype = Object.create(Human.prototype);

Baby.prototype.constructor = Baby;

Baby.prototype.play = function () {
    return `Baby ${this.name}, ${this.age} is playing with ${this.favToy}`;
}