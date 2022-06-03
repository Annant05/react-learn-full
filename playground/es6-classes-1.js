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

class Student extends Person {

    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();
        if (this.hasMajor()) {
            description += ` Their major is ${this.major}`;
        }
        return description;
    }
}

class Traveler extends Person {

    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }

    hasHomeLocation() {
        return !!this.homeLocation;
    }

    getGreeting() {
        let greeting = super.getGreeting();
        if (this.hasHomeLocation()) {
            greeting += ` I'm visiting from ${this.homeLocation}.`;
        }
        return greeting;
    }
}

const me = new Traveler('Annant Gupta', 24, 'Shimla');
console.log(me.getGreeting());

const her = new Traveler();
console.log(her.getGreeting());
