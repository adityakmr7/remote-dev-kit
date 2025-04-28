import { PrismaClient } from "../src/generated/prisma";
import * as bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Starting database seed...");

  // Clean up existing data
  console.log("🧹 Cleaning up existing data...");
  await prisma.subscription.deleteMany();
  await prisma.focusTime.deleteMany();
  await prisma.pullRequest.deleteMany();
  await prisma.pairSessionParticipant.deleteMany();
  await prisma.pairProgrammingSession.deleteMany();
  await prisma.tag.deleteMany();
  await prisma.standup.deleteMany();
  await prisma.userTeam.deleteMany();
  await prisma.team.deleteMany();
  await prisma.user.deleteMany();

  console.log("👤 Creating users...");

  // Create users
  const password = await bcrypt.hash("password123", 10);

  const users = await Promise.all([
    prisma.user.create({
      data: {
        email: "john@example.com",
        name: "John Doe",
        password,
        role: "admin",
        avatarUrl:
          "https://ui-avatars.com/api/?name=John+Doe&background=0D8ABC&color=fff",
        status: "online",
        provider: "email",
      },
    }),
    prisma.user.create({
      data: {
        email: "jane@example.com",
        name: "Jane Smith",
        password,
        role: "developer",
        avatarUrl:
          "https://ui-avatars.com/api/?name=Jane+Smith&background=F44336&color=fff",
        status: "online",
        provider: "email",
      },
    }),
    prisma.user.create({
      data: {
        email: "bob@example.com",
        name: "Bob Johnson",
        password,
        role: "developer",
        avatarUrl:
          "https://ui-avatars.com/api/?name=Bob+Johnson&background=4CAF50&color=fff",
        status: "away",
        provider: "email",
      },
    }),
    prisma.user.create({
      data: {
        email: "alice@example.com",
        name: "Alice Williams",
        password,
        role: "manager",
        avatarUrl:
          "https://ui-avatars.com/api/?name=Alice+Williams&background=9C27B0&color=fff",
        status: "online",
        provider: "email",
      },
    }),
    prisma.user.create({
      data: {
        email: "charlie@example.com",
        name: "Charlie Brown",
        password,
        role: "developer",
        avatarUrl:
          "https://ui-avatars.com/api/?name=Charlie+Brown&background=FF9800&color=fff",
        status: "offline",
        provider: "github",
      },
    }),
  ]);

  console.log("👥 Creating teams...");

  // Create teams
  const teams = await Promise.all([
    prisma.team.create({
      data: {
        name: "Frontend Team",
        description: "Responsible for UI/UX development",
      },
    }),
    prisma.team.create({
      data: {
        name: "Backend Team",
        description: "Responsible for API and server development",
      },
    }),
    prisma.team.create({
      data: {
        name: "DevOps Team",
        description: "Responsible for infrastructure and deployment",
      },
    }),
    prisma.team.create({
      data: {
        name: "Design Team",
        description: "Responsible for product design and user experience",
      },
    }),
    prisma.team.create({
      data: {
        name: "QA Team",
        description: "Responsible for quality assurance and testing",
      },
    }),
  ]);

  // Add team invitations
  // console.log("📨 Creating team invitations...")

  // const invitationStatuses = ["PENDING", "ACCEPTED", "DECLINED"]

  // // Create some pending invitations
  // await Promise.all([
  //   // Invite Charlie to Frontend team
  //   prisma.teamInvitation.create({
  //     data: {
  //       teamId: teams[0].id,
  //       email: users[4].email,
  //       role: "MEMBER",
  //       invitedById: users[0].id,
  //       status: "PENDING",
  //       token: "frontend-invite-token-charlie",
  //       expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days from now
  //     },
  //   }),

  //   // Invite Jane to Backend team
  //   prisma.teamInvitation.create({
  //     data: {
  //       teamId: teams[1].id,
  //       email: users[1].email,
  //       role: "MEMBER",
  //       invitedById: users[0].id,
  //       status: "PENDING",
  //       token: "backend-invite-token-jane",
  //       expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days from now
  //     },
  //   }),

  //   // Invite Bob to Design team
  //   prisma.teamInvitation.create({
  //     data: {
  //       teamId: teams[3].id,
  //       email: users[2].email,
  //       role: "MEMBER",
  //       invitedById: users[3].id,
  //       status: "ACCEPTED",
  //       token: "design-invite-token-bob",
  //       expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days from now
  //     },
  //   }),

  //   // Invite Alice to QA team
  //   prisma.teamInvitation.create({
  //     data: {
  //       teamId: teams[4].id,
  //       email: "new-user@example.com",
  //       role: "MEMBER",
  //       invitedById: users[3].id,
  //       status: "PENDING",
  //       token: "qa-invite-token-newuser",
  //       expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days from now
  //     },
  //   }),
  // ])

  // Add team activity records
  // console.log("📊 Creating team activity records...")

  // const activityTypes = ["MEMBER_JOINED", "MEMBER_LEFT", "ROLE_UPDATED", "TEAM_UPDATED", "STANDUP_CREATED"]

  // const today = new Date()

  // // Create activity records for the past 7 days
  // for (let dayOffset = 0; dayOffset < 7; dayOffset++) {
  //   const date = new Date(today)
  //   date.setDate(date.getDate() - dayOffset)

  //   // Create 1-3 random activities per day
  //   const numActivities = Math.floor(Math.random() * 3) + 1

  //   for (let i = 0; i < numActivities; i++) {
  //     const randomTeam = teams[Math.floor(Math.random() * teams.length)]
  //     const randomUser = users[Math.floor(Math.random() * users.length)]
  //     const randomActivityType = activityTypes[Math.floor(Math.random() * activityTypes.length)]

  //     let description = ""

  //     switch (randomActivityType) {
  //       case "MEMBER_JOINED":
  //         description = `${randomUser.name} joined the team`
  //         break
  //       case "MEMBER_LEFT":
  //         description = `${randomUser.name} left the team`
  //         break
  //       case "ROLE_UPDATED":
  //         const roles = ["ADMIN", "MEMBER", "MANAGER"]
  //         const randomRole = roles[Math.floor(Math.random() * roles.length)]
  //         description = `${randomUser.name}'s role was updated to ${randomRole}`
  //         break
  //       case "TEAM_UPDATED":
  //         description = `Team information was updated by ${randomUser.name}`
  //         break
  //       case "STANDUP_CREATED":
  //         description = `${randomUser.name} submitted a standup`
  //         break
  //     }

  //     await prisma.teamActivity.create({
  //       data: {
  //         teamId: randomTeam.id,
  //         userId: randomUser.id,
  //         type: randomActivityType,
  //         description,
  //         createdAt: date,
  //       },
  //     })
  //   }
  // }

  console.log("🔄 Creating user-team relationships...");

  // Create user-team relationships
  await Promise.all([
    // John is in all teams as admin
    prisma.userTeam.create({
      data: {
        userId: users[0].id,
        teamId: teams[0].id,
        role: "admin",
      },
    }),
    prisma.userTeam.create({
      data: {
        userId: users[0].id,
        teamId: teams[1].id,
        role: "admin",
      },
    }),
    prisma.userTeam.create({
      data: {
        userId: users[0].id,
        teamId: teams[2].id,
        role: "admin",
      },
    }),

    // Jane is in Frontend team
    prisma.userTeam.create({
      data: {
        userId: users[1].id,
        teamId: teams[0].id,
        role: "member",
      },
    }),

    // Bob is in Backend team
    prisma.userTeam.create({
      data: {
        userId: users[2].id,
        teamId: teams[1].id,
        role: "member",
      },
    }),

    // Alice is manager in all teams
    prisma.userTeam.create({
      data: {
        userId: users[3].id,
        teamId: teams[0].id,
        role: "admin",
      },
    }),
    prisma.userTeam.create({
      data: {
        userId: users[3].id,
        teamId: teams[1].id,
        role: "admin",
      },
    }),
    prisma.userTeam.create({
      data: {
        userId: users[3].id,
        teamId: teams[2].id,
        role: "admin",
      },
    }),

    // Charlie is in DevOps team
    prisma.userTeam.create({
      data: {
        userId: users[4].id,
        teamId: teams[2].id,
        role: "member",
      },
    }),
  ]);

  console.log("🏷️ Creating tags...");

  // Create common tags
  const tags = await Promise.all([
    prisma.tag.create({ data: { name: "frontend" } }),
    prisma.tag.create({ data: { name: "backend" } }),
    prisma.tag.create({ data: { name: "bug" } }),
    prisma.tag.create({ data: { name: "feature" } }),
    prisma.tag.create({ data: { name: "documentation" } }),
    prisma.tag.create({ data: { name: "testing" } }),
    prisma.tag.create({ data: { name: "devops" } }),
    prisma.tag.create({ data: { name: "design" } }),
  ]);

  console.log("📝 Creating standups...");

  const today = new Date();

  // Create standups for each day (today and 3 days back)
  for (let dayOffset = 0; dayOffset <= 3; dayOffset++) {
    const date = new Date(today);
    date.setDate(date.getDate() - dayOffset);

    for (const user of users) {
      // Skip some days randomly to make data more realistic
      if (Math.random() > 0.8) continue;

      // Get teams the user is a member of
      const userTeams = await prisma.userTeam.findMany({
        where: { userId: user.id },
        select: { teamId: true },
      });

      if (userTeams.length === 0) continue;

      // Pick a random team the user is a member of
      const randomTeamId =
        userTeams[Math.floor(Math.random() * userTeams.length)].teamId;

      // Generate random standup data
      const yesterday = [
        "Completed the login page design",
        "Fixed API authentication bugs",
        "Implemented user profile page",
        "Code review for PR #123",
        "Updated documentation for API endpoints",
        "Deployed new version to staging",
        "Created unit tests for auth module",
        "Refactored database queries for better performance",
      ];

      const today = [
        "Working on dashboard UI components",
        "Implementing search functionality",
        "Fixing responsive design issues",
        "Adding validation to forms",
        "Setting up CI/CD pipeline",
        "Optimizing database queries",
        "Implementing file upload feature",
        "Adding error handling to API endpoints",
      ];

      const blockers = [
        "Waiting for design team to finalize mockups",
        "Need access to production database",
        "API endpoint not working as expected",
        "Dependency conflicts in package.json",
        "Performance issues with large datasets",
        "",
        "",
        "",
      ];

      // Randomly select content
      const randomYesterday =
        yesterday[Math.floor(Math.random() * yesterday.length)];
      const randomToday = today[Math.floor(Math.random() * today.length)];
      const randomBlocker =
        blockers[Math.floor(Math.random() * blockers.length)];

      // Create the standup
      const standup = await prisma.standup.create({
        data: {
          userId: user.id,
          teamId: randomTeamId,
          yesterday: randomYesterday,
          today: randomToday,
          blockers: randomBlocker,
        },
      });

      // Add random tags to the standup
      const numTags = Math.floor(Math.random() * 3) + 1; // 1-3 tags
      const shuffledTags = [...tags].sort(() => 0.5 - Math.random());

      for (let i = 0; i < numTags && i < shuffledTags.length; i++) {
        await prisma.$executeRaw`
          INSERT INTO "_StandupToTag" ("A", "B")
          VALUES (${standup.id}, ${shuffledTags[i].id})
        `;
      }
    }
  }

  console.log("👨‍💻 Creating pair programming sessions...");

  // Create pair programming sessions
  const sessionStatuses = ["SCHEDULED", "ACTIVE", "COMPLETED"];
  const sessionTitles = [
    "Code Review: Authentication Module",
    "Pair Programming: Dashboard Components",
    "Debugging Session: API Endpoints",
    "Feature Implementation: User Profiles",
    "Architecture Planning: Database Schema",
  ];

  for (const team of teams) {
    // Create 1-3 sessions per team
    const numSessions = Math.floor(Math.random() * 3) + 1;

    for (let i = 0; i < numSessions; i++) {
      // Get random title
      const title =
        sessionTitles[Math.floor(Math.random() * sessionTitles.length)];

      // Get random status
      const status =
        sessionStatuses[Math.floor(Math.random() * sessionStatuses.length)];

      // Set start time (between now and 7 days from now)
      const startTime = new Date();
      startTime.setDate(startTime.getDate() + Math.floor(Math.random() * 7));

      // Set end time (1-2 hours after start time)
      const endTime = new Date(startTime);
      endTime.setHours(endTime.getHours() + Math.floor(Math.random() * 2) + 1);

      // Create session
      const session = await prisma.pairProgrammingSession.create({
        data: {
          title: String(title),
          description: `This is a ${status?.toLowerCase()} pair programming session for the ${team.name}.`,
          teamId: team.id,
          status,
          startTime,
          endTime: status === "COMPLETED" ? endTime : null,
          recordingUrl:
            status === "COMPLETED"
              ? "https://example.com/recordings/session-123.mp4"
              : null,
        },
      });

      // Get team members
      const teamMembers = await prisma.userTeam.findMany({
        where: { teamId: team.id },
        select: { userId: true },
      });

      if (teamMembers.length === 0) continue;

      // Add 2-3 random participants
      const numParticipants = Math.min(
        Math.floor(Math.random() * 2) + 2,
        teamMembers.length,
      );
      const shuffledMembers = [...teamMembers].sort(() => 0.5 - Math.random());

      for (let j = 0; j < numParticipants; j++) {
        await prisma.pairSessionParticipant.create({
          data: {
            sessionId: session.id,
            userId: shuffledMembers[j]?.userId || "",
          },
        });
      }
    }
  }

  console.log("🔄 Creating pull requests...");

  // Create pull requests
  const prStatuses = [
    "OPEN",
    "NEEDS_REVIEW",
    "CHANGES_REQUESTED",
    "READY_TO_MERGE",
    "MERGED",
    "CLOSED",
  ];
  const prTitles = [
    "Add user authentication",
    "Fix responsive design issues",
    "Implement dashboard components",
    "Update API documentation",
    "Refactor database queries",
    "Add unit tests for auth module",
    "Fix bug in login form",
    "Implement file upload feature",
  ];

  for (const team of teams) {
    // Create 2-5 PRs per team
    const numPRs = Math.floor(Math.random() * 4) + 2;

    for (let i = 0; i < numPRs; i++) {
      // Get random title
      const title = prTitles[Math.floor(Math.random() * prTitles.length)];

      // Get random status
      const status = prStatuses[Math.floor(Math.random() * prStatuses.length)];

      // Get random PR number
      const number = Math.floor(Math.random() * 1000) + 1;

      // Get team members
      const teamMembers = await prisma.userTeam.findMany({
        where: { teamId: team.id },
        select: { userId: true },
      });

      if (teamMembers.length === 0) continue;

      // Get random team member
      const randomMember =
        teamMembers[Math.floor(Math.random() * teamMembers.length)];

      // Create PR
      await prisma.pullRequest.create({
        data: {
          title: String(title),
          description: `This is a ${status?.toLowerCase()} pull request for the ${team.name}.`,
          number,
          url: `https://github.com/example/repo/pull/${number}`,
          status,
          userId: randomMember?.userId || "",
          teamId: team.id,
        },
      });
    }
  }

  console.log("⏱️ Creating focus times...");

  // Create focus times for each user
  for (const user of users) {
    // Create 5-10 focus time entries per user
    const numEntries = Math.floor(Math.random() * 6) + 5;

    for (let i = 0; i < numEntries; i++) {
      // Random date in the past 30 days
      const date = new Date();
      date.setDate(date.getDate() - Math.floor(Math.random() * 30));

      // Random minutes (15-120)
      const minutes = (Math.floor(Math.random() * 8) + 1) * 15;

      // Create focus time entry
      await prisma.focusTime.create({
        data: {
          userId: user.id,
          date,
          minutes,
        },
      });
    }
  }

  console.log("💰 Creating subscriptions...");

  // Create subscriptions for some users
  const plans = ["FREE", "PRO", "TEAM"];
  const statuses = ["ACTIVE", "CANCELED", "PAST_DUE"];

  for (let i = 0; i < 3; i++) {
    // Get random plan
    const plan = plans[Math.floor(Math.random() * plans.length)];

    // Get random status
    const status = statuses[Math.floor(Math.random() * statuses.length)];

    // Random start date in the past year
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - Math.floor(Math.random() * 365));

    // Random end date (if not active)
    let endDate = null;
    if (status !== "ACTIVE") {
      endDate = new Date(startDate);
      endDate.setDate(endDate.getDate() + Math.floor(Math.random() * 180) + 30); // 30-210 days after start
    }

    // Create subscription
    await prisma.subscription.create({
      data: {
        userId: users[i]?.id || "",
        plan,
        status,
        startDate,
        endDate,
      },
    });
  }

  console.log("✅ Seed completed successfully!");
}

main()
  .catch((e) => {
    console.error("❌ Error during seeding:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
