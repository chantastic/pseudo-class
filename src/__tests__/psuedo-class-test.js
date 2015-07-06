jest.dontMock("../pseudo-class");

var ps = require("../pseudo-class");

describe("pseudo-class", function () {
  describe("firstChild", function () {
    it("returns true if the first argument is 0", function () {
      expect(ps.firstChild(0)).toBe(true);
    });

    it("returns false for any other value", function () {
      expect(ps.firstChild(null)).toBe(false);
      expect(ps.firstChild(undefined)).toBe(false);
      expect(ps.firstChild(false)).toBe(false);
      expect(ps.firstChild(1)).toBe(false);
      expect(ps.firstChild(-1)).toBe(false);
    });
  });
});
