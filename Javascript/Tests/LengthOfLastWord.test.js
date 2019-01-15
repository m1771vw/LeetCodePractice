
const lengthOfLastWord = require('../Problems/LengthOfLastWord');
test("Length of last word in Hello World is 5", () => {
    expect(lengthOfLastWord("Hello World")).toEqual(5);
});
test("Length of last word in Hello Worldd is 6", () => {
    expect(lengthOfLastWord("Hello Worldd")).toEqual(6);
});
test("Length of last word in Hello Worldss is 7", () => {
    expect(lengthOfLastWord("Hello Worldss")).toEqual(7);
});
test("Length of last word in 'a ' is 1", () => {
    expect(lengthOfLastWord("a ")).toEqual(1);
});