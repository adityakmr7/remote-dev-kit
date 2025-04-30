"use client";

import { useEffect, useState } from "react";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import {
  getStandupHistory,
  type StandupHistoryItem,
} from "@repo/lib/standup-api";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { toast } from "sonner";

interface StandupHistoryProps {
  onSelectDate: (date: string) => void;
}

export function StandupHistory({ onSelectDate }: StandupHistoryProps) {
  const [history, setHistory] = useState<StandupHistoryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchHistory = async () => {
      setLoading(true);
      try {
        const response = await getStandupHistory(page);
        setHistory(response.history);
        setTotalPages(response.pagination.totalPages);
      } catch (error) {
        console.error("Error fetching standup history:", error);
        toast("Failed to load history", {
          description: "There was an error loading the standup history.",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchHistory();
  }, [page]);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return format(date, "MMMM d, yyyy");
  };

  if (loading) {
    return (
      <div className="rounded-md border">
        <div className="p-4">
          <Skeleton className="h-6 w-40 mb-2" />
          <Skeleton className="h-4 w-60" />
        </div>
        <div className="border-t">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex items-center justify-between p-4">
              <div>
                <Skeleton className="h-5 w-32 mb-2" />
                <Skeleton className="h-4 w-48" />
              </div>
              <Skeleton className="h-8 w-16" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-md border">
      <div className="p-4">
        <h3 className="text-lg font-medium">Standup History</h3>
        <p className="text-sm text-muted-foreground">
          View past standups by date
        </p>
      </div>
      <div className="border-t">
        {history.length === 0 ? (
          <div className="p-8 text-center">
            <p className="text-muted-foreground">No standup history found</p>
          </div>
        ) : (
          history.map((item) => (
            <div
              key={item.date}
              className="border-t flex items-center justify-between p-4 hover:bg-muted/50"
            >
              <div>
                <p className="font-medium">{formatDate(item.date)}</p>
                <p className="text-sm text-muted-foreground">
                  {item.participantCount} team member
                  {item.participantCount !== 1 ? "s" : ""} participated
                </p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onSelectDate(item.date)}
              >
                View
              </Button>
            </div>
          ))
        )}
      </div>
      {totalPages > 1 && (
        <div className="border-t p-4 flex items-center justify-between">
          <Button
            variant="outline"
            size="sm"
            onClick={() => handlePageChange(page - 1)}
            disabled={page === 1}
          >
            <ChevronLeft className="h-4 w-4 mr-1" /> Previous
          </Button>
          <span className="text-sm text-muted-foreground">
            Page {page} of {totalPages}
          </span>
          <Button
            variant="outline"
            size="sm"
            onClick={() => handlePageChange(page + 1)}
            disabled={page === totalPages}
          >
            Next <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
      )}
    </div>
  );
}
