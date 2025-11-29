import { Button } from "@/components/ui/button";
import { Check, Sparkles } from "lucide-react";
import Link from "next/link";

export function SubscriptionCard() {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-blue-900 p-8 text-white shadow-2xl">
      <div className="absolute top-0 right-0 -mt-10 -mr-10 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 -mb-10 -ml-10 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl" />

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-4 max-w-xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-sm font-medium backdrop-blur-sm border border-white/10">
            <Sparkles className="h-4 w-4 text-cyan-300" />
            <span>Best Value</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Unlimited Wash Club
          </h2>
          <p className="text-lg text-blue-100">
            Join our monthly subscription plan and get unlimited exterior
            washes, priority booking, and exclusive discounts on detailing.
          </p>
          <ul className="space-y-2">
            {[
              "Unlimited Exterior Washes",
              "10% Off Detailing Services",
              "Priority Booking Access",
              "Cancel Anytime",
            ].map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-2 text-sm text-blue-50"
              >
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-white/20">
                  <Check className="h-3 w-3" />
                </div>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col items-center gap-4 bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/10 min-w-[250px]">
          <div className="text-center">
            <span className="text-sm text-blue-200 uppercase tracking-wider font-semibold">
              Starting at
            </span>
            <div className="flex items-baseline justify-center gap-1">
              <span className="text-5xl font-black">$39</span>
              <span className="text-xl text-blue-200">/mo</span>
            </div>
          </div>
          <Link href="/book?mode=subscription" className="w-full">
            <Button className="w-full bg-white text-primary hover:bg-blue-50 font-bold h-12 text-lg shadow-lg">
              Join the Club
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
