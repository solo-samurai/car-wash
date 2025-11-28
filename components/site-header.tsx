"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, Droplets, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function SiteHeader({
  variant = "default",
}: {
  variant?: "default" | "solid";
}) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  const isSolid = variant === "solid" || isScrolled;

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isSolid
          ? "bg-background/80 backdrop-blur-md border-b shadow-sm py-4"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-blue-600 text-white shadow-lg transition-transform group-hover:scale-105">
            <Droplets className="h-6 w-6" />
          </div>
          <span
            className={cn(
              "text-xl font-bold tracking-tight transition-colors",
              isSolid ? "text-foreground" : "text-foreground md:text-white"
            )}
          >
            SomaliWash
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary relative group",
                isSolid
                  ? "text-foreground/80"
                  : "text-white/90 hover:text-white"
              )}
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link href="/login">
            <Button
              variant="ghost"
              size="sm"
              className={cn(
                isSolid
                  ? "text-foreground"
                  : "text-white hover:bg-white/20 hover:text-white"
              )}
            >
              Log In
            </Button>
          </Link>
          <Link href="/book">
            <Button
              size="sm"
              className="rounded-full px-6 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all"
            >
              Book Now
            </Button>
          </Link>
        </div>

        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                isSolid ? "text-foreground" : "text-foreground md:text-white"
              )}
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[300px] sm:w-[400px] border-l-primary/20"
            aria-describedby="mobile-menu"
          >
            <div className="flex flex-col gap-8 mt-8">
              <div className="flex items-center gap-2 px-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white">
                  <Droplets className="h-6 w-6" />
                </div>
                <SheetTitle className="text-xl font-bold">
                  SomaliWash
                </SheetTitle>
              </div>

              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <Link
                      href={link.href}
                      className="text-lg font-medium px-4 py-2 rounded-lg hover:bg-secondary/50 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
              </nav>

              <SheetFooter className="flex flex-col px-4 gap-3 mt-auto mb-8">
                <Link href="/login">
                  <Button
                    variant="outline"
                    className="w-full justify-start gap-2"
                    size="lg"
                  >
                    Log In
                  </Button>
                </Link>
                <Link href="/book">
                  <Button
                    className="w-full justify-start gap-2 shadow-lg shadow-primary/20"
                    size="lg"
                  >
                    Book Appointment
                  </Button>
                </Link>
              </SheetFooter>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
