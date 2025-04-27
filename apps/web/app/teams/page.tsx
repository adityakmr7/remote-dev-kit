"use client";

import {
  ArrowLeft,
  Check,
  MoreHorizontal,
  Search,
  UserPlus,
} from "lucide-react";
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
import { CreateTeamDialog } from "@/components/create-team-dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { ThemeToggle } from "@/components/theme-toggle";

export default function TeamsPage() {
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
            <h1 className="text-xl font-semibold">Teams</h1>
            <div className="ml-auto flex items-center gap-4">
              <ThemeToggle />
              <CreateTeamDialog />
            </div>
          </header>
          <main className="p-6">
            <Tabs defaultValue="my-teams" className="w-full">
              <TabsList className="mb-4">
                <TabsTrigger value="my-teams">My Teams</TabsTrigger>
                <TabsTrigger value="invitations">Invitations</TabsTrigger>
              </TabsList>
              <TabsContent value="my-teams">
                <div className="mb-6">
                  <div className="relative">
                    <Input className="pl-10" placeholder="Search teams..." />
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                      <Search className="h-4 w-4" />
                    </div>
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle>Frontend Team</CardTitle>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                              <span className="sr-only">More options</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Team Options</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                              <UserPlus className="mr-2 h-4 w-4" />
                              <span>Invite Members</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <span>Team Settings</span>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-destructive">
                              <span>Leave Team</span>
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                      <CardDescription>
                        UI/UX and frontend development team
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-sm font-medium">Members (5)</h3>
                          <div className="mt-2 flex -space-x-2">
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
                            <div className="h-8 w-8 rounded-full border-2 border-background bg-slate-200">
                              <img
                                src="/placeholder.svg?height=32&width=32"
                                alt="User avatar"
                                className="h-full w-full rounded-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium">Your Role</h3>
                          <p className="text-sm text-muted-foreground">Admin</p>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full" asChild>
                        <Link href="/teams/frontend">View Team</Link>
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle>Backend Team</CardTitle>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                              <span className="sr-only">More options</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Team Options</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                              <UserPlus className="mr-2 h-4 w-4" />
                              <span>Invite Members</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <span>Team Settings</span>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-destructive">
                              <span>Leave Team</span>
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                      <CardDescription>
                        API and server-side development team
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-sm font-medium">Members (3)</h3>
                          <div className="mt-2 flex -space-x-2">
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
                            <div className="h-8 w-8 rounded-full border-2 border-background bg-slate-200">
                              <img
                                src="/placeholder.svg?height=32&width=32"
                                alt="User avatar"
                                className="h-full w-full rounded-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium">Your Role</h3>
                          <p className="text-sm text-muted-foreground">
                            Member
                          </p>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full" asChild>
                        <Link href="/teams/backend">View Team</Link>
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle>DevOps Team</CardTitle>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                              <span className="sr-only">More options</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Team Options</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                              <UserPlus className="mr-2 h-4 w-4" />
                              <span>Invite Members</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <span>Team Settings</span>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-destructive">
                              <span>Leave Team</span>
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                      <CardDescription>
                        Infrastructure and deployment team
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-sm font-medium">Members (4)</h3>
                          <div className="mt-2 flex -space-x-2">
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
                        </div>
                        <div>
                          <h3 className="text-sm font-medium">Your Role</h3>
                          <p className="text-sm text-muted-foreground">
                            Member
                          </p>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full" asChild>
                        <Link href="/teams/devops">View Team</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="invitations">
                <div className="rounded-md border">
                  <div className="p-4">
                    <h3 className="text-lg font-medium">Team Invitations</h3>
                    <p className="text-sm text-muted-foreground">
                      Pending invitations to join teams
                    </p>
                  </div>
                  <div className="border-t">
                    <div className="flex items-center justify-between p-4 hover:bg-muted/50">
                      <div>
                        <p className="font-medium">Product Team</p>
                        <p className="text-sm text-muted-foreground">
                          Invited by John Doe • 2 days ago
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          Decline
                        </Button>
                        <Button size="sm">
                          <Check className="mr-2 h-4 w-4" />
                          Accept
                        </Button>
                      </div>
                    </div>
                    <div className="border-t flex items-center justify-between p-4 hover:bg-muted/50">
                      <div>
                        <p className="font-medium">Design Team</p>
                        <p className="text-sm text-muted-foreground">
                          Invited by Jane Smith • 1 day ago
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          Decline
                        </Button>
                        <Button size="sm">
                          <Check className="mr-2 h-4 w-4" />
                          Accept
                        </Button>
                      </div>
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
