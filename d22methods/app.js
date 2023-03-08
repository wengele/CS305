/**
 * @returns {Calculator} this is a constructor function
 */
/**
 * @returns {Calculator} this is a constructor function
 */
export function Calculator() {
   //1 cmpiler creates this={}
   //2.we create and set propeties on the this object 
   //3.compiler returns this 
   this.a = 0;
   this.b = 0;
   this.setValues = function (aval, bval) {
      this.a = aval;
      this.b = bval;
   };
   this.mul = function () {
      return this.a * this.b;

   };

   this.sum = function () {
      return this.a + this.b;
   };
   //implement this
}





/**
 *@param{NUMBER} insitialvalue
 @param{number} increment

 * @returns {Accumulator} constructor function
 */
export function Accumulator(initialValue, increment) {
   this.currentValue = initialValue;
   this.increment = increment;


   this.accumulate = function () {
      this.currentValue += this.increment;
   };

   this.report = function () {
      return this.currentValue;
   };


   //implement this
}


