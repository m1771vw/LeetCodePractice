const removeDuplicateFromArray = require('../Problems/RemoveDuplicateFromArray');

test("Remove Duplicate From Array 1: [1,1,2] will return length 2", () => {
    expect(removeDuplicateFromArray([1,1,2])).toEqual(2);
})
test("Remove Duplicate From Array 2: [0,0,1,1,1,2,2,3,3,4] will return length 5", () => {
    expect(removeDuplicateFromArray([0,0,1,1,1,2,2,3,3,4])).toEqual(5);
})
test("Remove Duplicate From Array 2: [0,0,1,1,1,2,2,3,3,4] will return length 5", () => {
    expect(removeDuplicateFromArray([0,0,0,1,1,1,2,2,2,3,3,4])).toEqual(5);
})
