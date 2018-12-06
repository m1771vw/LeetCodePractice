

/**
 * Given 32-bit signed integer - things can be positive and negative
 * Questions: 
 *  - What about integer overflow?
 *  - What to do with negative numbers?
 *  - What should we do with numbers with 0?
 * 
 */
// 123 -> 321
// 123 -> 3 -> 2 -> 1 -> 321

/**
 * Things to remember: 
 * - With JavaScript, division are made into floats, so will have to use Math.floor 
 * - Should ask if it's okay to use string operations
 * - 32 bit integer should return 0
 * - Negatives are handled differently with Math.Floor
 */
const reverseInteger = (x) => {
    let reversed = 0;
    if(x > 0) {
        while(x != 0) {
            let lastDigit = x % 10;
            x = Math.floor(x/10);
            reversed = reversed * 10 + lastDigit;
        }
    } else if(x < 0) {
        x = Math.abs(x);
        while(x != 0) {
            let lastDigit = x % 10;
            x = Math.floor(x/10);
            reversed = reversed * 10 + lastDigit;
        }
        reversed *= -1
    }
    if(reversed === Infinity || reversed === -Infinity) {
        return 0;
    }
    if(reversed >= 2 ** 31 || reversed <= (2 ** 31 * -1)) {
        return 0;
    }
    return reversed;
}

module.exports = reverseInteger