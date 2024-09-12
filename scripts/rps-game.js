//@ts-check

/** @type {HTMLElement} */
//@ts-ignore we know player controlls header is not null
let playerControlls = document.getElementById("player-controlls");

//game-results
/** @type {HTMLElement} */
//@ts-ignore we know game results header is not null
let gameResultsHeader = document.getElementById("game-results");

/** @type {HTMLElement} */
//@ts-ignore we know game restart section header is not null
let gamerestart = document.getElementById("game-restart");

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
	showRestart();

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
		gameResultsHeader.innerText = "Player wins! Choose your weapon Beats everything!";
		return;
	}

	let computerWeapon = pickRandomWeopon(weapons);

	let result = determineOutcome(playerWeapon, computerWeapon);
    gameResultsHeader.innerText = result;

	console.log(result);
}

function gameRestartHandler(e) {
	if (e.target.id === "btn-restart") {
		isGameOver = false;
		showPlayerControlls();
		gameResultsHeader.innerText = "";
	}
}

function showRestart() {
	gamerestart.style.display = "initial";
	playerControlls.style.display = "none";
}

function showPlayerControlls() {
	gamerestart.style.display = "none";
	playerControlls.style.display = "initial";
}

playerControlls?.addEventListener("click", playerControllHandler);

gamerestart?.addEventListener("click", gameRestartHandler);
