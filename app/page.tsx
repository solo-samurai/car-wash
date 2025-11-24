import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ServiceCard } from "@/components/service-card"
import { TestimonialCard } from "@/components/testimonial-card"
import { PricingCard } from "@/components/pricing-card"
import { Droplets, Sparkles, Wrench, Fuel, Home, Car, ArrowRight } from "lucide-react"
import Link from "next/link"
import { PromotionsBanner } from "@/components/promotions-banner"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <PromotionsBanner
        title="Limited Time Offer!"
        description="Get 30% off on all services this November. Use code: SHINE30"
        discount="30%"
        ctaText="Book Now"
        bgColor="bg-gradient-to-r from-primary to-accent"
      />

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center">
              <Droplets className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">CarWash Somalia</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Services
            </a>
            <a
              href="#testimonials"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Testimonials
            </a>
            <a href="#pricing" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Pricing
            </a>
            <a href="/gallery" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Gallery
            </a>
            <a href="/about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="/faq" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              FAQ
            </a>
            <Link href="/book">
              <Button className="ml-2">Book Now</Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-accent/5 to-primary/10 py-24 md:py-40">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Professional Car Care Solutions</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 text-balance leading-tight">
              Your Car Deserves to Shine
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto leading-relaxed">
              Professional car washing, maintenance, and detailing services in Somalia. We bring the shine back to your
              vehicle with expert care and eco-friendly products.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button size="lg" className="text-base gap-2">
                  Book a Wash
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="text-base bg-transparent">
                  Explore Services
                </Button>
              </Link>
            </div>

            <div className="mt-16 flex flex-col sm:flex-row gap-8 justify-center">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">5000+</div>
                <p className="text-muted-foreground">Satisfied Customers</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">10+</div>
                <p className="text-muted-foreground">Years Experience</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">100%</div>
                <p className="text-muted-foreground">Satisfaction Rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Premium Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              From quick washes to comprehensive care packages, we offer everything your vehicle needs to look and
              perform its best
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <ServiceCard
              icon={<Droplets className="h-8 w-8" />}
              title="Basic Wash"
              description="Exterior wash with premium soap, tire cleaning, and hand drying"
              price="$15"
            />
            <ServiceCard
              icon={<Sparkles className="h-8 w-8" />}
              title="Deep Cleaning"
              description="Complete interior and exterior detailing with wax protection"
              price="$45"
            />
            <ServiceCard
              icon={<Sparkles className="h-8 w-8" />}
              title="Interior Wash"
              description="Vacuum, upholstery cleaning, dashboard polish, and air freshening"
              price="$25"
            />
            <ServiceCard
              icon={<Wrench className="h-8 w-8" />}
              title="Oil Change"
              description="Professional oil change service with quality engine oil"
              price="$35"
            />
            <ServiceCard
              icon={<Fuel className="h-8 w-8" />}
              title="Fluid Top-Up"
              description="Check and refill all essential fluids including coolant and washer fluid"
              price="$20"
            />
            <ServiceCard
              icon={<Car className="h-8 w-8" />}
              title="Tire Check"
              description="Tire pressure check, alignment inspection, and tread depth analysis"
              price="$15"
            />
          </div>

          <div className="mt-16 space-y-4 text-center mb-12">
            <h3 className="text-2xl font-semibold text-foreground">How We Serve You</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8 border-2 border-primary/20 hover:border-primary/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="h-14 w-14 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Home className="h-7 w-7 text-primary" />
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Home Service</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    We come to your location with all equipment. Perfect for busy schedules and convenience.
                  </p>
                  <Button variant="outline" className="w-full bg-transparent">
                    Schedule Home Visit
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="p-8 border-2 border-primary/20 hover:border-primary/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="h-14 w-14 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Car className="h-7 w-7 text-primary" />
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Drive-In Service</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Visit our state-of-the-art facility for quick and professional service with comfortable waiting
                    areas.
                  </p>
                  <Button variant="outline" className="w-full bg-transparent">
                    Find Location
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 text-primary font-medium hover:gap-3 transition-all"
            >
              View All Services & Details
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Simple, Transparent Pricing</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Choose a monthly plan that fits your needs and save up to 30% on regular service rates
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Link href="/subscribe">
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
              />
            </Link>
            <Link href="/subscribe">
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
              />
            </Link>
            <Link href="/subscribe">
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
              />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">What Our Customers Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Join thousands of satisfied customers who trust us with their vehicles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <TestimonialCard
              name="Ahmed Hassan"
              role="Business Owner"
              content="Excellent service! My car looks brand new every time. The home service option is so convenient for my busy schedule."
              rating={5}
            />
            <TestimonialCard
              name="Fatima Mohamed"
              role="Teacher"
              content="Very professional team and affordable prices. I've been using their monthly subscription and it's great value for money."
              rating={5}
            />
            <TestimonialCard
              name="Omar Ibrahim"
              role="Engineer"
              content="Best car wash in Somalia! They pay attention to every detail and the staff is always friendly and helpful."
              rating={5}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary via-primary/90 to-primary/80">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Ready to Make Your Car Shine?
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed">
              Book your first service today and experience the difference of professional car care with our expert team
            </p>
            <Link href="/book">
              <Button size="lg" variant="secondary" className="text-base gap-2">
                Book Your Service Now
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                  <Droplets className="h-5 w-5 text-primary-foreground" />
                </div>
                <span className="text-lg font-bold text-foreground">CarWash Somalia</span>
              </div>
              <p className="text-sm text-muted-foreground">Professional car wash and care services across Somalia.</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">Services</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Car Wash
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Detailing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Oil Change
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Maintenance
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">Contact</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Mogadishu, Somalia</li>
                <li>info@carwash.so</li>
                <li>+252 61 234 5678</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>&copy; 2025 CarWash Somalia. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
