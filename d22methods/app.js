

/**
 *

 * @returns {Accumulator} constructor function
 */
export function Accumulator(initialValue, increment) {
   this.currentValue = initialValue;

   this.currentValue = initialValue;
   this.accumulator = function () {
      this.currentValue += increment;
   };

   this.report = function () {
      return this.currentValue;
   };


   //implement this
}


/**
 * @returns {Calculator} this is a constructor function
 */
/**
 * @returns {Calculator} this is a constructor function
 */
function Calculator() {

   this.mul = function () {
      return this.a * this * b;

   };

   this.sum = function () {
      return this.a + this.b;
   };
   //implement this
}
