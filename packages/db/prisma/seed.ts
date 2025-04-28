import { PrismaClient } from "../src/generated/prisma";
import * as bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  console.log("Starting seed...");

  // Clean up existing data
  await prisma.tag.deleteMany({});
  await prisma.standup.deleteMany({});
  await prisma.userTeam.deleteMany({});
  await prisma.team.deleteMany({});
  await prisma.user.deleteMany({});

  console.log("Cleaned up existing data");

  // Create users
  const saltRounds = 10;
  const defaultPassword = await bcrypt.hash("password123", saltRounds);

  const users = await Promise.all([
    prisma.user.create({
      data: {
        name: "Alex Kim",
        email: "alex@example.com",
        password: defaultPassword,
        avatarUrl: "https://randomuser.me/api/portraits/men/1.jpg",
        status: "online",
        role: "Developer",
      },
    }),
    prisma.user.create({
      data: {
        name: "Sarah Chen",
        email: "sarah@example.com",
        password: defaultPassword,
        avatarUrl: "https://randomuser.me/api/portraits/women/2.jpg",
        status: "online",
        role: "Tech Lead",
      },
    }),
    prisma.user.create({
      data: {
        name: "James Wilson",
        email: "james@example.com",
        password: defaultPassword,
        avatarUrl: "https://randomuser.me/api/portraits/men/3.jpg",
        status: "away",
        role: "Backend Developer",
      },
    }),
    prisma.user.create({
      data: {
        name: "Maya Johnson",
        email: "maya@example.com",
        password: defaultPassword,
        avatarUrl: "https://randomuser.me/api/portraits/women/4.jpg",
        status: "offline",
        role: "UI Designer",
      },
    }),
    prisma.user.create({
      data: {
        name: "David Lee",
        email: "david@example.com",
        password: defaultPassword,
        avatarUrl: "https://randomuser.me/api/portraits/men/5.jpg",
        status: "online",
        role: "Frontend Developer",
      },
    }),
  ]);

  console.log(`Created ${users.length} users`);

  // Create teams
  const teams = await Promise.all([
    prisma.team.create({
      data: {
        name: "Frontend Team",
        description: "UI/UX and frontend development team",
      },
    }),
    prisma.team.create({
      data: {
        name: "Backend Team",
        description: "API and server-side development team",
      },
    }),
    prisma.team.create({
      data: {
        name: "DevOps Team",
        description: "Infrastructure and deployment team",
      },
    }),
  ]);

  console.log(`Created ${teams.length} teams`);

  // Assign users to teams
  const userTeams = await Promise.all([
    // Frontend Team
    prisma.userTeam.create({
      data: {
        userId: users[0].id, // Alex
        teamId: teams[0].id, // Frontend
        role: "member",
      },
    }),
    prisma.userTeam.create({
      data: {
        userId: users[1].id, // Sarah
        teamId: teams[0].id, // Frontend
        role: "admin",
      },
    }),
    prisma.userTeam.create({
      data: {
        userId: users[3].id, // Maya
        teamId: teams[0].id, // Frontend
        role: "member",
      },
    }),
    prisma.userTeam.create({
      data: {
        userId: users[4].id, // David
        teamId: teams[0].id, // Frontend
        role: "member",
      },
    }),

    // Backend Team
    prisma.userTeam.create({
      data: {
        userId: users[1].id, // Sarah
        teamId: teams[1].id, // Backend
        role: "member",
      },
    }),
    prisma.userTeam.create({
      data: {
        userId: users[2].id, // James
        teamId: teams[1].id, // Backend
        role: "admin",
      },
    }),

    // DevOps Team
    prisma.userTeam.create({
      data: {
        userId: users[0].id, // Alex
        teamId: teams[2].id, // DevOps
        role: "member",
      },
    }),
    prisma.userTeam.create({
      data: {
        userId: users[2].id, // James
        teamId: teams[2].id, // DevOps
        role: "member",
      },
    }),
  ]);

  console.log(`Created ${userTeams.length} user-team relationships`);

  // Create tags
  const tags = await Promise.all([
    prisma.tag.create({
      data: {
        name: "frontend",
      },
    }),
    prisma.tag.create({
      data: {
        name: "backend",
      },
    }),
    prisma.tag.create({
      data: {
        name: "bug",
      },
    }),
    prisma.tag.create({
      data: {
        name: "feature",
      },
    }),
    prisma.tag.create({
      data: {
        name: "documentation",
      },
    }),
    prisma.tag.create({
      data: {
        name: "design",
      },
    }),
    prisma.tag.create({
      data: {
        name: "testing",
      },
    }),
    prisma.tag.create({
      data: {
        name: "devops",
      },
    }),
  ]);

  console.log(`Created ${tags.length} tags`);

  // Create standups for today and past days
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);
  const twoDaysAgo = new Date(today);
  twoDaysAgo.setDate(twoDaysAgo.getDate() - 2);
  const threeDaysAgo = new Date(today);
  threeDaysAgo.setDate(threeDaysAgo.getDate() - 3);

  // Helper function to create standups for a specific date
  const createStandupsForDate = async (date: Date) => {
    const standups = await Promise.all([
      // Alex's standup
      prisma.standup.create({
        data: {
          userId: users[0].id, // Alex
          teamId: teams[0].id, // Frontend
          yesterday:
            "Completed the authentication UI components and fixed responsive design issues.",
          today:
            "Working on integrating the form validation and implementing error handling.",
          blockers:
            date.getDay() % 2 === 0
              ? "Waiting for the API endpoints to be ready."
              : null,
          createdAt: new Date(date),
          tags: {
            connect: [
              { id: tags[0].id }, // frontend
              { id: tags[3].id }, // feature
            ],
          },
        },
      }),

      // Sarah's standup
      prisma.standup.create({
        data: {
          userId: users[1].id, // Sarah
          teamId: teams[0].id, // Frontend
          yesterday:
            "Reviewed PRs and conducted team planning session for the next sprint.",
          today:
            "Working on the dashboard analytics components and helping with code reviews.",
          blockers:
            date.getDay() % 3 === 0
              ? "Need help with optimizing the chart rendering performance."
              : null,
          createdAt: new Date(date),
          tags: {
            connect: [
              { id: tags[0].id }, // frontend
              { id: tags[5].id }, // design
            ],
          },
        },
      }),

      // James's standup
      prisma.standup.create({
        data: {
          userId: users[2].id, // James
          teamId: teams[1].id, // Backend
          yesterday:
            "Implemented the user authentication API endpoints and wrote unit tests.",
          today:
            "Working on the data aggregation service and fixing the rate limiting issue.",
          blockers:
            date.getDay() % 4 === 0
              ? "Blocked by database performance issues that need investigation."
              : null,
          createdAt: new Date(date),
          tags: {
            connect: [
              { id: tags[1].id }, // backend
              { id: tags[6].id }, // testing
            ],
          },
        },
      }),

      // Maya's standup (only for some days)
      ...(date.getDay() !== 0 && date.getDay() !== 6
        ? [
            prisma.standup.create({
              data: {
                userId: users[3].id, // Maya
                teamId: teams[0].id, // Frontend
                yesterday:
                  "Finalized the design system components and created mockups for the new features.",
                today:
                  "Working on the UI animations and collaborating with developers on implementation.",
                blockers: null,
                createdAt: new Date(date),
                tags: {
                  connect: [
                    { id: tags[0].id }, // frontend
                    { id: tags[5].id }, // design
                  ],
                },
              },
            }),
          ]
        : []),

      // David's standup (only for weekdays)
      ...(date.getDay() !== 0 && date.getDay() !== 6
        ? [
            prisma.standup.create({
              data: {
                userId: users[4].id, // David
                teamId: teams[0].id, // Frontend
                yesterday:
                  "Implemented the responsive layout for the dashboard and fixed cross-browser issues.",
                today:
                  "Working on the data visualization components and improving accessibility.",
                blockers:
                  date.getDay() === 3
                    ? "Need design clarification for the mobile navigation."
                    : null,
                createdAt: new Date(date),
                tags: {
                  connect: [
                    { id: tags[0].id }, // frontend
                    { id: tags[2].id }, // bug
                  ],
                },
              },
            }),
          ]
        : []),
    ]);

    return standups.flat();
  };

  // Create standups for different dates
  const todayStandups = await createStandupsForDate(today);
  const yesterdayStandups = await createStandupsForDate(yesterday);
  const twoDaysAgoStandups = await createStandupsForDate(twoDaysAgo);
  const threeDaysAgoStandups = await createStandupsForDate(threeDaysAgo);

  console.log(`Created ${todayStandups.length} standups for today`);
  console.log(`Created ${yesterdayStandups.length} standups for yesterday`);
  console.log(`Created ${twoDaysAgoStandups.length} standups for two days ago`);
  console.log(
    `Created ${threeDaysAgoStandups.length} standups for three days ago`,
  );

  console.log("Seed completed successfully!");
}

main()
  .catch((e) => {
    console.error("Error during seeding:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
