const { prisma } = require('../generated/prisma-client')
const chalk = require('chalk')

async function main() {
  const allPostsWithIDs = await prisma.posts()
  console.log(chalk.cyan.bold(`Posts: \n`), allPostsWithIDs, '\n')

  const allUsersWithIDs = await prisma.users()
  console.log(chalk.cyan.bold(`Users: \n`), allUsersWithIDs)
}

main()
