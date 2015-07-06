module.exports = {
  firstChild: function (i) {
    return (i === 0);
  },

  lastChild: function (i, arr) {
    return (i === arr.length - 1);
  },

  onlyChild: function (arr) {
    return (1 === arr.length);
  },

  // Returns truthy for even indexes.
  // This is the opposite of :nth-child(even)
  // It seems too confusing to have a function called `even` that returns truthy
  // for odd numbers
  even: function (i) {
    return (i % 2 === 0);
  }
};
