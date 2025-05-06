"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";

interface WorkspaceData {
  defaultEditor: string;
  theme: string;
  fontSize: number;
  tabSize: number;
  autoSave: boolean;
}

interface WorkspaceStepProps {
  defaultData: WorkspaceData;
  onNext: (data: WorkspaceData) => void;
  onBack: () => void;
  onSkip?: () => void;
}

export function WorkspaceStep({
  defaultData,
  onNext,
  onBack,
}: WorkspaceStepProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState<WorkspaceData>({
    defaultEditor: defaultData.defaultEditor || "vscode",
    theme: defaultData.theme || "light",
    fontSize: defaultData.fontSize || 14,
    tabSize: defaultData.tabSize || 4,
    autoSave: defaultData.autoSave || false,
  });
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      setIsSubmitting(true);
      onNext(data);
    } catch (err) {
      console.error("Error updating workspace settings:", err);
      setError("Failed to update workspace settings. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Customize your workspace</h2>
        <p className="text-gray-500">
          Set up your development environment preferences
        </p>
      </div>

      <div className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="defaultEditor">Default Editor</Label>
          <Select
            value={data.defaultEditor}
            onValueChange={(value) =>
              setData({ ...data, defaultEditor: value })
            }
          >
            <SelectTrigger id="defaultEditor">
              <SelectValue placeholder="Select your preferred editor" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="vscode">Visual Studio Code</SelectItem>
              <SelectItem value="intellij">IntelliJ IDEA</SelectItem>
              <SelectItem value="webstorm">WebStorm</SelectItem>
              <SelectItem value="pycharm">PyCharm</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="theme">Theme</Label>
          <Select
            value={data.theme}
            onValueChange={(value) => setData({ ...data, theme: value })}
          >
            <SelectTrigger id="theme">
              <SelectValue placeholder="Select your preferred theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between">
            <Label htmlFor="fontSize">Font Size: {data.fontSize}px</Label>
          </div>
          <Slider
            id="fontSize"
            min={8}
            max={24}
            step={1}
            value={[data.fontSize]}
            onValueChange={(value) => setData({ ...data, fontSize: value[0] })}
            className="py-4"
          />
        </div>

        <div className="space-y-2">
          <div className="flex justify-between">
            <Label htmlFor="tabSize">Tab Size: {data.tabSize}</Label>
          </div>
          <Slider
            id="tabSize"
            min={2}
            max={8}
            step={1}
            value={[data.tabSize]}
            onValueChange={(value) => setData({ ...data, tabSize: value[0] })}
            className="py-4"
          />
        </div>

        <div className="flex items-center justify-between">
          <Label htmlFor="autoSave" className="cursor-pointer">
            Auto Save
          </Label>
          <Switch
            id="autoSave"
            checked={data.autoSave}
            onCheckedChange={(checked) =>
              setData({ ...data, autoSave: checked })
            }
          />
        </div>
      </div>

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <div className="flex justify-between">
        <Button type="button" variant="outline" onClick={onBack}>
          Back
        </Button>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Saving..." : "Continue"}
        </Button>
      </div>
    </form>
  );
}
