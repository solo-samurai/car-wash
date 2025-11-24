"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
    alert("Thank you for your message! We'll get back to you soon.")
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center">
              <Mail className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">CarWash Somalia</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <a href="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="/services" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Services
            </a>
            <a href="/about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              About
            </a>
            <Link href="/book">
              <Button>Book Now</Button>
            </Link>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        {/* Page Title */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Get in Touch</h1>
          <p className="text-lg text-muted-foreground">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Info Cards */}
          <Card className="p-6 border-2 border-primary/20 hover:border-primary transition-colors">
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
                <Phone className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Phone</h3>
                <p className="text-muted-foreground">+252 61 234 5678</p>
                <p className="text-sm text-muted-foreground">Available 24/7</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 border-2 border-accent/20 hover:border-accent transition-colors">
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
                <Mail className="h-6 w-6 text-accent-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Email</h3>
                <p className="text-muted-foreground">info@carwash.so</p>
                <p className="text-sm text-muted-foreground">We reply within 24 hours</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 border-2 border-secondary/20 hover:border-secondary transition-colors">
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                <MapPin className="h-6 w-6 text-secondary-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Location</h3>
                <p className="text-muted-foreground">Mogadishu, Somalia</p>
                <p className="text-sm text-muted-foreground">3 service centers</p>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact Form */}
          <Card className="p-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="+252 61 234 5678"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Tell us more..."
                />
              </div>

              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </Card>

          {/* Hours & Info */}
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Clock className="h-6 w-6 text-primary" />
                Business Hours
              </h3>
              <div className="space-y-3 text-muted-foreground">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-medium text-foreground">7:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-medium text-foreground">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-medium text-foreground">9:00 AM - 5:00 PM</span>
                </div>
                <div className="pt-4 border-t border-border mt-4">
                  <p className="text-sm">Emergency service available on request</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-primary/5 border-primary/20">
              <h3 className="text-lg font-semibold text-foreground mb-3">Service Areas</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>✓ Mogadishu City Center</li>
                <li>✓ Hamar District</li>
                <li>✓ Hodan District</li>
                <li>✓ Karaan District</li>
                <li>✓ Daynile District</li>
              </ul>
            </Card>

            <Card className="p-6 border-2 border-primary">
              <p className="text-muted-foreground mb-4">
                Prefer to call? Our team is ready to help with any booking or service inquiries.
              </p>
              <Button className="w-full" size="lg">
                Call Us Now
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
