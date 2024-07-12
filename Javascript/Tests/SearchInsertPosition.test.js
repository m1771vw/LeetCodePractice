/*

Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2
Example 2:

Input: nums = [1,3,5,6], target = 2
Output: 1
Example 3:

Input: nums = [1,3,5,6], target = 7
Output: 4

*/

const searchInsertPosition = require('../Problems/SearchInsertPosition')

test('GIVEN [1,3,5,6], WHEN searching for number 5, THEN return position 2', () => {
    expect(searchInsertPosition([1,3,5,6], 5)).toEqual(2)
})

test('GIVEN [1,3,5,6], WHEN searching for position 2, THEN return 1', () => {
    expect(searchInsertPosition([1,3,5,6], 2)).toEqual(1)
})

test('GIVEN [1,3,5,6], WHEN searching for position 7, THEN return 4', () => {
    expect(searchInsertPosition([1,3,5,6], 7)).toEqual(4)
})