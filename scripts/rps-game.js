//@ts-check

let playerControlls = document.getElementById("player-controlls");
let btnRock = document.getElementById("btn-rock");
let btnPaper = document.getElementById("btn-paper");
let btnScissors = document.getElementById("btn-scissors");

function rockClicked(rock) {
    console.log("rock", "was selected");
}

function paperClicked(paper) {
    console.log("paper", "was selected");
}

function scissorsClicked(scissors) {
    console.log("scissors", "was selected");
}

btnRock?.addEventListener("click", rockClicked);

btnPaper?.addEventListener("click", paperClicked);

btnScissors?.addEventListener("click", scissorsClicked);

