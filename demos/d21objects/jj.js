let head = {
    glasses: 1
};
let table = {
    pen: 3
};
let bed = {
    sheet: 1,
    pillow: 2,
    __proto__: head

};
let pockets = {
    money: 2000,
    __proto__: table
};
console.log("expect 3: ", pockets.pen);

function User(firstname, lastname, birthDate) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.birthDate = birthDate;
}
let user1 = new User('John', 'Smith', new Date('2000-10-01'));
let user2 = new User('Edward', 'Hopkins', new Date('1991-11-14'));
function getFullName() { return this.firstname + ' ' + this.lastname; }
function getAge() { return new Date().getFullYear() - this.birthDate.getFullYear(); }
