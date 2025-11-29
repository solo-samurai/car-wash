"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
  ChevronRight,
  ChevronLeft,
  Loader2,
} from "lucide-react";
import { BookingSelection } from "@/components/booking/BookingSelection";
import { ServiceList } from "@/components/booking/ServiceList";
import { PartnerList } from "@/components/booking/PartnerList";
import { WorkerAssignment } from "@/components/booking/WorkerAssignment";
import { SERVICES, PARTNERS, Service, Partner, Worker } from "@/lib/data";
import { Switch } from "@/components/ui/switch";

export default function BookingPage() {
  const searchParams = useSearchParams();
  const initialMode = searchParams.get("mode") || "solo";

  const [step, setStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    mode: initialMode, // 'solo', 'center', 'pickup'
    serviceId: "",
    partnerId: "",
    date: "",
    time: "",
    vehicleType: "",
    isSubscriber: false,
  });
  const [assignedWorker, setAssignedWorker] = useState<Worker | null>(null);

  // Update mode if URL param changes
  useEffect(() => {
    if (searchParams.get("mode")) {
      setBookingData((prev) => ({ ...prev, mode: searchParams.get("mode")! }));
    }
  }, [searchParams]);

  const handleNext = () => setStep((prev) => prev + 1);
  const handleBack = () => setStep((prev) => prev - 1);

  // Filter services based on mode
  const availableServices = SERVICES.filter((s) => {
    if (bookingData.mode === "solo")
      return s.type === "mobile" || s.type === "both";
    return s.type === "center" || s.type === "both";
  });

  // Filter partners based on mode
  const availablePartners = PARTNERS.filter((p) => {
    if (bookingData.mode === "pickup") return p.hasValet;
    return true;
  });

  const selectedService = SERVICES.find((s) => s.id === bookingData.serviceId);
  const selectedPartner = PARTNERS.find((p) => p.id === bookingData.partnerId);

  const calculateTotal = () => {
    let total = selectedService ? selectedService.price : 0;

    // Subscriber logic: Free wash if category is 'wash'
    if (bookingData.isSubscriber && selectedService?.category === "wash") {
      total = 0;
    }

    // Add valet fee
    if (bookingData.mode === "pickup" && selectedPartner?.valetFee) {
      total += selectedPartner.valetFee;
    }

    return total;
  };

  return (
    <div className="min-h-screen bg-background font-sans">
      <SiteHeader />

      <div className="container mx-auto px-4 py-12 md:py-24">
        {/* Step 1: Immersive Mode Selection */}
        {step === 1 ? (
          <div className="max-w-6xl mx-auto">
            <BookingSelection
              mode={bookingData.mode}
              onModeChange={(mode) => {
                setBookingData({ ...bookingData, mode });
                // Optional: Auto-advance or let user click next
              }}
            />
            <div className="flex justify-center mt-12">
              <Button
                size="lg"
                onClick={handleNext}
                className="h-14 px-12 text-lg rounded-full shadow-xl shadow-primary/20 hover:scale-105 transition-all"
              >
                Continue to Services <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        ) : (
          <div className="max-w-3xl mx-auto">
            <div className="mb-8">
              <Button
                variant="ghost"
                onClick={() => setStep(1)}
                className="pl-0 hover:pl-2 transition-all text-muted-foreground hover:text-primary"
              >
                <ChevronLeft className="mr-2 h-4 w-4" /> Change Service Mode
              </Button>
            </div>

            <Card className="border-muted/50 shadow-2xl overflow-hidden">
              <CardContent className="p-6 md:p-8">
                {/* Step 2: Choose Service & Partner */}
                {step === 2 && (
                  <div className="space-y-8">
                    {/* Subscriber Toggle */}
                    <div className="flex items-center justify-between p-4 bg-primary/5 rounded-xl border border-primary/20">
                      <div className="space-y-0.5">
                        <Label className="text-base font-semibold">
                          Are you a subscriber?
                        </Label>
                        <p className="text-sm text-muted-foreground">
                          Subscribers get unlimited exterior washes for free.
                        </p>
                      </div>
                      <Switch
                        checked={bookingData.isSubscriber}
                        onCheckedChange={(checked) =>
                          setBookingData({
                            ...bookingData,
                            isSubscriber: checked,
                          })
                        }
                      />
                    </div>

                    <ServiceList
                      services={availableServices}
                      selectedServiceId={bookingData.serviceId}
                      onSelect={(id) =>
                        setBookingData({ ...bookingData, serviceId: id })
                      }
                      isSubscriber={bookingData.isSubscriber}
                    />

                    {bookingData.mode !== "solo" && (
                      <PartnerList
                        partners={availablePartners}
                        selectedPartnerId={bookingData.partnerId}
                        onSelect={(id) =>
                          setBookingData({ ...bookingData, partnerId: id })
                        }
                      />
                    )}
                  </div>
                )}

                {/* Step 3: Worker Assignment (Solo) or Details */}
                {step === 3 && (
                  <div className="space-y-6">
                    {bookingData.mode === "solo" ? (
                      <WorkerAssignment
                        onAssign={(worker) => setAssignedWorker(worker)}
                      />
                    ) : (
                      <div className="space-y-6">
                        <h2 className="text-2xl font-semibold mb-6">
                          Schedule Appointment
                        </h2>
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
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Step 4: Final Confirmation */}
                {step === 4 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-semibold mb-6">
                      Booking Summary
                    </h2>

                    <div className="bg-muted/30 p-6 rounded-xl space-y-4">
                      <div className="flex justify-between items-center pb-4 border-b border-border">
                        <span className="text-muted-foreground">
                          Service Mode
                        </span>
                        <span className="font-medium capitalize">
                          {bookingData.mode}
                        </span>
                      </div>

                      <div className="flex justify-between items-center pb-4 border-b border-border">
                        <span className="text-muted-foreground">Service</span>
                        <span className="font-medium">
                          {selectedService?.name}
                        </span>
                      </div>

                      {bookingData.mode !== "solo" && (
                        <div className="flex justify-between items-center pb-4 border-b border-border">
                          <span className="text-muted-foreground">
                            Partner Center
                          </span>
                          <span className="font-medium">
                            {selectedPartner?.name}
                          </span>
                        </div>
                      )}

                      {assignedWorker && (
                        <div className="flex justify-between items-center pb-4 border-b border-border">
                          <span className="text-muted-foreground">
                            Assigned Washer
                          </span>
                          <span className="font-medium">
                            {assignedWorker.name}
                          </span>
                        </div>
                      )}

                      <div className="flex justify-between items-center pt-2">
                        <span className="text-lg font-bold">Total</span>
                        <span className="text-2xl font-bold text-primary">
                          ${calculateTotal()}
                        </span>
                      </div>

                      {bookingData.isSubscriber &&
                        selectedService?.category === "wash" && (
                          <p className="text-sm text-green-600 text-right">
                            Subscriber discount applied
                          </p>
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

                {step < 4 ? (
                  <Button
                    onClick={handleNext}
                    className="gap-2"
                    disabled={
                      (step === 2 && !bookingData.serviceId) ||
                      (step === 2 &&
                        bookingData.mode !== "solo" &&
                        !bookingData.partnerId) ||
                      (step === 3 &&
                        bookingData.mode === "solo" &&
                        !assignedWorker)
                    }
                  >
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
        )}
      </div>

      <SiteFooter />
    </div>
  );
}
