
import React from "react";
import { CalendarDays, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export function DateLocationFilter({
  dateLabel = "Any date",
  onDateFilter,
  locationLabel = "Anywhere",
  onLocationFilter
}: {
  dateLabel?: string;
  onDateFilter?: () => void;
  locationLabel?: string;
  onLocationFilter?: () => void;
}) {
  return (
    <div className="flex flex-wrap gap-2 items-center mb-4">
      <Button
        size="sm"
        variant="outline"
        className="gap-1"
        onClick={onDateFilter}
      >
        <CalendarDays className="w-4 h-4 text-blue-500" />
        {dateLabel}
      </Button>
      <Button
        size="sm"
        variant="outline"
        className="gap-1"
        onClick={onLocationFilter}
      >
        <MapPin className="w-4 h-4 text-green-500" />
        {locationLabel}
      </Button>
    </div>
  );
}
