"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, Check, Loader2, X } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  getTeamInvitation,
  respondToInvitation,
  type TeamInvitation,
} from "@/lib/team-api";
import { toast } from "sonner";

export default function InvitationPage() {
  const [invitation, setInvitation] = useState<TeamInvitation | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [processing, setProcessing] = useState(false);
  const router = useRouter();
  const params = useParams();
  const invitationId = params.id as string;

  useEffect(() => {
    const fetchInvitation = async () => {
      setLoading(true);
      setError(null);

      try {
        const result = await getTeamInvitation(invitationId);

        if (result.error) {
          setError(result.error);
        } else {
          setInvitation(result.invitation);
        }
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    if (invitationId) {
      fetchInvitation();
    }
  }, [invitationId]);

  const handleAccept = async () => {
    setProcessing(true);

    try {
      const result = await respondToInvitation(invitationId, "ACCEPTED");

      if (result.success) {
        toast("Invitation Accepted", {
          description:
            result.message || "You have joined the team successfully.",
        });

        // Redirect to the team page if teamId is provided
        if (result.teamId) {
          router.push(`/teams/${result.teamId}`);
        } else {
          router.push("/teams");
        }
      } else {
        toast("Error", {
          description: "Failed to accept invitation. Please try again.",
        });
      }
    } catch (err: any) {
      toast("Error", {
        description: "Failed to accept invitation. Please try again.",
      });
    } finally {
      setProcessing(false);
    }
  };

  const handleDecline = async () => {
    setProcessing(true);

    try {
      const result = await respondToInvitation(invitationId, "DECLINED");

      if (result.success) {
        toast("Invitation Declined", {
          description:
            result.message || "You have declined the team invitation.",
        });

        router.push("/teams");
      } else {
        toast("Error", {
          description: "Failed to decline invitation. Please try again.",
        });
      }
    } catch (err: any) {
      toast("Error", {
        description: "Failed to decline invitation. Please try again.",
      });
    } finally {
      setProcessing(false);
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (error || !invitation) {
    return (
      <div className="container mx-auto max-w-md p-6">
        <Alert variant="destructive">
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            {error?.message || "This invitation doesn't exist or has expired."}
          </AlertDescription>
        </Alert>
        <div className="mt-4 text-center">
          <Button asChild>
            <Link href="/teams">Go to Teams</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto max-w-md p-6">
      <Button variant="ghost" size="sm" asChild className="mb-4">
        <Link href="/teams">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Teams
        </Link>
      </Button>

      <Card>
        <CardHeader>
          <CardTitle>Team Invitation</CardTitle>
          <CardDescription>
            You&#39;ve been invited to join {invitation.teamName}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium">Team</h3>
              <p className="text-sm">{invitation.teamName}</p>
            </div>

            {invitation.teamDescription && (
              <div>
                <h3 className="text-sm font-medium">Description</h3>
                <p className="text-sm">{invitation.teamDescription}</p>
              </div>
            )}

            <div>
              <h3 className="text-sm font-medium">Invited By</h3>
              <p className="text-sm">
                {invitation.invitedBy?.name || "Unknown"}
              </p>
            </div>

            <div>
              <h3 className="text-sm font-medium">Role</h3>
              <p className="text-sm">{invitation.role}</p>
            </div>

            <div>
              <h3 className="text-sm font-medium">Expires</h3>
              <p className="text-sm">
                {new Date(invitation.expiresAt).toLocaleDateString()}
              </p>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button
            variant="outline"
            onClick={handleDecline}
            disabled={processing}
          >
            {processing ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <X className="mr-2 h-4 w-4" />
            )}
            Decline
          </Button>
          <Button onClick={handleAccept} disabled={processing}>
            {processing ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Check className="mr-2 h-4 w-4" />
            )}
            Accept
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
