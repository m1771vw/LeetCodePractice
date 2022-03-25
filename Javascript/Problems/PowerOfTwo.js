/**
 * @param {number} n
 * @return {boolean}
 */
 var isPowerOfTwo = function(n) {
    let checkNum = 2;
    if (n <= 0) return false;  
    if (n === 1 || n === 2) return true;
    for (let i = 2; i <= n; i++) {
      checkNum *= 2;
      if (checkNum === n) {
        return true;
      } else if (checkNum > n) {
        return false;
      }
    }
};

var isPowerOfTwoRecursion = function(n) {
  
}
module.exports = isPowerOfTwo;

/*
  IF it's a power of 2, then return true / false 
  16 = true
  3 = false 

  2
  2 * 2 = 4 
  2 * 2 * 2 = 8
  2 * 2 * 2 * 2 = 16

  My loop will be the exponent 
*/