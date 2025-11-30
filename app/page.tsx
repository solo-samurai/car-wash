import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ServiceCard } from "@/components/service-card";
import { TestimonialCard } from "@/components/testimonial-card";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import {
  Droplets,
  Sparkles,
  Wrench,
  Fuel,
  Home,
  Car,
  ArrowRight,
  ShieldCheck,
  Clock,
  Trophy,
} from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary selection:text-white">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-30">
        {/* Background Gradients */}
        <div className="absolute inset-0 bg-background z-0" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background z-0" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/10 rounded-full blur-[120px] z-0" />

        {/* Animated Particles/Overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 z-0 mix-blend-overlay" />

        <div className="container relative z-10 px-4 mx-auto text-center">
          <h1 className="animate-fade-in-up animation-delay-200 text-6xl md:text-8xl lg:text-9xl font-black text-white mb-8 tracking-tighter leading-[1] drop-shadow-2xl">
            Sifeyn <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-400 to-secondary animate-gradient-x">
              Premium Care
            </span>
          </h1>

          <p className="animate-fade-in-up animation-delay-300 text-lg md:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed font-light tracking-wide">
            Elevate your driving experience with Sifeyn's world-class detailing
            and maintenance services.
          </p>

          <div className="animate-fade-in-up animation-delay-400 flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="/book">
              <Button
                size="lg"
                className="h-16 px-10 text-xl font-semibold rounded-full shadow-[0_0_30px_-5px_var(--color-primary)] hover:shadow-[0_0_50px_-10px_var(--color-primary)] hover:scale-105 transition-all duration-300 bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Book Appointment
                <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
            </Link>
            <Link href="#services">
              <Button
                size="lg"
                variant="outline"
                className="h-16 px-10 text-xl font-semibold rounded-full border-white/10 text-white hover:bg-white/5 hover:text-white bg-white/5 backdrop-blur-sm hover:scale-105 transition-all duration-300"
              >
                Explore Services
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="animate-fade-in-up animation-delay-500 mt-32 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/5 pt-12 max-w-6xl mx-auto">
            {[
              { label: "Happy Clients", value: "5k+" },
              { label: "Years Experience", value: "10+" },
              { label: "Satisfaction", value: "100%" },
              { label: "Support", value: "24/7" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center group cursor-default p-4 rounded-2xl hover:bg-white/5 transition-colors duration-300"
              >
                <div className="text-5xl font-black text-white mb-2 group-hover:text-primary transition-colors duration-300">
                  {stat.value}
                </div>
                <p className="text-sm text-slate-500 font-bold uppercase tracking-widest">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - Merged into a better flow */}
      <section className="py-32 bg-background relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: <ShieldCheck className="h-10 w-10 text-secondary" />,
                title: "Premium Protection",
                desc: "Advanced ceramic coatings that protect your paint for years, not weeks.",
              },
              {
                icon: <Clock className="h-10 w-10 text-secondary" />,
                title: "Time Efficient",
                desc: "Quick turnaround times without compromising on quality or attention to detail.",
              },
              {
                icon: <Trophy className="h-10 w-10 text-secondary" />,
                title: "Award Winning",
                desc: "Recognized as the best car care service in the region for 3 years running.",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="group p-10 rounded-3xl bg-card border border-white/5 hover:border-primary/20 hover:bg-white/5 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="h-20 w-20 rounded-2xl bg-secondary/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-32 bg-secondary/5 relative overflow-hidden"
      >
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent z-0" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-6xl font-black text-foreground mb-8 tracking-tighter">
              Premium Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Tailored care packages designed to protect and enhance your
              vehicle's value.
            </p>
          </div>

          {/* Service Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mt-24">
            {/* Option 1: Home Wash */}
            <div className="group p-8 rounded-3xl border border-white/10 bg-gradient-to-br from-card to-background hover:border-primary/30 transition-all duration-500 relative overflow-hidden flex flex-col">
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 flex flex-col h-full">
                <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <Home className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  Home Wash
                </h3>
                <div className="mb-6 flex-grow">
                  <p className="text-muted-foreground leading-relaxed mb-2">
                    <span className="font-semibold text-primary">
                      Solo Worker
                    </span>
                  </p>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    We come to you. Perfect for a quick, professional wash using
                    your water & electricity.
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      Basic & Full Washes
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      We Come to You
                    </li>
                  </ul>
                </div>
                <Link href="/book?mode=solo" className="w-full">
                  <Button
                    variant="outline"
                    className="w-full rounded-full border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    Book Home Wash
                  </Button>
                </Link>
              </div>
            </div>

            {/* Option 2: Drive-In */}
            <div className="group p-8 rounded-3xl border border-white/10 bg-gradient-to-br from-card to-background hover:border-primary/30 transition-all duration-500 relative overflow-hidden flex flex-col">
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 flex flex-col h-full">
                <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <Car className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  Visit Center
                </h3>
                <div className="mb-6 flex-grow">
                  <p className="text-muted-foreground leading-relaxed mb-2">
                    <span className="font-semibold text-primary">
                      Partner Center
                    </span>
                  </p>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    Drive to one of our partner centers for a complete service
                    experience.
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      Full Detail & Maintenance
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      Professional Equipment
                    </li>
                  </ul>
                </div>
                <Link href="/book?mode=center" className="w-full">
                  <Button
                    variant="outline"
                    className="w-full rounded-full border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    Find Center
                  </Button>
                </Link>
              </div>
            </div>

            {/* Option 3: Pickup & Delivery */}
            <div className="group p-8 rounded-3xl border border-white/10 bg-gradient-to-br from-card to-background hover:border-primary/30 transition-all duration-500 relative overflow-hidden flex flex-col">
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 flex flex-col h-full">
                <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  Pickup & Delivery
                </h3>
                <div className="mb-6 flex-grow">
                  <p className="text-muted-foreground leading-relaxed mb-2">
                    <span className="font-semibold text-primary">
                      Partner Center
                    </span>
                  </p>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    We pick up your car, give it the royal treatment, and bring
                    it back.
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      Full Deep Service
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      Maximum Convenience
                    </li>
                  </ul>
                </div>
                <Link href="/book?mode=pickup" className="w-full">
                  <Button
                    variant="outline"
                    className="w-full rounded-full border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    Schedule Pickup
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="py-32 bg-slate-950 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-50" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-8 tracking-tighter">
              Client Stories
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Hear from our valued clients about their experience with Sifeyn.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <TestimonialCard
              name="Ahmed Hassan"
              role="Business Executive"
              content="The attention to detail is unmatched. My car looks better than the day I bought it. Highly recommended for anyone who values quality."
              rating={5}
            />
            <div className="transform md:-translate-y-8">
              <TestimonialCard
                name="Fatima Mohamed"
                role="Interior Designer"
                content="I love the eco-friendly products they use. It's great to know my car is being cleaned safely and responsibly. Excellent service!"
                rating={5}
              />
            </div>
            <TestimonialCard
              name="Omar Ibrahim"
              role="Car Enthusiast"
              content="Finally, a car wash that understands car culture. They treat every vehicle with respect and the results speak for themselves."
              rating={5}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-blue-900/90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent" />

        <div className="container relative z-10 mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-black text-white mb-10 tracking-tighter leading-tight">
              Ready to Make Your Car Shine?
            </h2>
            <p className="text-2xl text-white/90 mb-12 leading-relaxed font-light max-w-2xl mx-auto">
              Book your first service today and experience the difference of
              professional car care with our expert team.
            </p>
            <Link href="/book">
              <Button
                size="lg"
                variant="secondary"
                className="h-20 px-12 text-2xl font-bold rounded-full shadow-[0_0_40px_-10px_rgba(255,255,255,0.5)] hover:shadow-[0_0_60px_-10px_rgba(255,255,255,0.7)] hover:scale-105 transition-all duration-300 gap-4"
              >
                Book Your Service Now
                <ArrowRight className="h-6 w-6" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
