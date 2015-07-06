/* eslint-env node, jasmine */
jest.dontMock("../pseudo-class");

var ps = require("../pseudo-class");

describe("pseudo-class", function () {
  describe("firstChild", function () {
    it("is truthy if the first argument is 0", function () {
      expect(ps.firstChild(0)).toBeTruthy();
    });

    it("is falsy for any other value", function () {
      expect(ps.firstChild(null)).toBeFalsy();
      expect(ps.firstChild(undefined)).toBeFalsy();
      expect(ps.firstChild(false)).toBeFalsy();
      expect(ps.firstChild(1)).toBeFalsy();
      expect(ps.firstChild(-1)).toBeFalsy();
    });
  });

  describe("lastChild", function () {
    it("is truthy when first and second arguments are equal", function () {
      expect(ps.lastChild(0, [1])).toBeTruthy();
      expect(ps.lastChild(1, [1, 2])).toBeTruthy();
      expect(ps.lastChild(2, [1, 2, 3])).toBeTruthy();
    });

    it("is truthy if the first argument is equal to the second arguments length - 1", function () {
      expect(ps.lastChild(0, [1, 2, 3])).toBeFalsy();
      expect(ps.lastChild(1, [1, 2, 3])).toBeFalsy();
      expect(ps.lastChild(-1, [1, 2, 3])).toBeFalsy();
      expect(ps.lastChild("ham", [1, 2, 3])).toBeFalsy();

      expect(ps.lastChild(0, [])).toBeFalsy();
    });
  });

  describe("onlyChild", function () {
    it("is truthy when 1 is equal to the first arguments length", function () {
      expect(ps.onlyChild([1])).toBeTruthy();
      expect(ps.onlyChild(["salmon"])).toBeTruthy();
      expect(ps.onlyChild([{ name: "Michael" }])).toBeTruthy();

      // false expectations
      expect(ps.onlyChild([])).toBeFalsy();
      expect(ps.onlyChild(["salmon", "trout"])).toBeFalsy();
      expect(ps.onlyChild([{ name: "Michael" }, { name: "Nellie" }])).toBeFalsy();
    });
  });
});
