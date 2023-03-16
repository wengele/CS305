"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
*/
//module.exports = {copyArray, concat, findMin, combineObjs }; //add all of your function names here that you need for the node mocha tests


/**
 * 
 * @param {*array} arr 
 * @returns array
 * it will return a copy of the array;
 */
export function copyArray(arr) {
    return [...arr];

}


/**
 * 
 * @param {*array} arr1 
 * @param {*array} arr2 
 * @returns array of the two combined array
 */
export function concat(arr1, arr2) {
    let result = [...arr1, ...arr2];
    return result;
}

//console.log(concat([1, 2, 4], [2, 3, 4]));



/**
 * 
 * @param  {...any} numbers 
 * @returns it will return the minu value of the argument
 */
export function findMin(...numbers) {
    return Math.min(...numbers);

}

export function findMax(...numbers) {
    return Math.max(...numbers);

}

/**
 * 
 * @param {*object} obj1 
 * @param {*object} obj2 
 * @returns it will return an object of the two given objects.
 */

export function combineObjs(obj1, obj2) {
    let total = { ...obj1, ...obj2 };
    return total;
}