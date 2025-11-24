"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ArrowRight,
  Sparkles,
  ZoomIn,
  Star,
  ShieldCheck,
  Trophy,
} from "lucide-react";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function GalleryPage() {
  const beforeAfterPhotos = [
    {
      id: 1,
      service: "Deep Detailing",
      vehicle: "2020 Toyota Camry",
      description: "Complete exterior polish and interior detailing",
      image:
        "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: 2,
      service: "Paint Protection",
      vehicle: "2019 BMW 3 Series",
      description: "Ceramic coating and protective film application",
      image:
        "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: 3,
      service: "Basic Wash",
      vehicle: "2021 Nissan Altima",
      description: "Premium exterior wash with tire shine",
      image:
        "https://images.unsplash.com/photo-1520340356584-7db00e720ca9?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: 4,
      service: "Full Service",
      vehicle: "2018 Range Rover",
      description: "Complete interior and exterior restoration",
      image:
        "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: 5,
      service: "Interior Deep Clean",
      vehicle: "2022 Mercedes C-Class",
      description: "Upholstery cleaning and interior refresh",
      image:
        "https://images.unsplash.com/photo-1589656966895-2f33e7653819?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: 6,
      service: "Engine Detailing",
      vehicle: "2019 Audi Q5",
      description: "Engine bay cleaning and degreasing",
      image:
        "https://images.unsplash.com/photo-1503376763036-066120622c74?q=80&w=2070&auto=format&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/30">
      <SiteHeader variant="solid" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background z-0" />
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="container relative z-10 mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-in-up">
            <Sparkles className="h-4 w-4" />
            <span>Premium Results</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 tracking-tight animate-fade-in-up [animation-delay:100ms]">
            Our Work Speaks for <span className="text-primary">Itself</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up [animation-delay:200ms]">
            Browse our gallery of transformations and see the quality of our
            professional car wash and detailing services.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 md:py-20 bg-background relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {beforeAfterPhotos.map((item, index) => (
              <Card
                key={item.id}
                className="group overflow-hidden border-0 bg-card/50 backdrop-blur-sm shadow-lg hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 rounded-2xl animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 z-10 transition-opacity duration-300 group-hover:opacity-40" />
                  <img
                    src={item.image}
                    alt={item.vehicle}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <Button
                      size="icon"
                      variant="secondary"
                      className="rounded-full h-10 w-10 shadow-lg"
                    >
                      <ZoomIn className="h-5 w-5" />
                    </Button>
                  </div>

                  <div className="absolute bottom-4 left-4 z-20">
                    <div className="inline-flex items-center px-2.5 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-bold mb-2 backdrop-blur-md">
                      {item.service}
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                      {item.vehicle}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 border-t border-white/5">
                  <p className="text-muted-foreground mb-6 line-clamp-2">
                    {item.description}
                  </p>

                  {/* Before/After Toggle Visual */}
                  <div className="flex items-center gap-3 mb-6 p-3 rounded-xl bg-background/50 border border-white/5">
                    <div className="text-xs font-bold text-muted-foreground tracking-wider">
                      BEFORE
                    </div>
                    <div className="flex-1 h-1.5 bg-muted rounded-full overflow-hidden relative">
                      <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-primary to-secondary" />
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-md border-2 border-primary" />
                    </div>
                    <div className="text-xs font-bold text-primary tracking-wider">
                      AFTER
                    </div>
                  </div>

                  <Button
                    variant="ghost"
                    className="w-full justify-between group/btn hover:bg-primary/10 hover:text-primary"
                  >
                    View Transformation
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-8 border-primary/20 hover:bg-primary/10 hover:text-primary"
            >
              Load More Projects
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { label: "Cars Transformed", value: "2,500+", icon: Trophy },
              { label: "Customer Satisfaction", value: "98%", icon: Star },
              { label: "Average Rating", value: "5.0", icon: Sparkles },
              { label: "Years Experience", value: "8+", icon: ShieldCheck },
            ].map((stat, index) => (
              <Card
                key={index}
                className="p-8 text-center border-white/5 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="h-12 w-12 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-4xl font-bold text-foreground mb-2 tracking-tight">
                  {stat.value}
                </div>
                <p className="text-muted-foreground font-medium">
                  {stat.label}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary via-primary/80 to-secondary rounded-3xl p-12 md:p-16 text-center relative overflow-hidden shadow-2xl shadow-primary/20">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay" />
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/20 blur-[80px] rounded-full" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-black/20 blur-[80px] rounded-full" />

            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                Ready to See Your Car Transform?
              </h2>
              <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                Book your service today and join thousands of satisfied
                customers who trust us with their vehicles.
              </p>
              <Link href="/book">
                <Button
                  size="lg"
                  variant="secondary"
                  className="h-14 px-8 text-lg font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  Book Your Service
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
