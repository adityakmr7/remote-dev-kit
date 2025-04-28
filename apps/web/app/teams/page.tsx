"use client";

import { useEffect, useState } from "react";
import {
  ArrowLeft,
  Check,
  Loader2,
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
import {
  getMyTeams,
  getTeamInvitations,
  type Team,
  type TeamInvitation,
} from "@/lib/team-api";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { toast } from "sonner";

export default function TeamsPage() {
  const [teams, setTeams] = useState<Team[]>([]);
  const [invitations, setInvitations] = useState<TeamInvitation[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchTeams = async () => {
      setLoading(true);
      setError(null);

      try {
        const [teamsResult, invitationsResult] = await Promise.all([
          getMyTeams(),
          getTeamInvitations(),
        ]);
        console.log(teamsResult, invitationsResult);

        if (teamsResult.error) {
          setError(teamsResult.error);
          toast("Error", {
            description: "Failed to load teams. Please try again.",
          });
        } else {
          setTeams(teamsResult.teams);
        }

        if (!invitationsResult.error) {
          setInvitations(invitationsResult.invitations);
        }
      } catch (err) {
        setError(err as Error);
        toast("Error", {
          description: "Failed to load teams. Please try again.",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchTeams();
  }, []);

  const filteredTeams = teams.filter(
    (team) =>
      team.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (team.description &&
        team.description.toLowerCase().includes(searchQuery.toLowerCase())),
  );

  const handleAcceptInvitation = async (invitationId: string) => {
    // In a real implementation, you would call an API to accept the invitation
    toast("Invitation Accepted", {
      description: "You have joined the team successfully.",
    });

    // Remove the invitation from the list
    setInvitations(invitations.filter((inv) => inv.id !== invitationId));
  };

  const handleDeclineInvitation = async (invitationId: string) => {
    // In a real implementation, you would call an API to decline the invitation
    toast("Invitation Declined", {
      description: "You have declined the team invitation.",
    });

    // Remove the invitation from the list
    setInvitations(invitations.filter((inv) => inv.id !== invitationId));
  };

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
                <TabsTrigger value="invitations">
                  Invitations
                  {invitations.length > 0 && (
                    <span className="ml-2 rounded-full bg-primary px-2 py-0.5 text-xs text-primary-foreground">
                      {invitations.length}
                    </span>
                  )}
                </TabsTrigger>
              </TabsList>
              <TabsContent value="my-teams">
                <div className="mb-6">
                  <div className="relative">
                    <Input
                      className="pl-10"
                      placeholder="Search teams..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                      <Search className="h-4 w-4" />
                    </div>
                  </div>
                </div>

                {error && (
                  <Alert variant="destructive" className="mb-6">
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>
                      Failed to load teams. Please try again later.
                    </AlertDescription>
                  </Alert>
                )}

                {loading ? (
                  <div className="flex justify-center items-center py-12">
                    <Loader2 className="h-8 w-8 animate-spin text-primary" />
                  </div>
                ) : filteredTeams.length === 0 ? (
                  <div className="rounded-md border p-8 text-center">
                    <p className="text-muted-foreground">No teams found</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Create a new team to get started
                    </p>
                  </div>
                ) : (
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {filteredTeams.map((team) => (
                      <Card key={team.id}>
                        <CardHeader>
                          <div className="flex items-center justify-between">
                            <CardTitle>{team.name}</CardTitle>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon">
                                  <MoreHorizontal className="h-4 w-4" />
                                  <span className="sr-only">More options</span>
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuLabel>
                                  Team Options
                                </DropdownMenuLabel>
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
                          <CardDescription>{team.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <div>
                              <h3 className="text-sm font-medium">
                                Members ({team.members.length})
                              </h3>
                              <div className="mt-2 flex -space-x-2">
                                {team.members.slice(0, 5).map((member) => (
                                  <div
                                    key={member.id}
                                    className="h-8 w-8 rounded-full border-2 border-background bg-slate-200"
                                  >
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
                                ))}
                                {team.members.length > 5 && (
                                  <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-background bg-muted text-xs font-medium">
                                    +{team.members.length - 5}
                                  </div>
                                )}
                              </div>
                            </div>
                            <div>
                              <h3 className="text-sm font-medium">Your Role</h3>
                              <p className="text-sm text-muted-foreground">
                                {team.userRole}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                        <CardFooter>
                          <Button variant="outline" className="w-full" asChild>
                            <Link href={`/teams/${team.id}`}>View Team</Link>
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                )}
              </TabsContent>
              <TabsContent value="invitations">
                <div className="rounded-md border">
                  <div className="p-4">
                    <h3 className="text-lg font-medium">Team Invitations</h3>
                    <p className="text-sm text-muted-foreground">
                      Pending invitations to join teams
                    </p>
                  </div>
                  {loading ? (
                    <div className="flex justify-center items-center py-12">
                      <Loader2 className="h-8 w-8 animate-spin text-primary" />
                    </div>
                  ) : invitations.length === 0 ? (
                    <div className="p-8 text-center border-t">
                      <p className="text-muted-foreground">
                        No pending invitations
                      </p>
                    </div>
                  ) : (
                    <div className="border-t">
                      {invitations.map((invitation) => (
                        <div
                          key={invitation.id}
                          className="flex items-center justify-between p-4 hover:bg-muted/50 border-t first:border-t-0"
                        >
                          <div>
                            <p className="font-medium">{invitation.teamName}</p>
                            <p className="text-sm text-muted-foreground">
                              Invited by {invitation.invitedBy.name} •{" "}
                              {new Date(
                                invitation.createdAt,
                              ).toLocaleDateString()}
                            </p>
                          </div>
                          <div className="flex gap-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() =>
                                handleDeclineInvitation(invitation.id)
                              }
                            >
                              Decline
                            </Button>
                            <Button
                              size="sm"
                              onClick={() =>
                                handleAcceptInvitation(invitation.id)
                              }
                            >
                              <Check className="mr-2 h-4 w-4" />
                              Accept
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </TabsContent>
            </Tabs>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
