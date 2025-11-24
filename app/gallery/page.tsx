import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"

export default function GalleryPage() {
  const beforeAfterPhotos = [
    {
      id: 1,
      service: "Deep Detailing",
      vehicle: "2020 Toyota Camry",
      description: "Complete exterior polish and interior detailing",
    },
    {
      id: 2,
      service: "Paint Protection",
      vehicle: "2019 BMW 3 Series",
      description: "Ceramic coating and protective film application",
    },
    {
      id: 3,
      service: "Basic Wash",
      vehicle: "2021 Nissan Altima",
      description: "Premium exterior wash with tire shine",
    },
    {
      id: 4,
      service: "Full Service",
      vehicle: "2018 Range Rover",
      description: "Complete interior and exterior restoration",
    },
    {
      id: 5,
      service: "Interior Deep Clean",
      vehicle: "2022 Mercedes C-Class",
      description: "Upholstery cleaning and interior refresh",
    },
    {
      id: 6,
      service: "Engine Detailing",
      vehicle: "2019 Audi Q5",
      description: "Engine bay cleaning and degreasing",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header Navigation */}
      <header className="border-b border-border bg-card sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center">
              <Sparkles className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground hidden sm:inline">CarWash Somalia</span>
          </Link>
          <nav className="flex items-center gap-4">
            <Link href="/services" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Services
            </Link>
            <Link href="/gallery" className="text-sm font-medium text-primary">
              Gallery
            </Link>
            <Link href="/about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/faq" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
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
              Our Work Speaks for Itself
            </h1>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              Browse our gallery of transformations and see the quality of our professional car wash and detailing
              services
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {beforeAfterPhotos.map((item) => (
              <Card key={item.id} className="overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow">
                {/* Placeholder image with gradient */}
                <div className="relative h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-secondary opacity-10 group-hover:opacity-20 transition-opacity" />
                  <div className="relative text-center">
                    <Sparkles className="h-12 w-12 text-primary mx-auto mb-2" />
                    <p className="text-sm font-medium text-foreground">{item.service}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">{item.vehicle}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{item.description}</p>

                  {/* Before/After Toggle */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="text-xs font-medium text-foreground">BEFORE</div>
                    <div className="flex-1 h-1 bg-border rounded-full" />
                    <div className="text-xs font-medium text-primary">AFTER</div>
                  </div>

                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    View Details
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card className="p-8 text-center border-none bg-background">
              <div className="text-4xl font-bold text-primary mb-2">2,500+</div>
              <p className="text-muted-foreground">Cars Transformed</p>
            </Card>
            <Card className="p-8 text-center border-none bg-background">
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <p className="text-muted-foreground">Customer Satisfaction</p>
            </Card>
            <Card className="p-8 text-center border-none bg-background">
              <div className="text-4xl font-bold text-primary mb-2">5★</div>
              <p className="text-muted-foreground">Average Rating</p>
            </Card>
            <Card className="p-8 text-center border-none bg-background">
              <div className="text-4xl font-bold text-primary mb-2">8+</div>
              <p className="text-muted-foreground">Years Experience</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-primary to-accent rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-primary-foreground mb-4">Ready to See Your Car Transform?</h2>
            <p className="text-lg text-primary-foreground/90 mb-8">
              Book your service today and join thousands of satisfied customers
            </p>
            <Link href="/book">
              <Button size="lg" variant="secondary">
                Book Your Service
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
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
