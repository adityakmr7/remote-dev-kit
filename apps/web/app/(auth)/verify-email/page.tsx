"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { CheckCircle, Loader2, XCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { verifyEmail } from "@repo/lib/auth";

export default function VerifyEmailPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const [isVerifying, setIsVerifying] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const verify = async () => {
      if (!token) {
        setError("Verification token is missing");
        return;
      }

      setIsVerifying(true);
      try {
        const result = await verifyEmail(token);
        if (result.success) {
          setIsSuccess(true);
        } else {
          setError(result.error || "Verification failed");
        }
      } catch (err) {
        setError("An error occurred during verification");
      } finally {
        setIsVerifying(false);
      }
    };

    verify();
  }, [token]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-50 p-4 dark:bg-slate-950">
      <div className="mb-8 flex items-center gap-2">
        <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary">
          <code className="font-bold text-primary-foreground">R</code>
        </div>
        <span className="text-2xl font-semibold">RemoteDevKit</span>
      </div>

      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Email Verification</CardTitle>
          <CardDescription>Verifying your email address</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center py-8">
          {isVerifying ? (
            <div className="flex flex-col items-center">
              <Loader2 className="h-16 w-16 animate-spin text-primary" />
              <p className="mt-4 text-center text-lg">
                Verifying your email address...
              </p>
            </div>
          ) : isSuccess ? (
            <div className="flex flex-col items-center">
              <CheckCircle className="h-16 w-16 text-green-500" />
              <p className="mt-4 text-center text-lg">
                Your email has been successfully verified!
              </p>
              <p className="mt-2 text-center text-muted-foreground">
                You can now access all features of RemoteDevKit.
              </p>
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <XCircle className="h-16 w-16 text-destructive" />
              <p className="mt-4 text-center text-lg">Verification failed</p>
              <p className="mt-2 text-center text-muted-foreground">{error}</p>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          {isSuccess ? (
            <Button className="w-full" onClick={() => router.push("/")}>
              Go to Dashboard
            </Button>
          ) : (
            <>
              <Button className="w-full" variant="outline" asChild>
                <Link href="/login">Back to Login</Link>
              </Button>
              {!isVerifying && (
                <p className="text-center text-sm text-muted-foreground">
                  Didn&apos;t receive a verification email?{" "}
                  <Link
                    href="/resend-verification"
                    className="text-primary hover:underline"
                  >
                    Resend verification
                  </Link>
                </p>
              )}
            </>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}
