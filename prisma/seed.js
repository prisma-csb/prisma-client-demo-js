const { prisma } = require("../src/generated/prisma-client");

async function run() {
  const ada = await prisma.createUser({
    name: "Ada",
    email: "ada@prisma.io",
    role: "ADMIN",
    posts: {
      create: [
        {
          title: "Introducing the Analytical Engine"
        },
        {
          title: "Building General-Purpose Computers",
          published: true
        },
        {
          title: "RESTful APIs Considered Harmful"
        },
        {
          title: "Why Algorithms are Awesome",
          published: true
        }
      ]
    }
  });

  const grace = await prisma.createUser({
    name: "Grace",
    email: "grace@prisma.io",
    posts: {
      create: [
        {
          title: "Five Things You Didn't Know About Compilers"
        },
        {
          title: "GraphQL - The Query Language of the Future",
          published: true
        },
        {
          title: "Progamming with English Words",
          published: true,
          comments: {
            create: {
              text: "Great work!",
              writtenBy: {
                connect: {
                  email: "ada@prisma.io"
                }
              }
            }
          }
        }
      ]
    }
  });

  const lynn = await prisma.createUser({
    name: "Lynn",
    email: "lynn@prisma.io",
    posts: {
      create: [
        {
          title: "Working at Xerox PARC"
        },
        {
          title: "Introduction to VLSI Systems",
          published: true,
          comments: {
            create: [
              {
                text: "I love this.",
                writtenBy: {
                  connect: {
                    email: "ada@prisma.io"
                  }
                }
              },
              {
                text: "Very interesting!",
                writtenBy: {
                  connect: {
                    email: "grace@prisma.io"
                  }
                }
              }
            ]
          }
        }
      ]
    }
  });
}

run().catch(e => console.error(e));
