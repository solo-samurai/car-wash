"use client";

import { Calendar } from "@/components/ui/calendar";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { format, addDays, isSameDay } from "date-fns";

interface DateTimeSelectionProps {
  date: Date | undefined;
  time: string;
  onDateSelect: (date: Date | undefined) => void;
  onTimeSelect: (time: string) => void;
}

export function DateTimeSelection({
  date,
  time,
  onDateSelect,
  onTimeSelect,
}: DateTimeSelectionProps) {
  const timeSlots = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
  ];

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="text-center md:text-left">
        <h2 className="text-2xl font-bold tracking-tight">
          When should we come?
        </h2>
        <p className="text-muted-foreground mt-1">
          Select a convenient date and time for your service.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Calendar */}
        <div className="flex-1">
          <Card className="p-4 flex justify-center border-muted/50 shadow-sm">
            <Calendar
              mode="single"
              selected={date}
              onSelect={onDateSelect}
              disabled={(date) =>
                date < new Date() || date > addDays(new Date(), 30)
              }
              initialFocus
              className="rounded-md border-0"
            />
          </Card>
        </div>

        {/* Time Slots */}
        <div className="flex-1">
          <h3 className="font-semibold mb-4 text-sm uppercase text-muted-foreground tracking-wider">
            Available Slots
          </h3>
          <ScrollArea className="h-[300px] pr-4">
            <div className="grid grid-cols-2 gap-3">
              {timeSlots.map((slot) => (
                <button
                  key={slot}
                  onClick={() => onTimeSelect(slot)}
                  className={cn(
                    "p-3 text-sm font-medium rounded-lg border transition-all hover:border-primary/50 hover:bg-muted",
                    time === slot
                      ? "bg-primary text-primary-foreground border-primary hover:bg-primary hover:text-primary-foreground"
                      : "bg-background border-input"
                  )}
                >
                  {slot}
                </button>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
}
