"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Droplets, ArrowRight, ArrowLeft, Shield, Zap } from "lucide-react"
import Link from "next/link"
import { PricingCard } from "@/components/pricing-card"

export default function SubscribePage() {
  const [step, setStep] = useState(1)
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)

  const nextStep = () => setStep(step + 1)
  const prevStep = () => setStep(step - 1)

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <span className="hidden sm:inline font-medium">Back to Home</span>
            </Link>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                <Droplets className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-lg font-bold text-foreground">CarWash Somalia</span>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-12">
        {step === 1 ? (
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-foreground mb-4">Choose Your Monthly Plan</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Get unlimited washes and premium care for one low monthly price. Cancel anytime.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Basic Plan Selection */}
              <div
                className="cursor-pointer"
                onClick={() => {
                  setSelectedPlan("basic")
                  nextStep()
                }}
              >
                <PricingCard
                  title="Basic Plan"
                  price="$40"
                  features={[
                    { text: "4 Basic Washes per month", included: true },
                    { text: "1 Interior Cleaning", included: true },
                    { text: "Tire Pressure Check", included: true },
                    { text: "Deep Cleaning", included: false },
                    { text: "Priority Booking", included: false },
                  ]}
                  buttonText="Select Basic Plan"
                />
              </div>

              {/* Silver Plan Selection */}
              <div
                className="cursor-pointer"
                onClick={() => {
                  setSelectedPlan("silver")
                  nextStep()
                }}
              >
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
                  ]}
                  buttonText="Select Silver Plan"
                />
              </div>

              {/* Gold Plan Selection */}
              <div
                className="cursor-pointer"
                onClick={() => {
                  setSelectedPlan("gold")
                  nextStep()
                }}
              >
                <PricingCard
                  title="Gold Plan"
                  price="$120"
                  features={[
                    { text: "Unlimited Everything", included: true },
                    { text: "Weekly Deep Cleaning", included: true },
                    { text: "Oil Change Labor Included", included: true },
                    { text: "Premium Wax Treatment", included: true },
                    { text: "VIP Priority Support", included: true },
                  ]}
                  buttonText="Select Gold Plan"
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="max-w-2xl mx-auto">
            <Card className="p-8">
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-2">Complete Subscription</h2>
                <p className="text-muted-foreground">
                  You selected the <span className="font-bold text-foreground capitalize">{selectedPlan} Plan</span>
                </p>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="Enter your name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="+252 61 XXX XXXX" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="name@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="plate">Vehicle License Plate</Label>
                    <Input id="plate" placeholder="Start subscription for this car" />
                  </div>
                </div>

                <div className="pt-6 border-t border-border">
                  <h3 className="font-medium mb-4">Payment Method</h3>
                  <RadioGroup defaultValue="mobile" className="flex flex-col gap-3">
                    <div className="flex items-center justify-between p-4 border rounded-lg cursor-pointer hover:bg-secondary/50">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="mobile" id="pay-mobile" />
                        <Label htmlFor="pay-mobile" className="cursor-pointer font-medium">
                          Mobile Money (EVC/Zaad)
                        </Label>
                      </div>
                      <Zap className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex items-center justify-between p-4 border rounded-lg cursor-pointer hover:bg-secondary/50">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="card" id="pay-card" />
                        <Label htmlFor="pay-card" className="cursor-pointer font-medium">
                          Credit / Debit Card
                        </Label>
                      </div>
                      <div className="flex gap-2">
                        <div className="h-5 w-8 bg-muted rounded"></div>
                        <div className="h-5 w-8 bg-muted rounded"></div>
                      </div>
                    </div>
                  </RadioGroup>
                </div>

                <div className="bg-primary/5 p-4 rounded-lg flex gap-3">
                  <Shield className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <p className="font-medium text-foreground">Secure Payment</p>
                    <p className="text-muted-foreground">
                      Your payment information is encrypted and secure. Subscription renews automatically each month.
                    </p>
                  </div>
                </div>

                <div className="flex justify-between pt-6">
                  <Button variant="outline" onClick={prevStep}>
                    <ArrowLeft className="mr-2 h-4 w-4" /> Change Plan
                  </Button>
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
                    Confirm & Pay <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        )}
      </main>
    </div>
  )
}
