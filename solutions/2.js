const {
  chain,
  compose,
  curry,
  head,
  last,
  flatten,
  filter,
  map,
  split,
  sort,
  sum,
  uniq,
} = require('ramda')

const mapNestedArrayToNumbers = map(map(Number))

const sortAsc = sort((a, b) => a - b)
const parseTSV = compose(map(split('\t')), split('\n'))
const largestDifference = xs => last(xs) - head(xs)

const part1 = compose(sum, map(largestDifference), map(sortAsc), mapNestedArrayToNumbers, parseTSV)

const toSortedPair = curry((x, y) => sortAsc([x, y]))
const pairIsEvenlyDivisible = ([low, high]) => low !== high && high % low === 0
const toSortedPairs = xs => chain(x => xs.map(toSortedPair(x)), xs)
const findEvenlyDivisiblePairs = compose(uniq, filter(pairIsEvenlyDivisible), chain(toSortedPairs))
const divideSortedPairs = map(([low, high]) => high / low)

const part2 = compose(
  sum,
  divideSortedPairs,
  findEvenlyDivisiblePairs,
  mapNestedArrayToNumbers,
  parseTSV
)

module.exports = { part1, part2 }
