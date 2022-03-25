/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
 var checkInclusion = function(s1, s2) {
    
};
/*
    This will create permutations for s1 
    'ab' -> return ['ab','ba']
*/
var permutate = function(s1) {
    let permutations = new Set();
    let startPointer;
    permutations.add(s1)
    let permWord = ''
    for (let i = 0;i < s1.length; i++) {
        startPointer = 1; 
        permWork += s1[i]; // b
        // if(startPointer )
    }
    
    return permutations;
}

console.log(checkInclusion('ab', 'eidbaooo'))
console.log(checkInclusion('ab', 'eidboaoo'))