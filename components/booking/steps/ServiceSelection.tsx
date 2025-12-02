"use client";

import { BookingMode } from "../BookingWizard";
import { SERVICES, PARTNERS } from "@/lib/data";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { Clock, Check, Star, MapPin, Plus } from "lucide-react";

interface ServiceSelectionProps {
  mode: BookingMode;
  selectedServiceId: string;
  selectedAddOnIds: string[];
  selectedPartnerId: string;
  onSelectService: (id: string) => void;
  onSelectAddOns: (ids: string[]) => void;
  onSelectPartner: (id: string) => void;
}

export function ServiceSelection({
  mode,
  selectedServiceId,
  selectedAddOnIds,
  selectedPartnerId,
  onSelectService,
  onSelectAddOns,
  onSelectPartner,
}: ServiceSelectionProps) {
  // Filter primary services (wash and detail)
  const primaryServices = SERVICES.filter((s) => {
    if (mode === "solo") {
      return (
        (s.type === "mobile" || s.type === "both") &&
        (s.category === "wash" || s.category === "detail")
      );
    }
    return (
      (s.type === "center" || s.type === "both") &&
      (s.category === "wash" || s.category === "detail")
    );
  });

  // Filter add-on services (maintenance)
  const addOnServices = SERVICES.filter((s) => {
    if (mode === "solo") {
      return (
        (s.type === "mobile" || s.type === "both") &&
        s.category === "maintenance"
      );
    }
    return (
      (s.type === "center" || s.type === "both") && s.category === "maintenance"
    );
  });

  // Filter partners based on mode
  const availablePartners = PARTNERS.filter((p) => {
    if (mode === "pickup") return p.hasValet;
    return true;
  });

  const handleAddOnToggle = (serviceId: string) => {
    if (selectedAddOnIds.includes(serviceId)) {
      onSelectAddOns(selectedAddOnIds.filter((id) => id !== serviceId));
    } else {
      onSelectAddOns([...selectedAddOnIds, serviceId]);
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Primary Service Selection */}
      <div className="space-y-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">
            Select Your Main Service
          </h2>
          <p className="text-muted-foreground text-sm mt-1">
            Choose your primary wash or detailing service
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {primaryServices.map((service) => (
            <Card
              key={service.id}
              className={cn(
                "cursor-pointer transition-all hover:border-primary/50 relative overflow-hidden",
                selectedServiceId === service.id
                  ? "border-primary bg-primary/5 ring-1 ring-primary"
                  : ""
              )}
              onClick={() => onSelectService(service.id)}
            >
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg">{service.name}</CardTitle>
                    <CardDescription className="mt-1">
                      {service.description}
                    </CardDescription>
                  </div>
                  <Badge variant="secondary" className="font-bold text-lg">
                    ${service.price}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-muted-foreground gap-4">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {service.duration} mins
                  </div>
                  <Badge variant="outline" className="capitalize">
                    {service.category}
                  </Badge>
                </div>
              </CardContent>
              {selectedServiceId === service.id && (
                <div className="absolute top-0 right-0 p-2 bg-primary text-primary-foreground rounded-bl-xl">
                  <Check className="h-4 w-4" />
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>

      {/* Add-on Services */}
      {addOnServices.length > 0 && (
        <div className="space-y-4 pt-4 border-t">
          <div>
            <h3 className="text-xl font-bold tracking-tight flex items-center gap-2">
              <Plus className="h-5 w-5 text-primary" />
              Add Extra Services
            </h3>
            <p className="text-muted-foreground text-sm mt-1">
              Enhance your service with these optional add-ons
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {addOnServices.map((service) => {
              const isSelected = selectedAddOnIds.includes(service.id);
              return (
                <Card
                  key={service.id}
                  className={cn(
                    "cursor-pointer transition-all hover:border-primary/50 relative",
                    isSelected ? "border-primary bg-primary/5" : ""
                  )}
                  onClick={() => handleAddOnToggle(service.id)}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-start gap-3">
                      <Checkbox
                        checked={isSelected}
                        className="mt-1"
                        onCheckedChange={() => handleAddOnToggle(service.id)}
                      />
                      <div className="flex-1">
                        <CardTitle className="text-base font-semibold">
                          {service.name}
                        </CardTitle>
                        <CardDescription className="text-xs mt-1">
                          {service.description}
                        </CardDescription>
                      </div>
                      <Badge
                        variant={isSelected ? "default" : "secondary"}
                        className="font-bold"
                      >
                        +${service.price}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0 pl-11">
                    <div className="flex items-center text-xs text-muted-foreground gap-2">
                      <Clock className="h-3 w-3" />
                      {service.duration} mins
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      )}

      {/* Partner Selection (Only if not solo) */}
      {mode !== "solo" && (
        <div className="space-y-4 pt-4 border-t">
          <h2 className="text-2xl font-bold tracking-tight">
            Select a Location
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {availablePartners.map((partner) => (
              <Card
                key={partner.id}
                className={cn(
                  "cursor-pointer transition-all hover:border-primary/50 relative",
                  selectedPartnerId === partner.id
                    ? "border-primary bg-primary/5 ring-1 ring-primary"
                    : ""
                )}
                onClick={() => onSelectPartner(partner.id)}
              >
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-base">
                        {partner.name}
                      </CardTitle>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                        <MapPin className="h-3 w-3" />
                        {partner.address}
                      </div>
                    </div>
                    <div className="flex items-center gap-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-500 px-2 py-1 rounded text-xs font-bold">
                      <Star className="h-3 w-3 fill-current" />
                      {partner.rating}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  {partner.hasValet && (
                    <Badge variant="secondary" className="text-xs">
                      Valet Available (+${partner.valetFee})
                    </Badge>
                  )}
                </CardContent>
                {selectedPartnerId === partner.id && (
                  <div className="absolute top-0 right-0 p-2 bg-primary text-primary-foreground rounded-bl-xl">
                    <Check className="h-4 w-4" />
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
