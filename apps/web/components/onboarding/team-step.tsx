"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { createTeam } from "@repo/lib/team-api";

interface TeamStepProps {
  onBack: () => void;
  onComplete: () => void;
  isSubmitting: boolean;
}

export function TeamStep({ onBack, onComplete, isSubmitting }: TeamStepProps) {
  const [teamName, setTeamName] = useState("");
  const [teamDescription, setTeamDescription] = useState("");
  const [error, setError] = useState("");
  const [isCreatingTeam, setIsCreatingTeam] = useState(false);
  const [teamCreated, setTeamCreated] = useState(false);

  const handleCreateTeam = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!teamName.trim()) {
      setError("Team name is required");
      return;
    }

    try {
      setIsCreatingTeam(true);
      const result = await createTeam({
        name: teamName,
        description: teamDescription,
      });

      if (result.error) {
        throw result.error;
      }

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
            Your team "{teamName}" has been created successfully.
          </p>
          <Button
            onClick={onComplete}
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
              value={teamName}
              onChange={(e) => setTeamName(e.target.value)}
              placeholder="My Awesome Team"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="teamDescription">Description</Label>
            <Textarea
              id="teamDescription"
              value={teamDescription}
              onChange={(e) => setTeamDescription(e.target.value)}
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
          onClick={onComplete}
          disabled={isSubmitting}
          className="w-full"
        >
          {isSubmitting ? "Completing..." : "Skip team creation for now"}
        </Button>
      </div>
    </div>
  );
}
