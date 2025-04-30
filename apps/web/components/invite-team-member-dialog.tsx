"use client";

import { useState } from "react";
import { Loader2, UserPlus } from "lucide-react";
import { z } from "zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { inviteToTeam } from "@repo/lib/team-api";
import { toast } from "sonner";

// Replace the existing formSchema with this:
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const formSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  role: z.enum(["ADMIN", "MEMBER", "MANAGER"]) as z.ZodEnum<
    ["ADMIN", "MEMBER", "MANAGER"]
  >,
});

interface InviteTeamMemberDialogProps {
  teamId: string;
  onInviteSent?: () => void;
}
// Define a type for the form values to avoid deep type inference
type FormValues = {
  email: string;
  role: "ADMIN" | "MEMBER" | "MANAGER";
};

export function InviteTeamMemberDialog({
  teamId,
  onInviteSent,
}: InviteTeamMemberDialogProps) {
  const [open, setOpen] = useState(false);

  const form = useForm<FormValues>({
    defaultValues: {
      email: "",
      role: "MEMBER",
    },
  });

  const isSubmitting = form.formState.isSubmitting;

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const result = await inviteToTeam(teamId, {
        email: values.email,
        role: values.role,
      });

      if (result.success) {
        toast("Invitation sent", {
          description: `An invitation has been sent to ${values.email}`,
        });

        form.reset();
        setOpen(false);

        if (onInviteSent) {
          onInviteSent();
        }
      } else {
        toast("Error", {
          description:
            result.error?.message ||
            "Failed to send invitation. Please try again.",
        });
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast("Error", {
        description: "Failed to send invitation. Please try again.",
      });
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <UserPlus className="mr-2 h-4 w-4" />
          Invite Member
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Invite Team Member</DialogTitle>
          <DialogDescription>
            Send an invitation to join your team. The user will receive an email
            with a link to accept or decline.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="email@example.com" {...field} />
                  </FormControl>
                  <FormDescription>
                    Enter the email address of the person you want to invite.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Role</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a role" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="ADMIN">Admin</SelectItem>
                      <SelectItem value="MANAGER">Manager</SelectItem>
                      <SelectItem value="MEMBER">Member</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormDescription>
                    Select the role for this team member.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <UserPlus className="mr-2 h-4 w-4" />
                    Send Invitation
                  </>
                )}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
