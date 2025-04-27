"use client";

import { ArrowLeft, GitPullRequest, MessageSquare, Plus } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function PRFeedbackPage() {
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
            <h1 className="text-xl font-semibold">PR Feedback</h1>
            <div className="ml-auto flex items-center gap-4">
              <ThemeToggle />
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Add PR
              </Button>
            </div>
          </header>
          <main className="p-6">
            <div className="mb-6">
              <div className="relative">
                <Input
                  className="pl-10"
                  placeholder="Search pull requests..."
                />
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-search"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                  </svg>
                </div>
              </div>
            </div>

            <Tabs defaultValue="open" className="w-full">
              <TabsList className="mb-4">
                <TabsTrigger value="open">Open PRs</TabsTrigger>
                <TabsTrigger value="review">Needs Review</TabsTrigger>
                <TabsTrigger value="closed">Closed</TabsTrigger>
              </TabsList>
              <TabsContent value="open">
                <div className="grid gap-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <GitPullRequest className="h-4 w-4 text-emerald-500" />
                          <CardTitle className="text-sm font-medium">
                            <Link href="#" className="hover:underline">
                              Add authentication flow to frontend (#123)
                            </Link>
                          </CardTitle>
                        </div>
                        <span className="flex items-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-semibold text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400">
                          Ready to Merge
                        </span>
                      </div>
                      <CardDescription>
                        <span className="flex items-center gap-1">
                          <span className="text-xs">
                            Opened by Alex Kim • 2 days ago
                          </span>
                        </span>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <MessageSquare className="h-4 w-4 text-muted-foreground" />
                            <span className="text-xs text-muted-foreground">
                              5 comments
                            </span>
                          </div>
                          <div className="flex items-center gap-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-git-commit text-muted-foreground"
                            >
                              <circle cx="12" cy="12" r="3" />
                              <line x1="3" x2="9" y1="12" y2="12" />
                              <line x1="15" x2="21" y1="12" y2="12" />
                            </svg>
                            <span className="text-xs text-muted-foreground">
                              7 commits
                            </span>
                          </div>
                          <div className="flex items-center gap-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-file-diff text-muted-foreground"
                            >
                              <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                              <polyline points="14 2 14 8 20 8" />
                              <path d="M12 18v-6" />
                              <path d="M9 15h6" />
                            </svg>
                            <span className="text-xs text-muted-foreground">
                              5 files changed
                            </span>
                          </div>
                        </div>
                        <div className="flex -space-x-2">
                          <div className="h-6 w-6 rounded-full border-2 border-background bg-slate-200">
                            <img
                              src="/placeholder.svg?height=24&width=24"
                              alt="User avatar"
                              className="h-full w-full rounded-full object-cover"
                            />
                          </div>
                          <div className="h-6 w-6 rounded-full border-2 border-background bg-slate-200">
                            <img
                              src="/placeholder.svg?height=24&width=24"
                              alt="User avatar"
                              className="h-full w-full rounded-full object-cover"
                            />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <GitPullRequest className="h-4 w-4 text-amber-500" />
                          <CardTitle className="text-sm font-medium">
                            <Link href="#" className="hover:underline">
                              Refactor API endpoints for better performance
                              (#124)
                            </Link>
                          </CardTitle>
                        </div>
                        <span className="flex items-center rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-semibold text-amber-800 dark:bg-amber-900/30 dark:text-amber-400">
                          In Progress
                        </span>
                      </div>
                      <CardDescription>
                        <span className="flex items-center gap-1">
                          <span className="text-xs">
                            Opened by James Wilson • 1 day ago
                          </span>
                        </span>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <MessageSquare className="h-4 w-4 text-muted-foreground" />
                            <span className="text-xs text-muted-foreground">
                              3 comments
                            </span>
                          </div>
                          <div className="flex items-center gap-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-git-commit text-muted-foreground"
                            >
                              <circle cx="12" cy="12" r="3" />
                              <line x1="3" x2="9" y1="12" y2="12" />
                              <line x1="15" x2="21" y1="12" y2="12" />
                            </svg>
                            <span className="text-xs text-muted-foreground">
                              4 commits
                            </span>
                          </div>
                          <div className="flex items-center gap-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-file-diff text-muted-foreground"
                            >
                              <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                              <polyline points="14 2 14 8 20 8" />
                              <path d="M12 18v-6" />
                              <path d="M9 15h6" />
                            </svg>
                            <span className="text-xs text-muted-foreground">
                              3 files changed
                            </span>
                          </div>
                        </div>
                        <div className="flex -space-x-2">
                          <div className="h-6 w-6 rounded-full border-2 border-background bg-slate-200">
                            <img
                              src="/placeholder.svg?height=24&width=24"
                              alt="User avatar"
                              className="h-full w-full rounded-full object-cover"
                            />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <GitPullRequest className="h-4 w-4 text-red-500" />
                          <CardTitle className="text-sm font-medium">
                            <Link href="#" className="hover:underline">
                              Update dashboard UI components (#125)
                            </Link>
                          </CardTitle>
                        </div>
                        <span className="flex items-center rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-semibold text-red-800 dark:bg-red-900/30 dark:text-red-400">
                          Changes Requested
                        </span>
                      </div>
                      <CardDescription>
                        <span className="flex items-center gap-1">
                          <span className="text-xs">
                            Opened by Maya Johnson • 3 hours ago
                          </span>
                        </span>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <MessageSquare className="h-4 w-4 text-muted-foreground" />
                            <span className="text-xs text-muted-foreground">
                              8 comments
                            </span>
                          </div>
                          <div className="flex items-center gap-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-git-commit text-muted-foreground"
                            >
                              <circle cx="12" cy="12" r="3" />
                              <line x1="3" x2="9" y1="12" y2="12" />
                              <line x1="15" x2="21" y1="12" y2="12" />
                            </svg>
                            <span className="text-xs text-muted-foreground">
                              2 commits
                            </span>
                          </div>
                          <div className="flex items-center gap-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-file-diff text-muted-foreground"
                            >
                              <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                              <polyline points="14 2 14 8 20 8" />
                              <path d="M12 18v-6" />
                              <path d="M9 15h6" />
                            </svg>
                            <span className="text-xs text-muted-foreground">
                              7 files changed
                            </span>
                          </div>
                        </div>
                        <div className="flex -space-x-2">
                          <div className="h-6 w-6 rounded-full border-2 border-background bg-slate-200">
                            <img
                              src="/placeholder.svg?height=24&width=24"
                              alt="User avatar"
                              className="h-full w-full rounded-full object-cover"
                            />
                          </div>
                          <div className="h-6 w-6 rounded-full border-2 border-background bg-slate-200">
                            <img
                              src="/placeholder.svg?height=24&width=24"
                              alt="User avatar"
                              className="h-full w-full rounded-full object-cover"
                            />
                          </div>
                          <div className="h-6 w-6 rounded-full border-2 border-background bg-slate-200">
                            <img
                              src="/placeholder.svg?height=24&width=24"
                              alt="User avatar"
                              className="h-full w-full rounded-full object-cover"
                            />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="review">
                <div className="grid gap-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <GitPullRequest className="h-4 w-4 text-blue-500" />
                          <CardTitle className="text-sm font-medium">
                            <Link href="#" className="hover:underline">
                              Implement WebSocket connection for real-time
                              updates (#126)
                            </Link>
                          </CardTitle>
                        </div>
                        <span className="flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800 dark:bg-blue-900/30 dark:text-blue-400">
                          Needs Review
                        </span>
                      </div>
                      <CardDescription>
                        <span className="flex items-center gap-1">
                          <span className="text-xs">
                            Opened by Alex Kim • 5 hours ago
                          </span>
                        </span>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <MessageSquare className="h-4 w-4 text-muted-foreground" />
                            <span className="text-xs text-muted-foreground">
                              0 comments
                            </span>
                          </div>
                          <div className="flex items-center gap-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-git-commit text-muted-foreground"
                            >
                              <circle cx="12" cy="12" r="3" />
                              <line x1="3" x2="9" y1="12" y2="12" />
                              <line x1="15" x2="21" y1="12" y2="12" />
                            </svg>
                            <span className="text-xs text-muted-foreground">
                              3 commits
                            </span>
                          </div>
                          <div className="flex items-center gap-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-file-diff text-muted-foreground"
                            >
                              <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                              <polyline points="14 2 14 8 20 8" />
                              <path d="M12 18v-6" />
                              <path d="M9 15h6" />
                            </svg>
                            <span className="text-xs text-muted-foreground">
                              4 files changed
                            </span>
                          </div>
                        </div>
                        <Button size="sm">Review</Button>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <GitPullRequest className="h-4 w-4 text-blue-500" />
                          <CardTitle className="text-sm font-medium">
                            <Link href="#" className="hover:underline">
                              Add focus time tracking feature (#127)
                            </Link>
                          </CardTitle>
                        </div>
                        <span className="flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800 dark:bg-blue-900/30 dark:text-blue-400">
                          Needs Review
                        </span>
                      </div>
                      <CardDescription>
                        <span className="flex items-center gap-1">
                          <span className="text-xs">
                            Opened by Sarah Chen • 1 day ago
                          </span>
                        </span>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <MessageSquare className="h-4 w-4 text-muted-foreground" />
                            <span className="text-xs text-muted-foreground">
                              2 comments
                            </span>
                          </div>
                          <div className="flex items-center gap-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-git-commit text-muted-foreground"
                            >
                              <circle cx="12" cy="12" r="3" />
                              <line x1="3" x2="9" y1="12" y2="12" />
                              <line x1="15" x2="21" y1="12" y2="12" />
                            </svg>
                            <span className="text-xs text-muted-foreground">
                              5 commits
                            </span>
                          </div>
                          <div className="flex items-center gap-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-file-diff text-muted-foreground"
                            >
                              <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                              <polyline points="14 2 14 8 20 8" />
                              <path d="M12 18v-6" />
                              <path d="M9 15h6" />
                            </svg>
                            <span className="text-xs text-muted-foreground">
                              6 files changed
                            </span>
                          </div>
                        </div>
                        <Button size="sm">Review</Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="closed">
                <div className="grid gap-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <GitPullRequest className="h-4 w-4 text-purple-500" />
                          <CardTitle className="text-sm font-medium">
                            <Link href="#" className="hover:underline">
                              Fix user authentication bug (#120)
                            </Link>
                          </CardTitle>
                        </div>
                        <span className="flex items-center rounded-full bg-purple-100 px-2.5 py-0.5 text-xs font-semibold text-purple-800 dark:bg-purple-900/30 dark:text-purple-400">
                          Merged
                        </span>
                      </div>
                      <CardDescription>
                        <span className="flex items-center gap-1">
                          <span className="text-xs">
                            Merged by Alex Kim • 3 days ago
                          </span>
                        </span>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <MessageSquare className="h-4 w-4 text-muted-foreground" />
                            <span className="text-xs text-muted-foreground">
                              4 comments
                            </span>
                          </div>
                          <div className="flex items-center gap-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-git-commit text-muted-foreground"
                            >
                              <circle cx="12" cy="12" r="3" />
                              <line x1="3" x2="9" y1="12" y2="12" />
                              <line x1="15" x2="21" y1="12" y2="12" />
                            </svg>
                            <span className="text-xs text-muted-foreground">
                              2 commits
                            </span>
                          </div>
                          <div className="flex items-center gap-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-file-diff text-muted-foreground"
                            >
                              <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                              <polyline points="14 2 14 8 20 8" />
                              <path d="M12 18v-6" />
                              <path d="M9 15h6" />
                            </svg>
                            <span className="text-xs text-muted-foreground">
                              3 files changed
                            </span>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          View
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <GitPullRequest className="h-4 w-4 text-gray-500" />
                          <CardTitle className="text-sm font-medium">
                            <Link href="#" className="hover:underline">
                              Update dependencies to latest versions (#119)
                            </Link>
                          </CardTitle>
                        </div>
                        <span className="flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-semibold text-gray-800 dark:bg-gray-800/30 dark:text-gray-400">
                          Closed
                        </span>
                      </div>
                      <CardDescription>
                        <span className="flex items-center gap-1">
                          <span className="text-xs">
                            Closed by James Wilson • 4 days ago
                          </span>
                        </span>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <MessageSquare className="h-4 w-4 text-muted-foreground" />
                            <span className="text-xs text-muted-foreground">
                              2 comments
                            </span>
                          </div>
                          <div className="flex items-center gap-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-git-commit text-muted-foreground"
                            >
                              <circle cx="12" cy="12" r="3" />
                              <line x1="3" x2="9" y1="12" y2="12" />
                              <line x1="15" x2="21" y1="12" y2="12" />
                            </svg>
                            <span className="text-xs text-muted-foreground">
                              1 commit
                            </span>
                          </div>
                          <div className="flex items-center gap-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-file-diff text-muted-foreground"
                            >
                              <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                              <polyline points="14 2 14 8 20 8" />
                              <path d="M12 18v-6" />
                              <path d="M9 15h6" />
                            </svg>
                            <span className="text-xs text-muted-foreground">
                              1 file changed
                            </span>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          View
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
