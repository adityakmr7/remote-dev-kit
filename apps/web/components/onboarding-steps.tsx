"use client";

import type React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { ProfileStep } from "./onboarding/profile-step";
import { WorkspaceStep } from "./onboarding/workspace-step";
import { GithubStep } from "./onboarding/github-step";
import { TeamStep } from "./onboarding/team-step";
import {
  completeOnboarding,
  getSavedOnboardingProgress,
  saveOnboardingProgress,
} from "@repo/lib/user-api";
import { useAuth } from "./auth-provider";
import type { FormData, User as UserType } from "@repo/lib/types/index";
import { json } from "stream/consumers";

interface OnboardingStepsProps {
  user: UserType;
}

const steps = [
  { id: 1, name: "Profile" },
  { id: 2, name: "Workspace" },
  { id: 3, name: "GitHub" },
  { id: 4, name: "Team" },
];

export function OnboardingSteps({ user }: OnboardingStepsProps) {
  const router = useRouter();
  const { refreshUser } = useAuth();
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    profile: {
      name: user.name || "",
      jobTitle: user.jobTitle || "",
      bio: user.bio || "",
    },
    workspace: {
      defaultEditor: user.workspaceSettings?.defaultEditor || "vscode",
      theme: user.workspaceSettings?.theme || "light",
      fontSize: user.workspaceSettings?.fontSize || 14,
      tabSize: user.workspaceSettings?.tabSize || 4,
      autoSave: user.workspaceSettings?.autoSave || false,
    },
    github: {
      githubUsername: '',
      connected: !!user.githubId,
    },
    team: {
      teamName: "",
      teamMembers: [],
    },
  });
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [skippedSteps, setSkippedSteps] = useState<number[]>([]);
  const [hasProgress, setHasProgress] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(true);

  // Load saved progress on component mount
  useEffect(() => {
    async function loadProgress() {
      try {
        const data = await getSavedOnboardingProgress();
        const progress = data?.onboardingProgress
        if (progress && progress.currentStep) {
          setCurrentStep(progress.currentStep);
          setFormData(progress.formData || formData);
          setCompletedSteps(progress.completedSteps || []);
          setSkippedSteps(progress.skippedSteps || []);
          setHasProgress(true);
        }
      } catch (error) {
        console.error("Failed to load onboarding progress:", error);
      } finally {
        setLoadingProgress(false);
      }
    }

    loadProgress();
  }, []);

  // Save progress when step changes
  useEffect(() => {
    if (!loadingProgress) {
      saveProgress();
    }
  }, [currentStep, formData, completedSteps, skippedSteps]);

  const saveProgress = async () => {
    try {
      setLoadingProgress(true);
      await saveOnboardingProgress({
        currentStep,
        completedSteps,
        skippedSteps,
        formData,
        lastUpdated: new Date().toISOString(),
      });
      toast.success("Progress saved successfully!");
    } catch (error) {
      console.error("Error saving progress:", error);
      toast.error("Failed to save progress. Please try again.");
    } finally {
      setLoadingProgress(false);
    }
  };

  const getStepKey = (step: number): string => {
    switch (step) {
      case 1:
        return "profile";
      case 2:
        return "workspace";
      case 3:
        return "github";
      case 4:
        return "team";
      default:
        return "profile";
    }
  };

  const handleNext = async (data: any = {}) => {
    // Update form data for the current step
    const updatedFormData = {
      ...formData,
      [getStepKey(currentStep)]: {
        ...formData[getStepKey(currentStep) as keyof typeof formData],
        ...data,
      },
    };
    setFormData(updatedFormData);

    // Mark current step as completed
    if (!completedSteps.includes(currentStep)) {
      setCompletedSteps([...completedSteps, currentStep]);
    }

    // If we're on the last step, complete onboarding
    if (currentStep === steps.length) {
      await completeOnboarding({});
      return;
    }

    // Move to next step
    setCurrentStep(currentStep + 1);
  };
  const handleSkip = () => {
    // Mark current step as skipped
    if (!skippedSteps.includes(currentStep)) {
      setSkippedSteps([...skippedSteps, currentStep]);
    }

    // If we're on the last step, complete onboarding
    if (currentStep === steps.length) {
      finishOnboarding(formData);
      return;
    }

    // Move to next step
    setCurrentStep(currentStep + 1);
  };
  const handleSkipAll = async () => {
    setLoading(true);
    try {
      await completeOnboarding();
      // await resetOnboardingProgress();
      router.push("/dashboard");
      toast.success("Onboarding completed! Welcome to RemoteDevKit.");
    } catch (error) {
      console.error("Failed to skip onboarding:", error);
      toast.error("Failed to skip onboarding. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const finishOnboarding = async (data: any) => {
    setLoading(true);
    try {
      await completeOnboarding();
      // await resetOnboardingProgress(); // Clear progress after successful completion
      router.push("/dashboard");
      toast.success("Onboarding completed! Welcome to RemoteDevKit.");
    } catch (error) {
      console.error("Failed to complete onboarding:", error);
      toast.error("Failed to complete onboarding. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  const getStepComponent = () => {
    switch (currentStep) {
      case 1:
        return (
          <ProfileStep
            onNext={handleNext}
            onSkip={handleSkip}
            defaultData={formData.profile}
          />
        );
      case 2:
        return (
          <WorkspaceStep
            onBack={() => setCurrentStep(1)}
            onNext={handleNext}
            onSkip={handleSkip}
            defaultData={formData.workspace}
          />
        );
      case 3:
        return (
          <GithubStep
            onBack={() => setCurrentStep(2)}
            onNext={handleNext}
            onSkip={handleSkip}
            defaultData={formData.github}
          />
        );
      case 4:
        return (
          <TeamStep
            onNext={handleNext}
            onSkip={handleSkip}
            defaultData={formData.team}
            loading={loading}
          />
        );
      default:
        return null;
    }
  };

  if (loadingProgress) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }
  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* Resume Banner */}
      {hasProgress && currentStep > 1 && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6 flex items-center justify-between">
          <div>
            <h3 className="font-medium text-blue-800">
              Resume your onboarding
            </h3>
            <p className="text-sm text-blue-600">
              You&#39;re on step {currentStep} of {steps.length}
            </p>
          </div>
          <button
            onClick={() => setCurrentStep(1)}
            className="text-sm bg-white text-blue-600 px-3 py-1 rounded border border-blue-300 hover:bg-blue-50"
          >
            Start Over
          </button>
        </div>
      )}

      {/* Progress Steps */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          {steps.map((step) => (
            <div key={step.id} className="flex flex-col items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep === step.id
                  ? "bg-blue-600 text-white"
                  : completedSteps.includes(step.id)
                    ? "bg-green-500 text-white"
                    : skippedSteps.includes(step.id)
                      ? "bg-gray-300 text-gray-600"
                      : "bg-gray-200 text-gray-600"
                  }`}
              >
                {completedSteps.includes(step.id) ? (
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : skippedSteps.includes(step.id) ? (
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  step.id
                )}
              </div>
              <span className="text-xs mt-1">{step.name}</span>
            </div>
          ))}
        </div>
        <div className="relative mt-2">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gray-200 rounded"></div>
          <div
            className="absolute top-0 left-0 h-1 bg-blue-600 rounded transition-all duration-300"
            style={{
              width: `${((currentStep - 1) / (steps.length - 1)) * 100}%`,
            }}
          ></div>
        </div>
      </div>

      {/* Skip All Button */}
      <div className="flex justify-end mb-4">
        <button
          onClick={handleSkipAll}
          disabled={loading}
          className="text-sm text-gray-500 hover:text-gray-700 flex items-center"
        >
          Skip all steps
          <svg
            className="w-4 h-4 ml-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </button>
      </div>

      {/* Current Step */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        {getStepComponent()}
      </div>
    </div>
  );
}
