function sumAll(...args) { // args is the name for the array
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