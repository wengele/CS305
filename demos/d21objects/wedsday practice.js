/*function sumAll(...args) { // args is the name for the array
    let sum = 0;

    for (let arg of args) {
        sum += arg;
    }
    return sum;
}

console.log(sumAll(1, 2, 3, 4))

function multiplyEvens() {
    let product = 1;
    for (let prd of arguments) {
        if (prd % 2 === 0) {
            product *= prd;
        }
    }
    return product;
}
console.log(multiplyEvens(1, 6, 3, 4, 17, 2));

function mutl(x, y, ...rest) {
    let prod = x * y;
    if (rest.length > 0) {
        for (let i = 0; i < rest.length; i++) {
            prod *= rest[i];
        }
    }

    return prod;
}
console.log(mutl(1, 2, 3, 4));

let life = ["love", "happines", "peace", "buna"];// destructuring assignment 

let [first, ...rest] = life;
console.log(rest);

const wen = {
    happies: "pirceless",
    addess: { zipcode: "one one", srtees: "failrfiled" }

};

const clonedwen = structuredClone(wen);

clonedwen.addess = "mimi";
console.log(clonedwen.addess);
setTimeout(() => { clearInterval(timerId); alert('stop'); }, 5000);
let timerId = setInterval(() => alert('tick'), 2000);
let timerId = setTimeout(() => alert("never happens"), 1000);
alert(timerId); // timer identifier

clearTimeout(timerId);
alert(timerId);
let timerId = setTimeout(function tick() {
    alert('tick');
    timerId = setTimeout(tick, 2000); // (*)
}, 2000);
function printNumbers(from, to) {
    let current = from;

    let timerId = setInterval(function () {
        alert(current);
        if (current == to) {
            clearInterval(timerId);
        }
        current++;
    }, 1000);
}

// usage:
printNumbers(5, 10);
function printNumbers(from, to) {
    let current = from;

    setTimeout(function go() {
        alert(current);
        if (current < to) {
            setTimeout(go, 1000);
        }
        current++;
    }, 1000);
}

// usage:
printNumbers(5, 10);

function printNumbers(from, to) {
    let current = from;

    function go() {
        alert(current);
        if (current == to) {
            clearInterval(timerId);
        }
        current++;
    }

    go();
    let timerId = setInterval(go, 1000);
}
*/


