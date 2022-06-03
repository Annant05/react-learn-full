class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
        console.log(this.name);
    }

    getGreeting() {
        return `Hi, I am ${this.name}!`;
    }

    getDescription() {
        return `${this.name} is ${this.age} year(s) old`;
    }

}

const me = new Person('Annant Gupta', 24);
console.log(me.getDescription());

const her = new Person();
console.log(her.getDescription());
