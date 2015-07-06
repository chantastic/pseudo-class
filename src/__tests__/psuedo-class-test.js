/* eslint-env node, jasmine */
jest.dontMock("../pseudo-class");

var ps = require("../pseudo-class");

describe("pseudo-class", function () {
  describe("firstChild", function () {
    it("is truthy if the first argument is 0", function () {
      expect(ps.firstChild(0)).toBeTruthy();

      // false expectations
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

      // false expectations
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

  describe("even", function () {
    it("is truthy when first arguent is even", function () {
      expect(ps.even(0)).toBeTruthy();
      expect(ps.even(2)).toBeTruthy();
      expect(ps.even(4)).toBeTruthy();
      expect(ps.even(10)).toBeTruthy();

      // false expectations
      expect(ps.even(1)).toBeFalsy();
      expect(ps.even(3)).toBeFalsy();
      expect(ps.even(5)).toBeFalsy();
      expect(ps.even(11)).toBeFalsy();
    });
  });
});
