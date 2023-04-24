
let el4
    =
{
    value: 4,
    next: null
};
let el3
    =
{
    value: 3,
    next: el4
};
let el2
    =
{
    value: 2,
    next: el3
};
let list
    =
{
    value: 1,
    next: el2
};

function linkedrecu(list) {
    if (list != null) {
        console.log(list.value);
        linkedrecu(list.next);
    }


}
//console.log(linkedrecu(list));



function appendvalue(list) {
    let newvalue = '';
    if (list != null) {

        let result;
        if (list.next) {
            result = '->';
        } else {
            result = '';
        }

        newvalue += list.value + result + appendvalue(list.next);



    }
    console.log(newvalue);
    return newvalue;
}
console.log(appendvalue(list));



function countnodes(list) {
    if (list === null) {
        return 0;
    }
    let count = 1;

    return count + countnodes(list.next);


}
console.log(countnodes(list));
function checkIfNodeExists(list, givennumb) {
    if (list === null)
        return false;

    if (list.value === givennumb)
        return true;
    return checkIfNodeExists(list.next, givennumb);
}

console.log(checkIfNodeExists(list, 1));


function arrayOfNodes(list) {
    newvalue = [];
    if (list !== null)


        newvalue = [list.value].concat(arrayOfNodes(list.next))
    return newvalue;

}
function addNodeAfter(list, numb, node) {
    if (list !== null)
        if (list.value === numb) {
            let temp = list.next;
            list.next = { value: node, next: temp }
            return;
        }
    return addNodeAfter(list.next, numb, node);
}
addNodeAfter(list, 2, 'New Node');
console.log(JSON.stringify(list));

function deleteNode(list, num) {
    if (list !== null)
        if (list.value === num)
            list.next = list.next.next;

    return deleteNode(list.next, num);

}

function sublist(list, num) {
    if (list !== num)
        if (list.value == num) {
            return list;
        }
    return sublist(list.next, num);
}
console.log(sublist(list, 2));

