"use client";

import { ArrowLeft, Mic, Plus, Send } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { ThemeToggle } from "@/components/theme-toggle";

export default function StandupsPage() {
  return (
    <SidebarProvider>
      <div className="flex w-screen min-h-screen bg-slate-50 dark:bg-slate-950">
        <AppSidebar />
        <div className="flex-1">
          <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-6">
            <SidebarTrigger />
            <Button variant="ghost" size="icon" asChild>
              <Link href="/">
                <ArrowLeft className="h-4 w-4" />
                <span className="sr-only">Back to Dashboard</span>
              </Link>
            </Button>
            <h1 className="text-xl font-semibold">Async Standups</h1>
            <div className="ml-auto flex items-center gap-4">
              <ThemeToggle />
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                New Standup
              </Button>
            </div>
          </header>
          <main className="p-6">
            <Tabs defaultValue="today" className="w-full">
              <TabsList className="mb-4">
                <TabsTrigger value="today">Today</TabsTrigger>
                <TabsTrigger value="yesterday">Yesterday</TabsTrigger>
                <TabsTrigger value="history">History</TabsTrigger>
              </TabsList>
              <TabsContent value="today">
                <div className="mb-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Record Your Standup</CardTitle>
                      <CardDescription>
                        Share what you&apos;re working on with your team
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="grid gap-2">
                          <div className="font-medium">
                            What did you accomplish yesterday?
                          </div>
                          <Input placeholder="I completed..." />
                        </div>
                        <div className="grid gap-2">
                          <div className="font-medium">
                            What are you working on today?
                          </div>
                          <Input placeholder="Today I'll be working on..." />
                        </div>
                        <div className="grid gap-2">
                          <div className="font-medium">Any blockers?</div>
                          <Input placeholder="I'm blocked by..." />
                        </div>
                        <div className="flex flex-col gap-2">
                          <Button variant="outline" className="w-full">
                            <Mic className="mr-2 h-4 w-4" />
                            Record Voice
                          </Button>
                          <Button className="w-full">
                            <Send className="mr-2 h-4 w-4" />
                            Submit Standup
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <h2 className="mb-4 text-lg font-semibold">Team Standups</h2>
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
                      <div className="space-y-2">
                        <div>
                          <p className="text-xs font-medium text-muted-foreground">
                            Yesterday:
                          </p>
                          <p className="text-sm">
                            Completed the authentication flow.
                          </p>
                        </div>
                        <div>
                          <p className="text-xs font-medium text-muted-foreground">
                            Today:
                          </p>
                          <p className="text-sm">Working on API integration.</p>
                        </div>
                        <div>
                          <p className="text-xs font-medium text-muted-foreground">
                            Blockers:
                          </p>
                          <p className="text-sm">
                            Blocked by the backend deployment issue.
                          </p>
                        </div>
                      </div>
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
                      <div className="space-y-2">
                        <div>
                          <p className="text-xs font-medium text-muted-foreground">
                            Yesterday:
                          </p>
                          <p className="text-sm">
                            Finished the dashboard UI components.
                          </p>
                        </div>
                        <div>
                          <p className="text-xs font-medium text-muted-foreground">
                            Today:
                          </p>
                          <p className="text-sm">
                            Starting on the analytics charts.
                          </p>
                        </div>
                        <div>
                          <p className="text-xs font-medium text-muted-foreground">
                            Blockers:
                          </p>
                          <p className="text-sm">No blockers.</p>
                        </div>
                      </div>
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
                      <div className="space-y-2">
                        <div>
                          <p className="text-xs font-medium text-muted-foreground">
                            Yesterday:
                          </p>
                          <p className="text-sm">
                            Deployed the new API endpoints.
                          </p>
                        </div>
                        <div>
                          <p className="text-xs font-medium text-muted-foreground">
                            Today:
                          </p>
                          <p className="text-sm">
                            Working on performance optimizations.
                          </p>
                        </div>
                        <div>
                          <p className="text-xs font-medium text-muted-foreground">
                            Blockers:
                          </p>
                          <p className="text-sm">
                            Need help with the caching strategy.
                          </p>
                        </div>
                      </div>
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
              </TabsContent>
              <TabsContent value="yesterday">
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
                        Yesterday
                      </span>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div>
                          <p className="text-xs font-medium text-muted-foreground">
                            Yesterday:
                          </p>
                          <p className="text-sm">
                            Set up the project structure and dependencies.
                          </p>
                        </div>
                        <div>
                          <p className="text-xs font-medium text-muted-foreground">
                            Today:
                          </p>
                          <p className="text-sm">
                            Working on the authentication flow.
                          </p>
                        </div>
                        <div>
                          <p className="text-xs font-medium text-muted-foreground">
                            Blockers:
                          </p>
                          <p className="text-sm">None at the moment.</p>
                        </div>
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
                        Yesterday
                      </span>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div>
                          <p className="text-xs font-medium text-muted-foreground">
                            Yesterday:
                          </p>
                          <p className="text-sm">
                            Researched UI component libraries for the project.
                          </p>
                        </div>
                        <div>
                          <p className="text-xs font-medium text-muted-foreground">
                            Today:
                          </p>
                          <p className="text-sm">
                            Starting on the dashboard UI components.
                          </p>
                        </div>
                        <div>
                          <p className="text-xs font-medium text-muted-foreground">
                            Blockers:
                          </p>
                          <p className="text-sm">
                            Waiting for design approval.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="history">
                <div className="rounded-md border">
                  <div className="p-4">
                    <h3 className="text-lg font-medium">Standup History</h3>
                    <p className="text-sm text-muted-foreground">
                      View past standups by date
                    </p>
                  </div>
                  <div className="border-t">
                    <div className="flex items-center justify-between p-4 hover:bg-muted/50">
                      <div>
                        <p className="font-medium">April 26, 2025</p>
                        <p className="text-sm text-muted-foreground">
                          5 team members participated
                        </p>
                      </div>
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </div>
                    <div className="border-t flex items-center justify-between p-4 hover:bg-muted/50">
                      <div>
                        <p className="font-medium">April 25, 2025</p>
                        <p className="text-sm text-muted-foreground">
                          4 team members participated
                        </p>
                      </div>
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </div>
                    <div className="border-t flex items-center justify-between p-4 hover:bg-muted/50">
                      <div>
                        <p className="font-medium">April 24, 2025</p>
                        <p className="text-sm text-muted-foreground">
                          5 team members participated
                        </p>
                      </div>
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </div>
                    <div className="border-t flex items-center justify-between p-4 hover:bg-muted/50">
                      <div>
                        <p className="font-medium">April 23, 2025</p>
                        <p className="text-sm text-muted-foreground">
                          3 team members participated
                        </p>
                      </div>
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
