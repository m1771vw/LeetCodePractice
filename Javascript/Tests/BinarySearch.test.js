const binarySearch = require('../Problems/BinarySearch')

test('GIVEN [1,3,5,7], WHEN searching for number 3, return index 1', () => {
    expect(binarySearch([1,3,5,7],3)).toEqual(1)
})

test('GIVEN [1,3,5,7,9], WHEN searching for number 5, return index 2', () => {
    expect(binarySearch([1,3,5,7,9],5)).toEqual(2)
})

test('GIVEN [1,3,5,7,9], WHEN searching for number 1, return index 0', () => {
    expect(binarySearch([1,3,5,7,9],1)).toEqual(0)
})

test('GIVEN [1,3,5,7,9], WHEN searching for number 9, return index 4', () => {
    expect(binarySearch([1,3,5,7,9],9)).toEqual(4)
})

test('GIVEN [-1,0,3,5,9,12], WHEN searching for 2, return index -1', () => {
    expect(binarySearch([-1,0,3,5,9,12], 2)).toEqual(-1)
})