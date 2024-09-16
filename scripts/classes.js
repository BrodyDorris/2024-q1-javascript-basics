//@ts-check

class Cheese {
    constructor(type) {
        this.type = type;
        this.color = "yellow";
        this.age = 0;
        this.cost = 0.0;
    }

    eat() {
        console.log(`Nom Nom Nom ${this.type} is yummy!`);
    }
}

let chedder = new Cheese("Cheddar");
let swiss = new Cheese("Swiss");
swiss.color = "White";

let gouda = new Cheese("Gouda");

gouda.eat();
chedder.eat();