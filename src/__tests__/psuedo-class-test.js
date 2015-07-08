/* eslint-env node, jasmine */
jest.dontMock("../pseudo-class");

var pc= require("../pseudo-class");

describe("pc.udo-class", function () {
  describe("firstChild", function () {
    it("returns true for the first index in a collection", function () {
      expect(pc.firstChild(0)).toBeTruthy();

      // false expectations
      expect(pc.firstChild(null)).toBeFalsy();
      expect(pc.firstChild(undefined)).toBeFalsy();
      expect(pc.firstChild(false)).toBeFalsy();
      expect(pc.firstChild(1)).toBeFalsy();
      expect(pc.firstChild(-1)).toBeFalsy();
    });
  });

  describe("lastChild", function () {
    it("returns true for the last index in the collection", function () {
      expect(pc.lastChild(0, [1])).toBeTruthy();
      expect(pc.lastChild(1, [1, 2])).toBeTruthy();
      expect(pc.lastChild(2, [1, 2, 3])).toBeTruthy();

      // false expectations
      expect(pc.lastChild(0, [1, 2, 3])).toBeFalsy();
      expect(pc.lastChild(1, [1, 2, 3])).toBeFalsy();
      expect(pc.lastChild(-1, [1, 2, 3])).toBeFalsy();
      expect(pc.lastChild("ham", [1, 2, 3])).toBeFalsy();
      expect(pc.lastChild(0, [])).toBeFalsy();
    });
  });

  describe("onlyChild", function () {
    it("returns true for a collection with only one value", function () {
      expect(pc.onlyChild([1])).toBeTruthy();
      expect(pc.onlyChild(["salmon"])).toBeTruthy();
      expect(pc.onlyChild([{ name: "Michael" }])).toBeTruthy();

      // false expectations
      expect(pc.onlyChild([])).toBeFalsy();
      expect(pc.onlyChild(["salmon", "trout"])).toBeFalsy();
      expect(pc.onlyChild([{ name: "Michael" }, { name: "Nellie" }])).toBeFalsy();
    });
  });

  describe("evenChildren", function () {
    // evenChildren are determined by their relationship to other children in
    // the collection, not index.
    it("returns true for indexes of even items in a collection", function () {
      expect(pc.evenChildren(1)).toBe(true);
      expect(pc.evenChildren(3)).toBe(true);
      expect(pc.evenChildren(5)).toBe(true);
      expect(pc.evenChildren(11)).toBe(true);

      // false expectations
      expect(pc.evenChildren(0)).toBe(false);
      expect(pc.evenChildren(2)).toBe(false);
      expect(pc.evenChildren(4)).toBe(false);
      expect(pc.evenChildren(12)).toBe(false);
    });
  });

  describe("oddChildren", function () {
    // everChildren are determined by their relationship to other children in
    // the collection, not index.
    it("returns true for indexes of odd items in a collection", function () {
      expect(pc.oddChildren(0)).toBe(true);
      expect(pc.oddChildren(2)).toBe(true);
      expect(pc.oddChildren(4)).toBe(true);
      expect(pc.oddChildren(10)).toBe(true);

      // false expectations
      expect(pc.oddChildren(1)).toBe(false);
      expect(pc.oddChildren(3)).toBe(false);
      expect(pc.oddChildren(5)).toBe(false);
      expect(pc.oddChildren(11)).toBe(false);
    });
  });

  describe("nthChild", function () {
    it("returns true for the nth item in a collection", function () {
      expect(pc.nthChild(1, 0)).toBe(true);
      expect(pc.nthChild(2, 1)).toBe(true);
      expect(pc.nthChild(6, 5)).toBe(true);
      expect(pc.nthChild(43, 42)).toBe(true);

      // false expectations
      expect(pc.nthChild(0, 0)).toBe(false);
      expect(pc.nthChild(1, 1)).toBe(false);
      expect(pc.nthChild(0, 1)).toBe(false);
      expect(pc.nthChild(-1, 1)).toBe(false);
      expect(pc.nthChild(undefined, 1)).toBe(false);
      expect(pc.nthChild(null, 1)).toBe(false);
    });
  });

  describe("nthLastChild", function () {
    it("returns true when nth-last item in a collection", function () {
      expect(pc.nthLastChild(1, 2, [1, 2, 3])).toBe(true);
      expect(pc.nthLastChild(2, 1, [1, 2, 3])).toBe(true);
      expect(pc.nthLastChild(3, 0, [1, 2, 3])).toBe(true);

      // false expectations
      expect(pc.nthLastChild(0, 0, [1, 2, 3])).toBe(false);
      expect(pc.nthLastChild(0, 1, [1, 2, 3])).toBe(false);
      expect(pc.nthLastChild(0, 2, [1, 2, 3])).toBe(false);
      expect(pc.nthLastChild(0, 0, [1, 2, 3])).toBe(false);
      expect(pc.nthLastChild(0, 1, [1, 2, 3])).toBe(false);
      expect(pc.nthLastChild(0, 2, [1, 2, 3])).toBe(false);
    });
  });

  describe("firstChildren", function () {
    it("returns true for items with a lower index than n", function () {
      expect(pc.firstChildren(3, 0)).toBe(true);
      expect(pc.firstChildren(3, 1)).toBe(true);
      expect(pc.firstChildren(3, 2)).toBe(true);

      // false expectations
      expect(pc.firstChildren(3, 0)).toBe(true);
      expect(pc.firstChildren(3, 1)).toBe(true);
      expect(pc.firstChildren(3, 2)).toBe(true);
    });
  });
});
