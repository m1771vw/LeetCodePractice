const climbStairs = require('../Problems/ClimbingStairs');

/**
 * 0 Steps: 0
 * 1 Steps: 1
 * 2 Steps: 2 (1+1, 2)
 * 3 Steps: 3 (1+1+1, 2+1, 1+2)
 * 4 Steps: 5  (1+1+1+1, 1+2+1, 2+1+1, 1+1+2, 2+2)
 */
test("Climb Stairs Test 1: 0 is 0", () => {
    expect(climbStairs(0)).toEqual(0);
});
test("Climb Stairs Test 2: 1 is 1", () => {
    expect(climbStairs(1)).toEqual(1);
});
test("Climb Stairs Test 3: 2 is 2", () => {
    expect(climbStairs(2)).toEqual(2);
});
test("Climb Stairs Test 4: 3 is 3", () => {
    expect(climbStairs(3)).toEqual(3);
});
test("Climb Stairs Test 5: 4 is 4", () => {
    expect(climbStairs(4)).toEqual(5);
});
test("Climb Stairs Test 6: 5 is 5", () => {
    expect(climbStairs(5)).toEqual(8);
});