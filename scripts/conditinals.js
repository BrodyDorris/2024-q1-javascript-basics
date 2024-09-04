//@ts-check

let isTheSkyBlue = true;
let isTheSunUp = true;

if (isTheSkyBlue) {
    isTheSunUp = false;
    //This will run if true
    console.log("the sky is indeed blue");
} else if(!isTheSunUp) {
    let grasscolor = "dark green";
    console.log("it must be night", "and the grass is", grasscolor);
} else {
    //This will run if false
    console.log("it must be cloudy or a solar eclipse");
}

console.log("Is the sky blue?", isTheSkyBlue,"Is the sun up?",isTheSunUp);
