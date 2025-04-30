"use client";

import type React from "react";
import { type FormEvent, useState } from "react";
import { Loader2, Mic, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { createStandup } from "@repo/lib/standup-api";
import { toast } from "sonner";

interface StandupFormProps {
  onStandupCreated?: () => void;
}

export function StandupForm({ onStandupCreated }: StandupFormProps) {
  const [yesterday, setYesterday] = useState("");
  const [today, setToday] = useState("");
  const [blockers, setBlockers] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!yesterday && !today) {
      toast("Missing information", {
        description: "Please fill in at least one of the fields",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = {
        yesterday: yesterday || null,
        today: today || null,
        blockers: blockers || null,
        tags: tags.length > 0 ? tags : undefined,
      };
      await createStandup(payload);

      toast("Standup submitted", {
        description: "Your standup has been successfully recorded",
      });

      // Reset form
      setYesterday("");
      setToday("");
      setBlockers("");
      setTags([]);

      // Notify parent component
      if (onStandupCreated) {
        onStandupCreated();
      }
    } catch (error) {
      console.error("Error submitting standup:", error);
      toast("Submission failed", {
        description:
          "There was an error submitting your standup. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleTagKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && tagInput.trim()) {
      e.preventDefault();
      if (!tags.includes(tagInput.trim())) {
        setTags([...tags, tagInput.trim()]);
      }
      setTagInput("");
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  const toggleRecording = () => {
    // This is a placeholder for actual recording functionality
    // In a real implementation, you would use the Web Audio API or a library
    setIsRecording(!isRecording);

    if (!isRecording) {
      toast("Recording started", {
        description: "Your voice is being recorded. Click again to stop.",
      });
    } else {
      toast("Recording stopped", {
        description: "Your recording has been saved.",
      });
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Record Your Standup</CardTitle>
        <CardDescription>
          Share what you&apos;re working on with your team
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-2">
            <div className="font-medium">
              What did you accomplish yesterday?
            </div>
            <Textarea
              placeholder="I completed..."
              value={yesterday}
              onChange={(e) => setYesterday(e.target.value)}
              className="min-h-[80px]"
            />
          </div>
          <div className="grid gap-2">
            <div className="font-medium">What are you working on today?</div>
            <Textarea
              placeholder="Today I'll be working on..."
              value={today}
              onChange={(e) => setToday(e.target.value)}
              className="min-h-[80px]"
            />
          </div>
          <div className="grid gap-2">
            <div className="font-medium">Any blockers?</div>
            <Textarea
              placeholder="I'm blocked by..."
              value={blockers}
              onChange={(e) => setBlockers(e.target.value)}
              className="min-h-[80px]"
            />
          </div>
          <div className="grid gap-2">
            <div className="font-medium">Tags</div>
            <div className="flex flex-wrap gap-2 mb-2">
              {tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="gap-1">
                  {tag}
                  <button
                    type="button"
                    onClick={() => removeTag(tag)}
                    className="ml-1 text-xs hover:text-destructive"
                  >
                    ×
                  </button>
                </Badge>
              ))}
            </div>
            <Input
              placeholder="Add tags (press Enter)"
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              onKeyDown={handleTagKeyDown}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Button
              type="button"
              variant="outline"
              className="w-full"
              onClick={toggleRecording}
              disabled={isSubmitting}
            >
              {isRecording ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Recording...
                </>
              ) : (
                <>
                  <Mic className="mr-2 h-4 w-4" />
                  Record Voice
                </>
              )}
            </Button>
            <Button
              type="submit"
              className="w-full"
              disabled={isSubmitting || (!yesterday && !today && !blockers)}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Submit Standup
                </>
              )}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
