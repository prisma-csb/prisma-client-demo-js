const { prisma } = require('../generated/prisma-client')

/**
 * ⚡️ Run `yarn filtering-and-sorting` to execute this script (or `yarn start` for more choices).
 *  
 * ⚠️ This scripts uses hardcoded IDs. If you've set up your own demo database, you need to replace
 * them with real IDs from your database. Run `yarn load-ids` to retrieve a list of all IDs. 
 * 
 */

async function main() {
  // Fetch all published posts about GraphQL or REST
  const posts = await prisma.posts({
    where: {
      OR: [{ title_contains: 'GraphQL' }, { title_contains: 'REST' }],
      published: true,
    },
    orderBy: 'createdAt_ASC',
  })
  console.log(posts)

  // Fetch all comments on a post that start with "Great"
  const comments = await prisma
    .post({ id: 'cjnymovvds3hy0a51xtxyhyh2' }) // HARDCODED ID (run `$ yarn load-ids` to find a replacement)
    .comments({
      where: { text_starts_with: 'Great' },
    })
  console.log(comments)

  // Sort posts chronologically
  const sortedPosts = await prisma.posts({
    orderBy: 'createdAt_ASC',
  })
  console.log(sortedPosts)
}

main()
