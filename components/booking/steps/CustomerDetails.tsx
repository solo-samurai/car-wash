"use client";

import { BookingData } from "../BookingWizard";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface CustomerDetailsProps {
  data: BookingData;
  onChange: (data: Partial<BookingData>) => void;
}

export function CustomerDetails({ data, onChange }: CustomerDetailsProps) {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Your Details</h2>
        <p className="text-muted-foreground mt-1">
          Please provide your information to complete the booking.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <div className="space-y-2">
          <Label htmlFor="name">Full Name *</Label>
          <Input
            id="name"
            placeholder="John Doe"
            value={data.name}
            onChange={(e) => onChange({ name: e.target.value })}
            required
          />
        </div>

        {/* Phone */}
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number *</Label>
          <Input
            id="phone"
            type="tel"
            placeholder="+252 61 234 5678"
            value={data.phone}
            onChange={(e) => onChange({ phone: e.target.value })}
            required
          />
        </div>

        {/* Vehicle Type */}
        <div className="space-y-2">
          <Label htmlFor="vehicleType">Vehicle Type *</Label>
          <Select
            value={data.vehicleType}
            onValueChange={(value) => onChange({ vehicleType: value })}
          >
            <SelectTrigger id="vehicleType">
              <SelectValue placeholder="Select vehicle type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="sedan">Sedan</SelectItem>
              <SelectItem value="suv">SUV</SelectItem>
              <SelectItem value="truck">Truck</SelectItem>
              <SelectItem value="van">Van</SelectItem>
              <SelectItem value="coupe">Coupe</SelectItem>
              <SelectItem value="hatchback">Hatchback</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Vehicle Model */}
        <div className="space-y-2">
          <Label htmlFor="vehicleModel">Vehicle Model</Label>
          <Input
            id="vehicleModel"
            placeholder="e.g., Toyota Camry 2020"
            value={data.vehicleModel}
            onChange={(e) => onChange({ vehicleModel: e.target.value })}
          />
        </div>
      </div>

      {/* Address (only for solo mode) */}
      {data.mode === "solo" && (
        <div className="space-y-2">
          <Label htmlFor="address">Service Address *</Label>
          <Input
            id="address"
            placeholder="Enter your full address"
            value={data.address}
            onChange={(e) => onChange({ address: e.target.value })}
            required
          />
        </div>
      )}

      {/* Additional Notes */}
      <div className="space-y-2">
        <Label htmlFor="notes">Additional Notes</Label>
        <Textarea
          id="notes"
          placeholder="Any special instructions or requirements..."
          value={data.notes}
          onChange={(e) => onChange({ notes: e.target.value })}
          rows={4}
        />
      </div>
    </div>
  );
}
