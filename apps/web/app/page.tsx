import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSideBar from "@/components/AppSideBar";

export default function Dashboard() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-slate-50 dark:bg-slate-950">
        <AppSideBar />
        <div className="flex-1">
          <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-6">
            <SidebarTrigger />
            <h1 className="text-xl font-semibold">Dashboard</h1>
            <div className="ml-auto flex items-center gap-4">
              <Button variant="outline" size="sm">
                Invite Team
              </Button>
              <Button size="sm">Upgrade Plan</Button>
            </div>
          </header>
          <main className="p-6">
            <div className="mb-8 grid gap-4 md:grid-cols-3">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">
                    Team Focus Time
                  </CardTitle>
                  <CardDescription>Average daily focus hours</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">4.2 hrs</div>
                  <p className="text-xs text-emerald-500">
                    ↑ 12% from last week
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
                  <div className="text-2xl font-bold">85%</div>
                  <p className="text-xs text-emerald-500">
                    ↑ 5% from yesterday
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
                  <div className="text-2xl font-bold">7</div>
                  <p className="text-xs text-rose-500">
                    ↑ 2 new since yesterday
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mb-8">
              <h2 className="mb-4 text-lg font-semibold">
                Today&apos;s Standups
              </h2>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full bg-slate-200">
                        <img
                          src="/placeholder.svg?height=32&width=32"
                          alt="User avatar"
                          className="h-full w-full rounded-full object-cover"
                        />
                      </div>
                      <CardTitle className="text-sm font-medium">
                        Alex Kim
                      </CardTitle>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      10:15 AM
                    </span>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">
                      Completed the authentication flow. Working on API
                      integration today. Blocked by the backend deployment
                      issue.
                    </p>
                    <div className="mt-2 flex gap-2">
                      <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                        auth-service
                      </span>
                      <span className="inline-flex items-center rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-semibold text-red-800 dark:bg-red-900/30 dark:text-red-400">
                        blocked
                      </span>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full bg-slate-200">
                        <img
                          src="/placeholder.svg?height=32&width=32"
                          alt="User avatar"
                          className="h-full w-full rounded-full object-cover"
                        />
                      </div>
                      <CardTitle className="text-sm font-medium">
                        Maya Johnson
                      </CardTitle>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      9:45 AM
                    </span>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">
                      Finished the dashboard UI components. Starting on the
                      analytics charts today. No blockers.
                    </p>
                    <div className="mt-2 flex gap-2">
                      <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                        frontend
                      </span>
                      <span className="inline-flex items-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-semibold text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400">
                        on track
                      </span>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full bg-slate-200">
                        <img
                          src="/placeholder.svg?height=32&width=32"
                          alt="User avatar"
                          className="h-full w-full rounded-full object-cover"
                        />
                      </div>
                      <CardTitle className="text-sm font-medium">
                        James Wilson
                      </CardTitle>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      11:30 AM
                    </span>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">
                      Deployed the new API endpoints. Working on performance
                      optimizations. Need help with the caching strategy.
                    </p>
                    <div className="mt-2 flex gap-2">
                      <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                        backend
                      </span>
                      <span className="inline-flex items-center rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-semibold text-amber-800 dark:bg-amber-900/30 dark:text-amber-400">
                        needs help
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="mt-4 text-center">
                <Button variant="outline" size="sm" asChild>
                  <Link href="#">View All Standups</Link>
                </Button>
              </div>
            </div>

            <div>
              <h2 className="mb-4 text-lg font-semibold">
                Active Pair Programming Sessions
              </h2>
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-sm font-medium">
                        Frontend Authentication Flow
                      </CardTitle>
                      <span className="flex items-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-semibold text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400">
                        Live
                      </span>
                    </div>
                    <CardDescription>Started 45 minutes ago</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2">
                      <div className="flex -space-x-2">
                        <div className="h-8 w-8 rounded-full border-2 border-background bg-slate-200">
                          <img
                            src="/placeholder.svg?height=32&width=32"
                            alt="User avatar"
                            className="h-full w-full rounded-full object-cover"
                          />
                        </div>
                        <div className="h-8 w-8 rounded-full border-2 border-background bg-slate-200">
                          <img
                            src="/placeholder.svg?height=32&width=32"
                            alt="User avatar"
                            className="h-full w-full rounded-full object-cover"
                          />
                        </div>
                      </div>
                      <span className="text-xs text-muted-foreground">
                        Alex & Maya
                      </span>
                    </div>
                    <Button className="mt-4 w-full" size="sm">
                      Join Session
                    </Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-sm font-medium">
                        API Performance Optimization
                      </CardTitle>
                      <span className="flex items-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-semibold text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400">
                        Live
                      </span>
                    </div>
                    <CardDescription>Started 20 minutes ago</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2">
                      <div className="flex -space-x-2">
                        <div className="h-8 w-8 rounded-full border-2 border-background bg-slate-200">
                          <img
                            src="/placeholder.svg?height=32&width=32"
                            alt="User avatar"
                            className="h-full w-full rounded-full object-cover"
                          />
                        </div>
                        <div className="h-8 w-8 rounded-full border-2 border-background bg-slate-200">
                          <img
                            src="/placeholder.svg?height=32&width=32"
                            alt="User avatar"
                            className="h-full w-full rounded-full object-cover"
                          />
                        </div>
                      </div>
                      <span className="text-xs text-muted-foreground">
                        James & Sarah
                      </span>
                    </div>
                    <Button className="mt-4 w-full" size="sm">
                      Join Session
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
