import { ArrowLeft, MessageSquare, Plus, Video } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSideBar from "@/components/AppSideBar";

export default function PairProgrammingPage() {
  return (
    <SidebarProvider>
      <div className="flex w-screen min-h-screen bg-slate-50 dark:bg-slate-950">
        <AppSideBar />
        <div className="flex-1">
          <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-6">
            <SidebarTrigger />
            <Button variant="ghost" size="icon" asChild>
              <Link href="/">
                <ArrowLeft className="h-4 w-4" />
                <span className="sr-only">Back to Dashboard</span>
              </Link>
            </Button>
            <h1 className="text-xl font-semibold">Pair Programming</h1>
            <div className="ml-auto">
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                New Session
              </Button>
            </div>
          </header>
          <main className="p-6">
            <Tabs defaultValue="active" className="w-full">
              <TabsList className="mb-4">
                <TabsTrigger value="active">Active Sessions</TabsTrigger>
                <TabsTrigger value="scheduled">Scheduled</TabsTrigger>
                <TabsTrigger value="history">History</TabsTrigger>
              </TabsList>
              <TabsContent value="active">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
                      <div className="mt-4 flex-col flex gap-2">
                        <Button variant="outline" size="sm" className="w-full">
                          <Video className="mr-2 h-4 w-4" />
                          View
                        </Button>
                        <Button size="sm" className="w-full">
                          Join
                        </Button>
                      </div>
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
                      <div className="mt-4 flex flex-col gap-2">
                        <Button variant="outline" size="sm" className="w-full">
                          <Video className="mr-2 h-4 w-4" />
                          View
                        </Button>
                        <Button size="sm" className="w-full">
                          Join
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="scheduled">
                <div className="mb-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Schedule a Pair Programming Session</CardTitle>
                      <CardDescription>
                        Invite team members to collaborate on code
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="grid gap-2">
                          <div className="font-medium">Session Title</div>
                          <Input placeholder="e.g. Frontend Authentication Flow" />
                        </div>
                        <div className="grid gap-2">
                          <div className="font-medium">Description</div>
                          <Input placeholder="Brief description of what you'll be working on" />
                        </div>
                        <div className="grid gap-2">
                          <div className="font-medium">Invite Team Members</div>
                          <Input placeholder="Search team members..." />
                        </div>
                        <div className="grid gap-2">
                          <div className="font-medium">Date & Time</div>
                          <div className="flex gap-2">
                            <Input type="date" className="w-full" />
                            <Input type="time" className="w-full" />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="ml-auto">Schedule Session</Button>
                    </CardFooter>
                  </Card>
                </div>

                <h2 className="mb-4 text-lg font-semibold">
                  Upcoming Sessions
                </h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-sm font-medium">
                          Database Schema Review
                        </CardTitle>
                        <span className="flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800 dark:bg-blue-900/30 dark:text-blue-400">
                          Scheduled
                        </span>
                      </div>
                      <CardDescription>Tomorrow, 10:00 AM</CardDescription>
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
                          Sarah & James
                        </span>
                      </div>
                      <div className="mt-4 flex gap-2">
                        <Button variant="outline" size="sm" className="w-full">
                          <MessageSquare className="mr-2 h-4 w-4" />
                          Message
                        </Button>
                        <Button size="sm" className="w-full">
                          Edit
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-sm font-medium">
                          UI Component Library
                        </CardTitle>
                        <span className="flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800 dark:bg-blue-900/30 dark:text-blue-400">
                          Scheduled
                        </span>
                      </div>
                      <CardDescription>April 29, 2:00 PM</CardDescription>
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
                          Maya & Alex
                        </span>
                      </div>
                      <div className="mt-4 flex gap-2">
                        <Button variant="outline" size="sm" className="w-full">
                          <MessageSquare className="mr-2 h-4 w-4" />
                          Message
                        </Button>
                        <Button size="sm" className="w-full">
                          Edit
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="history">
                <div className="rounded-md border">
                  <div className="p-4">
                    <h3 className="text-lg font-medium">Session History</h3>
                    <p className="text-sm text-muted-foreground">
                      View past pair programming sessions
                    </p>
                  </div>
                  <div className="border-t">
                    <div className="flex items-center justify-between p-4 hover:bg-muted/50">
                      <div>
                        <p className="font-medium">
                          API Authentication Refactoring
                        </p>
                        <p className="text-sm text-muted-foreground">
                          April 25, 2025 • Alex & James • 1h 15m
                        </p>
                      </div>
                      <Button variant="ghost" size="sm">
                        View Recording
                      </Button>
                    </div>
                    <div className="border-t flex items-center justify-between p-4 hover:bg-muted/50">
                      <div>
                        <p className="font-medium">
                          Frontend Component Optimization
                        </p>
                        <p className="text-sm text-muted-foreground">
                          April 24, 2025 • Maya & Sarah • 45m
                        </p>
                      </div>
                      <Button variant="ghost" size="sm">
                        View Recording
                      </Button>
                    </div>
                    <div className="border-t flex items-center justify-between p-4 hover:bg-muted/50">
                      <div>
                        <p className="font-medium">
                          Database Query Performance
                        </p>
                        <p className="text-sm text-muted-foreground">
                          April 23, 2025 • James & Sarah • 1h 30m
                        </p>
                      </div>
                      <Button variant="ghost" size="sm">
                        View Recording
                      </Button>
                    </div>
                    <div className="border-t flex items-center justify-between p-4 hover:bg-muted/50">
                      <div>
                        <p className="font-medium">User Authentication Flow</p>
                        <p className="text-sm text-muted-foreground">
                          April 22, 2025 • Alex & Maya • 2h 05m
                        </p>
                      </div>
                      <Button variant="ghost" size="sm">
                        View Recording
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
