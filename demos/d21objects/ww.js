
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

const jersy = teamStats.filter(player => player.jersey > 10);
console.log(jersy);

const kk = teamStats.map(play => play.jersey);
console.log(kk);
const plaer3total = player3.stats.reduce((sum, current) => sum + current.points);
function findhig(teamStats) {
    let result = [];
    for (const plaer of teamStats) {
        let max = 0;
        for (elem of plaer.stats) {
            if (max < elem.points) {
                max = elem.points;
            }
        }
        result.push(max);
    }
    return result;
}