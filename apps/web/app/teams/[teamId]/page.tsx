"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import {
  ArrowLeft,
  Loader2,
  LogOut,
  MoreHorizontal,
  Settings,
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
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { ThemeToggle } from "@/components/theme-toggle";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { getTeamById, type Team } from "@/lib/team-api";
import { InviteTeamMemberDialog } from "@/components/invite-team-member-dialog";
import { toast } from "sonner";

export default function TeamPage() {
  const [team, setTeam] = useState<Team | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const params = useParams();
  const teamId = params.teamId as string;

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
        } else {
          setTeam(result.team);
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
  }, [teamId]);

  const isAdmin = team?.userRole === "ADMIN";

  const handleRefresh = async () => {
    setLoading(true);
    setError(null);

    try {
      const result = await getTeamById(teamId);

      if (result.error) {
        setError(result.error);
      } else {
        setTeam(result.team);
      }
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SidebarProvider>
      <div className="flex w-screen min-h-screen bg-slate-50 dark:bg-slate-950">
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
            {!loading && team && (
              <h1 className="text-xl font-semibold">{team.name}</h1>
            )}
            <div className="ml-auto flex items-center gap-4">
              <ThemeToggle />
              {!loading && team && isAdmin && (
                <InviteTeamMemberDialog
                  teamId={teamId}
                  onInviteSent={handleRefresh}
                />
              )}
              {!loading && team && (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                      <span className="sr-only">More options</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Team Options</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    {isAdmin && (
                      <DropdownMenuItem>
                        <Settings className="mr-2 h-4 w-4" />
                        <span>Team Settings</span>
                      </DropdownMenuItem>
                    )}
                    <DropdownMenuItem className="text-destructive">
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Leave Team</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              )}
            </div>
          </header>
          <main className="p-6">
            {loading ? (
              <div className="flex justify-center items-center py-12">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
              </div>
            ) : error ? (
              <Alert variant="destructive">
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>
                  Failed to load team details. Please try again later.
                </AlertDescription>
              </Alert>
            ) : team ? (
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Team Information</CardTitle>
                    <CardDescription>{team.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-sm font-medium">Your Role</h3>
                        <Badge variant="outline" className="mt-1">
                          {team.userRole}
                        </Badge>
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

                <Tabs defaultValue="members" className="w-full">
                  <TabsList className="mb-4">
                    <TabsTrigger value="members">Members</TabsTrigger>
                    <TabsTrigger value="activity">Activity</TabsTrigger>
                    <TabsTrigger value="settings">Settings</TabsTrigger>
                  </TabsList>

                  <TabsContent value="members">
                    <Card>
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle>Team Members</CardTitle>
                          {isAdmin && (
                            <InviteTeamMemberDialog
                              teamId={teamId}
                              onInviteSent={handleRefresh}
                            />
                          )}
                        </div>
                        <CardDescription>
                          {team.members.length}{" "}
                          {team.members.length === 1 ? "member" : "members"} in
                          this team
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {team.members.map((member) => (
                            <div
                              key={member.id}
                              className="flex items-center justify-between"
                            >
                              <div className="flex items-center space-x-4">
                                <Avatar>
                                  {member.avatarUrl ? (
                                    <AvatarImage
                                      src={
                                        member.avatarUrl || "/placeholder.svg"
                                      }
                                      alt={member.name || "User"}
                                    />
                                  ) : (
                                    <AvatarFallback>
                                      {member.name
                                        ? member.name.charAt(0).toUpperCase()
                                        : "U"}
                                    </AvatarFallback>
                                  )}
                                </Avatar>
                                <div>
                                  <p className="font-medium">
                                    {member.name || member.email}
                                  </p>
                                  <p className="text-sm text-muted-foreground">
                                    {member.email}
                                  </p>
                                </div>
                              </div>
                              <Badge
                                variant={
                                  member.role === "ADMIN"
                                    ? "default"
                                    : "outline"
                                }
                              >
                                {member.role}
                              </Badge>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="activity">
                    <Card>
                      <CardHeader>
                        <CardTitle>Team Activity</CardTitle>
                        <CardDescription>
                          Recent activity in this team
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="text-center py-8 text-muted-foreground">
                          <p>No recent activity</p>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="settings">
                    <Card>
                      <CardHeader>
                        <CardTitle>Team Settings</CardTitle>
                        <CardDescription>
                          Manage team settings and permissions
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        {isAdmin ? (
                          <div className="space-y-4">
                            <p className="text-muted-foreground">
                              Team settings coming soon
                            </p>
                          </div>
                        ) : (
                          <Alert>
                            <AlertTitle>Permission Required</AlertTitle>
                            <AlertDescription>
                              You need admin permissions to manage team
                              settings.
                            </AlertDescription>
                          </Alert>
                        )}
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>
            ) : (
              <Alert variant="destructive">
                <AlertTitle>Team Not Found</AlertTitle>
                <AlertDescription>
                  This team doesn&#39;t exist or you don&#39;t have access to
                  it.
                </AlertDescription>
              </Alert>
            )}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
