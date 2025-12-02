"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { BookingData } from "./BookingWizard";
import { SERVICES, PARTNERS } from "@/lib/data";
import { format } from "date-fns";
import { MapPin, Calendar, Car, User, Check, Sparkles } from "lucide-react";

interface BookingSummaryProps {
  data: BookingData;
  currentStep: number;
  isComplete?: boolean;
}

export function BookingSummary({
  data,
  currentStep,
  isComplete,
}: BookingSummaryProps) {
  const selectedService = SERVICES.find((s) => s.id === data.serviceId);
  const selectedAddOns = SERVICES.filter((s) =>
    data.addOnServiceIds.includes(s.id)
  );
  const selectedPartner = PARTNERS.find((p) => p.id === data.partnerId);

  const calculateTotal = () => {
    let total = selectedService ? selectedService.price : 0;

    // Add all add-on services
    selectedAddOns.forEach((addOn) => {
      total += addOn.price;
    });

    // Add valet fee if applicable
    if (data.mode === "pickup" && selectedPartner?.valetFee) {
      total += selectedPartner.valetFee;
    }

    return total;
  };

  return (
    <Card
      className={`border-border/50 shadow-xl bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-300 ${
        isComplete ? "ring-2 ring-green-500 shadow-green-500/20" : ""
      }`}
    >
      <CardHeader className="bg-muted/50 pb-4">
        <CardTitle className="text-lg font-semibold flex items-center gap-2">
          {isComplete && <Sparkles className="h-5 w-5 text-green-600" />}
          Booking Summary
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6 space-y-6">
        {/* Mode */}
        <div className="space-y-1">
          <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
            Service Mode
          </div>
          <div className="font-medium capitalize flex items-center gap-2">
            <Car className="h-4 w-4 text-primary" />
            {data.mode === "solo" ? "Home Service" : data.mode}
          </div>
        </div>

        {currentStep >= 2 && (
          <>
            <Separator />

            {/* Main Service */}
            {data.serviceId && (
              <div className="space-y-1 animate-in fade-in slide-in-from-left-2">
                <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Main Service
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <div className="font-medium">{selectedService?.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {selectedService?.duration} mins
                    </div>
                  </div>
                  <div className="font-bold text-primary">
                    ${selectedService?.price}
                  </div>
                </div>
              </div>
            )}

            {/* Add-on Services */}
            {selectedAddOns.length > 0 && (
              <div className="space-y-2 animate-in fade-in slide-in-from-left-2">
                <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Add-ons
                </div>
                {selectedAddOns.map((addOn) => (
                  <div
                    key={addOn.id}
                    className="flex justify-between items-center text-sm"
                  >
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      <span>{addOn.name}</span>
                    </div>
                    <span className="font-semibold">+${addOn.price}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Partner (if applicable) */}
            {data.partnerId && data.mode !== "solo" && (
              <div className="space-y-1 animate-in fade-in slide-in-from-left-2">
                <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Location
                </div>
                <div className="font-medium flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  {selectedPartner?.name}
                </div>
                <div className="text-xs text-muted-foreground truncate">
                  {selectedPartner?.address}
                </div>
                {data.mode === "pickup" && selectedPartner?.valetFee && (
                  <div className="flex justify-between items-center text-sm pt-1">
                    <span className="text-muted-foreground">Valet Service</span>
                    <span className="font-semibold">
                      +${selectedPartner.valetFee}
                    </span>
                  </div>
                )}
              </div>
            )}
          </>
        )}

        {currentStep >= 3 && (
          <>
            <Separator />

            {/* Date & Time */}
            {data.date && data.time && (
              <div className="space-y-1 animate-in fade-in slide-in-from-left-2">
                <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Schedule
                </div>
                <div className="font-medium flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-primary" />
                  {format(data.date, "MMM d, yyyy")} at {data.time}
                </div>
              </div>
            )}
          </>
        )}

        {currentStep >= 4 && (
          <>
            <Separator />

            {/* Customer */}
            {data.name && (
              <div className="space-y-1 animate-in fade-in slide-in-from-left-2">
                <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Customer
                </div>
                <div className="font-medium flex items-center gap-2">
                  <User className="h-4 w-4 text-primary" />
                  {data.name}
                </div>
                <div className="text-sm text-muted-foreground">
                  {data.phone}
                </div>
                <div className="text-sm text-muted-foreground capitalize">
                  {data.vehicleType}{" "}
                  {data.vehicleModel && `- ${data.vehicleModel}`}
                </div>
              </div>
            )}
          </>
        )}

        <Separator />

        {/* Total */}
        <div className="pt-2">
          <div className="flex justify-between items-end">
            <span className="text-sm font-medium text-muted-foreground">
              Total Amount
            </span>
            <span className="text-3xl font-bold text-primary">
              ${calculateTotal()}
            </span>
          </div>
          {(selectedAddOns.length > 0 ||
            (data.mode === "pickup" && selectedPartner?.valetFee)) && (
            <p className="text-xs text-muted-foreground text-right mt-1">
              Includes{" "}
              {selectedAddOns.length > 0 &&
                `${selectedAddOns.length} add-on${
                  selectedAddOns.length > 1 ? "s" : ""
                }`}
              {selectedAddOns.length > 0 &&
                data.mode === "pickup" &&
                selectedPartner?.valetFee &&
                " + "}
              {data.mode === "pickup" &&
                selectedPartner?.valetFee &&
                "valet service"}
            </p>
          )}
        </div>
      </CardContent>

      {/* Confirm Button in Summary when complete */}
      {isComplete && (
        <CardFooter className="p-6 pt-0">
          <Button className="w-full h-12 bg-green-600 hover:bg-green-700 text-base font-semibold shadow-lg">
            <Check className="mr-2 h-5 w-5" />
            Confirm Booking - ${calculateTotal()}
          </Button>
        </CardFooter>
      )}
    </Card>
  );
}
