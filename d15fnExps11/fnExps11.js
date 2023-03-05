

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser
*/
//add all of your function names here that you need for the node mocha tests

/**
 * 
 * @param {number} number number is our parameter
 * @returns it will return double the number.
 */

export function double(number) {
    return number * 2;
}

/**
 * 
 * @param {number} number 
 * @returns number multipiled by 100
 */
export function times100(number) {
    return number * 100;
}


/**
 * 
 * @param {*array } array the get number of array
 * @param {callback} which call another function
 * @returns we have double number of array(we multiply by two)
 */
export function myMap(array, callback) {
    let newArray = [];
    for (let number of array) {
        let res = callback(number)
        newArray.push(res);
    }
    return newArray;
}


/**
 * 
 * @param {Number} NUMBER parameter have array of number
 * @returns it will return triple of the number or number*3
 */
export let newMap = (number) => number * 3;


