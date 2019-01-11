const { prisma } = require('../generated/prisma-client')

/**
 * ⚡️ Run `yarn fluent-api` to execute this script (or `yarn start` for more choices).
 * 
 * 💡 See https://github.com/prisma-csb/prisma-client-demo-js/blob/master/SETUP.md for instructions
 * how to fork this project and connect it to your own demo database.
 * 
 * ⚠️ This scripts uses hardcoded IDs. If you've set up your own demo database, you need to replace
 * them with real IDs from your database. Run `yarn load-ids` to retrieve a list of all IDs. 
 * 
 */

async function main() {
  // Retrieving the posts of a user
  const postsByUser = await prisma.user({ email: 'ada@prisma.io' }).posts()
  console.log(postsByUser)

  // Retrieving all comments of a post
  const commentsOnPost = await prisma
    .post({ id: 'cjnymow0as3i90a51muoz70zp' }) // HARDCODED ID (run `$ yarn load-ids` to find a replacement)
    .comments()
  console.log(commentsOnPost)

  // Retrieving the comments of a post author
  const commentsOfPostAuthor = await prisma
    .post({ id: 'cjnymovqcs3hk0a51qfk40z0b' }) // HARDCODED ID (run `$ yarn load-ids` to find a replacement)
    .author()
    .comments()
  console.log(commentsOfPostAuthor)
}

main()
