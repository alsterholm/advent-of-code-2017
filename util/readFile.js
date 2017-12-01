const fs = require('fs')

module.exports = filename =>
  new Promise((resolve, _) => {
    fs.readFile(filename, 'ascii', (err, content) => {
      if (!err) {
        return resolve(content.trim())
      }

      console.error(`Could not read file "${filename}"...`)
      process.exit()
    })
  })
