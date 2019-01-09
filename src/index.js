const { exec } = require('child_process')
const { checkWritesEnabled } = require('./helpers/checkWritesEnabled')
const { determineScript } = require('./helpers/determineScript')
const chalk = require('chalk')

async function main() {

  // Determine command
  const writesEnabled = await checkWritesEnabled()
  const script = await determineScript(writesEnabled)
  const command = `yarn ${script}`
  const file = `${script}.ts`

  // Run command
  console.log(`\nRunning command: ${chalk.bold.blue(`${command}`)} ...\n`)
  exec(command, (err, stdout) => {
    console.log(stdout)
    console.log(`\nCheck out ${chalk.bold.blue(file)} to learn more.\n`)
  })

}

main()
