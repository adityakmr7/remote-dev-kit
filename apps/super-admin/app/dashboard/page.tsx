"use client";

import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { dashboardApi } from "@repo/lib/admin-api";
import { formatDate } from "@repo/lib/utils";
import { toast } from "sonner";

type DashboardStats = {
  totalOrganizations: number;
  totalUsers: number;
  activeSubscriptions: number;
  revenue: number;
};

type ActivityItem = {
  id: string;
  type: string;
  description: string;
  timestamp: string;
  user?: {
    id: string;
    name: string;
  };
  organization?: {
    id: string;
    name: string;
  };
};

export default function AdminDashboardPage() {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [activity, setActivity] = useState<ActivityItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setIsLoading(true);
        const [statsData, activityData] = await Promise.all([
          dashboardApi.getStats(),
          dashboardApi.getRecentActivity(),
        ]);
        setStats(statsData);
        setActivity(activityData.items);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
        toast("Error", {
          description: "Failed to load dashboard data. Please try again.",
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="mb-6 text-3xl font-bold">Admin Dashboard</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Organizations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {isLoading ? "Loading..." : stats?.totalOrganizations || 0}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Users
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {isLoading ? "Loading..." : stats?.totalUsers || 0}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Active Subscriptions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {isLoading ? "Loading..." : stats?.activeSubscriptions || 0}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Revenue
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {isLoading
                ? "Loading..."
                : new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(stats?.revenue || 0)}
            </div>
          </CardContent>
        </Card>
      </div>

      <h2 className="mb-4 mt-8 text-2xl font-bold">Recent Activity</h2>
      <Card>
        <CardHeader>
          <CardTitle>Activity Log</CardTitle>
          <CardDescription>
            Recent actions and events across the platform
          </CardDescription>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <p>Loading activity...</p>
          ) : activity.length === 0 ? (
            <p className="text-muted-foreground">No recent activity</p>
          ) : (
            <div className="space-y-4">
              {activity.map((item) => (
                <div
                  key={item.id}
                  className="flex items-start justify-between border-b pb-4 last:border-0"
                >
                  <div>
                    <p className="font-medium">{item.description}</p>
                    <div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
                      {item.user && <span>By {item.user.name}</span>}
                      {item.organization && (
                        <span>• Org: {item.organization.name}</span>
                      )}
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {formatDate(item.timestamp)}
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
