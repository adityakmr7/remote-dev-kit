"use client";

import { useAuth } from "@/components/auth-provider";
import { OnboardingSteps } from "@/components/onboarding-steps";
import { Skeleton } from "@/components/ui/skeleton";

export default function OnboardingPage() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="text-center mb-8">
          <Skeleton className="h-8 w-64 mx-auto" />
          <Skeleton className="h-4 w-48 mx-auto mt-2" />
        </div>
        <Skeleton className="h-[400px] w-full rounded-lg" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold tracking-tight">
          Welcome to Remote Dev Kit
        </h1>
        <p className="text-muted-foreground mt-2">
          Let's get you set up in just a few steps
        </p>
      </div>

      {user && <OnboardingSteps user={user} />}
    </div>
  );
}
