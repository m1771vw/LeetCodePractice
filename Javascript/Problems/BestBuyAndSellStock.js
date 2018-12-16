/**
 * Array that has numbers
 * Return the profit
 * Questions:
 * - Is the array sorted?
 * - Will there be negative numbers?
 * 
 */

 /**
  * 1. Have track on minimum number
  * 2. Iterate
  * 3. Find max profit
  * 
  * 
  */
const maxProfit = prices => {
    let minNum = Number.MAX_VALUE;
    let maxProfit = 0;
    for(let i = 0; i < prices.length; i++) {
        if(prices[i] < minNum) 
            minNum = prices[i]
        if(maxProfit < prices[i] - minNum) 
            maxProfit = prices[i] - minNum;
    }    
    return maxProfit;
}

module.exports = maxProfit;