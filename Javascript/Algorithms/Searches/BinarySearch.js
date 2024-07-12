/*
  Binary Search
  - array must be sorted
  - divide and conquer

  Steps:
  - 2 pointers at the indexes
  - midpoint by using the two pointers
  - compare target with middle
    - if =, found target
    - if less, move the right pointer to less than middle
    - if more, move the left pointer to more than middle

  Takeaway:
  - Ask for sorted
  - How many entries
  - Will there be duplicates in the array
  - Will the nuber be in the array?
  - 
*/
const binarySearch = (arr, target) => {
	let left = 0
	let right = arr.length - 1
	let found = false
	let index
	while (!found) {
		let middle = Math.floor(left + right / 2)
		console.log('Var check:', { left, right, middle })
		if (arr[middle] === target) {
			index = middle
			found = true
			return index
		} else if (arr[middle] < target) {
			// move the right
			right = middle
		} else if (arr[middle] > target) {
			left = middle
		} else if (left <= right) {
			return -1
		}
	}
}

const binarySearchSolution = (arr, target) => {
	let left = 0
	let right = arr.length - 1

	while (left <= right) {
		const mid = Math.floor((left + right) / 2)
		if (arr[mid] === target) {
			return mid
		} else if (arr[mid] < target) {
			left = mid + 1
		} else {
			right = mid - 1
		}
	}
	return -1
}

const arr = [2, 4, 6, 8, 10, 12, 14]
const target = 5
console.log(binarySearch(arr, target))

module.exports = binarySearchSolution
