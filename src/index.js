const { exec } = require('child_process')
const { determineScript } = require('./helpers/determineScript')
const chalk = require('chalk')

async function main() {

  // Determine command by launching an interactive wizard
  const script = await determineScript()
  const command = `yarn ${script}`
  const file = `${script}.js`

  // Run command
  console.log(`\nRunning command: ${chalk.bold.blue(`$ ${command}`)} ...\n`)
  exec(command, (err, stdout) => {
    console.log(chalk.green(stdout))
    console.log(`\nCheck out ${chalk.bold.blue(file)} to learn more.\n`)
  })

}

main()
