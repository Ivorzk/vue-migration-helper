'use strict'

var chalk = require('chalk')
var migrationGuideUrlFor = require('./migration-guide-url-for')

var warningCount = 0
module.exports = function (fileData, warning) {
  // if (process.env.NODE_ENV === 'test') return
  warningCount++

  var library = fileData.file.match(/([^\/]+)\/[^\/]+\.js/)[1]

  console.log()
  console.log(chalk.yellow(
    warningCount + '. ' + warning.fix
  ))
  console.log(chalk.blue('  Line ' + fileData.lineNum + ': ' + fileData.file))
  console.log(chalk.cyan.dim('  Reason: ' + warning.reason))
  console.log(chalk.cyan.dim(
    '  More info: ' +
    chalk.underline(migrationGuideUrlFor(library) + '#' + warning.docsHash)
  ))
}
