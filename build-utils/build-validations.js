const chalk = require('chalk')

const ERROR_NO_ENV_FLAG = chalk.red(
  "You must pass an --env.env flag into your build for webpack to work!"
)

module.exports = {
  ERROR_NO_ENV_FLAG
}