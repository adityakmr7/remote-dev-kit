"use client";

import type React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Check, Github, Laptop, Settings, User } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ProfileStep } from "./onboarding/profile-step";
import { WorkspaceStep } from "./onboarding/workspace-step";
import { GithubStep } from "./onboarding/github-step";
import { TeamStep } from "./onboarding/team-step";
import { completeOnboarding } from "@repo/lib/user-api";
import { useAuth } from "./auth-provider";
import type { User as UserType } from "@repo/lib/types/index";

type OnboardingStep = "profile" | "workspace" | "github" | "team";

interface OnboardingStepsProps {
  user: UserType;
}

export function OnboardingSteps({ user }: OnboardingStepsProps) {
  const router = useRouter();
  const { refreshUser } = useAuth();
  const [currentStep, setCurrentStep] = useState<OnboardingStep>("profile");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [profileData, setProfileData] = useState({
    name: user.name || "",
    jobTitle: user.jobTitle || "",
    bio: user.bio || "",
  });
  const [workspaceData, setWorkspaceData] = useState<{
    defaultEditor: string;
    theme: string;
    fontSize: number;
    tabSize: number;
    autoSave: true;
  }>({
    defaultEditor:
      (user.workspaceSettings?.defaultEditor as string) || "vscode",
    theme: (user.workspaceSettings?.theme as string) || "system",
    fontSize: (user.workspaceSettings?.fontSize as number) || 14,
    tabSize: (user.workspaceSettings?.tabSize as number) || 2,
    autoSave: (user.workspaceSettings?.autoSave as boolean) || true,
  });

  const steps: {
    id: OnboardingStep;
    label: string;
    icon: React.ReactNode;
    completed: boolean;
  }[] = [
    {
      id: "profile",
      label: "Profile",
      icon: <User className="h-5 w-5" />,
      completed: currentStep !== "profile",
    },
    {
      id: "workspace",
      label: "Workspace",
      icon: <Settings className="h-5 w-5" />,
      completed: currentStep !== "workspace" && currentStep !== "profile",
    },
    {
      id: "github",
      label: "GitHub",
      icon: <Github className="h-5 w-5" />,
      completed:
        currentStep !== "github" &&
        currentStep !== "workspace" &&
        currentStep !== "profile",
    },
    {
      id: "team",
      label: "Team",
      icon: <Laptop className="h-5 w-5" />,
      completed: currentStep === "team",
    },
  ];

  const handleNext = () => {
    const currentIndex = steps.findIndex((step) => step.id === currentStep);
    if (currentIndex < steps.length - 1) {
      setCurrentStep(steps[currentIndex + 1].id);
    }
  };

  const handleBack = () => {
    const currentIndex = steps.findIndex((step) => step.id === currentStep);
    if (currentIndex > 0) {
      setCurrentStep(steps[currentIndex - 1].id);
    }
  };

  const handleSkip = async () => {
    try {
      setIsSubmitting(true);
      await completeOnboarding({ skipRemaining: true });
      toast.success("Onboarding completed successfully!");
      await refreshUser(); // Refresh user data to update onboardingCompleted status
      router.push("/dashboard");
    } catch (error) {
      console.error("Error skipping onboarding:", error);
      toast.error("Failed to complete onboarding. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleComplete = async () => {
    try {
      setIsSubmitting(true);
      await completeOnboarding({ skipRemaining: false });
      toast.success("Onboarding completed successfully!");
      await refreshUser(); // Refresh user data to update onboardingCompleted status
      router.push("/dashboard");
    } catch (error) {
      console.error("Error completing onboarding:", error);
      toast.error("Failed to complete onboarding. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // @ts-ignore
  return (
    <div className="space-y-8">
      {/* Progress Steps */}
      <div className="flex justify-between items-center">
        {steps.map((step, index) => (
          <div key={step.id} className="flex items-center">
            <div
              className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                step.completed
                  ? "bg-green-100 border-green-500 text-green-500 dark:bg-green-900 dark:border-green-400 dark:text-green-400"
                  : currentStep === step.id
                    ? "bg-blue-100 border-blue-500 text-blue-500 dark:bg-blue-900 dark:border-blue-400 dark:text-blue-400"
                    : "bg-gray-100 border-gray-300 text-gray-500 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400"
              }`}
            >
              {step.completed ? <Check className="h-5 w-5" /> : step.icon}
            </div>
            <span
              className={`ml-2 text-sm font-medium hidden sm:inline ${
                currentStep === step.id
                  ? "text-blue-600 dark:text-blue-400"
                  : "text-gray-500 dark:text-gray-400"
              }`}
            >
              {step.label}
            </span>
            {index < steps.length - 1 && (
              <div className="w-12 h-1 bg-gray-200 dark:bg-gray-700 mx-2 hidden sm:block">
                <div
                  className={`h-full ${
                    step.completed
                      ? "bg-green-500 dark:bg-green-400"
                      : "bg-gray-200 dark:bg-gray-700"
                  }`}
                ></div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Step Content */}
      <Card className="p-6">
        {currentStep === "profile" && (
          <ProfileStep
            data={profileData}
            setData={setProfileData}
            onNext={handleNext}
          />
        )}
        {currentStep === "workspace" && (
          <WorkspaceStep
            data={workspaceData}
            //@ts-ignore
            setData={setWorkspaceData}
            onNext={handleNext}
            onBack={handleBack}
          />
        )}
        {currentStep === "github" && (
          <GithubStep onNext={handleNext} onBack={handleBack} user={user} />
        )}
        {currentStep === "team" && (
          <TeamStep
            onBack={handleBack}
            onComplete={handleComplete}
            isSubmitting={isSubmitting}
          />
        )}
      </Card>

      {/* Skip Button */}
      <div className="flex justify-center">
        <Button
          variant="ghost"
          onClick={handleSkip}
          disabled={isSubmitting}
          className="text-gray-500 dark:text-gray-400"
        >
          Skip for now
        </Button>
      </div>
    </div>
  );
}
