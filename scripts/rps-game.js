//@ts-check

let playerControlls = document.getElementById("player-controlls");

let weapons = [
    {
        type: "Rock",
        beats: "Scissors",
    },
    {
        type:"Paper",
        beats:"Rock"
    },
    {
        type:"Scissors",
        beats:"Paper"
    }
];

function pickRandomWeopon(weapons) {
    let randy = Math.floor(Math.random() * weapons.length);
    return weapons[randy];
}

function playerControllHandler(e) {
    let weaponName = e.target.innerText;
    console.log(weaponName, "was selected");
}

playerControlls?.addEventListener("click", playerControllHandler);
