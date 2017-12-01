const readFile = require('./util/readFile')
const day1 = require('./solutions/1')

readFile(`${__dirname}/input/1.txt`).then(input => {
  console.log(`Answer to day number 1 (part 1) is: ${day1.part1(input)}.`)
  console.log(`Answer to day number 1 (part 2) is: ${day1.part2(input)}.`)
  console.log(`\n${'* '.repeat(40)}\n`)
})
