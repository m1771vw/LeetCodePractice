/**
 * Array of digits representing integer, add one to the integer
 * Questions:
 * - Will the array be empty?
 * - Will the numbers be positive?
 * - Will they all be integers?
 * - Will there be any zeroes?
 * - What to do if there's a 9 at the end?
 */

 /**
  * 1. Add to the last digit
  * 2. Check for carry
  * 3. if carry is true, add one to the next one
  * 4. Repeat until there is no more carry
  * 5. If there's still carry at the end, add one
  */

const plusOne = digits => {
    let l = digits.length - 1;
    digits[l] += 1;
    carry = digits[l] /10;
    digits[l] = digits[l] % 10;
    for(let i = l - 1; i >= 0; i--) {
        if(carry === 1) {
            digits[i] += 1;
            carry = digits[i] /10;
            digits[i] = digits[i] % 10;
        }
    }
    if(carry === 1) {
        digits.unshift(1);
    }
    return digits;
}

module.exports = plusOne;