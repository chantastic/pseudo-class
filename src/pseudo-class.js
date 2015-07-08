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

  evenChildren: function (i) {
    return (i % 2 !== 0);
  },

  oddChildren: function (i) {
    return (i % 2 === 0);
  },

  nthChild: function (n, i) {
    return (i === n - 1);
  },

  nthLastChild: function (n, i, arr) {
    return (i === arr.length - n);
  },

  firstChildren: function (n, i) {
    return (i < n);
  },

  lastChildren: function (n, i, arr) {
    return (i >= arr.length - n);
  }
};
