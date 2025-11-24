import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Users, Target, Lightbulb, Award, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Quality First",
      description: "We never compromise on the quality of our services. Every car receives premium care and attention.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Customer Focused",
      description: "Your satisfaction is our priority. We listen to feedback and continuously improve our services.",
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Innovation",
      description: "We use the latest technology and eco-friendly products for superior results.",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Excellence",
      description: "With 8+ years of experience, we've perfected the art of professional car care.",
    },
  ]

  const teamMembers = [
    {
      name: "Hassan Mohamed",
      role: "Founder & CEO",
      bio: "With 15+ years in automotive care, Hassan established CarWash Somalia to bring world-class service to the region.",
    },
    {
      name: "Fatima Ali",
      role: "Operations Manager",
      bio: "Ensures every customer receives exceptional service and manages our professional team of specialists.",
    },
    {
      name: "Ahmed Ibrahim",
      role: "Lead Detailer",
      bio: "Expert in paint protection and ceramic coating with international certifications.",
    },
    {
      name: "Omar Hassan",
      role: "Customer Service Lead",
      bio: "Dedicated to creating memorable experiences and building lasting customer relationships.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header Navigation */}
      <header className="border-b border-border bg-card sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center">
              <Users className="h-6 w-6 text-primary-foreground" />
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
            <Link href="/about" className="text-sm font-medium text-primary">
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
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">About CarWash Somalia</h1>
            <p className="text-lg text-muted-foreground text-pretty">
              Bringing professional car care excellence to Somalia since 2016
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8">Our Story</h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                CarWash Somalia was founded with a simple mission: to bring world-class car care services to our
                community. What started as a small operation has grown into the most trusted car wash and detailing
                service in the region.
              </p>
              <p>
                We believe every vehicle deserves premium care, regardless of its make or model. Our team of
                professionally trained specialists uses only the highest-quality products and latest technologies to
                ensure your car receives the best treatment possible.
              </p>
              <p>
                Today, we're proud to serve thousands of satisfied customers and have become a trusted name in
                automotive care across Somalia. Our commitment to quality, reliability, and customer satisfaction
                remains unwavering.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do and define our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="p-8">
                <div className="h-12 w-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Dedicated professionals committed to delivering exceptional car care
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card key={index} className="p-8 border-2 border-primary/20">
                {/* Avatar placeholder */}
                <div className="h-24 w-24 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center mx-auto mb-6">
                  <Users className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground text-center mb-1">{member.name}</h3>
                <p className="text-primary font-medium text-center mb-4">{member.role}</p>
                <p className="text-muted-foreground text-center">{member.bio}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-primary to-accent rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-primary-foreground mb-4">Experience Our Difference</h2>
            <p className="text-lg text-primary-foreground/90 mb-8">
              Join thousands of satisfied customers who trust us with their vehicles
            </p>
            <Link href="/book">
              <Button size="lg" variant="secondary">
                Book Your Service Today
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
