const binarySearch = require('../../../Algorithms/Searches/BinarySearch')

/*
  Sample Inputs
  - Have the input
  - Don't have the input
  - Input at beginning
    -Input at the end
  - Input is just one array
  - Input is empty array
*/

describe.only('Binary Search', () => {
	test('Target present in the middle', () => {
		const arr = [1, 3, 5, 7, 9, 11, 13]
		const target = 7
		expect(binarySearch(arr, target)).toBe(3) // Assuming the function returns the index
	})

	test('Target not present', () => {
		const arr = [2, 4, 6, 8, 10, 12, 14]
		const target = 5
		expect(binarySearch(arr, target)).toBe(-1) // Assuming the function returns -1 if not found
	})

	test('Target as the first element', () => {
		const arr = [3, 6, 9, 12, 15]
		const target = 3
		expect(binarySearch(arr, target)).toBe(0)
	})

	test('Target as the last element', () => {
		const arr = [5, 10, 15, 20, 25, 30]
		const target = 30
		expect(binarySearch(arr, target)).toBe(5)
	})

	test('Single element array (target present)', () => {
		const arr = [42]
		const target = 42
		expect(binarySearch(arr, target)).toBe(0)
	})

	test('Single element array (target not present)', () => {
		const arr = [42]
		const target = 24
		expect(binarySearch(arr, target)).toBe(-1)
	})

	// test('Multiple occurrences of the target', () => {
	// 	const arr = [1, 2, 2, 2, 3, 4, 5]
	// 	const target = 2
	// 	expect(binarySearch(arr, target)).toBe(1) // Could be any of the indices with value 2
	// })

	test('Target as the smallest element', () => {
		const arr = [10, 20, 30, 40, 50]
		const target = 10
		expect(binarySearch(arr, target)).toBe(0)
	})

	test('Target as the largest element', () => {
		const arr = [15, 25, 35, 45, 55]
		const target = 55
		expect(binarySearch(arr, target)).toBe(4)
	})

	test('Empty array', () => {
		const arr = []
		const target = 100
		expect(binarySearch(arr, target)).toBe(-1)
	})
})
