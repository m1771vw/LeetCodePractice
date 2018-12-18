const roman = require("../Problems/RomanToInteger");

test("Roman To Int Test I: I is 1", () => {
    expect(roman("I")).toEqual(1);
});
test("Roman To Int Test II: IV is 4", () => {
    expect(roman("IV")).toEqual(4);
});
test("Roman To Int Test III: VIII is 8", () => {
    expect(roman("VIII")).toEqual(8);
});
test("Roman To Int Test IV: IX is 9", () => {    
    expect(roman("IX")).toEqual(9);
});
test("Roman To Int Test V: MIII is 1003", () => {
    expect(roman("MIII")).toEqual(1003);
});
test("Roman To Int Test V: MCMXCIV is 1994", () => {
    expect(roman("MCMXCIV")).toEqual(1994);
});