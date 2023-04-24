

/*function recursivcontn(array, string) {
    if (array.length <= 0) {
        return false;
    }
    if (array[0] === string) {
        return true;
    }
    array.shift()
    return recursivcontn(array, string)


}

console.log(recursivcontn(['apple', 'banana', 'grapes'], 'grapes'))
console.log(recursivcontn(['apple', 'banana', 'grapes'], 'pear'))
*/

//console.log(contains('apple','a'))= true
function recurfind(string, chr) {
    if (string === '') {
        return false;
    }
    if (string[0] === chr) {
        return true;
    }

    return recurfind(string.substring(1), chr);

}
console.log(recurfind('apple', 'a'));


//console.log(concatenate(['apple', 'banana', 'grapes']))//applebananagrapes

function concentration(array) {
    if (array.length <= 0) {
        return 0;
    }
    let total = array[0];
    array.shift();
    return total + concentration(array)

}
console.log(concentration(['apple', 'banana', 'grapes']));


function findLastIndexOf(array, string) {
    if (array.length <= 0) {
        return 0;
    }
    //let index = 0;
    let lastIndex = findLastIndexOf(array.slice(0, -1), string);
    if (lastIndex !== -1) {
        return lastIndex;
    }
    if (array[array.length - 1] === string) {
        return array.length - 1;
    }
    return -1;
}
console.log("strin", (findLastIndexOf(['apple', 'banana', 'apple'], 'apple')))//2

//Find Maximum number in the array
function findMax(array) {
    if (array.length === 1) {
        return array[0];
    }
    let max = array[0];
    let subarray = findMax(array.slice(1));
    if (subarray > max) {
        return subarray;
    } else {
        return max;
    }

}
console.log(findMax([4, 5, 2, 3]));//5
function findMin(array) {
    if (array.length === 1) {
        return array[0];
    }
    let min = array[0];
    let subarray = findMin(array.slice(1));
    if (subarray < min) {
        return subarray;
    } else {
        return min;
    }

}
//Find number of occurrences of element in the array
console.log(findMin([4, 5, 2, 3]));//5
function findOccurence(array, string) {
    if (array.length <= 0) {
        return 0;
    }
    let total = 0;
    if (array[0] === string) {
        total = 1;
    }
    //array.shift();
    return total + findOccurence(array.slice(1), string);

}
/*function countDou(string, char) {
    console.log(string, char);
    if (string.length === 0) {
        return 0;
    }
    else if (string.charAt(0) === char) {
        return 1 + countDou(string.substring(1), char);

    } else {
        return 0 + countDou(string.substring(1), char);
    }


}
//console.log(findOccurence(['apple', 'banana', 'apple'], 'banana'));//2

// Get the sum of salaries of all employees whose name is 'John'.
//Get all the employee names, should give result as an Array.
