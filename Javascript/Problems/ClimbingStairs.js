/**
 * How many ways to climb to top?
 * Can climb 1 or 2 steps
 * 
 * Questions:
 * - Will n always be positive?
 * - What will 0 be?
 * - Will n always be an integer?
 * 
 */

 /**
  * Use recursion?
  */

/**
 * 0 Steps: 0
 * 1 Steps: 1
 * 2 Steps: 2 (1+1, 2)
 * 3 Steps: 3 (1+1+1, 2+1, 1+2)
 * 4 Steps: 5  (1+1+1+1, 1+2+1, 2+1+1, 1+1+2, 2+2)
 */

//  const climbStairs = n => {
//      if(n == 0) return 0;
//      if(n == 1) return 1;
//      if(n == 2) return 2;
//      return climbStairs(n - 1) + climbStairs(n-2);

//  }

 const climbStairs = (n) => {
    if(n == 0) return 0;
    if(n == 1) return 1;
    let dp = [];
    dp[0] = 0;
    dp[1] = 1;
    dp[2] = 2;
    for(let i = 3; i <= n; i++) {
        dp[i] = dp[i-1] + dp[i-2];
    }
    return dp[n];

}

 module.exports = climbStairs;