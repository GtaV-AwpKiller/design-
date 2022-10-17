const validateVal = require("./validateVal");

describe("validateVal", () => {
    test("Корректное", () => {
        expect(validateVal(50)).toBe(true);
    });
    test("меньше", () => {
        expect(validateVal(-1)).toBe(false);
    });
    test("больше", () => {
        expect(validateVal(101)).toBe(false);
    });
});
