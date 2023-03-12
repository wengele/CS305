"use strict"
/* eslint-disable */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
//module.exports = { doubleNums, doubleAges, filterEven, filterOver10, findEvenNum, findEvenAge}; //add all of your function names here that you need for the node mocha tests


export function doubleNums(arr) {
    return arr.map(num => num * 2);
}
console.log(doubleNums([2, 3, 4, 5]))

export function doubleAges(arr) {
    return arr.map(people => { return { name: people.name, age: people.age * 2 } });

}

export function filterEven(array) {
    return array.filter(number => number % 2 === 0);

}

export function filterOver10(arr) {
    return arr.filter(people => people.age > 10);

}

export function findEvenNum(arr) {
    return arr.find(number => number % 2 === 0);

}


export function findEvenAge(arr) {
    return arr.find(person => person.age % 2 === 0 && person.age !== 0);


}


export function includesEvenNum(arr) {
    return arr.includes(num => num % 2 === 0);
}


export function includesEvenAge(arr) {
    return arr.some(person => person.age % 2 === 0);


}



