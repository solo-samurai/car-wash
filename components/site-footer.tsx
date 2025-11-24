import Link from "next/link"
import { Droplets, Facebook, Instagram, Twitter } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 font-bold text-xl text-primary">
              <Droplets className="h-6 w-6" />
              <span>SomaliWash</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Premium car care services delivered to your doorstep or at our service centers. Quality you can trust.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold">Services</h3>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
              Basic Wash
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
              Deep Cleaning
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
              Oil Change
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
              Engine Detailing
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold">Company</h3>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
              About Us
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
              Contact
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
              Careers
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
              Privacy Policy
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold">Connect</h3>
            <div className="flex gap-4">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Mogadishu, Somalia
              <br />
              +252 61 555 0000
            </p>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} SomaliWash. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
