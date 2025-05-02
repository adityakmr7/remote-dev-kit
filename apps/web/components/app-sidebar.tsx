"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BarChart3,
  Clock,
  Github,
  Home,
  MessageSquare,
  Settings,
  Users,
} from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { UserDropdown } from "./user-dropdown";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: Home },
  { name: "Standups", href: "/standups", icon: MessageSquare },
  { name: "Teams", href: "/teams", icon: Users },
  { name: "Focus Time", href: "/focus", icon: Clock },
  { name: "Pull Requests", href: "/pull-requests", icon: Github },
  { name: "Analytics", href: "/analytics", icon: BarChart3 },
  { name: "Settings", href: "/settings", icon: Settings },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar>
      <SidebarHeader className="flex items-center px-4 py-2">
        <Link href="/dashboard" className="flex items-center">
          <span className="text-xl font-bold">RemoteDevKit</span>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {navigation.map((item) => (
            <SidebarMenuItem key={item.name}>
              <SidebarMenuButton
                asChild
                isActive={pathname === item.href}
                tooltip={item.name}
              >
                <Link href={item.href}>
                  <item.icon className="h-5 w-5" />
                  <span>{item.name}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="p-4">
        <div className="flex flex-col space-y-4">
          <ThemeToggle />
          <UserDropdown />
        </div>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
