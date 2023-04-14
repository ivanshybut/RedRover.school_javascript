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