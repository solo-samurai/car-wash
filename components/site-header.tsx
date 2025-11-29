"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, Droplets, X, ChevronRight } from "lucide-react";
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
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/#services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ];

  const isSolid = variant === "solid" || isScrolled;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500 pointer-events-none">
      <header
        className={cn(
          "pointer-events-auto transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1) flex items-center justify-between",
          isSolid
            ? "mt-4 w-[92%] md:w-[85%] max-w-7xl rounded-full bg-white/5 backdrop-blur-3xl backdrop-saturate-150 border border-white/20 shadow-2xl shadow-black/20 py-3 px-6 supports-[backdrop-filter]:bg-white/5"
            : "w-full bg-transparent py-6 px-6 md:px-12 border-b border-transparent"
        )}
      >
        <Link href="/" className="flex items-center gap-3 group">
          <div
            className={cn(
              "relative flex items-center justify-center rounded-full bg-gradient-to-br from-primary via-blue-500 to-cyan-400 text-white shadow-lg shadow-primary/20 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3",
              isSolid ? "h-9 w-9" : "h-11 w-11"
            )}
          >
            <Droplets
              className={cn("fill-white/20", isSolid ? "h-5 w-5" : "h-6 w-6")}
            />
            <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
          <span
            className={cn(
              "font-black tracking-tighter transition-all duration-300",
              isSolid ? "text-xl text-white" : "text-2xl text-white"
            )}
          >
            Sifeyn
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium px-5 py-2.5 rounded-full transition-all duration-300",
                "text-white/80 hover:text-white hover:bg-white/10"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link href="/login">
            <Button
              variant="ghost"
              size="sm"
              className={cn(
                "rounded-full px-5 font-medium transition-colors text-white hover:bg-white/10 hover:text-white",
                isSolid && "hidden lg:inline-flex"
              )}
            >
              Log In
            </Button>
          </Link>
          <Link href="/book">
            <Button
              size={isSolid ? "sm" : "default"}
              className={cn(
                "rounded-full font-bold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 hover:scale-105 bg-gradient-to-r from-primary to-blue-600 border-0",
                isSolid ? "px-6 h-9 text-sm" : "px-8 h-11 text-base"
              )}
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
              className="rounded-full text-white hover:bg-white/10"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[300px] sm:w-[400px] border-l-white/10 bg-slate-950/95 backdrop-blur-2xl p-0"
          >
            <div className="flex flex-col h-full">
              <div className="p-6 border-b border-white/5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-blue-500 text-white shadow-lg">
                    <Droplets className="h-5 w-5" />
                  </div>
                  <SheetTitle className="text-xl font-black tracking-tight text-white">
                    Sifeyn
                  </SheetTitle>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto py-6 px-4">
                <nav className="flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <SheetClose asChild key={link.href}>
                      <Link
                        href={link.href}
                        className="flex items-center justify-between text-lg font-medium px-4 py-4 rounded-2xl text-slate-300 hover:text-white hover:bg-white/5 transition-all group"
                      >
                        {link.label}
                        <ChevronRight className="h-4 w-4 text-slate-500 group-hover:text-primary transition-colors" />
                      </Link>
                    </SheetClose>
                  ))}
                </nav>
              </div>

              <div className="p-6 border-t border-white/5 bg-white/5">
                <div className="flex flex-col gap-3">
                  <Link href="/login">
                    <Button
                      variant="outline"
                      className="w-full justify-center gap-2 h-12 rounded-xl border-white/10 bg-transparent text-white hover:bg-white/10 hover:text-white transition-all"
                    >
                      Log In
                    </Button>
                  </Link>
                  <Link href="/book">
                    <Button className="w-full justify-center gap-2 h-12 rounded-xl shadow-lg shadow-primary/20 bg-gradient-to-r from-primary to-blue-600 font-bold text-md text-white">
                      Book Appointment
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </header>
    </div>
  );
}
