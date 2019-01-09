const { prisma } = require('../generated/prisma-client')

/**
 * ⚡️ Run `yarn create-update-delete` to execute this script (or `yarn start` for more choices).
 */

async function main() {
  // Create a new user
  // IF THIS FAILS, TRY CHANGING THE `email` (Prisma does't allow having two users with the same email in the DB)
  const newUser = await prisma.createUser({
    name: 'Alice',
    email: 'alice@prisma.io',
  })
  console.log(`Created user: `, newUser)

  // Update an existing user
  const updatedUser = await prisma.updateUser({
    data: { role: 'ADMIN' },
    where: { email: 'alice@prisma.io' },
  })
  console.log(`Updated user: `, updatedUser)

  // Delete an existing user
  const deletedUser = await prisma.deleteUser({
    email: 'alice@prisma.io',
  })
  console.log(`Deleted user: `, deletedUser)
}

main()