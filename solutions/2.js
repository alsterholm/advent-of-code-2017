const { compose, head, last, map, split, sort, sum } = require('ramda')

const sortAsc = sort((a, b) => a - b)
const parseTSV = compose(map(split('\t')), split('\n'))
const largestDifference = xs => last(xs) - head(xs)
const mapNestedArrayToNumbers = map(map(Number))

const part1 = compose(sum, map(largestDifference), map(sortAsc), mapNestedArrayToNumbers, parseTSV)

module.exports = { part1 }
