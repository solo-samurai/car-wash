"use client";

import { BookingMode } from "../BookingWizard";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Home, Building2, Car } from "lucide-react";

interface ModeSelectionProps {
  selectedMode: BookingMode;
  onSelect: (mode: BookingMode) => void;
}

export function ModeSelection({ selectedMode, onSelect }: ModeSelectionProps) {
  const modes = [
    {
      id: "solo",
      title: "Home Service",
      description: "We come to your location. Perfect for busy schedules.",
      icon: Home,
    },
    {
      id: "center",
      title: "Visit Center",
      description: "Book a slot at one of our premium washing centers.",
      icon: Building2,
    },
    {
      id: "pickup",
      title: "Valet Pickup",
      description: "We pick up your car, wash it, and bring it back.",
      icon: Car,
    },
  ] as const;

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold tracking-tight">
          How would you like your service?
        </h2>
        <p className="text-muted-foreground mt-2">
          Choose the most convenient option for you.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {modes.map((mode) => {
          const Icon = mode.icon;
          const isSelected = selectedMode === mode.id;

          return (
            <Card
              key={mode.id}
              className={cn(
                "cursor-pointer transition-all duration-300 hover:shadow-lg relative overflow-hidden group",
                isSelected
                  ? "border-primary ring-2 ring-primary ring-offset-2 bg-primary/5"
                  : "hover:border-primary/50"
              )}
              onClick={() => onSelect(mode.id)}
            >
              <CardContent className="p-6 flex flex-col items-center text-center h-full justify-center space-y-4">
                <div
                  className={cn(
                    "p-4 rounded-full transition-colors",
                    isSelected
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground group-hover:text-primary"
                  )}
                >
                  <Icon className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{mode.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                    {mode.description}
                  </p>
                </div>
              </CardContent>
              {isSelected && (
                <div className="absolute top-3 right-3 h-3 w-3 bg-primary rounded-full animate-pulse" />
              )}
            </Card>
          );
        })}
      </div>
    </div>
  );
}
