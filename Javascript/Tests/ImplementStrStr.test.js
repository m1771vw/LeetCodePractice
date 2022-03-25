const strStr = require("../Problems/ImplementStrStr")

test("GIVEN hello and ll, WHEN strStr is run, THEN 2 is returned", () => {
    expect(strStr("hello", "ll")).toEqual(2)
})

test("GIVEN aaaaa and bba, WHEN strStr is run, THEN -1 is returned", () => {
    expect(strStr("aaaaa", "bba")).toEqual(-1)
})

test("GIVEN '' and '', WHEN strStr is run, THEN 0 is returned", () => {
    expect(strStr("", "")).toEqual(0)
})