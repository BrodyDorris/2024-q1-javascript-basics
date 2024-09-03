//@ts-check

//can be called before defined since on the global scope
add(1, 2)

let firstName = "Brody";

//add default perameter values
let sayHi = function (firstname = "Captain No Name", age = 100000) {
    let greeting = `Hello! my name is ${firstname} And I am ${age} years old.`;
    //"Hello! my name is "+ firstName + ". And I am "+ age +" years old.";
    console.log(greeting);
};

debugger;

//call with default perameters
sayHi();
//call with default age
sayHi("Jimmy");

sayHi("Brody", 14);
sayHi(firstName, 14);

//console.log(firstName);

// this fuction is hoisted to the global scope since it has no let= let sayHi() = function or fuction add()
function add(a, b) {
    //return;
    let answer = a = b;
    return answer;
}

let additionAnswer = add("2", 1);
add(5000, 9873628976873);

console.log(additionAnswer, add(5000, 43242576287940928));

let runMyStuff = (x, y, f) => {
    let answer = f(x, y);
    return answer;
}

runMyStuff("WillLuke", 28, sayHi)

let person = {
    isWearingBarneyShirt: false,
    isTotalyAwesome: false
};

function WearBarneyShirt(person) {
person.isWearingBarneyShirt = true;
person.isTotalyAwesome = true;
};

console.log(person);
WearBarneyShirt(person);
console.log(person);

