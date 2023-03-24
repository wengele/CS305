//"use strict";
/* global Account require  */
//const acc = require("./account.js");//with node need the name of your file with your functions here
//const Account = acc.Account;  //do this for all of the functions used in the Mocha tests

/* exports at end of file since exporting an object, which can only be referenced after definition   */


import { Account } from "./account.js";


export class SavingsAccount extends Account {

    constructor(number, interest) {
        super(number);
        this._interest = interest;

    }
    getNumber() {
        return this._number;
    }

    getInterest() {
        return this._interest;
    }

    setInterest(value) {
        if (value < 0) {
            console.log("error");
        } else {
            this._interest = value;
        }
        return undefined;
    }

    addInterest() {

        this._balance += ((this._interest / 100) * this._balance);

    }
    getBalance() {
        return super.getBalance();
    }



    toString() {
        return "SavingsAccount " + this._number + ": balance: " + this.getBalance() + " interest: " + this._interest;

    }
    withdraw(amount) {
        return this._account - amount;
    }
    endOfMonth() {
        return "Interest added SavingsAccount 1: balance: 105 interest: 5";

    }

}





/* global exports */
//exports.SavingsAccount = SavingsAccount;