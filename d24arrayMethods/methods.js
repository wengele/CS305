//"use strict"

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
//module.exports = { groupById, unique, filterRangeInPlace, filterRange, Calculator }; //add all of your function names here that you need for the node mocha tests


export function filterRange(arr, a, b) {

  return arr.filter(number => (number >= a && number <= b));


}
//console.log(filterRange([5, 3, 8, 1], 1, 4));


export function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < a || arr[i] > b) {
      arr.splice(i, 1);
      i--;
    }
  }
}


function Calculator() {


}

export function unique(arr) {
  let newstring = [];
  for (let str of arr) {
    if (!newstring.includes(str)) {
      newstring.push(str);
    }
  }
  return newstring;
}


function groupById(array) {
}