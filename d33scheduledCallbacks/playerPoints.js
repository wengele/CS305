"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
*/
//module.exports = {findTotalScores, findTotalPlayerPoints }; //add all of your function names here that you need for the node mocha tests

const player1 = { jersey: 8, stats: [{ game: 1, points: 6 }, { game: 2, points: 7 }] };
const player2 = { jersey: 12, stats: [{ game: 1, points: 16 }, { game: 2, points: 14 }] };
const player3 = { jersey: 6, stats: [{ game: 1, points: 10 }, { game: 2, points: 6 }] };
const teamStats = [player1, player2, player3];

/*Be sure to use meaningful variable names and write JSdoc comments for 
findTotalScores and any helper functions such as findTotalPlayerPoints.
Try to use map and reduce in your functions as appropriate. */

/**
 * 
 * @param {array} teamStats arry  
 * @returns{array} which is an obj includes the total point of player and jersey number
 */
export function findTotalScores(teamStats) {
    let result = [];
    for (const player of teamStats) {
        result.push({ jersey: player.jersey, total: findTotalPlayerPoints(player) });
    }
    return result;
}

//console.log(findTotalScores(teamStats));


/**
 * 
 * @param {*objects} player 
 * @returns {number} it will return the total point of the player stats
 */
export function findTotalPlayerPoints(player) {

    let playerr = player.stats;
    const totlapoint = playerr.reduce((sum, current) => sum + current.points, 0);
    return totlapoint;



}
//console.log(findTotalPlayerPoints(player1));
const mapped = teamStats.map(person => person.jersey);
console.log(mapped);