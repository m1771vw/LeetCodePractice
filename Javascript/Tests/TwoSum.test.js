const twoSum = require('../Problems/TwoSum')  

test('Two Sum Test 1', () => {
    expect(twoSum([2,7,11,15], 9)).toEqual([0,1]);
}); 

test('Two Sum Test 2', () => {
    expect(twoSum([1,2,3,4], 4)).toEqual([0,2]);
}); 