"use client";

import {
  Activity,
  Code2,
  GitPullRequest,
  MessageSquare,
  Users,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { UserDropdown } from "@/components/user-dropdown";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

export function AppSidebar() {
  const pathname = usePathname();

  // Helper function to check if a path is active
  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

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
                <SidebarMenuButton isActive={isActive("/")} asChild>
                  <Link href="/">
                    <Activity className="h-4 w-4" />
                    <span>Dashboard</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton isActive={isActive("/standups")} asChild>
                  <Link href="/standups">
                    <MessageSquare className="h-4 w-4" />
                    <span>Async Standups</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  isActive={isActive("/pair-programming")}
                  asChild
                >
                  <Link href="/pair-programming">
                    <Code2 className="h-4 w-4" />
                    <span>Pair Programming</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton isActive={isActive("/pr-feedback")} asChild>
                  <Link href="/pr-feedback">
                    <GitPullRequest className="h-4 w-4" />
                    <span>PR Feedback</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Team</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton isActive={isActive("/teams")} asChild>
                  <Link href="/teams">
                    <Users className="h-4 w-4" />
                    <span>Teams</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="border-t p-4">
        <div className="flex items-center gap-2">
          <UserDropdown />
          <div className="flex flex-col">
            <span className="text-sm font-medium">Sarah Chen</span>
            <span className="text-xs text-muted-foreground">Tech Lead</span>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
