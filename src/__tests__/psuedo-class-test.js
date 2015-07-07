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
    it("is true when first arguent is even", function () {
      expect(ps.even(0)).toBe(true);
      expect(ps.even(2)).toBe(true);
      expect(ps.even(4)).toBe(true);
      expect(ps.even(10)).toBe(true);

      // false expectations
      expect(ps.even(1)).toBe(false);
      expect(ps.even(3)).toBe(false);
      expect(ps.even(5)).toBe(false);
      expect(ps.even(11)).toBe(false);
    });
  });

  describe("odd", function () {
    it("is true when first arguent is odd", function () {
      expect(ps.odd(1)).toBe(true);
      expect(ps.odd(3)).toBe(true);
      expect(ps.odd(5)).toBe(true);
      expect(ps.odd(11)).toBe(true);

      // false expectations
      expect(ps.odd(2)).toBe(false);
      expect(ps.odd(4)).toBe(false);
      expect(ps.odd(6)).toBe(false);
      expect(ps.odd(10)).toBe(false);
    });
  });

  describe("nthChild", function () {
    it("is true when first argument is equal to the second arugment - 1", function () {
      expect(ps.nthChild(0, 1)).toBe(true);
      expect(ps.nthChild(1, 2)).toBe(true);
      expect(ps.nthChild(5, 6)).toBe(true);
      expect(ps.nthChild(42, 43)).toBe(true);

      // false expectations
      expect(ps.nthChild(1, 1)).toBe(false);
      expect(ps.nthChild(1, 0)).toBe(false);
      expect(ps.nthChild(1, -1)).toBe(false);
      expect(ps.nthChild(1, undefined)).toBe(false);
      expect(ps.nthChild(1, null)).toBe(false);
    });
  });

  describe("nthLastChild", function () {
    it("is true when first argument is equal to the length of the second arugment - n", function () {
      expect(ps.nthLastChild(0, [1, 2, 3], 3)).toBe(true);
      expect(ps.nthLastChild(1, [1, 2, 3], 2)).toBe(true);
      expect(ps.nthLastChild(2, [1, 2, 3], 1)).toBe(true);

      // false expectations
      expect(ps.nthLastChild(0, [1, 2, 3], 2)).toBe(false);
      expect(ps.nthLastChild(2, [1, 2, 3], 2)).toBe(false);
      expect(ps.nthLastChild(2, [1, 2, 3], 3)).toBe(false);
    });
  });
});
