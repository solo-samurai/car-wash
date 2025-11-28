import Link from "next/link";
import {
  Droplets,
  Facebook,
  Instagram,
  Twitter,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function SiteFooter() {
  return (
    <footer className="bg-slate-950 text-slate-200 border-t border-slate-800">
      <div className="container px-4 mx-auto py-16 md:py-24">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2 font-bold text-2xl text-white">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white">
                <Droplets className="h-6 w-6" />
              </div>
              <span>SomaliWash</span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Premium car care services delivered to your doorstep or at our
              service centers. We combine technology with expertise for the
              ultimate shine.
            </p>
            <div className="flex gap-4">
              <Link
                href="#"
                className="h-10 w-10 flex items-center justify-center rounded-full bg-slate-900 hover:bg-primary hover:text-white transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="h-10 w-10 flex items-center justify-center rounded-full bg-slate-900 hover:bg-primary hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="h-10 w-10 flex items-center justify-center rounded-full bg-slate-900 hover:bg-primary hover:text-white transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="font-bold text-lg text-white">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link
                  href="/gallery"
                  className="text-slate-400 hover:text-primary transition-colors flex items-center gap-2"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-primary/50" />
                  Our Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-slate-400 hover:text-primary transition-colors flex items-center gap-2"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-primary/50" />
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-slate-400 hover:text-primary transition-colors flex items-center gap-2"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-primary/50" />
                  Contact Support
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="font-bold text-lg text-white">Contact Info</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3 text-slate-400">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-1" />
                <span>
                  Maka Al Mukarama St,
                  <br />
                  Mogadishu, Somalia
                </span>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <a
                  href="tel:+252615550000"
                  className="hover:text-white transition-colors"
                >
                  +252 61 555 0000
                </a>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <a
                  href="mailto:info@somaliwash.so"
                  className="hover:text-white transition-colors"
                >
                  info@somaliwash.so
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="font-bold text-lg text-white">Newsletter</h3>
            <p className="text-slate-400">
              Subscribe to our newsletter for the latest updates and exclusive
              offers.
            </p>
            <form className="flex flex-col gap-3">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-slate-900 border-slate-800 text-white placeholder:text-slate-500 focus-visible:ring-primary"
              />
              <Button className="w-full shadow-lg shadow-primary/20">
                Subscribe Now
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-16 border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} SomaliWash. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
