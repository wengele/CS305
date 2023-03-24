
/*const numArray = [1, 2, 3, 4];
[numArray[3], numArray[4]] = [5, 6, 7, 8];
console.log(numArray);*/
/*function area() { console.log(3.14 * this.radius * this.radius); }
const circle = { radius: 1, area: area };

setTimeout(circle.area(), 5000);*/

function Person(name) {
    console.log(this);
    this.name = name;
    console.log(this);
}
function Doctor(name, department) {
    console.log(this);
    Person.call(this, name, department);
    console.log(this);
    this.dept = department;

}
Doctor.prototype.report = function () {
    return "Medical report";
};
function Surgeon(name, department) {
    console.log(this);
    Doctor.call(this, name, department);
    console.log(this);
}
Surgeon.prototype.operate = function () {
    return "operation performed";
}
Surgeon.prototype.__proto__ = Doctor.prototype;
surg1 = new Surgeon("Fred", "cardiology");
