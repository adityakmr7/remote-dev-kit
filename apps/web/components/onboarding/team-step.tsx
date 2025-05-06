"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface TeamStepProps {
  onBack: () => void;
  onNext: (data: { teamName: string; teamDescription: string }) => void;
  isSubmitting: boolean;
  onSkip?: () => void;
  defaultData: {
    teamName: string;
    teamDescription: string;
  };
}

export function TeamStep({ onBack, onNext, isSubmitting }: TeamStepProps) {
  const [data, setData] = useState({
    teamName: "",
    teamDescription: "",
  });
  const [error, setError] = useState("");
  const [isCreatingTeam, setIsCreatingTeam] = useState(false);
  const [teamCreated, setTeamCreated] = useState(false);

  const handleCreateTeam = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!data.teamName.trim()) {
      setError("Team name is required");
      return;
    }

    try {
      setIsCreatingTeam(true);
      onNext(data);
      setTeamCreated(true);
    } catch (err) {
      console.error("Error creating team:", err);
      setError("Failed to create team. Please try again.");
    } finally {
      setIsCreatingTeam(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Create your first team</h2>
        <p className="text-gray-500">
          Teams help you organize your work and collaborate with others
        </p>
      </div>

      {teamCreated ? (
        <div className="bg-green-50 p-6 rounded-lg border border-green-200 text-center space-y-4">
          <h3 className="text-xl font-medium text-green-800">Team Created!</h3>
          <p className="text-green-700">
            Your team &#34;{data.teamName}&#34; has been created successfully.
          </p>
          <Button
            onClick={() => onNext(data)}
            disabled={isSubmitting}
            className="w-full"
          >
            {isSubmitting ? "Completing..." : "Go to Dashboard"}
          </Button>
        </div>
      ) : (
        <form onSubmit={handleCreateTeam} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="teamName">Team Name *</Label>
            <Input
              id="teamName"
              value={data.teamName}
              onChange={(e) => setData({ ...data, teamName: e.target.value })}
              placeholder="My Awesome Team"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="teamDescription">Description</Label>
            <Textarea
              id="teamDescription"
              value={data.teamDescription}
              onChange={(e) =>
                setData({ ...data, teamDescription: e.target.value })
              }
              placeholder="What does your team work on?"
              rows={3}
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <div className="flex justify-between">
            <Button type="button" variant="outline" onClick={onBack}>
              Back
            </Button>
            <Button type="submit" disabled={isCreatingTeam}>
              {isCreatingTeam ? "Creating..." : "Create Team"}
            </Button>
          </div>
        </form>
      )}

      <div className="pt-4 border-t border-gray-200">
        <Button
          variant="ghost"
          onClick={() => onNext(data)}
          disabled={isSubmitting}
          className="w-full"
        >
          {isSubmitting ? "Completing..." : "Skip team creation for now"}
        </Button>
      </div>
    </div>
  );
}
