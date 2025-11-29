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
      bio: "With 15+ years in automotive care, Hassan established Sifeyn to bring world-class service to the region.",
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">
                Redefining Excellence Since 2016
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 text-balance tracking-tight animate-in fade-in slide-in-from-bottom-6 duration-700 delay-150">
              About Sifeyn
            </h1>
            <p className="text-xl md:text-2xl text-white/80 text-pretty max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300 font-light">
              The premier destination for automotive care, combining advanced
              technology with artisanal attention to detail.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-500 border-t border-white/10 pt-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 mb-2 group-hover:scale-110 transition-transform duration-500">
                    {stat.number}
                  </div>
                  <div className="text-sm md:text-base text-white/60 font-medium tracking-wide uppercase">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Story with Image */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -mr-20 -mt-20" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
            {/* Text Content */}
            <div>
              <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold mb-6 tracking-wide uppercase">
                Our Heritage
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6 tracking-tight">
                The Sifeyn Standard
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed font-light">
                <p>
                  Sifeyn was born from a singular vision: to elevate the
                  automotive care experience to a level of luxury and precision
                  previously unseen in the region. We don't just wash cars; we
                  restore them to their showroom glory.
                </p>
                <p>
                  Our philosophy is simple yet uncompromising. We treat every
                  vehicle as a masterpiece, employing only the most skilled
                  artisans and the finest, eco-conscious products available
                  globally.
                </p>
                <p>
                  Today, Sifeyn stands as a beacon of quality and trust. From
                  our mobile valet services to our state-of-the-art centers, we
                  are dedicated to preserving the beauty and value of your
                  vehicle.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl shadow-primary/10 border border-white/10 group">
              <Image
                src="/about-story.jpg"
                alt="Sifeyn Team at Work"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-secondary/5 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold mb-6 tracking-wide uppercase">
              Our Philosophy
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4 tracking-tight">
              Core Principles
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
              The pillars that define the Sifeyn experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {values.map((value, index) => (
              <Card
                key={index}
                className="p-8 border border-white/5 bg-background/50 backdrop-blur-sm hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-primary/10 to-blue-500/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
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
            <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold mb-6 tracking-wide uppercase">
              Leadership
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4 tracking-tight">
              The Experts
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
              Masters of their craft, dedicated to perfection
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="p-10 border border-white/5 bg-card hover:border-primary/20 hover:shadow-2xl transition-all duration-300 group"
              >
                {/* Avatar */}
                <div className="relative h-32 w-32 rounded-full bg-gradient-to-br from-primary/10 to-blue-500/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform duration-300">
                  <Users className="h-14 w-14 text-primary relative z-10" />
                </div>
                <h3 className="text-2xl font-bold text-foreground text-center mb-2">
                  {member.name}
                </h3>
                <p className="text-primary font-medium text-center mb-4 text-lg">
                  {member.role}
                </p>
                <p className="text-muted-foreground text-center leading-relaxed">
                  {member.bio.replace("CarWash Somalia", "Sifeyn")}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-slate-900 to-slate-800 rounded-[2.5rem] p-12 md:p-20 text-center shadow-2xl shadow-primary/20 relative overflow-hidden border border-white/10">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -mr-20 -mt-20" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] -ml-20 -mb-20" />

            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
                Experience Sifeyn
              </h2>
              <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto font-light">
                Join the exclusive circle of drivers who refuse to compromise on
                quality. Book your premium service today.
              </p>
              <Link href="/book">
                <Button
                  size="lg"
                  className="text-lg px-10 py-7 rounded-full bg-white text-slate-900 hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-xl font-bold"
                >
                  Book Appointment
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
