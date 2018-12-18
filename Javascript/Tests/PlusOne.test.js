const plusOne = require("../Problems/PlusOne");

test("Plus One Test 1: [1,2,3] will be [1,2,4]", () => {
    expect(plusOne([1,2,3])).toEqual([1,2,4]);
});
test("Plus One Test 2: [1,2,9] will be [1,3,0]", () => {
    expect(plusOne([1,2,9])).toEqual([1,3,0]);
});
test("Plus One Test 3: [9,9,9] will be [1,0,0,0]", () => {
    expect(plusOne([9,9,9])).toEqual([1,0,0,0]);
});