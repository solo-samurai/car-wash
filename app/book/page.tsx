"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Check,
  Calendar,
  MapPin,
  Car,
  Home,
  Clock,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";

export default function BookingPage() {
  const searchParams = useSearchParams();
  const initialMode = searchParams.get("mode") || "solo";

  const [step, setStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    mode: initialMode, // 'solo', 'center', 'pickup'
    service: "",
    date: "",
    time: "",
    address: "",
    vehicleType: "",
  });

  // Update mode if URL param changes
  useEffect(() => {
    if (searchParams.get("mode")) {
      setBookingData((prev) => ({ ...prev, mode: searchParams.get("mode")! }));
    }
  }, [searchParams]);

  const handleNext = () => setStep((prev) => prev + 1);
  const handleBack = () => setStep((prev) => prev - 1);

  const services = {
    solo: [
      {
        id: "basic_home",
        name: "Basic Home Wash",
        price: 25,
        desc: "Exterior wash & interior vacuum",
      },
      {
        id: "premium_home",
        name: "Premium Home Wash",
        price: 45,
        desc: "Basic + wax & tire shine",
      },
    ],
    center: [
      {
        id: "deep_interior",
        name: "Deep Interior Detail",
        price: 85,
        desc: "Shampoo, steam & leather care",
      },
      {
        id: "oil_change",
        name: "Oil Change Package",
        price: 60,
        desc: "Synthetic oil & filter change",
      },
      {
        id: "full_detail",
        name: "Full Detail",
        price: 150,
        desc: "Complete interior & exterior",
      },
    ],
    pickup: [
      {
        id: "deep_interior_pickup",
        name: "Deep Interior (Pickup)",
        price: 100,
        desc: "Includes pickup & delivery fee",
      },
      {
        id: "full_detail_pickup",
        name: "Full Detail (Pickup)",
        price: 165,
        desc: "Includes pickup & delivery fee",
      },
    ],
  };

  const currentServices =
    services[bookingData.mode as keyof typeof services] || [];

  return (
    <div className="min-h-screen bg-background font-sans">
      <SiteHeader />

      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold mb-4">Book Your Service</h1>
            <p className="text-muted-foreground">
              Complete the steps below to schedule your appointment.
            </p>

            {/* Progress Steps */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <div
                className={`h-3 w-3 rounded-full ${
                  step >= 1 ? "bg-primary" : "bg-muted"
                }`}
              />
              <div
                className={`h-1 w-12 ${step >= 2 ? "bg-primary" : "bg-muted"}`}
              />
              <div
                className={`h-3 w-3 rounded-full ${
                  step >= 2 ? "bg-primary" : "bg-muted"
                }`}
              />
              <div
                className={`h-1 w-12 ${step >= 3 ? "bg-primary" : "bg-muted"}`}
              />
              <div
                className={`h-3 w-3 rounded-full ${
                  step >= 3 ? "bg-primary" : "bg-muted"
                }`}
              />
            </div>
          </div>

          <Card className="border-muted/50 shadow-lg">
            <CardContent className="p-6 md:p-8">
              {/* Step 1: Choose Mode */}
              {step === 1 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold mb-6">
                    How would you like your service?
                  </h2>
                  <RadioGroup
                    value={bookingData.mode}
                    onValueChange={(val) =>
                      setBookingData({ ...bookingData, mode: val })
                    }
                    className="grid grid-cols-1 md:grid-cols-3 gap-4"
                  >
                    <div
                      className={`relative flex flex-col items-center p-6 border-2 rounded-xl cursor-pointer hover:border-primary/50 transition-all ${
                        bookingData.mode === "solo"
                          ? "border-primary bg-primary/5"
                          : "border-muted"
                      }`}
                    >
                      <RadioGroupItem
                        value="solo"
                        id="solo"
                        className="absolute right-4 top-4"
                      />
                      <Home className="h-10 w-10 mb-4 text-primary" />
                      <Label
                        htmlFor="solo"
                        className="text-lg font-semibold cursor-pointer"
                      >
                        Home Wash
                      </Label>
                      <p className="text-sm text-center text-muted-foreground mt-2">
                        We come to you. Simple wash only.
                      </p>
                    </div>

                    <div
                      className={`relative flex flex-col items-center p-6 border-2 rounded-xl cursor-pointer hover:border-primary/50 transition-all ${
                        bookingData.mode === "center"
                          ? "border-primary bg-primary/5"
                          : "border-muted"
                      }`}
                    >
                      <RadioGroupItem
                        value="center"
                        id="center"
                        className="absolute right-4 top-4"
                      />
                      <Car className="h-10 w-10 mb-4 text-primary" />
                      <Label
                        htmlFor="center"
                        className="text-lg font-semibold cursor-pointer"
                      >
                        Visit Center
                      </Label>
                      <p className="text-sm text-center text-muted-foreground mt-2">
                        You drive to us. Full services available.
                      </p>
                    </div>

                    <div
                      className={`relative flex flex-col items-center p-6 border-2 rounded-xl cursor-pointer hover:border-primary/50 transition-all ${
                        bookingData.mode === "pickup"
                          ? "border-primary bg-primary/5"
                          : "border-muted"
                      }`}
                    >
                      <RadioGroupItem
                        value="pickup"
                        id="pickup"
                        className="absolute right-4 top-4"
                      />
                      <Clock className="h-10 w-10 mb-4 text-primary" />
                      <Label
                        htmlFor="pickup"
                        className="text-lg font-semibold cursor-pointer"
                      >
                        Pickup & Delivery
                      </Label>
                      <p className="text-sm text-center text-muted-foreground mt-2">
                        We pick up & return. Maximum convenience.
                      </p>
                    </div>
                  </RadioGroup>
                </div>
              )}

              {/* Step 2: Choose Service */}
              {step === 2 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold mb-6">
                    Select a Service Package
                  </h2>
                  <div className="grid grid-cols-1 gap-4">
                    {currentServices.map((service) => (
                      <div
                        key={service.id}
                        className={`flex items-center justify-between p-6 border rounded-xl cursor-pointer hover:border-primary transition-all ${
                          bookingData.service === service.id
                            ? "border-primary bg-primary/5 ring-1 ring-primary"
                            : "border-border"
                        }`}
                        onClick={() =>
                          setBookingData({
                            ...bookingData,
                            service: service.id,
                          })
                        }
                      >
                        <div>
                          <h3 className="text-lg font-semibold">
                            {service.name}
                          </h3>
                          <p className="text-muted-foreground">
                            {service.desc}
                          </p>
                        </div>
                        <div className="text-xl font-bold text-primary">
                          ${service.price}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 3: Details */}
              {step === 3 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold mb-6">Final Details</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label>Preferred Date</Label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input type="date" className="pl-10" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Preferred Time</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="09:00">09:00 AM</SelectItem>
                          <SelectItem value="11:00">11:00 AM</SelectItem>
                          <SelectItem value="14:00">02:00 PM</SelectItem>
                          <SelectItem value="16:00">04:00 PM</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2 md:col-span-2">
                      <Label>Vehicle Type</Label>
                      <Select
                        onValueChange={(val) =>
                          setBookingData({ ...bookingData, vehicleType: val })
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select vehicle type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="sedan">Sedan / Coupe</SelectItem>
                          <SelectItem value="suv">SUV / Crossover</SelectItem>
                          <SelectItem value="truck">Truck / Van</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {(bookingData.mode === "solo" ||
                      bookingData.mode === "pickup") && (
                      <div className="space-y-2 md:col-span-2">
                        <Label>Address</Label>
                        <div className="relative">
                          <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                          <Input
                            placeholder="Enter your full address"
                            className="pl-10"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </CardContent>

            <CardFooter className="flex justify-between p-6 border-t bg-muted/20">
              <Button
                variant="ghost"
                onClick={handleBack}
                disabled={step === 1}
                className="gap-2"
              >
                <ChevronLeft className="h-4 w-4" /> Back
              </Button>

              {step < 3 ? (
                <Button onClick={handleNext} className="gap-2">
                  Next Step <ChevronRight className="h-4 w-4" />
                </Button>
              ) : (
                <Button className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
                  Confirm Booking <Check className="h-4 w-4" />
                </Button>
              )}
            </CardFooter>
          </Card>
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}
