const { prisma } = require('../generated/prisma-client')

/**
 * ⚡️ Run `yarn upsert` to execute this script (or `yarn demo` for more choices).
 * 
 * 💡 See https://github.com/prisma-csb/prisma-client-demo-js/blob/master/SETUP.md for instructions
 * how to fork this project and connect it to your own demo database.
 * 
 */

async function main() {
  // Update existing user or update if they don't exist yet
  const upsertedUser = await prisma.upsertUser({
    update: { role: 'ADMIN' },
    where: { email: 'alice@prisma.io' },
    create: {
      name: 'Alice',
      email: 'alice@prisma.io',
      role: 'ADMIN',
    },
  })
  console.log(`Updated or created: `, upsertedUser)
}

main()
