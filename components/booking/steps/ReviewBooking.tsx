"use client";

import { BookingData } from "../BookingWizard";
import { Card, CardContent } from "@/components/ui/card";
import { SERVICES, PARTNERS } from "@/lib/data";
import { format } from "date-fns";
import {
  Calendar,
  MapPin,
  User,
  Phone,
  Car,
  Home,
  FileText,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";

interface ReviewBookingProps {
  data: BookingData;
}

export function ReviewBooking({ data }: ReviewBookingProps) {
  const selectedService = SERVICES.find((s) => s.id === data.serviceId);
  const selectedPartner = PARTNERS.find((p) => p.id === data.partnerId);

  const calculateTotal = () => {
    let total = selectedService ? selectedService.price : 0;
    if (data.mode === "pickup" && selectedPartner?.valetFee) {
      total += selectedPartner.valetFee;
    }
    return total;
  };

  const InfoRow = ({
    icon: Icon,
    label,
    value,
  }: {
    icon: any;
    label: string;
    value: string;
  }) => (
    <div className="flex items-start gap-3 py-3">
      <div className="p-2 bg-primary/10 rounded-lg">
        <Icon className="h-4 w-4 text-primary" />
      </div>
      <div className="flex-1">
        <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
          {label}
        </div>
        <div className="mt-1 font-medium">{value}</div>
      </div>
    </div>
  );

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">
          Review Your Booking
        </h2>
        <p className="text-muted-foreground mt-1">
          Please confirm the details below before proceeding.
        </p>
      </div>

      <Card className="border-muted/50 shadow-md">
        <CardContent className="p-6 space-y-3">
          {/* Service Details */}
          <InfoRow
            icon={Car}
            label="Service"
            value={`${selectedService?.name} - ${
              data.mode === "solo" ? "Home Service" : data.mode
            }`}
          />

          {data.mode !== "solo" && selectedPartner && (
            <InfoRow
              icon={MapPin}
              label="Location"
              value={`${selectedPartner.name} - ${selectedPartner.address}`}
            />
          )}

          <Separator />

          {/* Schedule */}
          {data.date && data.time && (
            <InfoRow
              icon={Calendar}
              label="Scheduled For"
              value={`${format(data.date, "EEEE, MMMM d, yyyy")} at ${
                data.time
              }`}
            />
          )}

          <Separator />

          {/* Customer Info */}
          <InfoRow icon={User} label="Name" value={data.name} />
          <InfoRow icon={Phone} label="Phone" value={data.phone} />
          <InfoRow
            icon={Car}
            label="Vehicle"
            value={`${data.vehicleType}${
              data.vehicleModel ? ` - ${data.vehicleModel}` : ""
            }`}
          />

          {data.mode === "solo" && data.address && (
            <InfoRow icon={Home} label="Service Address" value={data.address} />
          )}

          {data.notes && (
            <>
              <Separator />
              <InfoRow icon={FileText} label="Notes" value={data.notes} />
            </>
          )}

          <Separator />

          {/* Total */}
          <div className="pt-4">
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold">Total Amount</span>
              <span className="text-3xl font-bold text-primary">
                ${calculateTotal()}
              </span>
            </div>
            {data.mode === "pickup" && selectedPartner?.valetFee && (
              <p className="text-xs text-muted-foreground text-right mt-1">
                Includes ${selectedPartner.valetFee} valet pickup & delivery fee
              </p>
            )}
          </div>
        </CardContent>
      </Card>

      <div className="bg-muted/50 p-4 rounded-lg">
        <p className="text-sm text-muted-foreground text-center">
          By confirming this booking, you agree to our terms and conditions.
        </p>
      </div>
    </div>
  );
}
