const { prisma } = require("../generated/prisma-client");

/**
 * ⚡️Run `yarn fluent-api` to execute this script (or `yarn start` for more info).
 *
 * NOTE: This script contains an ID-placeholder. Please replace this placeholder before
 * running the script by copying an ID that's printed when running `yarn load-ids`.
 * Learn more in `./src/helpers/load-ids`.
 */

async function main() {
  // Retrieving the posts of a user
  const postsByUser = await prisma.user({ email: "ada@prisma.io" }).posts();
  console.log(postsByUser);

  // Retrieving all comments of a post
  const commentsOnPost = await prisma
    .post({ id: "cjnymow0as3i90a51muoz70zp" }) // replace with any post ID obtained from running `yarn load-ids`
    .comments();
  console.log(commentsOnPost);

  // Retrieving the comments of a post author
  const commentsOfPostAuthor = await prisma
    .post({ id: "cjnymovqcs3hk0a51qfk40z0b" }) // replace with any post ID obtained from running `yarn load-ids`
    .author()
    .comments();
  console.log(commentsOfPostAuthor);
}

main();
