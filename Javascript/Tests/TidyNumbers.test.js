const tidyNumbers = require("../Problems/TidyNumbers");

test("Tidy Numbers Test 1: 132 will be 129", () => {
    expect(tidyNumbers(132)).toEqual(129);
})
test("Tidy Numbers Test 2: 101 will be 99", () => {
    expect(tidyNumbers(101)).toEqual(99);
})
// test("Tidy Numbers Test 3: 11333445538 will be 11333444999", () => {
//     expect(tidyNumbers(11333445538)).toEqual(11333444999);
// })