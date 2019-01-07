const { prisma } = require("../generated/prisma-client");

/**
 * ⚡️Run `yarn lists-and-single-objects` to execute this script (or `yarn start` for more info).
 *
 * NOTE: This script contains an ID-placeholder. Please replace this placeholder before
 * running the script by copying an ID that's printed when running `yarn load-ids`.
 * Learn more in `./src/helpers/load-ids`.
 */

async function main() {
  // Fetch all posts
  const allPosts = await prisma.posts();
  console.log(allPosts);

  // Fetch comment by ID
  const userById = await prisma.user({
    id: "cjnymovv3s3ht0a516fhmria8" // replace with any user ID obtained from running `yarn load-ids`
  });
  console.log(userById);

  // Fetch user by email
  const userByEmail = await prisma.user({
    email: "ada@prisma.io"
  });
  console.log(userByEmail);
}

main();
