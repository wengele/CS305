let [name = "Bob", surname = "Fred"] = ["bob"];
console.log();
//
/*Create bank object, bank, with methods:
a.	debit(id, amount) , adds negative amount to customer transaction list,
 but only if the amount is greater than the current balance.
b.	credit(id, amount), adds positive amount to customer transaction list
c.	getBalance(id) returns current balance of that customer.
  The balance should be computed as the sum of all recorded transaction amounts.
d/  saveTransaction(id, amount) saves this transaction amount to the 
customerTransactions list for this customer
e.	getBankBalance:  returns sum of all customer balances
The bank object should have a transactionsDB property, which will be an array of objects containing all of the customer objects.
  Customer objects will have properties customerId and customerTransactions, e.g., 
{customerId: 1234, customerTransactions: [10, 50, -40] } would be one element of the array.

*/
const bank = {
    transactionsDB: [],
};

bank.transactionsDB = [
    { customerId: 1, customerTransactions: [10, 50, -40] },
    { customerId: 2, customerTransactions: [10, 10, -10] },
    { customerId: 3, customerTransactions: [5, -5, 55] }];

bank.savTransaction = function (id, amount) {
    const customer = bank.transactionsDB.find(person => person.customerId === id);
    customer.customerTransactions.push(amount);

}
bank.getBalance = function (id) {

    const cut = bank.transactionsDB.find(cut.studentId === id);
    sum = 0;
    for (let i = 0; i < cut.customerTransactions.length; i++) {
        sum += cut.customerTransactions[i];
    }
    return sum;


};
bank.credit = function (id, amount) {
    if (bank.getBalance(id) > amount) {
        this.savTransaction(id, -amount);

    }
};
bank.credit = function (id, amount) {
    this.savTransaction(id, amount);
};

bank.getBankBalance = function () {
    let sum = 0;
    for (const cutomer of bank.transactionsDB) {
        sum += this.getBalance(cutomer.id);
    }
    return sum;
}