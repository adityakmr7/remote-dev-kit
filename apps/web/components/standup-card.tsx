import { formatDistanceToNow } from "date-fns";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Standup } from "@repo/lib/standup-api";

interface StandupCardProps {
  standup: Standup;
}

export function StandupCard({ standup }: StandupCardProps) {
  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case "blocked":
        return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400";
      case "needs help":
        return "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400";
      case "on track":
        return "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400";
      default:
        return "bg-slate-100 text-slate-800 dark:bg-slate-900/30 dark:text-slate-400";
    }
  };

  const timeAgo = formatDistanceToNow(new Date(standup.createdAt), {
    addSuffix: true,
  });

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-slate-200">
            {standup.user.avatarUrl ? (
              <img
                src={standup.user.avatarUrl || "/placeholder.svg"}
                alt={`${standup.user.name || "User"}'s avatar`}
                className="h-full w-full rounded-full object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center rounded-full bg-primary text-primary-foreground">
                {standup.user.name
                  ? standup.user.name.charAt(0).toUpperCase()
                  : "U"}
              </div>
            )}
          </div>
          <CardTitle className="text-sm font-medium">
            {standup.user.name || standup.user.email}
          </CardTitle>
        </div>
        <span className="text-xs text-muted-foreground">{timeAgo}</span>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {standup.yesterday && (
            <div>
              <p className="text-xs font-medium text-muted-foreground">
                Yesterday:
              </p>
              <p className="text-sm">{standup.yesterday}</p>
            </div>
          )}
          {standup.today && (
            <div>
              <p className="text-xs font-medium text-muted-foreground">
                Today:
              </p>
              <p className="text-sm">{standup.today}</p>
            </div>
          )}
          {standup.blockers && (
            <div>
              <p className="text-xs font-medium text-muted-foreground">
                Blockers:
              </p>
              <p className="text-sm">{standup.blockers}</p>
            </div>
          )}
          {standup.audioUrl && (
            <div className="mt-2">
              <p className="text-xs font-medium text-muted-foreground">
                Audio Recording:
              </p>
              <audio controls className="mt-1 w-full">
                <source src={standup.audioUrl} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
          )}
        </div>
        <div className="mt-2 flex flex-wrap gap-2">
          {standup.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
          <Badge className={`text-xs ${getStatusBadgeClass(standup.status)}`}>
            {standup.status}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
}
