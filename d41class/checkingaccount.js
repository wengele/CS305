"use strict";
/* global Account  */

//const acc = require("./account.js");//with node need the name of your file with your functions here
//const Account = acc.Account;  //do this for all of the functions used in the Mocha tests

/* exports at end of file since exporting an object, which can only be referenced after definition   */

import { Account } from "./account.js";

export class CheckingAccount extends Account {

    constructor(number, overdraft) {
        super(number);
        this._overdraft = overdraft;
    }

    getNumber() {
        return this._number;
    }
    getOverdraft() {
        return this._overdraft;
    }
    setOverdraft(value) {
        return this._overdraft = value;
    }


    getBalance() {
        return
    }
    withdraw(amount) {
        if (this._balance < 0 && -1 * (this._balance - amount) >= this._overdraft) {
            throw new RangeError("Withdraw amount has to be greater than zero");
        }
        if (amount > this._overdraft) {
            throw Error("Insufficient funds, cannot withdraw beyond overdraft limit");
        }
        if (amount <= 0) {
            throw new RangeError("Withdraw amount has to be greater than zero");
        }
        /*if (amount > this._balance) {
            throw Error("Insufficient funds");
            || amount > this._balance
        }*/
        this._balance -= amount;
    }

    getBalance() {
        return super.getBalance();
    }

    toString() {
        return "CheckingAccount " + this._number + ": balance: " + this.getBalance() + " overdraft limit: " + this._overdraft;

    }
    endOfMonth() {
        if (this._balance < 0) {
            return "Warning, low balance CheckingAccount " + this._number + ": balance: " + this.getBalance() + " overdraft limit: " + this._overdraft;
        } else {
            return "";
        }
    }


}

















/* global exports */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser
*/
//exports.CheckingAccount = CheckingAccount;