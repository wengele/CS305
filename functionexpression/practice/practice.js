/*let abc = 123;

function myfun(xyz) {
    xyz = xyz % 100; // Take the remainder of xyz divided by 100
    console.log(xyz); // Log the new value of xyz
    abc = xyz + 200; // Set the value of abc to the new value of xyz plus 200
    return xyz + abc;
    //console.log(xyz); // Return the sum of the new value of xyz and the new value of abc
}
console.log(abc);
console.log(myfun(abc)); // Call myfun with abc as the argument and log the return value
console.log(abc);
console.log(xyz);*/

/*function checkexam(corrct1, arr2) {
    let count = 0;
    for (let i = 0; i < corrct1.length; i++) {
        if (corrct1[i] === arr2[i]) {
            count += 4;
        } else {
            count--;
        }

    }
    if (count < 0) return 0;
    return count;
}
console.log(checkexam(["a", "a", "b", "b"], ["a", "c", "b", "d"]));
*/


/*function addmitrix(arr1, arr2) {
    let bigarray = [];
    for (let i = 0; i < arr1.length; i++) {
        let innerarr = [];
        for (let j = 0; j < arr1[i].length; j++) {
            innerarr.push(arr1[i][j] + arr2[i][j]);
        }
        bigarray.push(innerarr);
    }
    return bigarray;

}

console.log(addmitrix([[1, 2, 3], [2, 2, 3]], [[1, 2, 3], [2, 2, 3]]));
*/
/*function largestPrimeFactor(num) {
    if (num <= 1) return 0;
    let factors = [];
    let max = 0;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            factors.push(i);
        }
    }
    for (const elem of factors) {
        if (prime(elem) && max < elem) {
            max = elem;
        }
    }
    return max;
}
function prime(num) {
    if (!num) return;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}



console.log(largestPrimeFactor(10));
console.log(largestPrimeFactor(6936));
console.log(largestPrimeFactor(1));

*/
/*function findMaxAndAverage(arr) {
    const result = [];
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        const innerArr = arr[i];
        sum += innerArr[i]
        const max = Math.max(...innerArr);
        const average = sum / innerArr.length;
        result.push(max, average);
    }
    return result;
}

const arr = [[1, 2, 3, 4, 5], [10, 20, 30, 60], [300, 200, 100]];
const charges = findMaxAndAverage(arr);
console.log(charges); // [[3, [3]], [30, [20]], 200]


function factor(num) {
    let max = 0;
    let factor = [];
    for (let i = 2; i < num.legth; i++) {
        if (num % i) {
            factor.push
        }
    }

    for (let elem of num) {
        if (Promise(elm) &&)
    }
}*/
/*function odds(array) {
    let newarray = [];
    for (let number of array) {
        if (number % 2 === 1) {
            newarray.push(number);
        }
    }
    return newarray;


}

console.log(odds([5, 6, 7, 8, 9])); expected[5, 7, 9]*/
/*function largest(arr) {
    let largestnumber = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largestnumber) {
            largestnumber = arr[i];
        }

    }

    return largestnumber;

}
console.log(largest([10, 20, 30]));*/
function swapMinMax(arr) {
    let min = arr[0];
    let max = arr[0];
    let minIndex = 0;
    let maxIndex = 0;

    // Find the minimum and maximum elements and their indexes
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
            minIndex = i;
        }
        if (arr[i] > max) {
            max = arr[i];
            maxIndex = i;
        }
    }

    // Swap the elements using destructuring assignment
    [arr[minIndex], arr[maxIndex]] = [arr[maxIndex], arr[minIndex]];

    return arr;
}