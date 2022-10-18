import delay from "./delay";

describe("delay", () => {
    test("лол", async () => {
        const sum = await delay(() => 5 + 5, 10000000);
        expect(sum).toBe(10);
    });
});
