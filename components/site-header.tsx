import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, Droplets } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2 font-bold text-xl text-primary">
          <Droplets className="h-6 w-6" />
          <span>SomaliWash</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="/#services" className="hover:text-primary transition-colors">
            Services
          </Link>
          <Link href="/pricing" className="hover:text-primary transition-colors">
            Pricing
          </Link>
          <Link href="/dashboard" className="hover:text-primary transition-colors">
            Dashboard
          </Link>
        </nav>
        <div className="hidden md:flex items-center gap-4">
          <Link href="/login">
            <Button variant="ghost" size="sm">
              Log In
            </Button>
          </Link>
          <Link href="/book">
            <Button size="sm">Book a Wash</Button>
          </Link>
        </div>
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col gap-4 mt-8">
              <Link href="/" className="text-lg font-medium">
                Home
              </Link>
              <Link href="/#services" className="text-lg font-medium">
                Services
              </Link>
              <Link href="/pricing" className="text-lg font-medium">
                Pricing
              </Link>
              <Link href="/dashboard" className="text-lg font-medium">
                Dashboard
              </Link>
              <div className="flex flex-col gap-2 mt-4">
                <Link href="/login">
                  <Button variant="outline" className="w-full bg-transparent">
                    Log In
                  </Button>
                </Link>
                <Link href="/book">
                  <Button className="w-full">Book a Wash</Button>
                </Link>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
