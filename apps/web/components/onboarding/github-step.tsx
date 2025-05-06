"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { connectToGithub } from "api/src/services/github.service";

interface GithubStepProps {
  onNext: () => void;
  onBack: () => void;
  onSkip: () => void;
  defaultData: {
    githubUsername: string;
  };
}

export function GithubStep({ onNext, onBack, defaultData }: GithubStepProps) {
  const [isConnecting, setIsConnecting] = useState(false);
  const [isDisconnecting, setIsDisconnecting] = useState(false);
  const [error, setError] = useState("");
  const isConnected = !!defaultData.githubUsername;

  const handleConnect = async () => {
    try {
      setIsConnecting(true);
      setError("");
      await connectToGithub();
    } catch (err) {
      console.error("Error connecting to GitHub:", err);
      setError("Failed to connect to GitHub. Please try again.");
      setIsConnecting(false);
    }
  };

  const handleDisconnect = async () => {
    try {
      setIsDisconnecting(true);
      setError("");

      // Call the API to disconnect GitHub
      const response = await fetch("/api/auth/github/disconnect", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to disconnect GitHub");
      }

      // Refresh the page to update the user data
      window.location.reload();
    } catch (err) {
      console.error("Error disconnecting from GitHub:", err);
      setError("Failed to disconnect from GitHub. Please try again.");
      setIsDisconnecting(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Connect with GitHub</h2>
        <p className="text-gray-500">
          Link your GitHub account to enable PR reviews, code sync, and more
        </p>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
        {isConnected ? (
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center">
                <Github className="h-6 w-6" />
              </div>
              <div>
                <p className="font-medium">{defaultData.githubUsername}</p>
                <p className="text-sm text-gray-500">Connected to GitHub</p>
              </div>
            </div>
            <Button
              variant="outline"
              onClick={handleDisconnect}
              disabled={isDisconnecting}
              className="w-full"
            >
              {isDisconnecting ? "Disconnecting..." : "Disconnect GitHub"}
            </Button>
          </div>
        ) : (
          <div className="text-center space-y-4">
            <div className="mx-auto h-16 w-16 rounded-full bg-gray-100 flex items-center justify-center">
              <Github className="h-8 w-8 text-gray-600" />
            </div>
            <p>
              Connect your GitHub account to enable PR reviews and code sync
            </p>
            <Button
              onClick={handleConnect}
              disabled={isConnecting}
              className="w-full"
            >
              {isConnecting ? "Connecting..." : "Connect GitHub"}
            </Button>
          </div>
        )}
      </div>

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <div className="flex justify-between">
        <Button type="button" variant="outline" onClick={onBack}>
          Back
        </Button>
        <Button onClick={onNext}>
          {isConnected ? "Continue" : "Skip for now"}
        </Button>
      </div>
    </div>
  );
}
