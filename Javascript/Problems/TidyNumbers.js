/**
 * Digits arranged in non-decreasing order.
 * Find next closest tidy number.
 * 
 * Questions:
 * - What to do for negative numbers?
 * - Are they all integers?
 * - Can I change to string?
 */

 /**
  * 123 
  * 132 -> 129
  */
const tidyNumber = n => {
    let tidy = "";
    n = n.toString();
    for(let i = 0; i < n.length; i++) {
        if(n[i] > n[i+1]) {
            // console.log("Comparing: ", n[i], n[i+1])
            let subChar = subtractChar(n[i]);
            // console.log("Sub Char",subChar);
            tidy += n.substring(0, i);
            tidy += subChar;
            for(let j = i + 1; j < n.length; j++) {
                tidy += "9";
            }
        break;
        }
    }
    return parseInt(tidy); 

}

const subtractChar = str => {
    let newCharCode = str.charCodeAt(0);
    newCharCode--;
    return String.fromCharCode(newCharCode);
}

module.exports = tidyNumber;
