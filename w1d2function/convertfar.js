// input Fahrenheit as a parmeter
// process use a formula
// output Celsius

function convFahrenheit(Fahrenheit) {
    let x = 5 / 9;
    const convtoCelsius = (Fahrenheit - 32) * x;
    return convtoCelsius.toFixed(4);
}

console.log(convFahrenheit(0));