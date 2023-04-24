let coach6 = { name: 'C4', next: null }
let coach5 = { name: 'C4', next: coach6 }
let coach4 = { name: 'C4', next: coach5 }
let coach3 = { name: 'C3', next: coach4 }
let coach2 = { name: 'C2', next: coach3 }
let coach1 = { name: 'C1', next: coach2 }

function printValues(coach1) {
    if (coach1 != null) {
        console.log(coach1.name);
        printValues(coach1.next)
    }
}

//console.log(printValues(coach1));
/*function deleteNode(coach, node) {
    if (!coach) {
        return;
    }

    if (coach.name === node) {
        coach.next = coach.next.next;
        return;
    }
    return deleteNode(coach.next, node);
}

//deleteNode(coach1, "C3");
console.log(deleteNode(coach3, "C3"));*/
function count(coach) {
    if (!coach)
        return 0;
    return 1 + count(coach.next);
}
console.log(count(coach1));
function deleteNode(coach) {
    return coach.next.next.next = null
}
console.log(deleteNode(coach2));