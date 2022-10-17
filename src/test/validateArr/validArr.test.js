import validArr from "./validArr";

describe("validateArr", () => {
    test("лол", () => {
        expect(validArr([1, 2, 3])).toEqual(["1", "2", "3"]);
    });
    test("лол", () => {
        expect(validArr([1, 2, 3, null, undefined])).toEqual(["1", "2", "3"]);
    });
    test("пустой лол", () => {
        expect(validArr([])).toEqual([]);
    });
    test("отриц лол", () => {
        expect(validArr([1, 2, 3])).not.toEqual(["1", "2", "3", "4"]);
    });
});
