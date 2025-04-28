"use client";

import type React from "react";
import { useEffect, useState } from "react";
import {
  ArrowLeft,
  Loader2,
  Mail,
  MoreHorizontal,
  Search,
  UserPlus,
} from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

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
import {
  addTeamMember,
  getTeamById,
  type Team,
  updateTeam,
} from "@/lib/team-api";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { toast } from "sonner";

export default function TeamDetailsPage() {
  const params = useParams();
  const teamId = params.teamId as string;
  const [team, setTeam] = useState<Team | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Form states for adding a member
  const [newMemberEmail, setNewMemberEmail] = useState("");
  const [newMemberRole, setNewMemberRole] = useState("MEMBER");
  const [isAddingMember, setIsAddingMember] = useState(false);
  const [addMemberDialogOpen, setAddMemberDialogOpen] = useState(false);

  // Form states for team settings
  const [teamName, setTeamName] = useState("");
  const [teamDescription, setTeamDescription] = useState("");
  const [isUpdatingTeam, setIsUpdatingTeam] = useState(false);

  useEffect(() => {
    const fetchTeam = async () => {
      setLoading(true);
      setError(null);

      try {
        const result = await getTeamById(teamId);

        if (result.error) {
          setError(result.error);
          toast("Error", {
            description: "Failed to load team details. Please try again.",
          });
        } else if (result.team) {
          setTeam(result.team);
          setTeamName(result.team.name);
          setTeamDescription(result.team.description || "");
        }
      } catch (err) {
        setError(err as Error);
        toast("Error", {
          description: "Failed to load team details. Please try again.",
        });
      } finally {
        setLoading(false);
      }
    };

    if (teamId) {
      fetchTeam();
    }
  }, [teamId, toast]);

  const filteredMembers =
    team?.members.filter(
      (member) =>
        member.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        member.email.toLowerCase().includes(searchQuery.toLowerCase()),
    ) || [];

  const handleAddMember = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsAddingMember(true);

    try {
      const result = await addTeamMember(teamId, {
        email: newMemberEmail,
        role: newMemberRole as "ADMIN" | "MEMBER" | "MANAGER",
      });

      if (result.error) {
        toast("Error", {
          description: "Failed to add team member. Please try again.",
        });
      } else {
        toast("Success", {
          description: "Team member added successfully!",
        });

        // Update the team state with the new member
        if (team && result.member) {
          setTeam({
            ...team,
            members: [...team.members, result.member],
          });
        }

        // Reset form and close dialog
        setNewMemberEmail("");
        setNewMemberRole("MEMBER");
        setAddMemberDialogOpen(false);
      }
    } catch (err: any) {
      toast("Error", {
        description: "An unexpected error occurred. Please try again.",
      });
    } finally {
      setIsAddingMember(false);
    }
  };

  const handleUpdateTeam = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsUpdatingTeam(true);

    try {
      const result = await updateTeam(teamId, {
        name: teamName,
        description: teamDescription,
      });

      if (result.error) {
        toast("Error", {
          description: "Failed to update team. Please try again.",
        });
      } else {
        toast("Success", {
          description: "Team updated successfully!",
        });

        // Update the team state
        if (result.team) {
          setTeam(result.team);
        }
      }
    } catch (err: any) {
      toast("Error", {
        description: "An unexpected error occurred. Please try again.",
      });
    } finally {
      setIsUpdatingTeam(false);
    }
  };

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
            <h1 className="text-xl font-semibold">
              {team?.name || "Team Details"}
            </h1>
            <div className="ml-auto flex items-center gap-4">
              <ThemeToggle />
              <Dialog
                open={addMemberDialogOpen}
                onOpenChange={setAddMemberDialogOpen}
              >
                <DialogTrigger asChild>
                  <Button>
                    <UserPlus className="mr-2 h-4 w-4" />
                    Invite Member
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <form onSubmit={handleAddMember}>
                    <DialogHeader>
                      <DialogTitle>Invite Team Member</DialogTitle>
                      <DialogDescription>
                        Send an invitation to join the team.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid gap-2">
                        <Label htmlFor="email">Email address</Label>
                        <Input
                          id="email"
                          placeholder="Enter email address"
                          type="email"
                          value={newMemberEmail}
                          onChange={(e) => setNewMemberEmail(e.target.value)}
                          required
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="role">Role</Label>
                        <select
                          id="role"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          value={newMemberRole}
                          onChange={(e) => setNewMemberRole(e.target.value)}
                        >
                          <option value="MEMBER">Member</option>
                          <option value="ADMIN">Admin</option>
                          <option value="MANAGER">Manager</option>
                        </select>
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
                      <Button type="submit" disabled={isAddingMember}>
                        {isAddingMember ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          "Send Invitation"
                        )}
                      </Button>
                    </DialogFooter>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
          </header>
          <main className="p-6">
            {loading ? (
              <div className="flex justify-center items-center py-12">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
              </div>
            ) : error ? (
              <Alert variant="destructive" className="mb-6">
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>
                  Failed to load team details. Please try again later.
                </AlertDescription>
              </Alert>
            ) : team ? (
              <>
                <div className="mb-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Team Information</CardTitle>
                      <CardDescription>{team.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-4 md:grid-cols-2">
                        <div>
                          <h3 className="text-sm font-medium">Team Members</h3>
                          <p className="text-sm text-muted-foreground">
                            {team.members.length} members
                          </p>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium">Created</h3>
                          <p className="text-sm text-muted-foreground">
                            {new Date(team.createdAt).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="mb-6">
                  <div className="relative">
                    <Input
                      className="pl-10"
                      placeholder="Search team members..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
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
                        {filteredMembers.length === 0 ? (
                          <div className="p-8 text-center">
                            <p className="text-muted-foreground">
                              No members found
                            </p>
                          </div>
                        ) : (
                          filteredMembers.map((member) => (
                            <div
                              key={member.id}
                              className="flex items-center justify-between p-4 hover:bg-muted/50 border-t first:border-t-0"
                            >
                              <div className="flex items-center gap-4">
                                <div className="relative">
                                  <div className="h-10 w-10 rounded-full bg-slate-200">
                                    {member.avatarUrl ? (
                                      <img
                                        src={
                                          member.avatarUrl || "/placeholder.svg"
                                        }
                                        alt={`${member.name || "User"} avatar`}
                                        className="h-full w-full rounded-full object-cover"
                                      />
                                    ) : (
                                      <div className="flex h-full w-full items-center justify-center rounded-full bg-primary text-primary-foreground">
                                        {member.name
                                          ? member.name.charAt(0).toUpperCase()
                                          : "U"}
                                      </div>
                                    )}
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
                                  <p className="font-medium">
                                    {member.name || member.email}
                                  </p>
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
                                      Email {member.name || member.email}
                                    </span>
                                  </a>
                                </Button>
                                <DropdownMenu>
                                  <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" size="icon">
                                      <MoreHorizontal className="h-4 w-4" />
                                      <span className="sr-only">
                                        More options
                                      </span>
                                    </Button>
                                  </DropdownMenuTrigger>
                                  <DropdownMenuContent align="end">
                                    <DropdownMenuLabel>
                                      Member Options
                                    </DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>
                                      View Profile
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                      Change Role
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem className="text-destructive">
                                      Remove from Team
                                    </DropdownMenuItem>
                                  </DropdownMenuContent>
                                </DropdownMenu>
                              </div>
                            </div>
                          ))
                        )}
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
                        <form onSubmit={handleUpdateTeam}>
                          <div className="space-y-2">
                            <Label htmlFor="team-name">Team Name</Label>
                            <Input
                              id="team-name"
                              value={teamName}
                              onChange={(e) => setTeamName(e.target.value)}
                            />
                          </div>
                          <div className="space-y-2 mt-4">
                            <Label htmlFor="team-description">
                              Team Description
                            </Label>
                            <Input
                              id="team-description"
                              value={teamDescription}
                              onChange={(e) =>
                                setTeamDescription(e.target.value)
                              }
                            />
                          </div>
                          <div className="space-y-2 mt-4">
                            <Label htmlFor="team-visibility">
                              Team Visibility
                            </Label>
                            <select
                              id="team-visibility"
                              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            >
                              <option value="private">
                                Private - Only visible to team members
                              </option>
                              <option value="organization">
                                Organization - Visible to all organization
                                members
                              </option>
                              <option value="public">
                                Public - Visible to anyone
                              </option>
                            </select>
                          </div>
                          <div className="flex justify-end mt-6">
                            <Button type="submit" disabled={isUpdatingTeam}>
                              {isUpdatingTeam ? (
                                <>
                                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                  Saving...
                                </>
                              ) : (
                                "Save Changes"
                              )}
                            </Button>
                          </div>
                        </form>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </>
            ) : (
              <div className="rounded-md border p-8 text-center">
                <p className="text-muted-foreground">Team not found</p>
                <Button className="mt-4" asChild>
                  <Link href="/teams">Back to Teams</Link>
                </Button>
              </div>
            )}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
