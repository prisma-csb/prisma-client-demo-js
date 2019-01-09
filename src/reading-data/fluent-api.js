const { prisma } = require('../generated/prisma-client')

/**
 * ⚡️ Run `yarn fluent-api` to execute this script (or `yarn start` for more choices).
 */

async function main() {
  // Retrieving the posts of a user
  const postsByUser = await prisma.user({ email: 'ada@prisma.io' }).posts()
  console.log(postsByUser)

  // Retrieving all comments of a post
  const commentsOnPost = await prisma
    .post({ id: 'cjnymow0as3i90a51muoz70zp' })
    .comments()
  console.log(commentsOnPost)

  // Retrieving the comments of a post author
  const commentsOfPostAuthor = await prisma
    .post({ id: 'cjnymovqcs3hk0a51qfk40z0b' })
    .author()
    .comments()
  console.log(commentsOfPostAuthor)
}

main()
