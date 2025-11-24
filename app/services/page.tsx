import { ServiceCard } from "@/components/service-card";
import { PricingCard } from "@/components/pricing-card";
import { Button } from "@/components/ui/button";
import { Droplets, Sparkles, Wrench, Fuel, Car, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader variant="solid" />

      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Our Services & Pricing
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transparent pricing for all your car care needs. Choose from
            individual services or save with our monthly subscriptions.
          </p>
        </div>

        {/* Individual Services */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-foreground mb-8 border-l-4 border-primary pl-4">
            Individual Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard
              icon={<Droplets className="h-8 w-8" />}
              title="Basic Wash"
              description="Exterior wash with premium soap, tire cleaning, and hand drying."
              price="$15"
            />
            <ServiceCard
              icon={<Sparkles className="h-8 w-8" />}
              title="Deep Cleaning"
              description="Complete interior and exterior detailing with wax protection."
              price="$45"
            />
            <ServiceCard
              icon={<Sparkles className="h-8 w-8" />}
              title="Interior Wash"
              description="Vacuum, upholstery cleaning, dashboard polish, and air freshening."
              price="$25"
            />
            <ServiceCard
              icon={<Wrench className="h-8 w-8" />}
              title="Oil Change"
              description="Professional oil change service with quality engine oil."
              price="$35"
            />
            <ServiceCard
              icon={<Fuel className="h-8 w-8" />}
              title="Fluid Top-Up"
              description="Check and refill all essential fluids including coolant and washer fluid."
              price="$20"
            />
            <ServiceCard
              icon={<Car className="h-8 w-8" />}
              title="Tire Check"
              description="Tire pressure check, alignment inspection, and tread depth analysis."
              price="$15"
            />
          </div>
        </section>

        {/* Subscription Plans */}
        <section id="pricing" className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-8 border-l-4 border-accent pl-4">
            Monthly Subscriptions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto pt-4">
            <PricingCard
              title="Basic Plan"
              price="$40"
              features={[
                { text: "4 Basic Washes per month", included: true },
                { text: "1 Interior Cleaning", included: true },
                { text: "Tire Pressure Check", included: true },
                { text: "Deep Cleaning", included: false },
                { text: "Priority Booking", included: false },
                { text: "Home Service Included", included: false },
              ]}
            />
            <PricingCard
              title="Silver Plan"
              price="$75"
              isPopular={true}
              features={[
                { text: "Unlimited Basic Washes", included: true },
                { text: "2 Interior Cleanings", included: true },
                { text: "Fluids Top-Up", included: true },
                { text: "1 Deep Cleaning", included: true },
                { text: "Priority Booking", included: true },
                { text: "Home Service Included", included: false },
              ]}
            />
            <PricingCard
              title="Gold Plan"
              price="$120"
              features={[
                { text: "Unlimited Everything", included: true },
                { text: "Weekly Deep Cleaning", included: true },
                { text: "Oil Change Labor Included", included: true },
                { text: "Premium Wax Treatment", included: true },
                { text: "VIP Priority Support", included: true },
                { text: "Unlimited Home Service", included: true },
              ]}
            />
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
