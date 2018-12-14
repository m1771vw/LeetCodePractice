const removeElement = require('../Problems/RemoveElement');

test("Remove Element Test 1: [3,2,2,3], 3 should return length 2", () => {
    expect(removeElement([3,2,2,3], 3)).toEqual(2)
});
test("Remove Element Test 2: [0,1,2,2,3,0,4,2], 3 should return length 2", () => {
    expect(removeElement([0,1,2,2,3,0,4,2], 2)).toEqual(5)
});
test("Remove Element Test 3: [], 3 should return length 0", () => {
    expect(removeElement([], 3)).toEqual(0)
});