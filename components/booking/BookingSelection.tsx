import { Home, Car, Clock, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface BookingSelectionProps {
  mode: string;
  onModeChange: (mode: string) => void;
}

export function BookingSelection({
  mode,
  onModeChange,
}: BookingSelectionProps) {
  const options = [
    {
      id: "solo",
      title: "Home Wash",
      description:
        "We come to you. Professional mobile service at your doorstep.",
      icon: Home,
      color: "from-blue-500 to-cyan-400",
    },
    {
      id: "center",
      title: "Visit Center",
      description:
        "Drive to one of our premium partner centers for full service.",
      icon: Car,
      color: "from-purple-500 to-pink-500",
    },
    {
      id: "pickup",
      title: "Valet Service",
      description:
        "Ultimate convenience. We pick up, service, and return your car.",
      icon: Clock,
      color: "from-amber-500 to-orange-500",
    },
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="text-center space-y-4">
        <h2 className="text-3xl md:text-5xl font-black tracking-tighter">
          Choose Your Experience
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Select how you would like to receive your premium car care service.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {options.map((option) => {
          const isSelected = mode === option.id;
          const Icon = option.icon;

          return (
            <div
              key={option.id}
              onClick={() => onModeChange(option.id)}
              className={cn(
                "group relative overflow-hidden rounded-3xl cursor-pointer transition-all duration-500",
                "border border-white/10 hover:border-primary/50",
                isSelected
                  ? "ring-2 ring-primary scale-[1.02]"
                  : "hover:-translate-y-2"
              )}
            >
              {/* Background Gradient */}
              <div
                className={cn(
                  "absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br",
                  option.color
                )}
              />

              {isSelected && (
                <div
                  className={cn(
                    "absolute inset-0 opacity-10 bg-gradient-to-br",
                    option.color
                  )}
                />
              )}

              <div className="relative z-10 p-8 flex flex-col h-full min-h-[320px]">
                <div
                  className={cn(
                    "h-16 w-16 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110",
                    "bg-gradient-to-br text-white shadow-lg",
                    option.color
                  )}
                >
                  <Icon className="h-8 w-8" />
                </div>

                <h3 className="text-2xl font-bold mb-3">{option.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-8 flex-grow">
                  {option.description}
                </p>

                <div className="flex items-center text-sm font-bold tracking-wide uppercase text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  Select Option <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
