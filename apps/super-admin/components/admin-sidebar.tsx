"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BarChart,
  Building,
  CreditCard,
  Home,
  LogOut,
  Settings,
  Users,
} from "lucide-react";
import { useAdminAuth } from "@/components/admin-auth-provider";
import { Button } from "@/components/ui/button";

export function AdminSidebar() {
  const pathname = usePathname();
  const { logout } = useAdminAuth();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <div className="flex h-screen w-64 flex-col border-r bg-white dark:bg-gray-900">
      <div className="flex h-16 items-center border-b px-6">
        <Link href="/admin/dashboard" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
            <code className="font-bold text-primary-foreground">R</code>
          </div>
          <span className="text-lg font-semibold">Admin Panel</span>
        </Link>
      </div>
      <div className="flex-1 overflow-auto py-4">
        <nav className="space-y-1 px-2">
          <Link
            href="/admin/dashboard"
            className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium ${
              isActive("/admin/dashboard")
                ? "bg-primary text-primary-foreground"
                : "text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
            }`}
          >
            <Home className="h-4 w-4" />
            Dashboard
          </Link>
          <Link
            href="/admin/organizations"
            className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium ${
              pathname?.startsWith("/admin/organizations")
                ? "bg-primary text-primary-foreground"
                : "text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
            }`}
          >
            <Building className="h-4 w-4" />
            Organizations
          </Link>
          <Link
            href="/admin/users"
            className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium ${
              pathname?.startsWith("/admin/users")
                ? "bg-primary text-primary-foreground"
                : "text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
            }`}
          >
            <Users className="h-4 w-4" />
            Users
          </Link>
          <Link
            href="/admin/subscriptions"
            className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium ${
              pathname?.startsWith("/admin/subscriptions")
                ? "bg-primary text-primary-foreground"
                : "text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
            }`}
          >
            <CreditCard className="h-4 w-4" />
            Subscriptions
          </Link>
          <Link
            href="/admin/analytics"
            className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium ${
              pathname?.startsWith("/admin/analytics")
                ? "bg-primary text-primary-foreground"
                : "text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
            }`}
          >
            <BarChart className="h-4 w-4" />
            Analytics
          </Link>
          <Link
            href="/admin/settings"
            className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium ${
              pathname?.startsWith("/admin/settings")
                ? "bg-primary text-primary-foreground"
                : "text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
            }`}
          >
            <Settings className="h-4 w-4" />
            Settings
          </Link>
        </nav>
      </div>
      <div className="border-t p-4">
        <Button
          variant="outline"
          className="w-full justify-start"
          onClick={() => logout()}
        >
          <LogOut className="mr-2 h-4 w-4" />
          Logout
        </Button>
      </div>
    </div>
  );
}
