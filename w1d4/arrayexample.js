
/*const scores = [10, 20, 30, 40, 50];
const Sscore = [1, 2, 3, 4, 5, 6, 7, 8, 9]
/**
 * 
 * @param {*} array 
 * @returns 
 
function findAverage(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    let average = sum / array.length;

    return average;

}

console.log(findAverage(Sscore));


*/


-// Use a for .. of loop with the expression array
    /**
     * 
     * @param {*} array 
     */
    function Findarr(array) {
        newarray = [];
        for (let bracket of array) {
            if (bracket === "{") {
                newarray.push(bracket);
            } else {
                const popexp = newarray.pop();
                if (popexp !== "{");
            }
        }
        return Boolean;
    }
console.log(Findarr(["{", "{", "}"]))
