const palindromeNumber = require('../Problems/PalindromeNumber');

test("Palindrome Number test 1", () => {
    expect(palindromeNumber(123)).toEqual(false);
})
test("Palindrome Number test 2", () => {
    expect(palindromeNumber(-123)).toEqual(false);
})
test("Palindrome Number test 3", () => {
    expect(palindromeNumber(121)).toEqual(true);
})
test("Palindrome Number test 4", () => {
    expect(palindromeNumber(10)).toEqual(false);
})