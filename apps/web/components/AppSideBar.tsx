"use client";

import {
    Sidebar,
    SidebarContent, SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider
} from "@/components/ui/sidebar";
import {Activity, Code2, GitPullRequest, MessageSquare, Users} from "lucide-react";
import Link from "next/link";

const AppSideBar = () => {
    return (

        <Sidebar>
            <SidebarHeader className="border-b">
                <div className="flex items-center gap-2 px-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
                        <Code2 className="h-4 w-4 text-primary-foreground" />
                    </div>
                    <span className="text-lg font-semibold">RemoteDevKit</span>
                </div>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Main</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton isActive>
                                    <Activity className="h-4 w-4" />
                                    <Link href={'/'}>
                                        <span>Dashboard</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <Link href={'/standups'}>
                                    <SidebarMenuButton>
                                        <MessageSquare className="h-4 w-4" />
                                        <span>Async Standups</span>
                                    </SidebarMenuButton>
                                </Link>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <Link href={'/pair-programming'}>

                                    <SidebarMenuButton>
                                        <Code2 className="h-4 w-4" />
                                        <span>Pair Programming</span>
                                    </SidebarMenuButton>

                                </Link>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <Link href={'/pr-feedback'}>

                                    <SidebarMenuButton>
                                        <GitPullRequest className="h-4 w-4" />
                                        <span>PR Feedback</span>
                                    </SidebarMenuButton>

                                </Link>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
                <SidebarGroup>
                    <SidebarGroupLabel>Team</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton>
                                    <Users className="h-4 w-4" />
                                    <span>Members</span>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter className="border-t p-4">
                <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-slate-200">
                        <img
                            src="/placeholder.svg?height=32&width=32"
                            alt="User avatar"
                            className="h-full w-full rounded-full object-cover"
                        />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-sm font-medium">Sarah Chen</span>
                        <span className="text-xs text-muted-foreground">Tech Lead</span>
                    </div>
                </div>
            </SidebarFooter>
        </Sidebar>

    )
}

export default AppSideBar
