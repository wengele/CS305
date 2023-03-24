const player1 = { name: "Bob", points: [1, 2, 1] };
const player2 = { name: "Andre", points: [2, 0, 1] };
const player3 = { name: "Max", points: [1, 1, 1] };
const players = [player1, player2, player3];
//console.log("expect [1.33, 1, 1 ]: ", averagePoints (players));
//console.log("expect [{Bob:1.33, Andre:1, Max:1} ]: ", averagePoints (players))
function averagePoints(playerArr) {
    const pointsArray = playerArr.map(player => player.points).map( => pointsArr.reduce((partialAvg, current, arr) => partialAvg + current / arr.length, 0));
    return pointsArray;
}
console.log("expect [1.33, 1, 1 ]: ", averagePoints(players));