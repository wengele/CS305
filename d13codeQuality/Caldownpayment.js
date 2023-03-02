export function calDownpayment(cost) {
    let downPayment;
    if (cost < 50000) {
        downPayment = cost * 0.05;
    } else if (cost >= 50000 && cost < 100000) {
        downPayment = 2500 + (cost - 50000) * 0.1;
    } else if (cost >= 100000 && cost < 200000) {
        downPayment = 7500 + (cost - 100000) * 0.15;
    } else {
        downPayment = 20000 + (cost - 200000) * 0.1;
    }
    return downPayment;
}
console.log(calDownpayment(50000));

