"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronDown, HelpCircle } from "lucide-react"
import Link from "next/link"

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<number[]>([0])

  const faqCategories = [
    {
      category: "Booking & Scheduling",
      questions: [
        {
          id: 1,
          q: "How do I book a service?",
          a: "You can book a service directly through our website using the Book Now button, or contact us by phone. We offer flexible scheduling with same-day appointments available.",
        },
        {
          id: 2,
          q: "Can I get a same-day appointment?",
          a: "Yes! Depending on availability, we often have same-day slots available. Call us or book online to check current availability.",
        },
        {
          id: 3,
          q: "Do you offer home service?",
          a: "We provide home service where our team comes to your location with all equipment. Home service is available for most services at a small additional charge.",
        },
        {
          id: 4,
          q: "Can I reschedule my appointment?",
          a: "Yes, you can reschedule up to 24 hours before your appointment through your dashboard or by contacting us directly.",
        },
      ],
    },
    {
      category: "Services & Pricing",
      questions: [
        {
          id: 5,
          q: "What's included in the Basic Wash?",
          a: "Our Basic Wash includes exterior wash with premium soap, tire cleaning, wheel washing, and hand drying. It's perfect for regular maintenance.",
        },
        {
          id: 6,
          q: "What's the difference between plans?",
          a: "Basic Plan: 4 basic washes + 1 interior cleaning per month. Silver Plan: Unlimited basics + 2 interior cleanings + priority booking. Gold Plan: Everything unlimited + weekly deep cleaning.",
        },
        {
          id: 7,
          q: "Do you work on all vehicle types?",
          a: "Yes! We service all vehicle types including sedans, SUVs, trucks, vans, and luxury vehicles. Each receives customized care based on its needs.",
        },
        {
          id: 8,
          q: "What products do you use?",
          a: "We use premium, eco-friendly car care products that are safe for your vehicle and the environment. All our products are pH-balanced and paint-safe.",
        },
      ],
    },
    {
      category: "Subscriptions",
      questions: [
        {
          id: 9,
          q: "Can I cancel my subscription?",
          a: "Yes, you can cancel anytime without penalties. Just notify us through your dashboard or contact our support team.",
        },
        {
          id: 10,
          q: "What payment methods do you accept?",
          a: "We accept mobile money (EVC/Zaad), bank transfers, and cash. Choose your preferred method during checkout.",
        },
        {
          id: 11,
          q: "Do unused monthly services roll over?",
          a: "No, monthly services don't roll over, but your subscription renews each month. Make the most of your plan each month!",
        },
        {
          id: 12,
          q: "Can I upgrade or downgrade my plan?",
          a: "Yes! You can change your plan anytime. Changes take effect at the start of your next billing cycle.",
        },
      ],
    },
    {
      category: "Warranty & Safety",
      questions: [
        {
          id: 13,
          q: "Is my car safe during the wash?",
          a: "Your vehicle is completely safe. Our team is trained in professional handling, and we use gentle techniques with premium products.",
        },
        {
          id: 14,
          q: "Do you offer any warranty?",
          a: "We stand behind our work 100%. If you're not satisfied, we'll redo the service at no charge.",
        },
        {
          id: 15,
          q: "How long does a wash take?",
          a: "Basic Wash: 30-45 minutes. Interior Cleaning: 45-60 minutes. Deep Cleaning: 2-3 hours. Times may vary based on vehicle size and condition.",
        },
        {
          id: 16,
          q: "What if my car has damage before service?",
          a: "We document all pre-existing damage before service begins. We're not responsible for damage that existed prior to your appointment.",
        },
      ],
    },
  ]

  const toggleItem = (id: number) => {
    setOpenItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header Navigation */}
      <header className="border-b border-border bg-card sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center">
              <HelpCircle className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground hidden sm:inline">CarWash Somalia</span>
          </Link>
          <nav className="flex items-center gap-4">
            <Link href="/services" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Services
            </Link>
            <Link href="/gallery" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Gallery
            </Link>
            <Link href="/about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/faq" className="text-sm font-medium text-primary">
              FAQ
            </Link>
            <Link href="/book">
              <Button size="sm">Book Now</Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-muted-foreground text-pretty">
              Find answers to common questions about our services, booking, and subscriptions
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {faqCategories.map((category, catIndex) => (
              <div key={catIndex} className="mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-6">{category.category}</h2>

                <div className="space-y-4">
                  {category.questions.map((item) => (
                    <Card
                      key={item.id}
                      className="overflow-hidden border-l-4 border-l-primary hover:shadow-md transition-shadow"
                    >
                      <button
                        onClick={() => toggleItem(item.id)}
                        className="w-full px-6 py-4 flex items-center justify-between bg-card hover:bg-muted/50 transition-colors"
                      >
                        <h3 className="text-lg font-semibold text-foreground text-left">{item.q}</h3>
                        <ChevronDown
                          className={`h-5 w-5 text-primary transition-transform flex-shrink-0 ml-4 ${
                            openItems.includes(item.id) ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {openItems.includes(item.id) && (
                        <div className="px-6 py-4 bg-muted/30 border-t border-border">
                          <p className="text-muted-foreground leading-relaxed">{item.a}</p>
                        </div>
                      )}
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">Still Have Questions?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Can't find the answer you're looking for? Our support team is here to help!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Card className="p-6 flex-1 text-center border-none bg-background">
                <p className="font-semibold text-foreground mb-2">Call Us</p>
                <p className="text-muted-foreground">+252 61 234 5678</p>
              </Card>
              <Card className="p-6 flex-1 text-center border-none bg-background">
                <p className="font-semibold text-foreground mb-2">Email</p>
                <p className="text-muted-foreground">support@carwash.so</p>
              </Card>
              <Card className="p-6 flex-1 text-center border-none bg-background">
                <p className="font-semibold text-foreground mb-2">Hours</p>
                <p className="text-muted-foreground">8AM - 8PM Daily</p>
              </Card>
            </div>

            <Link href="/book" className="inline-block mt-8">
              <Button size="lg">Book a Service</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 CarWash Somalia. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
