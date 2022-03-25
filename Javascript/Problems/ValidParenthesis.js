/**
 * Given a string, determine input string is valid
 * Questions:
 * - What will happen if we don't have it?
 * - Does the order matter?
 * - Is it similar to a code compiler?
 * - What if the string is empty?
 * 
 */

 /**
  * 1. ITerate through string
  * 2. Keep track of what we have w/ data structure
  * 3. For each, check if we have the appropriate closing
  * 4. If we do, pop it out, if not fail
  */


  /** 
   * ()
   * (]
   * ([)]
  */
  const validParenthesis = s => {
    let openedArr = [];
    for(let i = 0; i < s.length; i++) {
        if(s[i] === "(" || s[i] === "[" || s[i] === "{") {
            openedArr.push(s[i]);
            continue;
        }
        if(s.length === 0) {
            return false;
        }
        if(s[i] === ")") {
            if(openedArr.pop() !== "(")
                return false;
        } else if(s[i] === "]") {
            if(openedArr.pop() !== "[")
                return false;
        } else 
            if(openedArr.pop() !== "{")
                return false;
    }
    return openedArr.length === 0;
  }

  module.exports = validParenthesis;