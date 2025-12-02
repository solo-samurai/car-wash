"use client";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { BookingWizard } from "@/components/booking/BookingWizard";

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <SiteHeader />

      <main className="container mx-auto px-4 py-24 md:py-32">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 bg-gradient-to-r from-primary via-primary to-primary/60 bg-clip-text text-transparent">
            Book Your Car Wash
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience premium car care service in just a few simple steps.
          </p>
        </div>

        {/* Booking Wizard */}
        <BookingWizard />
      </main>

      <SiteFooter />
    </div>
  );
}
