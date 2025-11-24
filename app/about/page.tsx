import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Users,
  Target,
  Lightbulb,
  Award,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function AboutPage() {
  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Quality First",
      description:
        "We never compromise on the quality of our services. Every car receives premium care and attention.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Customer Focused",
      description:
        "Your satisfaction is our priority. We listen to feedback and continuously improve our services.",
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Innovation",
      description:
        "We use the latest technology and eco-friendly products for superior results.",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Excellence",
      description:
        "With 8+ years of experience, we've perfected the art of professional car care.",
    },
  ];

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
  ];

  const stats = [
    { number: "8+", label: "Years of Excellence" },
    { number: "10K+", label: "Happy Customers" },
    { number: "50K+", label: "Cars Serviced" },
    { number: "4.9", label: "Average Rating" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader variant="solid" />

      {/* Hero Section with Background Image */}
      <section className="relative py-32 md:py-40 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/about-hero.jpg"
            alt="CarWash Somalia Facility"
            fill
            className="object-cover"
            priority
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-primary/40" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 backdrop-blur-sm text-primary-foreground mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <CheckCircle2 className="h-4 w-4" />
              <span className="text-sm font-medium">Trusted Since 2016</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 text-balance animate-in fade-in slide-in-from-bottom-6 duration-700 delay-150">
              About CarWash Somalia
            </h1>
            <p className="text-xl md:text-2xl text-white/90 text-pretty max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
              Bringing professional car care excellence to Somalia with passion,
              precision, and pride
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-500">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm md:text-base text-white/80">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Story with Image */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
            {/* Text Content */}
            <div>
              <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                Our Journey
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  CarWash Somalia was founded with a simple mission: to bring
                  world-class car care services to our community. What started
                  as a small operation has grown into the most trusted car wash
                  and detailing service in the region.
                </p>
                <p>
                  We believe every vehicle deserves premium care, regardless of
                  its make or model. Our team of professionally trained
                  specialists uses only the highest-quality products and latest
                  technologies to ensure your car receives the best treatment
                  possible.
                </p>
                <p>
                  Today, we're proud to serve thousands of satisfied customers
                  and have become a trusted name in automotive care across
                  Somalia. Our commitment to quality, reliability, and customer
                  satisfaction remains unwavering.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/about-story.jpg"
                alt="Our Team at Work"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gradient-to-br from-muted/30 via-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              What Drives Us
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do and define our commitment
              to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {values.map((value, index) => (
              <Card
                key={index}
                className="p-8 border-2 border-primary/10 hover:border-primary/30 hover:shadow-xl hover:scale-105 transition-all duration-300 group"
              >
                <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              The People Behind Our Success
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Dedicated professionals committed to delivering exceptional car
              care
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="p-10 border-2 border-primary/10 hover:border-primary/30 hover:shadow-2xl transition-all duration-300 group"
              >
                {/* Avatar */}
                <div className="relative h-32 w-32 rounded-full bg-gradient-to-br from-primary/40 to-accent/40 flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform duration-300 shadow-lg">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 animate-pulse" />
                  <Users className="h-16 w-16 text-primary relative z-10" />
                </div>
                <h3 className="text-2xl font-bold text-foreground text-center mb-2">
                  {member.name}
                </h3>
                <p className="text-primary font-semibold text-center mb-4 text-lg">
                  {member.role}
                </p>
                <p className="text-muted-foreground text-center leading-relaxed">
                  {member.bio}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary via-primary to-accent rounded-3xl p-12 md:p-16 text-center shadow-2xl relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />

            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
                Experience Our Difference
              </h2>
              <p className="text-xl text-primary-foreground/95 mb-10 max-w-2xl mx-auto">
                Join thousands of satisfied customers who trust us with their
                vehicles. Book today and discover the CarWash Somalia
                difference!
              </p>
              <Link href="/book">
                <Button
                  size="lg"
                  variant="secondary"
                  className="text-lg px-8 py-6 hover:scale-105 transition-transform duration-300 shadow-xl"
                >
                  Book Your Service Today
                  <ArrowRight className="ml-2 h-6 w-6" />
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
