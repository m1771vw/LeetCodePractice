const reverseInteger = require('../Problems/ReverseInteger');

test("Reverse Integer Test 1", () => {
    expect(reverseInteger(123)).toEqual(321);
})
test("Reverse Integer Test 2", () => {
    expect(reverseInteger(-321)).toEqual(-123);
})
test("Reverse Integer Test 3", () => {
    expect(reverseInteger(120)).toEqual(21);
})
test("Reverse Integer Test 3", () => {
    expect(reverseInteger(-900000)).toEqual(-9);
})
test("Reverse Integer Test 3", () => {
    expect(reverseInteger(1534236469)).toEqual(0);
})