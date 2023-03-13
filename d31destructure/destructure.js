//"use strict";
/* eslint-disable */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
//module.exports = { topSalary }; //add all of your function names here that you need for the node mocha tests

/*let user = {
    name: "John",
    years: 30
};
let { name, years: age, isAdmin = "false" } = user;
console.log(age);
*/
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};
/**
 * 
 * @param {*object} salaries 
 * @returns name
 */
export function topSalary(salaries) {
    let maxSalary = 0;
    let topperson = null;
    for (const [name, salary] of Object.entries(salaries)) {
        if (salary > maxSalary) {
            maxSalary = salary;
            topperson = name;
        }
    }
    return topperson;

}

console.log(topSalary(salaries));

/*let A = {
    name: "John Smith",
    age: 35
};

let json = JSON.stringify(A);
console.log(json);
let tjson = JSON.parse(json);
console.log(tjson);*/