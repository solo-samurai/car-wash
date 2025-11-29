import { Service } from "@/lib/data";
import { Clock, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceListProps {
  services: Service[];
  selectedServiceId: string;
  onSelect: (serviceId: string) => void;
  isSubscriber: boolean;
}

export function ServiceList({
  services,
  selectedServiceId,
  onSelect,
  isSubscriber,
}: ServiceListProps) {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold tracking-tight">Select Package</h2>
        <span className="text-sm text-muted-foreground">
          {services.length} available
        </span>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {services.map((service) => {
          const price =
            isSubscriber && service.category === "wash" ? 0 : service.price;
          const isSelected = selectedServiceId === service.id;

          return (
            <div
              key={service.id}
              className={cn(
                "relative flex items-center justify-between p-6 rounded-2xl cursor-pointer transition-all duration-300 border",
                isSelected
                  ? "border-primary bg-primary/5 shadow-lg shadow-primary/10"
                  : "border-border hover:border-primary/50 hover:bg-muted/50"
              )}
              onClick={() => onSelect(service.id)}
            >
              <div className="flex items-start gap-4">
                <div
                  className={cn(
                    "h-6 w-6 rounded-full border-2 flex items-center justify-center mt-1 transition-colors",
                    isSelected
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-muted-foreground"
                  )}
                >
                  {isSelected && <Check className="h-3 w-3" />}
                </div>

                <div>
                  <h3 className="text-lg font-bold text-foreground">
                    {service.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mt-1 max-w-md">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-3 mt-3">
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded-md">
                      <Clock className="h-3 w-3" /> {service.duration} mins
                    </span>
                    {service.type === "mobile" && (
                      <span className="text-xs font-medium text-blue-500 bg-blue-500/10 px-2 py-1 rounded-md">
                        Mobile
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="text-right">
                <div className="flex flex-col items-end">
                  {price === 0 ? (
                    <span className="text-2xl font-black text-primary">
                      FREE
                    </span>
                  ) : (
                    <span className="text-2xl font-black text-foreground">
                      ${price}
                    </span>
                  )}

                  {isSubscriber && service.category === "wash" && (
                    <span className="text-xs font-bold text-white bg-gradient-to-r from-green-500 to-emerald-600 px-2 py-1 rounded-full mt-1 shadow-sm">
                      Included
                    </span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
