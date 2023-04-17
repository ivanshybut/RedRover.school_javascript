class animal{
    constructor (name, eyes){
        this.name = name
        this.eyes = eyes
    }
    getName(){
        return(`The name of the animal is ${this.name}.`)

    }
    canEat(){
        console.log(`This animal can eat`);
    }
}

let animal1 = new animal('tiger')
let animal2 = new animal('salmon', 'blue')

console.log(animal1.name);
console.log('============================');

//Инкапсуляция
//Наследование
//полиморфизм
//абстракция

class Mammals extends animal{
    constructor(name, eyes, skin, legs,claws){
        super (name, eyes)

        this.skin = skin
        this.legs = legs
        this.claws = claws
    }
    canEat(){
        console.log(`This animal can eat meat`);
    }
    showBodyParts(){
        console.log(`${this.name} has ${this.legs} legs, ${this.skin} and ${this.claws} claws.`);
    }
}
let mammal1 = new Mammals('cat', 'green', 'fur', 4, 'sharp')
console.log(mammal1.name.toUpperCase());
console.log(mammal1.getName());
console.log(mammal1.eyes);
mammal1.canEat()
mammal1.showBodyParts
console.log('============================');
// patern class

class Person{
    constructor(name){
        this.name = name
        this.occupation = 'unemployed'
    }
    greet(){
        console.log(`Hello ${this.name}`);
    }
}
let person = new Person('Sam')
person.greet()
person.occupation = 'QA'
console.log(person.occupation);
console.log('============================');

class Students extends Person{

    constructor(name){
        console.log('Creating student class');
        super(name);
        this.occupation = 'Student'
    }
    greet(){
        console.log(`Hello student ${this.name}`);
        console.log(`occupation: ` + this.occupation);
    }
}

let students = new Students('Luke')
students.greet()
console.log(students.occupation);
console.log('============================');

//
let newObj = {
    name: "Ivan",
    age: 30,
    occupation: "QA",
    introduse: function(){
        console.log(`Hello, I'm ${this.name}`);
        console.log(`I'm a ${this.occupation}`);
    }

}
console.log(newObj);





