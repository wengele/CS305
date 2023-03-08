


export const calculator = {

    setValues() {
        this.a = 2;
        this.b = 3;

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
