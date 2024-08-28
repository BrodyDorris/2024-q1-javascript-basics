//@ts-check
// This variable is a number
let initelligenceQuotient = 10;

//These are string variables
let firstName = "Brody";
let lastName = "Dorris";

//I can reassign variable's values
firstName = "Brody";

//These are constants and can not be changed or reassigned
const MinIQ = 50;
const MaxIQ = 300;

//MaxIQ = 50

// Booleans are only true or false data
let AmITheCoolest = true;


//This is currently undefined
let dontknow;

//null is a value that has no value
let Nothing = null;


console.log(firstName, lastName, "has IQ", initelligenceQuotient);

let myPet = {
    type:"Cat",
    name:"Fuzz",
    Ageinhumanyears: 6,
    color: "Orange",
    FavoriteFoods: [
        "dog food",
        "grass",
        "catnip",
    ],
    owner: {
        Firstname: "brody",
        Lastname: "dorris",
        age: 14
    }
};

myPet.color = "Also Orange";
myPet.Color = "Orange";
console.log("myPet looks like this", myPet);

// arrays are fun lists of data
let favCandies = [
    "War Heads",
    "Black Licorice",
    "Skittles",
    "Snickers",
    true,
    9000000,
    myPet,
];

console.log("our fav candies are:", favCandies);
//arrays start at 0
console.log("my fav candies at index 2 is:", favCandies [2]);

favCandies.length;