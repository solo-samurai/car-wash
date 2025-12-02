"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { BookingSummary } from "./BookingSummary";
import { ModeSelection } from "./steps/ModeSelection";
import { ServiceSelection } from "./steps/ServiceSelection";
import { DateTimeSelection } from "./steps/DateTimeSelection";
import { CustomerDetails } from "./steps/CustomerDetails";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Check } from "lucide-react";
import { SERVICES, PARTNERS, Worker } from "@/lib/data";

export type BookingMode = "solo" | "center" | "pickup";

export interface BookingData {
  mode: BookingMode;
  serviceId: string;
  addOnServiceIds: string[]; // Multiple add-on services
  partnerId: string;
  workerId: string;
  date: Date | undefined;
  time: string;
  vehicleType: string;
  vehicleModel: string;
  name: string;
  phone: string;
  address: string;
  notes: string;
}

const steps = [
  { id: 1, title: "Service Mode" },
  { id: 2, title: "Select Service" },
  { id: 3, title: "Schedule" },
  { id: 4, title: "Your Details" },
];

export function BookingWizard() {
  const searchParams = useSearchParams();
  const initialMode = (searchParams.get("mode") as BookingMode) || "solo";

  const [currentStep, setCurrentStep] = useState(1);
  const [direction, setDirection] = useState(0);
  const [bookingData, setBookingData] = useState<BookingData>({
    mode: initialMode,
    serviceId: "",
    addOnServiceIds: [],
    partnerId: "",
    workerId: "",
    date: undefined,
    time: "",
    vehicleType: "",
    vehicleModel: "",
    name: "",
    phone: "",
    address: "",
    notes: "",
  });

  const handleNext = () => {
    setDirection(1);
    setCurrentStep((prev) => Math.min(prev + 1, steps.length));
  };

  const handleBack = () => {
    setDirection(-1);
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const updateBookingData = (data: Partial<BookingData>) => {
    setBookingData((prev) => ({ ...prev, ...data }));
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return !!bookingData.mode;
      case 2:
        if (bookingData.mode === "solo") return !!bookingData.serviceId;
        return !!bookingData.serviceId && !!bookingData.partnerId;
      case 3:
        return !!bookingData.date && !!bookingData.time;
      case 4:
        const basicValid =
          !!bookingData.name &&
          !!bookingData.phone &&
          !!bookingData.vehicleType;
        // For solo mode, address is also required
        if (bookingData.mode === "solo") {
          return basicValid && !!bookingData.address;
        }
        return basicValid;
      default:
        return true;
    }
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 50 : -50,
      opacity: 0,
    }),
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
      {/* Main Content Area */}
      <div className="flex-1">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between mb-2">
            {steps.map((step) => (
              <div
                key={step.id}
                className={`text-sm font-medium transition-colors ${
                  step.id === currentStep
                    ? "text-primary"
                    : step.id < currentStep
                    ? "text-muted-foreground"
                    : "text-muted-foreground/50"
                }`}
              >
                {step.title}
              </div>
            ))}
          </div>
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-primary"
              initial={{ width: 0 }}
              animate={{ width: `${(currentStep / steps.length) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        {/* Step Content */}
        <div className="min-h-[400px] relative">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentStep}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {currentStep === 1 && (
                <ModeSelection
                  selectedMode={bookingData.mode}
                  onSelect={(mode) => updateBookingData({ mode })}
                />
              )}
              {currentStep === 2 && (
                <ServiceSelection
                  mode={bookingData.mode}
                  selectedServiceId={bookingData.serviceId}
                  selectedAddOnIds={bookingData.addOnServiceIds}
                  selectedPartnerId={bookingData.partnerId}
                  onSelectService={(id) => updateBookingData({ serviceId: id })}
                  onSelectAddOns={(ids) =>
                    updateBookingData({ addOnServiceIds: ids })
                  }
                  onSelectPartner={(id) => updateBookingData({ partnerId: id })}
                />
              )}
              {currentStep === 3 && (
                <DateTimeSelection
                  date={bookingData.date}
                  time={bookingData.time}
                  onDateSelect={(date) => updateBookingData({ date })}
                  onTimeSelect={(time) => updateBookingData({ time })}
                />
              )}
              {currentStep === 4 && (
                <CustomerDetails
                  data={bookingData}
                  onChange={updateBookingData}
                />
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-12 pt-6 border-t">
          <Button
            variant="outline"
            onClick={handleBack}
            disabled={currentStep === 1}
            className="w-32"
          >
            <ChevronLeft className="mr-2 h-4 w-4" /> Back
          </Button>

          {currentStep < steps.length ? (
            <Button
              onClick={handleNext}
              disabled={!isStepValid()}
              className="w-32"
            >
              Next <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          ) : (
            <Button
              disabled={!isStepValid()}
              className="w-40 bg-green-600 hover:bg-green-700"
            >
              Confirm Booking <Check className="ml-2 h-4 w-4" />
            </Button>
          )}
        </div>
      </div>

      {/* Sticky Summary Sidebar */}
      <div className="lg:w-80 xl:w-96 hidden lg:block">
        <div className="sticky top-24">
          <BookingSummary
            data={bookingData}
            currentStep={currentStep}
            isComplete={currentStep === steps.length && isStepValid()}
          />
        </div>
      </div>
    </div>
  );
}
