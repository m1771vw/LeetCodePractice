/**
 * Given sorted array nums, remove duplicates and return new length
 * Do NOT allocate space for another array, modify IN PLACE
 * 
 * Questions:
 * - Is array sorted?
 * - Can I create a new array?
 * - Will tehre be negative numbers?
 * - Will there be floats?
 * - Are worried about keeping space complexity?
 * 
 */
/**
 * 1. Iterate through array
 * 2. Since it's sorted, can check if next index is itself
 * 3. If it is, remove it
 */
const removeDuplicateFromArray = (nums) => {
    i = 0;
    while(i < nums.length-1) {
        if(nums[i] === nums[i+1]) {
            nums.splice(i, 1);
            continue;
        }
        i++;
    }
    return nums.length;
}

module.exports = removeDuplicateFromArray;