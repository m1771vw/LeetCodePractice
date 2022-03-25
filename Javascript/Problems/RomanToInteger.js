/**
 * Take Roman Numerals and convert to integer
 * Questions:
 * - Will it always give a roman numberal?
 * 
 * 
 * Notes:
 * I - 1
 * V - 5
 * X - 10
 * L - 50
 * C - 100
 * D - 500
 * M - 1000
 */

 const translateRoman = str => {
     switch(str){
         case "I":
            return 1;
         case "V":
            return 5;
         case "X":
            return 10;
         case "L":
            return 50;
         case "C":
            return 100;
         case "D":
            return 500;
         case "M":
            return 1000;
     }
 }

 const romanToInt = s => {
    let number = 0;
    for(let i = 0; i < s.length; i++) {
        let s1 = translateRoman(s[i]);
        if(i + 1 < s.length) {
            let s2 = translateRoman(s[i+1])
            if(s1 >= s2) number += s1;
            else {
                number = number + s2 - s1;
                i++;
            }
        } else {
            number += s1;
            i++;
        }

    }
    return number;
 }

 module.exports = romanToInt;