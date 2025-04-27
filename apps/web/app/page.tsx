"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Skeleton } from "@/components/ui/skeleton";
import { AppSidebar } from "@/components/app-sidebar";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  type DashboardStats,
  getActivePairSessions,
  getDashboardStats,
  getTodayStandups,
  type PairSession,
  type Standup,
} from "@/lib/dashboard-api";

export default function Dashboard() {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [standups, setStandups] = useState<Standup[] | null>(null);
  const [pairSessions, setPairSessions] = useState<PairSession[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    async function fetchDashboardData() {
      setIsLoading(true);
      try {
        // Check if user is authenticated before making API calls
        // const isAuthenticated = await isUserAuthenticated();

        // if (!isAuthenticated) {
        //   console.error("User not authenticated, redirecting to login");
        //   router.push("/login");
        //   return;
        // }

        // Fetch all data in parallel
        const [statsData, standupsData, pairSessionsData] = await Promise.all([
          getDashboardStats(),
          getTodayStandups(),
          getActivePairSessions(),
        ]);

        setStats(statsData);
        setStandups(standupsData);
        setPairSessions(pairSessionsData);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
        // Show error toast or notification here
      } finally {
        setIsLoading(false);
      }
    }

    fetchDashboardData();
  }, [router]);

  // Helper function to check authentication
  // async function isUserAuthenticated() {
  //   // First check localStorage for tokens
  //   const accessToken = localStorage.getItem("accessToken");
  //   if (!accessToken) return false;
  //
  //   try {
  //     // Make a lightweight API call to validate the token
  //     await apiClient.get("/auth/validate");
  //     return true;
  //   } catch (error) {
  //     console.error("Authentication validation failed:", error);
  //     return false;
  //   }
  // }

  return (
    <SidebarProvider>
      <div className="flex w-screen min-h-screen bg-slate-50 dark:bg-slate-950">
        <AppSidebar />
        <div className="flex-1">
          <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-6">
            <SidebarTrigger />
            <h1 className="text-xl font-semibold">Dashboard</h1>
            <div className="ml-auto flex items-center gap-4">
              <ThemeToggle />
              <Button variant="outline" size="sm">
                Invite Team
              </Button>
              <Button size="sm">Upgrade Plan</Button>
            </div>
          </header>
          <main className="p-6">
            <div className="mb-8 grid gap-4 md:grid-cols-3">
              {isLoading ? (
                <>
                  <StatCardSkeleton />
                  <StatCardSkeleton />
                  <StatCardSkeleton />
                </>
              ) : (
                <>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium">
                        Team Focus Time
                      </CardTitle>
                      <CardDescription>
                        Average daily focus hours
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">
                        {stats?.focusTime.average || 0} hrs
                      </div>
                      <p
                        className={`text-xs ${stats?.focusTime.changePercentage && stats.focusTime.changePercentage > 0 ? "text-emerald-500" : "text-rose-500"}`}
                      >
                        {stats?.focusTime.changePercentage &&
                        stats.focusTime.changePercentage > 0
                          ? "↑"
                          : "↓"}{" "}
                        {Math.abs(stats?.focusTime.changePercentage || 0)}% from
                        last week
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium">
                        Standup Completion
                      </CardTitle>
                      <CardDescription>
                        Today&apos;s team participation
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">
                        {stats?.standupCompletion.rate || 0}%
                      </div>
                      <p
                        className={`text-xs ${stats?.standupCompletion.changePercentage && stats.standupCompletion.changePercentage > 0 ? "text-emerald-500" : "text-rose-500"}`}
                      >
                        {stats?.standupCompletion.changePercentage &&
                        stats.standupCompletion.changePercentage > 0
                          ? "↑"
                          : "↓"}{" "}
                        {Math.abs(
                          stats?.standupCompletion.changePercentage || 0,
                        )}
                        % from yesterday
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium">
                        Open PRs
                      </CardTitle>
                      <CardDescription>Awaiting review</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">
                        {stats?.openPRs.count || 0}
                      </div>
                      <p
                        className={`text-xs ${stats && stats?.openPRs.change > 0 ? "text-rose-500" : "text-emerald-500"}`}
                      >
                        {stats && stats?.openPRs.change > 0 ? "↑" : "↓"}{" "}
                        {Math.abs(stats?.openPRs.change || 0)}{" "}
                        {Math.abs(stats?.openPRs.change || 0) === 1
                          ? "new"
                          : "new"}{" "}
                        since yesterday
                      </p>
                    </CardContent>
                  </Card>
                </>
              )}
            </div>

            <div className="mb-8">
              <h2 className="mb-4 text-lg font-semibold">
                Today&apos;s Standups
              </h2>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {isLoading ? (
                  <>
                    <StandupCardSkeleton />
                    <StandupCardSkeleton />
                    <StandupCardSkeleton />
                  </>
                ) : standups && standups.length > 0 ? (
                  standups.slice(0, 3).map((standup) => (
                    <Card key={standup.id}>
                      <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <div className="flex items-center gap-2">
                          <div className="h-8 w-8 rounded-full bg-slate-200">
                            <img
                              src={
                                standup.user.avatarUrl ||
                                "/placeholder.svg?height=32&width=32"
                              }
                              alt={`${standup.user.name || "User"} avatar`}
                              className="h-full w-full rounded-full object-cover"
                            />
                          </div>
                          <CardTitle className="text-sm font-medium">
                            {standup.user.name}
                          </CardTitle>
                        </div>
                        <span className="text-xs text-muted-foreground">
                          {new Date(standup.createdAt).toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </span>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm">
                          {standup.yesterday && `${standup.yesterday} `}
                          {standup.today && `${standup.today} `}
                          {standup.blockers && `${standup.blockers}`}
                        </p>
                        <div className="mt-2 flex gap-2">
                          {standup.tags.map((tag) => (
                            <span
                              key={tag}
                              className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold"
                            >
                              {tag}
                            </span>
                          ))}
                          <span
                            className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                              standup.status === "blocked"
                                ? "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400"
                                : standup.status === "needs help"
                                  ? "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400"
                                  : "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400"
                            }`}
                          >
                            {standup.status}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  ))
                ) : (
                  <div className="col-span-3 rounded-lg border border-dashed p-8 text-center">
                    <p className="text-muted-foreground">
                      No standups recorded today
                    </p>
                    <Button className="mt-4" size="sm" asChild>
                      <Link href="/standups">Record Standup</Link>
                    </Button>
                  </div>
                )}
              </div>
              {standups && standups.length > 0 && (
                <div className="mt-4 text-center">
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/standups">View All Standups</Link>
                  </Button>
                </div>
              )}
            </div>

            <div>
              <h2 className="mb-4 text-lg font-semibold">
                Active Pair Programming Sessions
              </h2>
              <div className="grid gap-4 md:grid-cols-2">
                {isLoading ? (
                  <>
                    <PairSessionCardSkeleton />
                    <PairSessionCardSkeleton />
                  </>
                ) : pairSessions && pairSessions.length > 0 ? (
                  pairSessions.map((session) => (
                    <Card key={session.id}>
                      <CardHeader className="pb-2">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-sm font-medium">
                            {session.title}
                          </CardTitle>
                          <span className="flex items-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-semibold text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400">
                            Live
                          </span>
                        </div>
                        <CardDescription>
                          Started {getTimeElapsed(new Date(session.startTime))}{" "}
                          ago
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center gap-2">
                          <div className="flex -space-x-2">
                            {session.participants
                              .slice(0, 2)
                              .map((participant) => (
                                <div
                                  key={participant.id}
                                  className="h-8 w-8 rounded-full border-2 border-background bg-slate-200"
                                >
                                  <img
                                    src={
                                      participant.avatarUrl ||
                                      "/placeholder.svg?height=32&width=32"
                                    }
                                    alt={`${participant.name || "User"} avatar`}
                                    className="h-full w-full rounded-full object-cover"
                                  />
                                </div>
                              ))}
                          </div>
                          <span className="text-xs text-muted-foreground">
                            {session.participants
                              .map((p) => p.name)
                              .join(" & ")}
                          </span>
                        </div>
                        <Button className="mt-4 w-full" size="sm">
                          Join Session
                        </Button>
                      </CardContent>
                    </Card>
                  ))
                ) : (
                  <div className="col-span-2 rounded-lg border border-dashed p-8 text-center">
                    <p className="text-muted-foreground">
                      No active pair programming sessions
                    </p>
                    <Button className="mt-4" size="sm" asChild>
                      <Link href="/pair-programming">Start Session</Link>
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}

// Helper function to format time elapsed
function getTimeElapsed(startTime: Date): string {
  const now = new Date();
  const diffMs = now.getTime() - startTime.getTime();
  const diffMins = Math.floor(diffMs / 60000);

  if (diffMins < 60) {
    return `${diffMins} minute${diffMins !== 1 ? "s" : ""}`;
  } else {
    const hours = Math.floor(diffMins / 60);
    const mins = diffMins % 60;
    return `${hours} hour${hours !== 1 ? "s" : ""} ${mins > 0 ? `${mins} minute${mins !== 1 ? "s" : ""}` : ""}`;
  }
}

// Skeleton loaders
function StatCardSkeleton() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <Skeleton className="h-5 w-32" />
        <Skeleton className="h-4 w-40" />
      </CardHeader>
      <CardContent>
        <Skeleton className="h-8 w-16 mb-1" />
        <Skeleton className="h-4 w-24" />
      </CardContent>
    </Card>
  );
}

function StandupCardSkeleton() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div className="flex items-center gap-2">
          <Skeleton className="h-8 w-8 rounded-full" />
          <Skeleton className="h-5 w-24" />
        </div>
        <Skeleton className="h-4 w-16" />
      </CardHeader>
      <CardContent>
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-3/4 mb-4" />
        <div className="flex gap-2">
          <Skeleton className="h-5 w-16 rounded-full" />
          <Skeleton className="h-5 w-20 rounded-full" />
        </div>
      </CardContent>
    </Card>
  );
}

function PairSessionCardSkeleton() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <Skeleton className="h-5 w-40" />
          <Skeleton className="h-5 w-16 rounded-full" />
        </div>
        <Skeleton className="h-4 w-32" />
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-2 mb-4">
          <div className="flex -space-x-2">
            <Skeleton className="h-8 w-8 rounded-full" />
            <Skeleton className="h-8 w-8 rounded-full" />
          </div>
          <Skeleton className="h-4 w-24" />
        </div>
        <Skeleton className="h-9 w-full rounded-md" />
      </CardContent>
    </Card>
  );
}
