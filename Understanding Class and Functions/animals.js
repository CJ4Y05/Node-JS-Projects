class Animal{
    constructor(name){
        this.name = name;
    }

    speak(){
        console.log(`"${this.name}" don't know what to say...`);
    }
}


class Dog{
    constructor(name){
        this.name = name;
    }

    speak(){
        console.log(`The dog called ${this.name} says Bark Bark!`);
    }
}


class Cat{
    constructor(name){
        this.name = name;
    }

    speak(){
        console.log(`${this.name} the Cat goes: Meow meow!`);
    }

}


const kitty = new Cat("Con");
const doggy = new Dog("Cjay");

kitty.speak();
doggy.speak();
