const sumCheck = require('./sumCheck')

describe("sumCheck", () => {
    it("should return correctly for 1", () => {
        expect(sumCheck("1")).toEqual(["1", 1.0]);
    });

    it("should return correctly for 2", () => {
        expect(sumCheck("2")).toEqual(["2", 2.0]);
    })

});