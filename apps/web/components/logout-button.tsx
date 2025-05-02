"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { clearTokens } from "@repo/lib/token-utils";
import { toast } from "sonner";
import { useAuth } from "./auth-provider";

interface LogoutButtonProps {
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  size?: "default" | "sm" | "lg" | "icon";
  showIcon?: boolean;
  showText?: boolean;
  className?: string;
}

export function LogoutButton({
  variant = "ghost",
  size = "default",
  showIcon = true,
  showText = true,
  className,
}: LogoutButtonProps) {
  const router = useRouter();
  const { logout } = useAuth();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = async () => {
    try {
      setIsLoggingOut(true);

      // Use the logout function from auth context
      await logout();

      toast.success("Logged out successfully");

      // The router.push might be handled by the auth provider,
      // but we'll keep it here as a fallback
      router.push("/login");
      router.refresh();
    } catch (error) {
      console.error("Logout error:", error);
      toast.error("Error during logout");

      // Clear tokens as a fallback
      clearTokens();
      router.push("/login");
      router.refresh();
    } finally {
      setIsLoggingOut(false);
    }
  };

  return (
    <Button
      variant={variant}
      size={size}
      onClick={handleLogout}
      disabled={isLoggingOut}
      className={className}
    >
      {showIcon && <LogOut className={`h-4 w-4 ${showText ? "mr-2" : ""}`} />}
      {showText && (isLoggingOut ? "Logging out..." : "Logout")}
    </Button>
  );
}
