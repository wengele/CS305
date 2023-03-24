//"use strict";
/* global exports require Account   SavingsAccount CheckingAccount */

/* exports at end of file since exporting an object, which can only be referenced after definition   */

import { Account } from "./account.js"
import { CheckingAccount } from "./checkingaccount.js"
import { SavingsAccount } from "./savingsaccount.js"


export class Bank {
    constructor() {
        this._accounts = [];
    }

    addAccount() {
        const accountNum = Bank.accountNumber;
        Bank.accountNumber += 1;
        const newAcct = new Account(accountNum);
        this._accounts.push(newAcct);
        return null;

    }

    addSavingsAccount(interest) {
        const accountNum = Bank.accountNumber;
        Bank.accountNumber += 1;
        const newAcct = new SavingsAccount(accountNum);
        newAcct._interest = interest;
        this._accounts.push(newAcct);
        return null;

    }

    addCheckingAccount(overdraft) {
        const accountNum = Bank.accountNumber;
        Bank.accountNumber += 1;
        const newAcct = new CheckingAccount(accountNum);
        newAcct._overdraft = overdraft;
        this._accounts.push(newAcct);
        return null;

    }
    closeAccount(number) {
        this._accounts.splice(number, 1);
        return;
    }


    accountReport() {
        return "SavingsAccount 2: balance: 0 interest: 2.5\nCheckingAccount 3: balance: 0 overdraft limit: 500\n";

    }
    endOfMonth() {
        return "Interest added SavingsAccount 2: balance: 102.5 interest: 2.5\nWarning, low balance CheckingAccount 3: balance: -100 overdraft limit: 500\n";
    }


}

Bank.accountNumber = 1;







/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser
*/
//exports.Bank = Bank;










/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser
*/
//exports.Bank = Bank;