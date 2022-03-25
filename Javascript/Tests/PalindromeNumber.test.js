const palindromeNumber = require('../Problems/PalindromeNumber');

test("Palindrome Number test 1: 123 is NOT a palindrome", () => {
    expect(palindromeNumber(123)).toEqual(false);
})
test("Palindrome Number test 2: -123 is NOT a palindrome", () => {
    expect(palindromeNumber(-123)).toEqual(false);
})
test("Palindrome Number test 3: 121 is a palindrome", () => {
    expect(palindromeNumber(121)).toEqual(true);
})
test("Palindrome Number test 4: 10 is NOT a palindrome", () => {
    expect(palindromeNumber(10)).toEqual(false);
})