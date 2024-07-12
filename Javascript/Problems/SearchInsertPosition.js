const searchInsertPosition2 = (nums, target) => {
    for (let i = 0; i < nums.length; i++) {
        if (target <= nums[i]) {
            return i
        }
    }
    return nums.length
}

const searchInsertPosition = (nums, target) => {
    let start = 0
    let end = nums.length - 1
    while(start <= end) {
        let mid = Math.floor((start + end) / 2)
        if (nums[mid] === target) return mid 
        else if (nums[mid] < target) start = mid + 1
        else end = mid - 1
    }
    return start
}
/*
    // Iterate while start not meets end
        // Find the mid index
        // If element is present at mid, return True
        // If element is less than the middle, start from middle + 1
        // If element is greater than middle, change end to middle - 1

[1,2,3,4,5,6], 5
mid = 2, 3 < 5
start = 3, end = 5
mid = 4, = 5
*/

const binarySearch = (arr, x) => {
    let start = 0
    let end = arr.length - 1
    // Iterate
    while (start <= end) {
        // Find mid
        let mid = Math.floor((start + end) / 2)
        // Is Mid Found?
        if (arr[mid] === x) return true
        else if (arr[mid] < x) // 3 < 5
            start = mid + 1
        else 
            end = mid - 1
    }
}
module.exports = searchInsertPosition