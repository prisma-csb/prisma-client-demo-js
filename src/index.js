const { determineScript } = require('./helpers/determineScript')
const { execute } = require('./helpers/execute')

/**
 * 🚀 Run `yarn demo` to start exploring the API. 
 * 
 * 💡 To explore all available features, fork the CodeSandbox and connect it to your own demo database.
 * Follow the instructions here: https://github.com/prisma-csb/prisma-client-demo-js/blob/master/SETUP.md
 */

async function main() {
  // Determine which script to run by launching an interactive wizard
  const script = await determineScript()

  // Execute the script
  await execute(script)
}

main()