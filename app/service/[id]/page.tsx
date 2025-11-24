"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, CheckCircle, Clock, DollarSign, Zap } from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"

const serviceDetails: Record<string, any> = {
  "basic-wash": {
    title: "Basic Wash",
    price: "$15",
    duration: "30 minutes",
    description: "Our most popular service for regular maintenance and shine",
    fullDescription:
      "Get your car looking fresh and clean with our professional basic wash service. We use premium eco-friendly soap, high-pressure rinse, and hand-dry techniques to ensure a spotless finish without damaging your paint.",
    includes: [
      "Exterior wash with premium soap",
      "High-pressure rinse",
      "Tire and wheel cleaning",
      "Hand drying with microfiber towels",
      "Window cleaning",
      "Tire shine treatment",
    ],
    benefits: [
      "Removes dirt and grime",
      "Protects clear coat",
      "Enhances shine",
      "Quick and convenient",
      "Affordable maintenance",
      "Eco-friendly products",
    ],
    process: [
      { step: 1, title: "Pre-wash Inspection", description: "We check your vehicle for any specific cleaning needs" },
      { step: 2, title: "Foam Application", description: "Premium soap foam is applied to loosen dirt particles" },
      { step: 3, title: "High-Pressure Rinse", description: "Powerful rinse removes all soap and contaminants" },
      { step: 4, title: "Wheel Cleaning", description: "Special attention to tires and wheel rims" },
      { step: 5, title: "Hand Drying", description: "Microfiber towels prevent water spots" },
      { step: 6, title: "Final Touches", description: "Tire shine and window polish for perfect finish" },
    ],
    addonServices: ["Interior Vacuum ($5)", "Air Freshener ($3)", "Wax Coating ($10)"],
    rating: 4.8,
    reviews: 2341,
  },
  "deep-cleaning": {
    title: "Deep Cleaning",
    price: "$45",
    duration: "2 hours",
    description: "Complete interior and exterior detailing with protective wax",
    fullDescription:
      "Our premium deep cleaning service provides complete vehicle care. Inside and out, we detail every inch of your car, protecting your investment with professional-grade wax and sealants.",
    includes: [
      "Complete exterior wash",
      "Clay bar treatment",
      "Professional wax application",
      "Interior vacuum",
      "Upholstery cleaning",
      "Dashboard polish",
      "Air freshener",
      "Tire dressing",
    ],
    benefits: [
      "Removes stubborn contaminants",
      "Premium protective coating",
      "Enhances color and shine",
      "Interior smells fresh",
      "Long-lasting protection",
      "Professional results",
    ],
    process: [
      { step: 1, title: "Pre-wash Assessment", description: "Detailed inspection of interior and exterior condition" },
      { step: 2, title: "Exterior Deep Clean", description: "Two-stage wash with clay bar treatment" },
      { step: 3, title: "Wax Application", description: "Professional-grade protective wax coating" },
      { step: 4, title: "Interior Detailing", description: "Thorough vacuum and upholstery cleaning" },
      { step: 5, title: "Dashboard Care", description: "Polish and protect dashboard surfaces" },
      { step: 6, title: "Final Inspection", description: "Quality check of all work completed" },
    ],
    addonServices: ["Ceramic Coating ($80)", "Leather Conditioning ($25)", "Engine Bay Clean ($30)"],
    rating: 4.9,
    reviews: 1845,
  },
  "interior-wash": {
    title: "Interior Wash",
    price: "$25",
    duration: "1 hour",
    description: "Complete interior detailing and sanitization",
    fullDescription:
      "Keep your car's interior fresh and clean. Our interior wash service includes professional-grade vacuuming, upholstery cleaning, and sanitization to keep your cabin hygienic.",
    includes: [
      "Complete interior vacuum",
      "Upholstery cleaning",
      "Floor mat cleaning",
      "Dashboard polish",
      "Window interior cleaning",
      "Air freshener application",
      "Sanitization spray",
    ],
    benefits: [
      "Removes dust and debris",
      "Eliminates odors",
      "Sanitizes surfaces",
      "Fresh cabin smell",
      "Protects upholstery",
      "Improves air quality",
    ],
    process: [
      { step: 1, title: "Initial Inspection", description: "Check upholstery condition and stains" },
      { step: 2, title: "Deep Vacuum", description: "Remove all dust and debris from seats and floor" },
      { step: 3, title: "Stain Treatment", description: "Pre-treat and clean any stains" },
      { step: 4, title: "Dashboard Care", description: "Clean and polish all dashboard surfaces" },
      { step: 5, title: "Sanitization", description: "Apply eco-friendly sanitizing spray" },
      { step: 6, title: "Air Freshener", description: "Final freshness with premium air freshener" },
    ],
    addonServices: ["Carpet Shampooing ($20)", "Leather Seats ($35)", "Pet Hair Removal ($15)"],
    rating: 4.7,
    reviews: 1562,
  },
}

export default function ServiceDetailPage() {
  const params = useParams()
  const serviceId = params.id as string
  const service = serviceDetails[serviceId] || serviceDetails["basic-wash"]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <Link
            href="/services"
            className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium mb-4"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Services
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        {/* Service Hero */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{service.title}</h1>
              <p className="text-lg text-muted-foreground mb-6">{service.fullDescription}</p>

              <div className="grid grid-cols-3 gap-4 mb-8">
                <Card className="p-4 text-center">
                  <DollarSign className="h-6 w-6 text-primary mx-auto mb-2" />
                  <p className="text-2xl font-bold text-foreground">{service.price}</p>
                  <p className="text-xs text-muted-foreground">Starting at</p>
                </Card>
                <Card className="p-4 text-center">
                  <Clock className="h-6 w-6 text-accent mx-auto mb-2" />
                  <p className="text-lg font-bold text-foreground">{service.duration}</p>
                  <p className="text-xs text-muted-foreground">Duration</p>
                </Card>
                <Card className="p-4 text-center">
                  <Zap className="h-6 w-6 text-primary mx-auto mb-2" />
                  <p className="text-lg font-bold text-foreground">{service.rating}</p>
                  <p className="text-xs text-muted-foreground">{service.reviews} reviews</p>
                </Card>
              </div>

              <div className="flex gap-4">
                <Link href="/book" className="flex-1">
                  <Button className="w-full" size="lg">
                    Book This Service
                  </Button>
                </Link>
                <Button variant="outline" size="lg">
                  Add to Cart
                </Button>
              </div>
            </div>

            {/* Image Placeholder */}
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg h-96 flex items-center justify-center border-2 border-dashed border-primary/20">
              <div className="text-center">
                <Zap className="h-16 w-16 text-primary/40 mx-auto mb-2" />
                <p className="text-muted-foreground">{service.title} Service Image</p>
              </div>
            </div>
          </div>

          {/* What's Included */}
          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">What's Included</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.includes.map((item: string, i: number) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Benefits */}
          <Card className="p-8 mb-8 bg-primary/5 border-primary/20">
            <h2 className="text-2xl font-bold text-foreground mb-6">Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {service.benefits.map((benefit: string, i: number) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-foreground text-sm font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Process Steps */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">Our Process</h2>
            <div className="space-y-3">
              {service.process.map((item: any) => (
                <div key={item.step} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary text-primary-foreground font-bold text-sm">
                      {item.step}
                    </div>
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="font-semibold text-foreground">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Add-on Services */}
          <Card className="p-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">Add-on Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {service.addonServices.map((addon: string, i: number) => (
                <div
                  key={i}
                  className="p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
                >
                  <p className="font-medium text-foreground">{addon}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
