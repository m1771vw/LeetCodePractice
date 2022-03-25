const validParenthesis = require("../Problems/ValidParenthesis");

test("Valid Parenthesis Test 1: ()", () => {
    expect(validParenthesis("()")).toEqual(true);
})
test("Valid Parenthesis Test 2: ()[]{}", () => {
    expect(validParenthesis("()[]{}")).toEqual(true);
})
test("Valid Parenthesis Test 3: (]", () => {
    expect(validParenthesis("(]")).toEqual(false);
})
test("Valid Parenthesis Test 4: ([)]", () => {
    expect(validParenthesis("([)]")).toEqual(false);
})
test("Valid Parenthesis Test 5: {[]}", () => {
    expect(validParenthesis("{[]}")).toEqual(true);
})