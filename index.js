const readFile = require('./util/readFile')
const day1 = require('./solutions/1')
const day2 = require('./solutions/2')

readFile(`${__dirname}/input/1.txt`).then(input => {
  console.log(`Answer to day 1 (part 1) is: ${day1.part1(input)}.`)
  console.log(`Answer to day 1 (part 2) is: ${day1.part2(input)}.`)
  console.log(`\n${'* '.repeat(40)}\n`)
})

readFile(`${__dirname}/input/2.txt`).then(input => {
  console.log(`Answer to day 2 (part 1) is: ${day2.part1(input)}.`)
  console.log(`Answer to day 2 (part 2) is: ${day2.part2(input)}.`)
  console.log(`\n${'* '.repeat(40)}\n`)
})
