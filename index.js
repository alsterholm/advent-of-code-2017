const readFile = require('./util/readFile')
const day1part1 = require('./solutions/1.1')
const day1part2 = require('./solutions/1.2')

readFile(`${__dirname}/input/1.txt`).then(input => {
  console.log(`Answer to day number 1 (part 1) is: ${day1part1(input)}.`)
  console.log(`Answer to day number 1 (part 2) is: ${day1part2(input)}.`)
  console.log(`\n${'* '.repeat(40)}\n`)
})
