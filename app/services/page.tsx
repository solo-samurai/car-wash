import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Check,
  Home,
  Building2,
  Car,
  Clock,
  Droplets,
  Wrench,
  Fuel,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 z-0" />
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-black text-foreground mb-6 tracking-tighter">
            Our Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Choose the perfect care for your vehicle. From convenient home
            washes to comprehensive deep detailing at our partner centers.
          </p>
        </div>
      </section>

      {/* Solo Worker Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start gap-12 mb-12">
            <div className="flex-shrink-0 p-6 rounded-2xl bg-primary/10">
              <Home className="h-12 w-12 text-primary" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Solo Worker (Home Service)
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
                Our freelance professionals come to your doorstep. They use your
                water and electricity to provide a thorough exterior and
                interior wash. Perfect for regular maintenance without leaving
                your home.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <Badge variant="secondary" className="text-sm py-1 px-3">
                  Exterior Wash
                </Badge>
                <Badge variant="secondary" className="text-sm py-1 px-3">
                  Interior Vacuum
                </Badge>
                <Badge variant="secondary" className="text-sm py-1 px-3">
                  Tire Dressing
                </Badge>
                <Badge
                  variant="outline"
                  className="text-sm py-1 px-3 text-muted-foreground"
                >
                  No Deep Services
                </Badge>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Basic Home Wash</CardTitle>
                <CardDescription>Quick and efficient clean.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold mb-4">$25</div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-primary" /> Exterior Hand
                    Wash
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-primary" /> Wheel Cleaning
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-primary" /> Window Cleaning
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/book?mode=solo&service=basic" className="w-full">
                  <Button className="w-full">Book Now</Button>
                </Link>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Premium Home Wash</CardTitle>
                <CardDescription>Added shine and protection.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold mb-4">$45</div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-primary" /> All Basic
                    Features
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-primary" /> Spray Wax
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-primary" /> Tire Shine
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-primary" /> Interior Vacuum
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/book?mode=solo&service=premium" className="w-full">
                  <Button className="w-full">Book Now</Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Partner Center Section */}
      <section className="py-20 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start gap-12 mb-12">
            <div className="flex-shrink-0 p-6 rounded-2xl bg-primary/10">
              <Building2 className="h-12 w-12 text-primary" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Partner Washing Center
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
                Visit our partner facilities for comprehensive car care. From
                deep interior detailing to engine cleaning and fluid changes.
                Available via Drive-In or Pickup & Delivery.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <Badge variant="secondary" className="text-sm py-1 px-3">
                  Deep Cleaning
                </Badge>
                <Badge variant="secondary" className="text-sm py-1 px-3">
                  Oil Change
                </Badge>
                <Badge variant="secondary" className="text-sm py-1 px-3">
                  Engine Wash
                </Badge>
                <Badge variant="secondary" className="text-sm py-1 px-3">
                  Ceramic Coating
                </Badge>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-primary" />
                  Deep Interior Detail
                </CardTitle>
                <CardDescription>
                  Complete restoration of your interior.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold mb-4">$85</div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-primary" /> Shampoo Carpets &
                    Seats
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-primary" /> Leather
                    Conditioning
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-primary" /> Steam Cleaning
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link
                  href="/book?mode=center&service=interior"
                  className="w-full"
                >
                  <Button variant="outline" className="w-full">
                    Book Service
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Fuel className="h-5 w-5 text-primary" />
                  Oil & Fluid Change
                </CardTitle>
                <CardDescription>
                  Essential maintenance for your engine.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold mb-4">$60</div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-primary" /> Synthetic Oil
                    Change
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-primary" /> Fluid Top-up
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-primary" /> Filter
                    Replacement
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/book?mode=center&service=oil" className="w-full">
                  <Button variant="outline" className="w-full">
                    Book Service
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wrench className="h-5 w-5 text-primary" />
                  Engine Bay Cleaning
                </CardTitle>
                <CardDescription>Safe degreasing and dressing.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold mb-4">$45</div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-primary" /> Degreasing
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-primary" /> Steam Clean
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-primary" /> Protective
                    Dressing
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link
                  href="/book?mode=center&service=engine"
                  className="w-full"
                >
                  <Button variant="outline" className="w-full">
                    Book Service
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
