/*function User(name, age) {
    this.age = age;
    this.name = name;
}
User.prototype.sayhi = function () {
    return this.name + " is name";
}
let wilo = new User("wilo", 12);
console.log(wilo.age === 12);
console.log(wilo.__proto__.age === 12);
console.log(User.__proto__.name === "wilo");
//console.log(User.prototype.sayhi() === "wilo is name");
let kk = new User("kk", 12);
console.log(User.prototype.name === "kk");
*/

function Sensor(id, name, type, manufacter, events) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.manufacter = manufacter;
    this.events = events;
}

let frontDoor = new Sensor(1, "front door sensor", 34, "climax", [{ time: 100, name: "door closed" }, { time: 101, name: "Door opened" }])
let motorSensor = new Sensor(2, "front door sensor", 43, "NYCE", [{ time: 100, name: "motor dectected" }])
let porticoligth = new Sensor(3, "portico ligth", 54, "osram", [{ time: 100, name: "light off" }])
let mainEnterance = new Sensor(4, "main enternace", 34, "climax", [{ time: 100, name: "door closed" }])
let list = [frontDoor, motorSensor, porticoligth, mainEnterance];

function sensroBytype(list, type) {
    let result = [];

    for (const sensr of list) {
        if (sensr.type === type) {
            result.push(sensr);
        }
    }
    return result;
}
//console.log(sensroBytype(list, 34));

function collectManf(list) {
    let result = [];
    for (const element of list) {
        if (!result.includes(element.manufacter)) {
            result.push(element.manufacter);
        }
    }
    return result;
}

//console.log(collectManf(list));

function eventcomer(list, id) {
    let sensor = list.find(elem => elem.id === id);
    if (!sensor) {
        return null;
    }

    let event = sensor.events;
    let max = event[0];
    for (let i = 0; i < event.length; i++) {
        if (event[i].time > max.time) {
            max = event[i];
        }
    }
    return max;
}

//console.log(eventcomer(list, 1));

function Increment(intial) {
    this.current = intial;

    this.increment = function (numb) {
        return this.current += numb;
    }

    this.decrement = function (num) {
        return this.current -= num;
    }
}

let tt = new Increment(100);

//console.log(tt.increment(1));
//console.log(tt.decrement(2));

function makeSecure() {
    let secore = [];
    return function (element, operation) {
        if (operation === "push") {
            secore.push(element);
            return;
        } else if (operation === "pop") {
            let poped = secore.pop();
            return poped;
        } else {
            return secore;
        }
    }
}
let secur = makeSecure();
/*console.log(secur(1, "push"));
console.log(secur(2, "push"));
console.log(secur(3, "push"));
console.log(secur(null, "pop"));
console.log(secur(55, "push"));
console.log(secur(null, "view"));
*/
function coundeown(intger) {
    let timerid = setInterval(tick, 1000);
    function tick() {
        console.log(intger)
        if (intger <= 0) {
            clearInterval(timerid);
        } else {
            intger--;
        }
    }

}
console.log(coundeown(4));
function Person(name) {
    console.log("Person1 this: ", this);// Person {}
    this.name = name;
    console.log("Person2 this: ", this);//Person { name: undefined }
}

function Doctor(name, department) {
    console.log("xxxx1: ", this);//Doctor {}
    Person.call(this, name, department);
    console.log("xxxx2: ", this);//Doctor { name: undefined }
    this.dept = department;
}

Doctor.prototype.report = function () {
    return "medical report";
};

function Surgean(name, department) {
    console.log(this);
    Doctor.call(this, name, department);
    console.log(this);
}

Surgean.prototype.operate = function () {
    return "operation performed";
};

Surgean.prototype._proto_ = Doctor.prototype;
let surg1 = new Surgean("Fred", "Cardiology");