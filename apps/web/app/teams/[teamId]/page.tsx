"use client";

import {
  ArrowLeft,
  Mail,
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
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { ThemeToggle } from "@/components/theme-toggle";

export default function TeamDetailsPage({
  params,
}: {
  params: { teamId: string };
}) {
  // This would normally come from a database
  const teamData = {
    frontend: {
      name: "Frontend Team",
      description: "UI/UX and frontend development team",
      members: [
        {
          id: 1,
          name: "Sarah Chen",
          role: "Tech Lead",
          email: "sarah@example.com",
          avatar: "/placeholder.svg?height=64&width=64",
          status: "online",
        },
        {
          id: 2,
          name: "Alex Kim",
          role: "Senior Developer",
          email: "alex@example.com",
          avatar: "/placeholder.svg?height=64&width=64",
          status: "online",
        },
        {
          id: 3,
          name: "Maya Johnson",
          role: "UI Designer",
          email: "maya@example.com",
          avatar: "/placeholder.svg?height=64&width=64",
          status: "offline",
        },
        {
          id: 4,
          name: "David Lee",
          role: "Frontend Developer",
          email: "david@example.com",
          avatar: "/placeholder.svg?height=64&width=64",
          status: "online",
        },
        {
          id: 5,
          name: "Emma Wilson",
          role: "UX Researcher",
          email: "emma@example.com",
          avatar: "/placeholder.svg?height=64&width=64",
          status: "away",
        },
      ],
    },
    backend: {
      name: "Backend Team",
      description: "API and server-side development team",
      members: [
        {
          id: 1,
          name: "Sarah Chen",
          role: "Member",
          email: "sarah@example.com",
          avatar: "/placeholder.svg?height=64&width=64",
          status: "online",
        },
        {
          id: 6,
          name: "James Wilson",
          role: "Team Lead",
          email: "james@example.com",
          avatar: "/placeholder.svg?height=64&width=64",
          status: "online",
        },
        {
          id: 7,
          name: "Olivia Martinez",
          role: "Backend Developer",
          email: "olivia@example.com",
          avatar: "/placeholder.svg?height=64&width=64",
          status: "offline",
        },
      ],
    },
    devops: {
      name: "DevOps Team",
      description: "Infrastructure and deployment team",
      members: [
        {
          id: 1,
          name: "Sarah Chen",
          role: "Member",
          email: "sarah@example.com",
          avatar: "/placeholder.svg?height=64&width=64",
          status: "online",
        },
        {
          id: 8,
          name: "Ethan Brown",
          role: "DevOps Lead",
          email: "ethan@example.com",
          avatar: "/placeholder.svg?height=64&width=64",
          status: "online",
        },
        {
          id: 9,
          name: "Sophia Garcia",
          role: "Cloud Engineer",
          email: "sophia@example.com",
          avatar: "/placeholder.svg?height=64&width=64",
          status: "away",
        },
        {
          id: 10,
          name: "Noah Taylor",
          role: "SRE",
          email: "noah@example.com",
          avatar: "/placeholder.svg?height=64&width=64",
          status: "offline",
        },
      ],
    },
  }[params.teamId] || { name: "Team Not Found", description: "", members: [] };

  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-slate-50 dark:bg-slate-950">
        <AppSidebar />
        <div className="flex-1">
          <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-6">
            <SidebarTrigger />
            <Button variant="ghost" size="icon" asChild>
              <Link href="/teams">
                <ArrowLeft className="h-4 w-4" />
                <span className="sr-only">Back to Teams</span>
              </Link>
            </Button>
            <h1 className="text-xl font-semibold">{teamData.name}</h1>
            <div className="ml-auto flex items-center gap-4">
              <ThemeToggle />
              <Dialog>
                <DialogTrigger asChild>
                  <Button>
                    <UserPlus className="mr-2 h-4 w-4" />
                    Invite Member
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Invite Team Member</DialogTitle>
                    <DialogDescription>
                      Send an invitation to join the {teamData.name}.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid gap-2">
                      <Label htmlFor="email">Email address</Label>
                      <Input
                        id="email"
                        placeholder="Enter email address"
                        type="email"
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="role">Role</Label>
                      <Input id="role" placeholder="e.g. Developer, Designer" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="message">Message (optional)</Label>
                      <Input
                        id="message"
                        placeholder="Add a personal message"
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button type="submit">Send Invitation</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </header>
          <main className="p-6">
            <div className="mb-6">
              <Card>
                <CardHeader>
                  <CardTitle>Team Information</CardTitle>
                  <CardDescription>{teamData.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <h3 className="text-sm font-medium">Team Members</h3>
                      <p className="text-sm text-muted-foreground">
                        {teamData.members.length} members
                      </p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium">Created</h3>
                      <p className="text-sm text-muted-foreground">
                        April 15, 2025
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mb-6">
              <div className="relative">
                <Input className="pl-10" placeholder="Search team members..." />
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                  <Search className="h-4 w-4" />
                </div>
              </div>
            </div>

            <Tabs defaultValue="members" className="w-full">
              <TabsList className="mb-4">
                <TabsTrigger value="members">Members</TabsTrigger>
                <TabsTrigger value="activity">Activity</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
              </TabsList>
              <TabsContent value="members">
                <div className="rounded-md border">
                  <div className="p-4">
                    <h3 className="text-lg font-medium">Team Members</h3>
                    <p className="text-sm text-muted-foreground">
                      Manage members and their roles
                    </p>
                  </div>
                  <div className="border-t">
                    {teamData.members.map((member) => (
                      <div
                        key={member.id}
                        className="flex items-center justify-between p-4 hover:bg-muted/50"
                      >
                        <div className="flex items-center gap-4">
                          <div className="relative">
                            <div className="h-10 w-10 rounded-full bg-slate-200">
                              <img
                                src={member.avatar || "/placeholder.svg"}
                                alt={`${member.name} avatar`}
                                className="h-full w-full rounded-full object-cover"
                              />
                            </div>
                            <div
                              className={`absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white ${
                                member.status === "online"
                                  ? "bg-emerald-500"
                                  : member.status === "away"
                                    ? "bg-amber-500"
                                    : "bg-gray-500"
                              }`}
                            ></div>
                          </div>
                          <div>
                            <p className="font-medium">{member.name}</p>
                            <p className="text-sm text-muted-foreground">
                              {member.role}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="icon" asChild>
                            <a href={`mailto:${member.email}`}>
                              <Mail className="h-4 w-4" />
                              <span className="sr-only">
                                Email {member.name}
                              </span>
                            </a>
                          </Button>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="h-4 w-4" />
                                <span className="sr-only">More options</span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>
                                Member Options
                              </DropdownMenuLabel>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem>View Profile</DropdownMenuItem>
                              <DropdownMenuItem>Change Role</DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-destructive">
                                Remove from Team
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="activity">
                <div className="rounded-md border">
                  <div className="p-4">
                    <h3 className="text-lg font-medium">Team Activity</h3>
                    <p className="text-sm text-muted-foreground">
                      Recent activity from team members
                    </p>
                  </div>
                  <div className="border-t">
                    <div className="flex items-start gap-4 p-4 hover:bg-muted/50">
                      <div className="h-10 w-10 rounded-full bg-slate-200">
                        <img
                          src="/placeholder.svg?height=40&width=40"
                          alt="User avatar"
                          className="h-full w-full rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <p>
                          <span className="font-medium">Sarah Chen</span>{" "}
                          <span className="text-muted-foreground">
                            completed a standup
                          </span>
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Today at 10:15 AM
                        </p>
                      </div>
                    </div>
                    <div className="border-t flex items-start gap-4 p-4 hover:bg-muted/50">
                      <div className="h-10 w-10 rounded-full bg-slate-200">
                        <img
                          src="/placeholder.svg?height=40&width=40"
                          alt="User avatar"
                          className="h-full w-full rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <p>
                          <span className="font-medium">Alex Kim</span>{" "}
                          <span className="text-muted-foreground">
                            created a pull request
                          </span>
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Yesterday at 4:23 PM
                        </p>
                      </div>
                    </div>
                    <div className="border-t flex items-start gap-4 p-4 hover:bg-muted/50">
                      <div className="h-10 w-10 rounded-full bg-slate-200">
                        <img
                          src="/placeholder.svg?height=40&width=40"
                          alt="User avatar"
                          className="h-full w-full rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <p>
                          <span className="font-medium">Maya Johnson</span>{" "}
                          <span className="text-muted-foreground">
                            started a pair programming session with
                          </span>{" "}
                          <span className="font-medium">David Lee</span>
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Yesterday at 2:15 PM
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="settings">
                <Card>
                  <CardHeader>
                    <CardTitle>Team Settings</CardTitle>
                    <CardDescription>
                      Manage team preferences and settings
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="team-name">Team Name</Label>
                      <Input id="team-name" defaultValue={teamData.name} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="team-description">Team Description</Label>
                      <Input
                        id="team-description"
                        defaultValue={teamData.description}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="team-visibility">Team Visibility</Label>
                      <select
                        id="team-visibility"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <option value="private">
                          Private - Only visible to team members
                        </option>
                        <option value="organization">
                          Organization - Visible to all organization members
                        </option>
                        <option value="public">
                          Public - Visible to anyone
                        </option>
                      </select>
                    </div>
                    <div className="flex justify-end">
                      <Button>Save Changes</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
