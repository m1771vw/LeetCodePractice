const maxProfit = require('../Problems/BestBuyAndSellStock');

test("Max Profit Test 1: [7,1,5,3,6,4] will be 5", () => {
    expect(maxProfit([7,1,5,3,6,4])).toEqual(5)
});
test("Max Profit Test 2: [7,5,4,3,2,1] will be 0", () => {
    expect(maxProfit([7,5,4,3,2,1])).toEqual(0)
});
test("Max Profit Test 3: [8,3,2,3,1,2] will be 1", () => {
    expect(maxProfit([8,3,2,3,1,2])).toEqual(1)
});