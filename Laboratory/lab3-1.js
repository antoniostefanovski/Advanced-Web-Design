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

const human = new Human("John", 30);
console.log(human.toString());
