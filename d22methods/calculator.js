


export const calculator = {
    a: 0,
    b: 0,
    setValues: function (avalue, bvalue) {
        this.a = avalue;
        this.b = bvalue;
    },
    sum() {
        return this.a + this.b;
    },
    mul() {
        return this.a * this.b;
    }

};  // implement this
calculator.setValues();
console.log(calculator.sum());
console.log(calculator.mul());
