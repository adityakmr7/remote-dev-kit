"use client";

import { useEffect, useState } from "react";
import { ArrowLeft, Plus } from "lucide-react";
import Link from "next/link";
import { format } from "date-fns";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { ThemeToggle } from "@/components/theme-toggle";
import { StandupForm } from "@/components/standup-form";
import { StandupCard } from "@/components/standup-card";
import { StandupHistory } from "@/components/standup-history";
import { Skeleton } from "@/components/ui/skeleton";
import {
  getStandupsByDate,
  getTodayStandups,
  type Standup,
} from "@/lib/standup-api";
import { toast } from "sonner";

export default function StandupsPage() {
  const [activeTab, setActiveTab] = useState("today");
  const [todayStandups, setTodayStandups] = useState<Standup[]>([]);
  const [dateStandups, setDateStandups] = useState<Standup[]>([]);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [dateLoading, setDateLoading] = useState(false);

  const fetchTodayStandups = async () => {
    setLoading(true);
    try {
      const standups = await getTodayStandups();
      setTodayStandups(standups);
    } catch (error) {
      console.error("Error fetching today's standups:", error);
      toast("Failed to load standups", {
        description: "There was an error loading today's standups.",
      });
    } finally {
      setLoading(false);
    }
  };

  const fetchDateStandups = async (date: string) => {
    setDateLoading(true);
    try {
      const standups = await getStandupsByDate(date);
      setDateStandups(standups);
      setSelectedDate(date);
    } catch (error) {
      console.error(`Error fetching standups for date ${date}:`, error);
      toast("Failed to load standups", {
        description: `There was an error loading standups for ${format(new Date(date), "MMMM d, yyyy")}.`,
      });
    } finally {
      setDateLoading(false);
    }
  };

  useEffect(() => {
    fetchTodayStandups();
  }, []);

  const handleStandupCreated = () => {
    fetchTodayStandups();
  };

  const handleSelectDate = (date: string) => {
    setActiveTab("date");
    fetchDateStandups(date);
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
            <h1 className="text-xl font-semibold">Async Standups</h1>
            <div className="ml-auto flex items-center gap-4">
              <ThemeToggle />
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                New Standup
              </Button>
            </div>
          </header>
          <main className="p-6">
            <Tabs
              value={activeTab}
              onValueChange={setActiveTab}
              className="w-full"
            >
              <TabsList className="mb-4">
                <TabsTrigger value="today">Today</TabsTrigger>
                <TabsTrigger value="date" disabled={!selectedDate}>
                  {selectedDate
                    ? format(new Date(selectedDate), "MMM d, yyyy")
                    : "Selected Date"}
                </TabsTrigger>
                <TabsTrigger value="history">History</TabsTrigger>
              </TabsList>
              <TabsContent value="today">
                <div className="mb-6">
                  <StandupForm onStandupCreated={handleStandupCreated} />
                </div>

                <h2 className="mb-4 text-lg font-semibold">Team Standups</h2>
                {loading ? (
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="rounded-md border p-4">
                        <div className="flex items-center gap-2 mb-4">
                          <Skeleton className="h-8 w-8 rounded-full" />
                          <Skeleton className="h-4 w-24" />
                          <Skeleton className="h-3 w-16 ml-auto" />
                        </div>
                        <div className="space-y-3">
                          <Skeleton className="h-3 w-full" />
                          <Skeleton className="h-3 w-full" />
                          <Skeleton className="h-3 w-3/4" />
                        </div>
                      </div>
                    ))}
                  </div>
                ) : todayStandups.length === 0 ? (
                  <div className="rounded-md border p-8 text-center">
                    <p className="text-muted-foreground">
                      No standups recorded for today
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Be the first to share your update!
                    </p>
                  </div>
                ) : (
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {todayStandups.map((standup) => (
                      <StandupCard key={standup.id} standup={standup} />
                    ))}
                  </div>
                )}
              </TabsContent>
              <TabsContent value="date">
                {selectedDate ? (
                  <>
                    <h2 className="mb-4 text-lg font-semibold">
                      Standups for{" "}
                      {format(new Date(selectedDate), "MMMM d, yyyy")}
                    </h2>
                    {dateLoading ? (
                      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="rounded-md border p-4">
                            <div className="flex items-center gap-2 mb-4">
                              <Skeleton className="h-8 w-8 rounded-full" />
                              <Skeleton className="h-4 w-24" />
                              <Skeleton className="h-3 w-16 ml-auto" />
                            </div>
                            <div className="space-y-3">
                              <Skeleton className="h-3 w-full" />
                              <Skeleton className="h-3 w-full" />
                              <Skeleton className="h-3 w-3/4" />
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : dateStandups.length === 0 ? (
                      <div className="rounded-md border p-8 text-center">
                        <p className="text-muted-foreground">
                          No standups recorded for this date
                        </p>
                      </div>
                    ) : (
                      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {dateStandups.map((standup) => (
                          <StandupCard key={standup.id} standup={standup} />
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <div className="rounded-md border p-8 text-center">
                    <p className="text-muted-foreground">
                      Select a date from the history tab to view standups
                    </p>
                  </div>
                )}
              </TabsContent>
              <TabsContent value="history">
                <StandupHistory onSelectDate={handleSelectDate} />
              </TabsContent>
            </Tabs>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
