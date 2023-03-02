/**
 * 
 */

function swap(a, b) {
    let temp = a;
    a = b;
    b = temp;
}

let x = 5;
let y = 10;
swap(x, y);
console.log("expect 10,5", x, y);