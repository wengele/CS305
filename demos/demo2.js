"use strict";

/*function foo() {
    console.log(this);
    this.y = this.y + 1;
    console.log(this.y);
}
const abc = { x: 1, y: 100, z: foo };
console.log(abc.z());
foo();*/
/*let team = { point: "Bob", shooting: "Fred", power: "Jim", small: "Al", center: "Big Sleep" };
let { point: one, two, three, four, five } = team;

console.log(one);*/

/*let bob = 10;
function bill(bob, jim) {
    jim = bob * 2;
    return jim;
}
let jim = bob * 2;
console.log(jim);
console.log(bill(jim, bob));
*/
let dog = "dog";
function morph() {
    let dog = "cat";
    let cat = dog;
    console.log(dog);
    console.log(cat);
}
morph();
console.log(dog);
console.log(cat);
const bank = { transactionsDB: [], };
bank.transactionsDB = [
    { customerId: 1, customerTransactions: [10, 50, -40] },
    { customerId: 2, customerTransactions: [10, 10, -10] },
    { customerId: 3, customerTransactions: [25, -5, 55] }];
//return array with all customers who had deposits greater than 20.  
//array should contain objects with customerId and the transaction amount for each such transaction
console.log("expect [{custId: 1, amount: 50}, {custId: 3, amount: 25}, {custId: 3, amount 55}] : ",
    findTransactionsByAmount(bank));
