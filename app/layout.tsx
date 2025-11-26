import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { User, Lock } from "lucide-react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CarWash Somalia - Premium Car Wash & Care Services",
  description:
    "Professional car washing, maintenance, and detailing services in Somalia. Book online for home service or drive-in appointments.",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased relative`}
      >
        {/* Helper for development navigation - normally this would be handled by auth state */}
        <div className="fixed bottom-4 right-4 z-50 hidden md:flex flex-col gap-2">
          <Link href="/dashboard">
            <Button
              size="sm"
              variant="secondary"
              className="shadow-lg border border-border w-full justify-start"
            >
              <User className="mr-2 h-4 w-4" />
              User Dashboard
            </Button>
          </Link>
          <Link href="/admin">
            <Button
              size="sm"
              variant="default"
              className="shadow-lg border border-border w-full justify-start bg-slate-900 text-white hover:bg-slate-800"
            >
              <Lock className="mr-2 h-4 w-4" />
              Admin Dashboard
            </Button>
          </Link>
        </div>
        {children}
      </body>
    </html>
  );
}
