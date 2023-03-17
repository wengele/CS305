"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser.
*/
//module.exports = { myMap, myFilter, myReduce }; //add all of your function names here that you need for the node mocha tests

/**
 * 
 * @param {*} arr 
 * @param {*} func 
 * @returns array
 */

export function myMap(arr, func) {
    //IMPLEMENTATION NEEDED

    //const newarr = arr.map(function (number) { return number * 10 });
    const y = arr.map(func);
    return y;
}

//console.log(myMap([2, 3, 5], timesTen));
/**
 * 
 * @param {*} arr 
 * @param {*} func 
 * @returns array
 */
export function myFilter(arr, func) {

    return arr.filter(func);

    //IMPLEMENTATION NEEDED
}

/**
 * 
 * @param {*} arr 
 * @param {*} func 
 * @param {*} initialValue 
 * @returns number
 */
export function myReduce(arr, func, initialValue) {
    //IMPLEMENTATION NEEDED
    return arr.reduce(func, initialValue);
}