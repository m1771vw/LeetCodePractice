/**
 * Determine if a string is a palindrome
 * Is it okay if I turn the number into a string?
 * What about negative numbers?
 * If a number is by itself is it palindrome?
 * What happens if it's 0
 *  
 */
// 123
const palindromeNumber = (num) => {
    let reverseNum = 0;
    if(num < 0 || (num % 10 === 0 && num !== 0)) {
        return false;
    }
    while(reverseNum < num) {
        let mod = num % 10; 
        reverseNum = reverseNum * 10 + mod; 
        num = Math.floor(num/10); 
    }
    return num === reverseNum || num === Math.floor(reverseNum/10);
}

module.exports = palindromeNumber;

// 123
const palindromeNumber2 = (num) => {
    var pNum = 0;
    if(num < 0) {
        return false;
    }
    while(pNum < num) {

        var mod = num % 10; // 3
        num = Math.floor(num/10); // 12
        pNum = pNum * 10 + mod ;
    }

}