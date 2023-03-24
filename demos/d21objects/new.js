myObj.[[Prototype]] = { name: "grandfather" };
function area() { return this.side * this.side }
const square1 = {
    side: 5,
    //area: area
};
square1.__proto__ = { area: area };//IMPLEMENTATION NEEDED//object literal
function Square(side) {
    this.side = side;
}
Square.prototype = { area: area }
//IMPLEMENTATION NEEDED
class Square2 {
    constructor(side) {
        this.side = side;
    }
    area() {
        return (this.side * this.side);
    }

}


