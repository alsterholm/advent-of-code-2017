const { part1, part2 } = require('./2')

describe('Day 2: Corruption Checksum', () => {
  describe('--- Part One ---', () => {
    it("should calculate a spreadsheet's checksum", () => {
      expect(part1('5\t1\t9\t5\n7\t5\t3\n2\t4\t6\t8')).toBe(18)
      expect(part1('24\t36\t98\t12\n15\t1\t9\t16\n3\t3\t9\t18\t51\t3')).toBe(149)
    })
  })

  describe('--- Part Two ---', () => {
    it('should find the only two numbers in each row where one evenly divides the other, and sum the quota of each row', () => {
      expect(part2('5\t9\t2\t8\n9\t4\t7\t3\n3\t8\t6\t5')).toBe(9)
    })
  })
})
