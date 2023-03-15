
const player1 = { jersey: 8, stats: [{ game: 1, points: 6 }, { game: 2, points: 7 }] };
const player2 = { jersey: 12, stats: [{ game: 1, points: 16 }, { game: 2, points: 14 }] };
const player3 = { jersey: 6, stats: [{ game: 1, points: 10 }, { game: 2, points: 6 }] };
const teamStats = [player1, player2, player3];
/**
 * 
 * @param {array} teamStats 
 * @returns {array} array of objects that have jersey and high points
 */
function indHighScores(teamStats) {

    let result = [];

    for (const player of teamStats) {
        let max = 0;
        for (const stat of player.stats) {
            if (max < stat.points) {
                max = stat.points;
            }
        }
        result.push({ jersey: player.jersey, high: max });

    }
    return result;
}




console.log(indHighScores(teamStats));