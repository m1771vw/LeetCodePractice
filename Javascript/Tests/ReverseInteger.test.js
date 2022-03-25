const reverseInteger = require('../Problems/ReverseInteger');

test("Reverse Integer Test 1: 123 equals 321", () => {
    expect(reverseInteger(123)).toEqual(321);
})
test("Reverse Integer Test 2: -321 equals -123", () => {
    expect(reverseInteger(-321)).toEqual(-123);
})
test("Reverse Integer Test 3: 120 equals 21", () => {
    expect(reverseInteger(120)).toEqual(21);
})
test("Reverse Integer Test 4: -900000 equals -9", () => {
    expect(reverseInteger(-900000)).toEqual(-9);
})
test("Reverse Integer Test 5: 1534236469 equals 0", () => {
    expect(reverseInteger(1534236469)).toEqual(0);
})