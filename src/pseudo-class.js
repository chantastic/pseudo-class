module.exports = {
  firstChild: function (i) {
    return (i === 0);
  },

  lastChild: function (i, arr) {
    return (i === arr.length - 1);
  },

  onlyChild: function (arr) {
    return (1 === arr.length);
  }
};
