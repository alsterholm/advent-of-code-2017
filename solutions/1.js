const { compose, filter, flatten, last, splitEvery, sum, zip } = require('ramda')
const stringToNumberArray = require('../util/stringToNumberArray')

const matchesSibling = xs => xs.filter((x, i) => (i === 0 ? last(xs) === x : x === xs[i - 1]))
const part1 = compose(sum, matchesSibling, stringToNumberArray)

const pairMatches = ([x, y]) => x === y
const matchingPairs = filter(pairMatches)
const splitInHalf = xs => splitEvery(xs.length / 2, xs)
const zipPair = ([xs, ys]) => zip(xs, ys)

const part2 = compose(sum, flatten, matchingPairs, zipPair, splitInHalf, stringToNumberArray)

module.exports = { part1, part2 }
