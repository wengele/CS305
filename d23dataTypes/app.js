
/**
 * 
 * @param {*} str 
 */
export function ucFirst(str) {
  if (!str) {
    return str;
  }
  return (str[0].toUpperCase() + str.slice(1));

}


/**
 * 
 * @param {*} str 
 */
export function checkSpam(str) {


  return str.toLowerCase().includes('viagra') || str.toLowerCase().includes('xxx');
}



/**
 * 
 * @param {*} str 
 * @param {*} maxlength 
 */
export function truncate(str, maxlength) {
  return (str.length > maxlength) ?
    str.slice(0, maxlength - 1) + '…' : str;

}




/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} the total of the maximal subarray
 
 */
export function getMaxSubSum(arr) {

  let maxSum = 0;
  let partialSum = 0;

  for (let item of arr) {
    partialSum += item;
    maxSum = Math.max(maxSum, partialSum);
    if (partialSum < 0) partialSum = 0;
  }

  return maxSum;
}



export function camelize(str) {
  return str
    .split('-')
    .map(

      (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join('');
}




export function extractCurrencyValue(str) {
  return +str.slice(1);
} 
