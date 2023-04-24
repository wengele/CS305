
let array = [1, 2, 3, 4]
function recursivesum(array) {
    let sum = 0;
    if (array.length === 0)
        return 0;
    sum + array.shift() + recursivesum;

}


function factorial(num) {
    if (num === 0)
        return 1;
    return num * factorial(num - 1)
}


function countinstance(string, letter) {
    if (string === '') {
        return 0;
    }

    let count = 0;
    if (string[0] === letter) {
        count = 1;
    }

    return count + countinstance(string.substring(1), letter);
}

