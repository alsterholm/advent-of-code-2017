const { compose, last, sum } = require('ramda')
const stringToNumberArray = require('../util/stringToNumberArray')

const matchesSibling = xs =>
  xs.filter((x, i) => (i === 0 ? last(xs) === x : x === xs[i - 1]))

module.exports = compose(sum, matchesSibling, stringToNumberArray)
