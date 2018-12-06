
/**
 * Given array of integers
 * Return indices of two numbers that add up to the target
 * Assume that we have ONE solution, cannot use the same element twice
 * 
 * Other questions to ask: Negative numbers? Array sorted? Duplicate in the array? What do I return if nothing?
 * Space/Time Complexity? Index have to be in order?
 */

 // [ 1,2,3,4 ] 4
const twoSum = (arr, target) => {
    let obj = {};
    for(let i = 0; i < arr.length; i++) {
        let compliment = target - arr[i]; // 3
        if(obj.hasOwnProperty(compliment)) {
            return [obj[compliment], i];
        } else {
            obj[arr[i]] = i;
        }
    }
    return [];
}

module.exports = twoSum;