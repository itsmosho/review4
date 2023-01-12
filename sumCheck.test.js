const sumCheck = require('./sumCheck')

describe("sumCheck", () => {
    it("should return correctly for 1", () => {
        expect(sumCheck("1")).toEqual(["1", 1.0]);
    })
});