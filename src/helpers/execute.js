const { exec } = require('child_process')
const chalk = require('chalk')

async function execute(script) {
  const command = `yarn ${script}`
  const file = `${script}.ts`

  // Run command
  console.log(`\nRunning command: ${chalk.bold.blue(`$ ${command}`)} ...\n`)
  exec(command, (err, stdout) => {
    console.log(chalk.green(stdout))
    console.log(`\nCheck out ${chalk.bold.blue(file)} to learn more.\n`)
  })
}

module.exports = {
  execute,
}
