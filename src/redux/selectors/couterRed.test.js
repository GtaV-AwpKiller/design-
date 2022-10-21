import toolkitSlice, { decr, incr } from "../toolkitSlice";

describe("lol", () => {
    test("incr", () => {
        expect(toolkitSlice({ count: 0 }, incr())).toEqual({ count: 1 });
    });
    test("decr", () => {
        expect(toolkitSlice({ count: 0 }, decr())).toEqual({ count: -1 });
    });

    // test("undef", () => {
    //     expect(toolkitSlice(undefined, incr())).toEqual({ count: 1 });
    //     expect(toolkitSlice(undefined, decr())).toEqual({ count: -1 });
    // });
});
