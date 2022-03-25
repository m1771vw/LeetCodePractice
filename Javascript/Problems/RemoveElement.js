/**
 * Given array nums and value val, remove all instances of that value
 * Return the new length
 * 
 * Questions:
 * - Is the array sorted?
 * - Can I use more space? Make another array?
 * - Will there always be numbers in the array?
 * - What happens if the array is empty?
 * - 
 */

 const removeElement = (nums, value) => {
    i = 0;
    while(i < nums.length) {
        if(nums[i] == value) {
            nums.splice(i, 1);
        } else {
            i++;
        }
    }
    return nums.length;
 }

 module.exports = removeElement;