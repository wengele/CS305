/*function swapMinMax(arr) {
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

console.log(swapMinMax([1, 2, 3, 4]));
input: array of numbers

outputs = the min and the max will swap
steps1 = first let's assume min and max of the array is at array[0] and their index is 0
set2 = we do loop starting from the second i until the end of array.length
step3 = if our array element is greater than max we will make the new array element max and element to the maxindex(assign)
step 4 = if our array element is greater than max we will make the new array element max and element to the maxindex(.assign)
step5 = Then we will swap the element which are the max and the min or they will take each others value.
function swap(array) {
    let min = array[0];
    max = array[0];
    let minIndex = 0;
    let maxIndex = 0;
    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
            maxIndex = i;
        }
        if (array[i] < min) {
            min = array[i];
            minIndex = i;
        }


    }
    [array[maxIndex], array[minIndex]] = [array[minIndex], array[maxIndex]];

}

console.log(swap([1, 2, 3, 4])); will give us[4, 2, 3, 1];

*/
function matrixMatch(testarr1, testarr2) {
    let newArray = [];
    for (let i = 0; i < testarr1.length; i++) {

        for (let j = 0; j < testarr1[i].length; j++) {
            if (testarr1[i][j] === testarr2[i][j]) {
                newArray.push(testarr1[i][j]);
            }
        }




    }
    return newArray;
}
console.log(matrixMatch([[1, 2, 3], [5, 2, 3], [9, 2, 3]], [[1, 2, 10], [3, 2, 5], [9, 6, 7]]));