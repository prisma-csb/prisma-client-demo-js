const { prisma } = require('../generated/prisma-client')

async function checkWritesEnabled() {
  var writesEnabled = true
  try {
    await prisma.createUser({ email: "test" })
    await prisma.deleteUser({ email: "test" })
  } catch (e) {
    writesEnabled = false
  }
  return writesEnabled
}

module.exports = {
  checkWritesEnabled
}