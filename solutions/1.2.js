const { compose, filter, flatten, splitEvery, sum, zip } = require('ramda')
const stringToNumberArray = s => s.split('').map(Number)

const pairMatches = ([x, y]) => x === y
const matchingPairs = filter(pairMatches)
const splitInHalf = xs => splitEvery(xs.length / 2, xs)
const zipPair = ([xs, ys]) => zip(xs, ys)

module.exports = compose(
  sum,
  flatten,
  matchingPairs,
  zipPair,
  splitInHalf,
  stringToNumberArray
)
