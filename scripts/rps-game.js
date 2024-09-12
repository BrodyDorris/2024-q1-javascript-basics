//@ts-check

let playerControlls = document.getElementById("player-controlls");

//game-results
/** @type {HTMLElement} */
//@ts-ignore we know game results header is not null
let gameResultsHeader = document.getElementById("game-results");

gameResultsHeader.innerText = "Play Rock Paper Scissors";

let isGameOver = false;

let weapons = [
	{
		type: "Rock",
		beats: "Scissors",
	},
	{
		type: "Paper",
		beats: "Rock",
	},
	{
		type: "Scissors",
		beats: "Paper",
	},
];

function pickRandomWeopon(weapons) {
	let randy = Math.floor(Math.random() * weapons.length);
	return weapons[randy];
}

function determineOutcome(playerWeapon, computerWeapon) {
	if (playerWeapon.type === computerWeapon.type) {
		return "Its A Tie! Try Again!";
	}

	isGameOver = true;

	if (playerWeapon.beats === computerWeapon.type) {
		return `Player wins! ${playerWeapon.type} beats ${computerWeapon.type}`;
	}

    return `Computer wins! ${computerWeapon.type} beats ${playerWeapon.type}`;
}

function playerControllHandler(e) {
	if (isGameOver) {
		return;
	}

	let weaponName = e.target.innerText;
	let playerWeapon = weapons.find((w) => w.type === weaponName);

	if (!playerWeapon) {
		console.log("Player wins! Choose your weapon Beats everything!");
		return;
	}

	let computerWeapon = pickRandomWeopon(weapons);

	let result = determineOutcome(playerWeapon, computerWeapon);
    gameResultsHeader.innerText = result;

	console.log(result);
}

playerControlls?.addEventListener("click", playerControllHandler);
