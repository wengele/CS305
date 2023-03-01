//input numbers;
// process we add the reminder and then divide by then 10 
// output sum 


function sumDigit(number) {
    let sum = 0;
    while (number > 0) {
        sum += number % 10;
        number = Math.floor(number / 10);
    }
    return sum;
}

function multiDigit(number) {
    let product = 1;
    while (number > 0) {
        product *= number % 10;
        number = Math.floor(number / 10);
    }
    return product;
}
console.log(multiDigit(333));
