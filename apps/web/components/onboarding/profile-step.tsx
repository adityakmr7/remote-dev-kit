"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { updateProfile } from "@repo/lib/user-api";

interface ProfileData {
  name: string;
  jobTitle: string;
  bio: string;
}

interface ProfileStepProps {
  data: ProfileData;
  setData: React.Dispatch<React.SetStateAction<ProfileData>>;
  onNext: () => void;
}

export function ProfileStep({ data, setData, onNext }: ProfileStepProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!data.name.trim()) {
      setError("Name is required");
      return;
    }

    try {
      setIsSubmitting(true);
      await updateProfile({
        name: data.name,
        jobTitle: data.jobTitle,
        bio: data.bio,
      });
      onNext();
    } catch (err) {
      console.error("Error updating profile:", err);
      setError("Failed to update profile. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Tell us about yourself</h2>
        <p className="text-gray-500">
          This information will be displayed on your profile
        </p>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name *</Label>
          <Input
            id="name"
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
            placeholder="John Doe"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="jobTitle">Job Title</Label>
          <Input
            id="jobTitle"
            value={data.jobTitle}
            onChange={(e) => setData({ ...data, jobTitle: e.target.value })}
            placeholder="Senior Developer"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="bio">Bio</Label>
          <Textarea
            id="bio"
            value={data.bio}
            onChange={(e) => setData({ ...data, bio: e.target.value })}
            placeholder="Tell us a bit about yourself"
            rows={4}
          />
        </div>
      </div>

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <div className="flex justify-end">
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Saving..." : "Continue"}
        </Button>
      </div>
    </form>
  );
}
