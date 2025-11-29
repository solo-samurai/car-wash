"use client";
import type React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    alert("Thank you for your message! We'll get back to you soon.");
  };

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/30">
      <SiteHeader variant="solid" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/5 z-0" />
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/10 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-secondary/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="container relative z-10 mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-in-up">
            <MessageSquare className="h-4 w-4" />
            <span>We're Here to Help</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 tracking-tight animate-fade-in-up [animation-delay:100ms]">
            Get in <span className="text-primary">Touch</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up [animation-delay:200ms]">
            Have questions about our premium services? We'd love to hear from
            you. Reach out and let's make your car shine.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 pb-24 -mt-10 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          {/* Contact Info Cards */}
          <Card className="p-8 border border-white/5 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all duration-300 group hover:-translate-y-1">
            <div className="flex items-start gap-5">
              <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <Phone className="h-7 w-7 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Phone
                </h3>
                <p className="text-muted-foreground mb-1">+252 61 500 0000</p>
                <p className="text-sm text-primary font-medium">
                  Premium Support 24/7
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-8 border border-white/5 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all duration-300 group hover:-translate-y-1">
            <div className="flex items-start gap-5">
              <div className="h-14 w-14 rounded-2xl bg-blue-500/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <Mail className="h-7 w-7 text-blue-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Email
                </h3>
                <p className="text-muted-foreground mb-1">info@sifeyn.so</p>
                <p className="text-sm text-blue-500 font-medium">
                  Concierge Service
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-8 border border-white/5 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all duration-300 group hover:-translate-y-1">
            <div className="flex items-start gap-5">
              <div className="h-14 w-14 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="h-7 w-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  HQ Location
                </h3>
                <p className="text-muted-foreground mb-1">
                  Maka Al Mukarama, Mogadishu
                </p>
                <p className="text-sm text-white/70 font-medium">
                  Flagship Center
                </p>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-7">
            <Card className="p-8 md:p-10 border border-white/5 bg-card/50 backdrop-blur-sm shadow-2xl">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-2">
                  Send us a Message
                </h2>
                <p className="text-muted-foreground">
                  Fill out the form below and our concierge team will get back
                  to you shortly.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium text-foreground"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-white/10 bg-background/50 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="phone"
                      className="text-sm font-medium text-foreground"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-white/10 bg-background/50 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                      placeholder="+252..."
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-foreground"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-white/10 bg-background/50 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                    placeholder="your@email.com"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className="text-sm font-medium text-foreground"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-white/10 bg-background/50 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                    placeholder="How can we help?"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-foreground"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-white/10 bg-background/50 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full h-12 text-base font-bold shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all rounded-xl"
                >
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </Card>
          </div>

          {/* Hours & Info */}
          <div className="lg:col-span-5 space-y-8">
            <Card className="p-8 border border-white/5 bg-card/50 backdrop-blur-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-10 -mt-10" />

              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                Business Hours
              </h3>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 rounded-lg bg-background/30 border border-white/5">
                  <span className="text-muted-foreground">Monday - Friday</span>
                  <span className="font-semibold text-foreground">
                    7:00 AM - 10:00 PM
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-background/30 border border-white/5">
                  <span className="text-muted-foreground">Saturday</span>
                  <span className="font-semibold text-foreground">
                    8:00 AM - 9:00 PM
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-background/30 border border-white/5">
                  <span className="text-muted-foreground">Sunday</span>
                  <span className="font-semibold text-foreground">
                    9:00 AM - 8:00 PM
                  </span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-white/5">
                <p className="text-sm text-muted-foreground flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                  Priority service available for members
                </p>
              </div>
            </Card>

            <Card className="p-8 border border-white/5 bg-gradient-to-br from-primary/10 to-blue-500/10 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-foreground mb-4">
                Service Areas
              </h3>
              <ul className="grid grid-cols-1 gap-3">
                {[
                  "Mogadishu City Center",
                  "Hamar District",
                  "Hodan District",
                  "Karaan District",
                  "Daynile District",
                ].map((area) => (
                  <li
                    key={area}
                    className="flex items-center gap-3 text-muted-foreground"
                  >
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {area}
                  </li>
                ))}
              </ul>
            </Card>

            <div className="rounded-2xl overflow-hidden border border-white/10 h-64 bg-muted relative group">
              {/* Map Placeholder */}
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop')] bg-cover bg-center opacity-50 grayscale group-hover:grayscale-0 transition-all duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h4 className="text-lg font-bold text-white mb-2">
                  Visit Our Flagship Center
                </h4>
                <p className="text-white/80 text-sm">
                  Maka Al Mukarama Rd, Mogadishu
                </p>
                <Button
                  variant="secondary"
                  size="sm"
                  className="mt-4 w-full font-semibold"
                >
                  Get Directions
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}
