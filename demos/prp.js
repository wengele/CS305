/*let arr = [1, 2, 3, 4];


let [va1, va2, ...v3] = arr;

console.log(v3[0]);*/

/*function makeCounter() {

    let count = 0;
    function innerFunc() {
        count++
        return count;
    }
    return innerFunc;
}
*/
function makeCounter() {
    let count = 0;
    const innerfunc = function () {
        count = count + 1;
        return count;
    }
    return innerfunc;

}