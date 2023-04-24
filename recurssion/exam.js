/*let el4 = { value: 4, next: null };

let el3 = { value: 3, next: el4 };

let el2 = { value: 2, next: el3 };

let list = { value: 1, next: el2 };

function printrev(list) {
    let str = '';
    if (list === null) return str;
    s = printrev(list.next) + list.value;
    return s;


}

function appends(list) {
    let string = '';
    if (list) {
        let separator;
        if (list.next) {
            separator = '->';
        } else {
            separator = '';
        }
        string = list.value + separator + appends(list.next);

    }
    //console.log(list.value);
    return string;

}
console.log(appends(list));

function countde(list) {
    let arra = [];
    if (!list)
        return 0;
    return 1 + countde(list.next);
}

console.log(countde(list));

function dew(list, node) {
    if (!list) {
        return false;
    }
    if (list.value === node) {
        return true;
    }
    return dew(list.next, node);

}
console.log(dew(list, 3));
function deww(list) {
    let arra = []
    if (list) {
        arra = [list.value].concat(deww(list.next));

    }
    return arra;
}
console.log(deww(list));

function newnodee(list, node, newNode) {
    // let temp;
    if (!list)
        return
    if (list === node) {
        let temp = list.next;
        list.next = { value: newNode, next: temp };
        return;
    }

    return newnodee(list.next, node, newNode);
}
newnodee(list, 3, 'newnode');
console.log(JSON.stringify(list));

function subset(list, node) {
    if (!list)
        return;
    if (list.value === node) {
        return list
    }
    return subset(list.next, node);
}

console.log(subset(list, 1));
*/
let paperback = { name: "Paperback", children: null }
let desktop = { name: "Desktop", children: null }
let hardware = { name: "Hardware", children: [desktop] }
let sales = { name: "Sales", children: [paperback] }
let books = { name: "Books", children: [sales] }
let shop = { name: "Shop", children: [books, hardware] }

function getObject(tree) {
    //console.log(tree.name + ":" + tree.children);
    console.log(tree.name + ":" + JSON.stringify(tree.children));
    if (!tree.children)
        return;


    for (const child of tree.children) {

        return getObject(child)
    }
}
getObject(shop)

let list = { a: 1, b: 2, c: { a: [1, 2] } };

function printkeaf(list) {
    let valu = [];
    for (let child in list) {
        if (typeof list[child] === 'object') {
            valu = valu.concat(printkeaf(list[child]))
        } else {
            valu.push(list[child]);
        }
    }
    return valu;
}
console.log(printkeaf(list));