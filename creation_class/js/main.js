class Person {
    constructor(name, age, happiness) {
        this.name = name;
        this.age = age;
        this.happiness = happiness;
    }

    info () {
        console.log("Человек: " + this.name + ", Возраст: " + this.age);      
    }
}

var alex = new Person('Alex', 45, true);

// console.log("Person1");
// console.log(alex.name);
// console.log(alex.age);
// console.log(alex.happiness);
console.log(alex.info());

var bob = new Person('Bob', 45, false);

// console.log("Person2");
// console.log(bob.name);
// console.log(bob.age);
// console.log(bob.happiness);
console.log(bob.info());