
/*function bar(a1, a2, a3, a4) {
    if (a1 === true) {
        return a3(a2);
    } else {
        return a4(a2);
    }

}
function foo2() { }
console.log(bar(true, 1, fn1, fn2));
console.log(bar(false, 2, fn1, fn2));

function fn1(num) { return num + 100; }
function fn2(num) { return num * 10; }

foo2();*/
function foo(bat) {
    if (bat) {
        bat = console.log("bat");
        return bat;
    }
    const long = console.log("short");
    return long;
}
console.log(foo());
/*function myT(name, age) {
    this.name = name;
    this.age = age;
}
const tk = new myT("tk", 20);
console.log(tk);*/
/*const string = "1233 4345 3231";
const sortedString = string.split(" ").sort((a, b) => b - a).join(" ");
let st = "";
st + sortedString

what if we want to sort the 3rd elemt in asccdeing order.
console.log(st); // "1233 3231 4345"
*/

/*let bob = [{ fr: "t" }, { rt: "we" }]
let ned = [{ we: "t" }, { wr: "we" }]

function abc() {
    const arr = [];
    for (const elements of bob) {
        arr.push(elements);
    }
    return arr;
}
console.log(abc());*/
"use strict";
function foo() {
    console.log(this);
    this.y = this.y + 1;
    console.log(this.y);

}
const abc = { x: 1, y: 100, z: foo };
console.log(abc.z());

const donation1 = { fund: 1, ammou: 100 };
const donation2 = { fund: 2, ammou: 10 };
const donation3 = { fund: 3, ammou: 1 };
const donation4 = { fund: 4, ammou: 5 };
const donation5 = { fund: 5, ammou: 15 };
const da1 = { donations: [donation1, donation2], date: "01/10/2022" };
const da2 = { dontations: [donation3, donation4, donation5], date: "01/10/2022" };
const dailyrecord = [da1, da2];
//find the dailytotal

let dailytotal = 0;

for (let i = 0; i < dailyrecord.length; i++) {
    const donations = dailyrecord[i].donations;
    for (let j = 0; j < donations.length; j++) {
        dailytotal += donations[j].ammou;
    }
}

console.log(dailytotal); // Output: 131
const dailyTotal = dailyrecord.reduce((acc, { donations }) => {
    return acc + donations.reduce((donationAcc, { amount }) => {
        return donationAcc + amount;
    }, 0);
}, 0);



console.log(dailyTotal);* /





const numArray = [5, 0, 7, 77, -20, 300, 51, 2]
const peopleArray = [{ name: "Sam", age: 15 }, { name: "William", age: 6 }, { name: "Lucy", age: 13 }, {
    name:
        "Barney", age: 80
}]

/*let result = numArray.map(number => number * 2);
console.log(result);
let result1 = peopleArray.map(people => { return { name: people.name, age: people.age * 2 } });
console.log(result1);
let result3 = numArray.filter(number => number % 2 === 0);
console.log(result3);
let result4 = peopleArray.filter(pop => pop.age > 10);
console.log(result4)
let result5 = numArray.find(number => number % 2 === 0);
console.log(result5);
let result6 = peopleArray.find(number => number.age > 10);
console.log(result6);
let result7 = numArray.reduce((sum, current) => sum + current, 0);
console.log(result7);
let result8 = numArray.reduce((sum, current) => sum + current, 0) / numArray.length;
console.log(result8);
let result9 = numArray.reduce((max, current) => max > current ? max : current);
console.log(result9);
let result10 = peopleArray.reduce((max, current) => current.age < max ? max : current.age);
console.log(result10);
*/

function sumEven(peopleArray) {
    let filterd = peopleArray.filter(number => number.age % 2 == 0);
    let map = filterd.map(number => number.age);
    let sumed = map.reduce((sum, current) => sum + current, 0);

    return sumed;
}
console.log(sumEven(peopleArray));

function sumOdd(peopleArray) {
    let filterd = peopleArray.filter(number => number.age % 2 !== 0);
    let map = filterd.map(number => number.age);
    let sumed = map.reduce((sum, current) => sum + current, 0);

    return sumed;
}
console.log(sumOdd(peopleArray));

