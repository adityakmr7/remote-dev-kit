import { PrismaClient } from "../src/generated/prisma";
import { randomUUID } from "crypto";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();
const saltRounds = 10;
const password = await bcrypt.hash("password123", saltRounds);
async function main() {
  // Clean up existing data
  await prisma.adminActivityLog.deleteMany({});
  await prisma.subscription.deleteMany({});
  await prisma.pullRequestReviewer.deleteMany({});
  await prisma.pullRequestComment.deleteMany({});
  await prisma.pullRequest.deleteMany({});
  await prisma.focusTime.deleteMany({});
  await prisma.pairSessionParticipant.deleteMany({});
  await prisma.pairProgrammingSession.deleteMany({});
  await prisma.standup.deleteMany({});
  await prisma.tag.deleteMany({});
  await prisma.teamInvitation.deleteMany({});
  await prisma.userTeam.deleteMany({});
  await prisma.team.deleteMany({});
  await prisma.organizationMember.deleteMany({});
  await prisma.organization.deleteMany({});
  await prisma.user.deleteMany({});

  console.log("Database cleaned");

  // Create admin user
  const adminUser = await prisma.user.create({
    data: {
      name: "Admin User",
      email: "admin@remotedevkit.com",
      password: password, // password123
      avatarUrl: "https://randomuser.me/api/portraits/men/0.jpg",
      provider: "email",
      status: "online",
      role: "admin",
      isAdmin: true, // Super admin flag
    },
  });

  console.log("Created admin user:", adminUser.email);

  // Create regular users
  const users = await Promise.all([
    prisma.user.create({
      data: {
        name: "John Doe",
        email: "john@example.com",
        password: password, // password123
        avatarUrl: "https://randomuser.me/api/portraits/men/1.jpg",
        provider: "email",
        status: "online",
        role: "admin",
        isAdmin: false,
      },
    }),
    prisma.user.create({
      data: {
        name: "Jane Smith",
        email: "jane@example.com",
        password: password,
        avatarUrl: "https://randomuser.me/api/portraits/women/1.jpg",
        provider: "email",
        status: "online",
        role: "user",
        isAdmin: false,
      },
    }),
    prisma.user.create({
      data: {
        name: "Bob Johnson",
        email: "bob@example.com",
        password: password,
        avatarUrl: "https://randomuser.me/api/portraits/men/2.jpg",
        provider: "github",
        status: "offline",
        role: "user",
        isAdmin: false,
      },
    }),
    prisma.user.create({
      data: {
        name: "Alice Williams",
        email: "alice@example.com",
        password: password,
        avatarUrl: "https://randomuser.me/api/portraits/women/2.jpg",
        provider: "email",
        status: "away",
        role: "user",
        isAdmin: false,
      },
    }),
    prisma.user.create({
      data: {
        name: "Charlie Brown",
        email: "charlie@example.com",
        password: password,
        avatarUrl: "https://randomuser.me/api/portraits/men/3.jpg",
        provider: "email",
        status: "online",
        role: "user",
        isAdmin: false,
      },
    }),
  ]);

  console.log(`Created ${users.length} regular users`);

  // Create organizations with different approval and subscription statuses
  const organizations = await Promise.all([
    prisma.organization.create({
      data: {
        name: "Acme Corporation",
        description: "A global software development company",
        logo: "https://logo.clearbit.com/acme.com",
        website: "https://acme.com",
        isActive: true,
        isApproved: true,
        approvedAt: new Date(),
        approvedBy: adminUser.id,
        subscriptionTier: "PREMIUM",
        subscriptionStatus: "ACTIVE",
        subscriptionStartDate: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000), // 30 days ago
        subscriptionEndDate: new Date(Date.now() + 335 * 24 * 60 * 60 * 1000), // 335 days from now
        maxUsers: 50,
        maxTeams: 10,
        maxProjects: 100,
        contactEmail: "contact@acme.com",
        contactPhone: "+1-555-123-4567",
        address: "123 Main St",
        city: "San Francisco",
        state: "CA",
        country: "USA",
        postalCode: "94105",
      },
    }),
    prisma.organization.create({
      data: {
        name: "Startup Innovators",
        description: "An emerging tech startup",
        logo: "https://logo.clearbit.com/startupinnovators.com",
        website: "https://startupinnovators.com",
        isActive: true,
        isApproved: true,
        approvedAt: new Date(),
        approvedBy: adminUser.id,
        subscriptionTier: "BASIC",
        subscriptionStatus: "ACTIVE",
        subscriptionStartDate: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000), // 15 days ago
        subscriptionEndDate: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000), // 15 days from now
        maxUsers: 10,
        maxTeams: 3,
        maxProjects: 20,
        contactEmail: "hello@startupinnovators.com",
        contactPhone: "+1-555-987-6543",
        address: "456 Startup Ave",
        city: "Austin",
        state: "TX",
        country: "USA",
        postalCode: "78701",
      },
    }),
    prisma.organization.create({
      data: {
        name: "Tech Giants Inc",
        description: "A leading technology corporation",
        logo: "https://logo.clearbit.com/techgiants.com",
        website: "https://techgiants.com",
        isActive: true,
        isApproved: true,
        approvedAt: new Date(),
        approvedBy: adminUser.id,
        subscriptionTier: "ENTERPRISE",
        subscriptionStatus: "ACTIVE",
        subscriptionStartDate: new Date(Date.now() - 60 * 24 * 60 * 60 * 1000), // 60 days ago
        subscriptionEndDate: new Date(Date.now() + 305 * 24 * 60 * 60 * 1000), // 305 days from now
        maxUsers: 500,
        maxTeams: 50,
        maxProjects: 1000,
        contactEmail: "enterprise@techgiants.com",
        contactPhone: "+1-555-789-0123",
        address: "789 Tech Blvd",
        city: "Seattle",
        state: "WA",
        country: "USA",
        postalCode: "98101",
      },
    }),
    prisma.organization.create({
      data: {
        name: "Pending Approval Co",
        description: "Organization waiting for approval",
        logo: "https://logo.clearbit.com/pendingapproval.com",
        website: "https://pendingapproval.com",
        isActive: true,
        isApproved: false,
        subscriptionTier: "FREE",
        subscriptionStatus: "PENDING",
        maxUsers: 5,
        maxTeams: 2,
        maxProjects: 10,
        contactEmail: "info@pendingapproval.com",
        contactPhone: "+1-555-456-7890",
        address: "101 Pending St",
        city: "Chicago",
        state: "IL",
        country: "USA",
        postalCode: "60601",
      },
    }),
    prisma.organization.create({
      data: {
        name: "Inactive Organization",
        description: "An inactive organization",
        logo: "https://logo.clearbit.com/inactive.com",
        website: "https://inactive.com",
        isActive: false,
        isApproved: true,
        approvedAt: new Date(Date.now() - 90 * 24 * 60 * 60 * 1000), // 90 days ago
        approvedBy: adminUser.id,
        subscriptionTier: "BASIC",
        subscriptionStatus: "CANCELLED",
        subscriptionStartDate: new Date(Date.now() - 120 * 24 * 60 * 60 * 1000), // 120 days ago
        subscriptionEndDate: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000), // 30 days ago
        maxUsers: 10,
        maxTeams: 3,
        maxProjects: 20,
        contactEmail: "contact@inactive.com",
        contactPhone: "+1-555-321-0987",
        address: "202 Inactive Ave",
        city: "Miami",
        state: "FL",
        country: "USA",
        postalCode: "33101",
      },
    }),
  ]);

  console.log(`Created ${organizations.length} organizations`);

  // Create subscriptions for organizations
  const subscriptions = await Promise.all([
    prisma.subscription.create({
      data: {
        organizationId: organizations[0].id,
        tier: "PREMIUM",
        status: "ACTIVE",
        startDate: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000), // 30 days ago
        endDate: new Date(Date.now() + 335 * 24 * 60 * 60 * 1000), // 335 days from now
        billingCycle: "ANNUAL",
        amount: 999.99,
        currency: "USD",
        paymentMethod: "CREDIT_CARD",
        paymentReference: "ch_" + randomUUID().replace(/-/g, ""),
        lastBillingDate: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000), // 30 days ago
        nextBillingDate: new Date(Date.now() + 335 * 24 * 60 * 60 * 1000), // 335 days from now
      },
    }),
    prisma.subscription.create({
      data: {
        organizationId: organizations[1].id,
        tier: "BASIC",
        status: "ACTIVE",
        startDate: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000), // 15 days ago
        endDate: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000), // 15 days from now
        billingCycle: "MONTHLY",
        amount: 49.99,
        currency: "USD",
        paymentMethod: "CREDIT_CARD",
        paymentReference: "ch_" + randomUUID().replace(/-/g, ""),
        lastBillingDate: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000), // 15 days ago
        nextBillingDate: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000), // 15 days from now
      },
    }),
    prisma.subscription.create({
      data: {
        organizationId: organizations[2].id,
        tier: "ENTERPRISE",
        status: "ACTIVE",
        startDate: new Date(Date.now() - 60 * 24 * 60 * 60 * 1000), // 60 days ago
        endDate: new Date(Date.now() + 305 * 24 * 60 * 60 * 1000), // 305 days from now
        billingCycle: "ANNUAL",
        amount: 4999.99,
        currency: "USD",
        paymentMethod: "BANK_TRANSFER",
        paymentReference: "bt_" + randomUUID().replace(/-/g, ""),
        lastBillingDate: new Date(Date.now() - 60 * 24 * 60 * 60 * 1000), // 60 days ago
        nextBillingDate: new Date(Date.now() + 305 * 24 * 60 * 60 * 1000), // 305 days from now
      },
    }),
    prisma.subscription.create({
      data: {
        organizationId: organizations[4].id,
        tier: "BASIC",
        status: "CANCELLED",
        startDate: new Date(Date.now() - 120 * 24 * 60 * 60 * 1000), // 120 days ago
        endDate: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000), // 30 days ago
        billingCycle: "MONTHLY",
        amount: 49.99,
        currency: "USD",
        paymentMethod: "CREDIT_CARD",
        paymentReference: "ch_" + randomUUID().replace(/-/g, ""),
        lastBillingDate: new Date(Date.now() - 60 * 24 * 60 * 60 * 1000), // 60 days ago
        nextBillingDate: null,
      },
    }),
  ]);

  console.log(`Created ${subscriptions.length} subscriptions`);

  // Create organization members
  const organizationMembers = await Promise.all([
    // Admin user is admin in all organizations
    ...organizations.map((org) =>
      prisma.organizationMember.create({
        data: {
          userId: adminUser.id,
          organizationId: org.id,
          role: "ADMIN",
        },
      }),
    ),
    // John is admin in Acme
    prisma.organizationMember.create({
      data: {
        userId: users[0].id,
        organizationId: organizations[0].id,
        role: "ADMIN",
      },
    }),
    // Jane is lead in Acme
    prisma.organizationMember.create({
      data: {
        userId: users[1].id,
        organizationId: organizations[0].id,
        role: "LEAD",
      },
    }),
    // Bob is member in Acme
    prisma.organizationMember.create({
      data: {
        userId: users[2].id,
        organizationId: organizations[0].id,
        role: "MEMBER",
      },
    }),
    // Alice is admin in Startup Innovators
    prisma.organizationMember.create({
      data: {
        userId: users[3].id,
        organizationId: organizations[1].id,
        role: "ADMIN",
      },
    }),
    // Charlie is lead in Startup Innovators
    prisma.organizationMember.create({
      data: {
        userId: users[4].id,
        organizationId: organizations[1].id,
        role: "LEAD",
      },
    }),
    // John is also a member in Tech Giants
    prisma.organizationMember.create({
      data: {
        userId: users[0].id,
        organizationId: organizations[2].id,
        role: "MEMBER",
      },
    }),
  ]);

  console.log(`Created ${organizationMembers.length} organization members`);

  // Create teams for each organization
  const teams = [];
  for (const org of organizations) {
    if (org.isActive && org.isApproved) {
      const teamCount = Math.min(3, org.maxTeams); // Create up to 3 teams or max allowed

      for (let i = 0; i < teamCount; i++) {
        const team = await prisma.team.create({
          data: {
            name: `${org.name} ${["Development", "Design", "DevOps", "QA", "Marketing"][i % 5]} Team`,
            description: `The ${["Development", "Design", "DevOps", "QA", "Marketing"][i % 5]} team at ${org.name}`,
            organizationId: org.id,
          },
        });
        teams.push(team);
      }
    }
  }

  console.log(`Created ${teams.length} teams`);

  // Create user-team relationships
  const userTeams = [];

  // For each organization member
  for (const orgMember of organizationMembers) {
    // Find teams in their organization
    const orgTeams = teams.filter(
      (team) => team.organizationId === orgMember.organizationId,
    );

    if (orgTeams.length > 0) {
      // If they're an admin or lead, add them to all teams
      if (orgMember.role === "ADMIN" || orgMember.role === "LEAD") {
        for (const team of orgTeams) {
          const userTeam = await prisma.userTeam.create({
            data: {
              userId: orgMember.userId,
              teamId: team.id,
              role: orgMember.role === "ADMIN" ? "admin" : "member",
            },
          });
          userTeams.push(userTeam);
        }
      }
      // If they're a regular member, add them to 1-2 random teams
      else {
        const teamCount = Math.floor(Math.random() * 2) + 1;
        const randomTeams = orgTeams
          .sort(() => 0.5 - Math.random())
          .slice(0, teamCount);

        for (const team of randomTeams) {
          const userTeam = await prisma.userTeam.create({
            data: {
              userId: orgMember.userId,
              teamId: team.id,
              role: "member",
            },
          });
          userTeams.push(userTeam);
        }
      }
    }
  }

  console.log(`Created ${userTeams.length} user-team relationships`);

  // Create admin activity logs
  const adminActivities = await Promise.all([
    prisma.adminActivityLog.create({
      data: {
        action: "APPROVE",
        entityType: "ORGANIZATION",
        entityId: organizations[0].id,
        adminId: adminUser.id,
        details: JSON.stringify({
          name: organizations[0].name,
          subscriptionTier: "PREMIUM",
        }),
        ipAddress: "192.168.1.1",
        userAgent:
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
      },
    }),
    prisma.adminActivityLog.create({
      data: {
        action: "APPROVE",
        entityType: "ORGANIZATION",
        entityId: organizations[1].id,
        adminId: adminUser.id,
        details: JSON.stringify({
          name: organizations[1].name,
          subscriptionTier: "BASIC",
        }),
        ipAddress: "192.168.1.1",
        userAgent:
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
      },
    }),
    prisma.adminActivityLog.create({
      data: {
        action: "APPROVE",
        entityType: "ORGANIZATION",
        entityId: organizations[2].id,
        adminId: adminUser.id,
        details: JSON.stringify({
          name: organizations[2].name,
          subscriptionTier: "ENTERPRISE",
        }),
        ipAddress: "192.168.1.1",
        userAgent:
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
      },
    }),
    prisma.adminActivityLog.create({
      data: {
        action: "UPDATE",
        entityType: "ORGANIZATION",
        entityId: organizations[0].id,
        adminId: adminUser.id,
        details: JSON.stringify({
          field: "maxUsers",
          oldValue: "20",
          newValue: "50",
        }),
        ipAddress: "192.168.1.1",
        userAgent:
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
      },
    }),
    prisma.adminActivityLog.create({
      data: {
        action: "DEACTIVATE",
        entityType: "ORGANIZATION",
        entityId: organizations[4].id,
        adminId: adminUser.id,
        details: JSON.stringify({
          reason: "Subscription cancelled",
        }),
        ipAddress: "192.168.1.1",
        userAgent:
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
      },
    }),
  ]);

  console.log(`Created ${adminActivities.length} admin activity logs`);

  // Create tags
  const tags = await Promise.all([
    prisma.tag.create({ data: { name: "bug" } }),
    prisma.tag.create({ data: { name: "feature" } }),
    prisma.tag.create({ data: { name: "documentation" } }),
    prisma.tag.create({ data: { name: "enhancement" } }),
    prisma.tag.create({ data: { name: "help-wanted" } }),
    prisma.tag.create({ data: { name: "high-priority" } }),
    prisma.tag.create({ data: { name: "low-priority" } }),
    prisma.tag.create({ data: { name: "discussion" } }),
  ]);

  console.log(`Created ${tags.length} tags`);

  // Helper function to get random items from an array
  function getRandomItems<T>(array: T[], count: number): T[] {
    const shuffled = [...array].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }

  // Helper function to get random date in the past
  function getRandomPastDate(daysAgo: number): Date {
    const date = new Date();
    date.setDate(date.getDate() - Math.floor(Math.random() * daysAgo));
    return date;
  }

  // Create standups for each user for the past few days
  const standups = [];
  for (const userTeam of userTeams) {
    // Create standups for today and the past 3 days
    for (let i = 0; i < 4; i++) {
      const date = new Date();
      date.setDate(date.getDate() - i);

      if (Math.random() > 0.3) {
        // 70% chance to have a standup for each day
        const standup = await prisma.standup.create({
          data: {
            userId: userTeam.userId,
            teamId: userTeam.teamId,
            yesterday: `Worked on ${["UI components", "API endpoints", "database schema", "documentation", "bug fixes"][Math.floor(Math.random() * 5)]}`,
            today: `Planning to work on ${["new feature", "fixing bugs", "code review", "testing", "deployment"][Math.floor(Math.random() * 5)]}`,
            blockers:
              Math.random() > 0.7
                ? `Waiting for ${["API access", "design approval", "code review", "dependency update", "server access"][Math.floor(Math.random() * 5)]}`
                : null,
            createdAt: new Date(
              date.setHours(
                9 + Math.floor(Math.random() * 3),
                Math.floor(Math.random() * 60),
              ),
            ),
          },
        });

        // Add random tags to standup
        const randomTags = getRandomItems(
          tags,
          Math.floor(Math.random() * 3) + 1,
        );
        for (const tag of randomTags) {
          await prisma.standup.update({
            where: { id: standup.id },
            data: {
              tags: {
                connect: { id: tag.id },
              },
            },
          });
        }

        standups.push(standup);
      }
    }
  }

  console.log(`Created ${standups.length} standups`);

  // Create pair programming sessions
  const pairSessions = [];
  for (const team of teams) {
    // Create 1-3 sessions per team
    const sessionCount = Math.floor(Math.random() * 3) + 1;

    for (let i = 0; i < sessionCount; i++) {
      // Get team members
      const teamMembers = await prisma.userTeam.findMany({
        where: { teamId: team.id },
        include: { user: true },
      });

      if (teamMembers.length < 2) continue;

      // Random status
      const status = ["SCHEDULED", "ACTIVE", "COMPLETED"][
        Math.floor(Math.random() * 3)
      ];

      // Random dates
      const startTime = getRandomPastDate(7);
      let endTime = null;
      if (status === "COMPLETED") {
        endTime = new Date(startTime);
        endTime.setHours(
          endTime.getHours() + Math.floor(Math.random() * 3) + 1,
        );
      }

      const session = await prisma.pairProgrammingSession.create({
        data: {
          title: `${["Feature Development", "Bug Fix", "Code Review", "Refactoring", "Architecture Discussion"][Math.floor(Math.random() * 5)]} Session`,
          description: `Collaborative session to ${["implement new feature", "fix critical bug", "review pull request", "refactor legacy code", "discuss architecture"][Math.floor(Math.random() * 5)]}`,
          teamId: team.id,
          status,
          startTime,
          endTime,
          recordingUrl:
            status === "COMPLETED"
              ? `https://example.com/recordings/${randomUUID()}`
              : null,
        },
      });

      // Add 2-3 random participants
      const participants = getRandomItems(
        teamMembers,
        Math.min(teamMembers.length, Math.floor(Math.random() * 2) + 2),
      );

      for (const participant of participants) {
        await prisma.pairSessionParticipant.create({
          data: {
            sessionId: session.id,
            userId: participant.userId,
          },
        });
      }

      pairSessions.push(session);
    }
  }

  console.log(`Created ${pairSessions.length} pair programming sessions`);

  // Create pull requests
  const pullRequests = [];
  for (const team of teams) {
    // Create 2-5 PRs per team
    const prCount = Math.floor(Math.random() * 4) + 2;

    // Get team members
    const teamMembers = await prisma.userTeam.findMany({
      where: { teamId: team.id },
    });

    if (teamMembers.length === 0) continue;

    for (let i = 0; i < prCount; i++) {
      // Random team member
      const randomMember =
        teamMembers[Math.floor(Math.random() * teamMembers.length)];

      // Random PR number
      const prNumber = Math.floor(Math.random() * 1000) + 100;

      // Random status
      const status = [
        "OPEN",
        "NEEDS_REVIEW",
        "CHANGES_REQUESTED",
        "READY_TO_MERGE",
        "MERGED",
        "CLOSED",
      ][Math.floor(Math.random() * 6)];

      const pr = await prisma.pullRequest.create({
        data: {
          title: `${["Add", "Fix", "Update", "Refactor", "Remove"][Math.floor(Math.random() * 5)]} ${["login functionality", "dashboard UI", "API endpoint", "database schema", "documentation"][Math.floor(Math.random() * 5)]}`,
          description: `This PR ${["adds new feature", "fixes critical bug", "updates dependencies", "refactors code", "improves performance"][Math.floor(Math.random() * 5)]}`,
          status: status || "",
          repositoryUrl: `https://github.com/organization/repo`,
          prNumber: prNumber,
          commitsCount: Math.floor(Math.random() * 10) + 1,
          filesChanged: Math.floor(Math.random() * 20) + 1,
          createdBy: randomMember?.userId || "",
          teamId: team.id,
          createdAt: getRandomPastDate(14),
          updatedAt: getRandomPastDate(7),
        },
      });

      // Add 1-3 reviewers
      const potentialReviewers = teamMembers.filter(
        (tm) => tm.userId !== randomMember?.userId,
      );
      if (potentialReviewers.length > 0) {
        const reviewerCount = Math.min(
          potentialReviewers.length,
          Math.floor(Math.random() * 3) + 1,
        );
        const reviewers = getRandomItems(potentialReviewers, reviewerCount);

        for (const reviewer of reviewers) {
          await prisma.pullRequestReviewer.create({
            data: {
              pullRequestId: pr.id,
              userId: reviewer.userId,
            },
          });
        }
      }

      // Add 0-5 comments
      const commentCount = Math.floor(Math.random() * 6);
      for (let j = 0; j < commentCount; j++) {
        // Random commenter (could be author or reviewer)
        const commenter =
          teamMembers[Math.floor(Math.random() * teamMembers.length)];

        await prisma.pullRequestComment.create({
          data: {
            content: `${["Great work!", "Can you explain this part?", "I suggest refactoring this section.", "This looks good to me.", "Let's discuss this approach further."][Math.floor(Math.random() * 5)]} ${Math.random() > 0.7 ? "Please make the requested changes and I'll approve." : ""}`,
            pullRequestId: pr.id,
            userId: commenter?.userId || "",
            createdAt: new Date(
              pr.createdAt.getTime() + (1 + j) * 60 * 60 * 1000,
            ), // 1+ hours after PR creation
            updatedAt: new Date(
              pr.createdAt.getTime() + (1 + j) * 60 * 60 * 1000,
            ),
          },
        });
      }

      pullRequests.push(pr);
    }
  }

  console.log(`Created ${pullRequests.length} pull requests`);

  // Create focus times
  const focusTimes = [];
  for (const user of [...users, adminUser]) {
    // Create 5-10 focus time entries per user
    const focusCount = Math.floor(Math.random() * 6) + 5;

    for (let i = 0; i < focusCount; i++) {
      const focusTime = await prisma.focusTime.create({
        data: {
          userId: user.id,
          date: getRandomPastDate(30),
          minutes: (Math.floor(Math.random() * 8) + 1) * 15, // 15-120 minutes in 15-minute increments
        },
      });

      focusTimes.push(focusTime);
    }
  }

  console.log(`Created ${focusTimes.length} focus time entries`);

  console.log("Seeding completed successfully!");
}

main()
  .catch((e) => {
    console.error("Error during seeding:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
