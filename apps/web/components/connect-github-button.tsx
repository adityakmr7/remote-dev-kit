"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

interface ConnectGithubButtonProps {
  variant?:
    | "default"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | "destructive";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
  onSuccess?: () => void;
}

export function ConnectGithubButton({
  variant = "default",
  size = "default",
  className,
  onSuccess,
}: ConnectGithubButtonProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleConnect = async () => {
    try {
      setIsLoading(true);
      window.location.href = "/api/auth/github";
    } catch (error) {
      console.error("Failed to connect GitHub:", error);
      toast("Error", {
        description: "Failed to connect GitHub. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      variant={variant}
      size={size}
      className={className}
      onClick={handleConnect}
      disabled={isLoading}
    >
      {isLoading ? (
        <span className="flex items-center gap-2">
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
          Connecting...
        </span>
      ) : (
        <span className="flex items-center gap-2">
          <Github className="h-4 w-4" />
          Connect GitHub
        </span>
      )}
    </Button>
  );
}
