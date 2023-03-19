"use strict";
function a() {
    console.log(this);
}
const b = {
    dog: 'fido',
    log: function () {
        console.log(this);
    }
}
console.log(this);
a();
b.log();
let mylog = b.log;
mylog();