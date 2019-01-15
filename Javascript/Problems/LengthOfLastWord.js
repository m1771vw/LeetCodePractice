/**
 * Given strting s, return length of last word in string 
 */

/**
 * Questions:
 * - Will there always be a string fed to this function?
 * - Can I use array functions?
 * - Will symbols matter? 
 * - What constitutes as a word? 
 * - Will there be spaces at the end?
 */


/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    var strArr = (s.trim().split(" ")); 
    return strArr[strArr.length - 1].length;
};

module.exports = lengthOfLastWord;