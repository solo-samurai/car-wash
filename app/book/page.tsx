"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Droplets, Calendar, MapPin, Car, Check, ArrowRight, ArrowLeft, CreditCard } from "lucide-react"
import Link from "next/link"

export default function BookingPage() {
  const [step, setStep] = useState(1)
  const [bookingType, setBookingType] = useState<"service" | "subscription">("service")
  const [selectedService, setSelectedService] = useState("")
  const [locationType, setLocationType] = useState("center")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")

  const services = [
    { id: "basic", name: "Basic Wash", price: 15 },
    { id: "interior", name: "Interior Wash", price: 25 },
    { id: "oil", name: "Oil Change", price: 35 },
    { id: "deep", name: "Deep Cleaning", price: 45 },
  ]

  const nextStep = () => setStep(step + 1)
  const prevStep = () => setStep(step - 1)

  const getServicePrice = (id: string) => {
    const service = services.find((s) => s.id === id)
    return service ? service.price : 0
  }

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

      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Booking Form */}
          <div className="lg:col-span-2">
            {/* Progress Steps */}
            <div className="mb-8">
              <div className="flex items-center justify-between relative">
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full h-1 bg-secondary -z-10"></div>
                <div
                  className={`flex flex-col items-center gap-2 bg-background px-2 ${step >= 1 ? "text-primary" : "text-muted-foreground"}`}
                >
                  <div
                    className={`h-8 w-8 rounded-full flex items-center justify-center border-2 ${step >= 1 ? "border-primary bg-primary text-primary-foreground" : "border-muted-foreground bg-background"}`}
                  >
                    1
                  </div>
                  <span className="text-xs font-medium">Service</span>
                </div>
                <div
                  className={`flex flex-col items-center gap-2 bg-background px-2 ${step >= 2 ? "text-primary" : "text-muted-foreground"}`}
                >
                  <div
                    className={`h-8 w-8 rounded-full flex items-center justify-center border-2 ${step >= 2 ? "border-primary bg-primary text-primary-foreground" : "border-muted-foreground bg-background"}`}
                  >
                    2
                  </div>
                  <span className="text-xs font-medium">Location</span>
                </div>
                <div
                  className={`flex flex-col items-center gap-2 bg-background px-2 ${step >= 3 ? "text-primary" : "text-muted-foreground"}`}
                >
                  <div
                    className={`h-8 w-8 rounded-full flex items-center justify-center border-2 ${step >= 3 ? "border-primary bg-primary text-primary-foreground" : "border-muted-foreground bg-background"}`}
                  >
                    3
                  </div>
                  <span className="text-xs font-medium">Schedule</span>
                </div>
                <div
                  className={`flex flex-col items-center gap-2 bg-background px-2 ${step >= 4 ? "text-primary" : "text-muted-foreground"}`}
                >
                  <div
                    className={`h-8 w-8 rounded-full flex items-center justify-center border-2 ${step >= 4 ? "border-primary bg-primary text-primary-foreground" : "border-muted-foreground bg-background"}`}
                  >
                    4
                  </div>
                  <span className="text-xs font-medium">Details</span>
                </div>
              </div>
            </div>

            <Card className="p-6">
              {step === 1 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-xl font-semibold mb-4">Choose Service Type</h2>
                    <RadioGroup
                      defaultValue="service"
                      onValueChange={(v: "service" | "subscription") => setBookingType(v)}
                      className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                    >
                      <div>
                        <RadioGroupItem value="service" id="type-service" className="peer sr-only" />
                        <Label
                          htmlFor="type-service"
                          className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer"
                        >
                          <Droplets className="mb-3 h-6 w-6" />
                          One-time Service
                        </Label>
                      </div>
                      <div>
                        <RadioGroupItem value="subscription" id="type-sub" className="peer sr-only" />
                        <Label
                          htmlFor="type-sub"
                          className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer"
                        >
                          <CreditCard className="mb-3 h-6 w-6" />
                          Subscription Plan
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <h2 className="text-xl font-semibold mb-4">Select Specific Service</h2>
                    <div className="grid grid-cols-1 gap-4">
                      {services.map((service) => (
                        <div
                          key={service.id}
                          className={`p-4 rounded-lg border-2 cursor-pointer transition-all flex items-center justify-between ${selectedService === service.id ? "border-primary bg-primary/5" : "border-muted hover:border-primary/50"}`}
                          onClick={() => setSelectedService(service.id)}
                        >
                          <div className="flex items-center gap-3">
                            <div
                              className={`h-5 w-5 rounded-full border flex items-center justify-center ${selectedService === service.id ? "border-primary" : "border-muted-foreground"}`}
                            >
                              {selectedService === service.id && (
                                <div className="h-2.5 w-2.5 rounded-full bg-primary" />
                              )}
                            </div>
                            <span className="font-medium">{service.name}</span>
                          </div>
                          <span className="font-bold">${service.price}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold mb-4">Where should we service your car?</h2>

                  <RadioGroup
                    value={locationType}
                    onValueChange={setLocationType}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                  >
                    <div>
                      <RadioGroupItem value="center" id="loc-center" className="peer sr-only" />
                      <Label
                        htmlFor="loc-center"
                        className="flex flex-col h-full p-6 rounded-lg border-2 border-muted cursor-pointer hover:border-primary/50 peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5"
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <MapPin className="h-6 w-6 text-primary" />
                          <span className="font-semibold text-lg">Car Wash Center</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Bring your car to our state-of-the-art facility. Enjoy our lounge while you wait.
                        </p>
                      </Label>
                    </div>

                    <div>
                      <RadioGroupItem value="home" id="loc-home" className="peer sr-only" />
                      <Label
                        htmlFor="loc-home"
                        className="flex flex-col h-full p-6 rounded-lg border-2 border-muted cursor-pointer hover:border-primary/50 peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5"
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <HomeIcon className="h-6 w-6 text-primary" />
                          <span className="font-semibold text-lg">Home Service</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          We come to your home or office. Requires a space for our van and equipment.
                        </p>
                      </Label>
                    </div>
                  </RadioGroup>

                  {locationType === "home" && (
                    <div className="space-y-4 mt-6 p-4 bg-secondary/50 rounded-lg">
                      <h3 className="font-medium">Service Address</h3>
                      <div className="grid grid-cols-1 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="address">Street Address</Label>
                          <Input id="address" placeholder="123 Main St" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="city">City</Label>
                            <Input id="city" defaultValue="Mogadishu" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="district">District</Label>
                            <Input id="district" placeholder="Hodan" />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {step === 3 && (
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold mb-4">Select Date & Time</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <Label className="mb-2 block">Date</Label>
                      <div className="grid grid-cols-1 gap-2">
                        {/* Mock Date Picker - simplified for UI */}
                        <Input type="date" className="w-full" onChange={(e) => setDate(e.target.value)} />
                        <p className="text-sm text-muted-foreground mt-1">Available for next 14 days</p>
                      </div>
                    </div>

                    <div>
                      <Label className="mb-2 block">Time Slot</Label>
                      <Select onValueChange={setTime}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="09:00">09:00 AM</SelectItem>
                          <SelectItem value="10:00">10:00 AM</SelectItem>
                          <SelectItem value="11:00">11:00 AM</SelectItem>
                          <SelectItem value="13:00">01:00 PM</SelectItem>
                          <SelectItem value="14:00">02:00 PM</SelectItem>
                          <SelectItem value="15:00">03:00 PM</SelectItem>
                          <SelectItem value="16:00">04:00 PM</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="p-4 bg-primary/5 rounded-lg flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">Estimated Duration: 45-60 mins</p>
                      <p className="text-sm text-muted-foreground">
                        Please arrive 10 mins early if visiting our center.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {step === 4 && (
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold mb-4">Vehicle & Contact Details</h2>

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
                      <Label htmlFor="make">Car Make</Label>
                      <Input id="make" placeholder="e.g. Toyota" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="model">Car Model</Label>
                      <Input id="model" placeholder="e.g. Land Cruiser" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="plate">License Plate</Label>
                      <Input id="plate" placeholder="Optional" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="color">Color</Label>
                      <Input id="color" placeholder="e.g. White" />
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border mt-4">
                    <h3 className="font-medium mb-3">Payment Method</h3>
                    <RadioGroup defaultValue="cash" className="flex gap-4">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="cash" id="pay-cash" />
                        <Label htmlFor="pay-cash">Cash on Delivery</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="mobile" id="pay-mobile" />
                        <Label htmlFor="pay-mobile">Mobile Money (EVC/Zaad)</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8 pt-4 border-t border-border">
                {step > 1 ? (
                  <Button variant="outline" onClick={prevStep}>
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back
                  </Button>
                ) : (
                  <div></div>
                )}

                {step < 4 ? (
                  <Button onClick={nextStep} disabled={!selectedService && step === 1}>
                    Next Step <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                ) : (
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    Confirm Booking <Check className="ml-2 h-4 w-4" />
                  </Button>
                )}
              </div>
            </Card>
          </div>

          {/* Summary Panel */}
          <div className="lg:col-span-1">
            <Card className="p-6 sticky top-24 bg-secondary/30">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Car className="h-5 w-5 text-primary" />
                Booking Summary
              </h3>

              <div className="space-y-4 text-sm">
                <div className="flex justify-between pb-2 border-b border-border">
                  <span className="text-muted-foreground">Service Type</span>
                  <span className="font-medium capitalize">{bookingType}</span>
                </div>

                <div className="flex justify-between pb-2 border-b border-border">
                  <span className="text-muted-foreground">Selected Service</span>
                  <span className="font-medium">
                    {selectedService ? services.find((s) => s.id === selectedService)?.name : "Not selected"}
                  </span>
                </div>

                <div className="flex justify-between pb-2 border-b border-border">
                  <span className="text-muted-foreground">Location</span>
                  <span className="font-medium capitalize">
                    {locationType === "center" ? "Car Wash Center" : "Home Service"}
                  </span>
                </div>

                {date && (
                  <div className="flex justify-between pb-2 border-b border-border">
                    <span className="text-muted-foreground">Date</span>
                    <span className="font-medium">{date}</span>
                  </div>
                )}

                {time && (
                  <div className="flex justify-between pb-2 border-b border-border">
                    <span className="text-muted-foreground">Time</span>
                    <span className="font-medium">{time}</span>
                  </div>
                )}

                <div className="pt-4 mt-4">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-lg">Total</span>
                    <span className="font-bold text-2xl text-primary">${getServicePrice(selectedService)}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1 text-right">Taxes included</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}

// Helper component for Home icon since it wasn't imported in the original snippet
function HomeIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}
