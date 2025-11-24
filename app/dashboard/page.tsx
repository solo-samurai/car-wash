"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Droplets,
  Calendar,
  MapPin,
  Car,
  CreditCard,
  History,
  User,
  LogOut,
  LayoutDashboard,
  Plus,
  MoreHorizontal,
} from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function UserDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  // Mock Data
  const upcomingBookings = [
    {
      id: 1,
      service: "Deep Cleaning",
      date: "2025-11-25",
      time: "10:00 AM",
      location: "Car Wash Center",
      status: "Confirmed",
    },
    { id: 2, service: "Basic Wash", date: "2025-12-02", time: "02:00 PM", location: "Home Service", status: "Pending" },
  ]

  const pastBookings = [
    { id: 101, service: "Oil Change", date: "2025-11-10", price: "$35.00", status: "Completed" },
    { id: 102, service: "Basic Wash", date: "2025-10-28", price: "$15.00", status: "Completed" },
    { id: 103, service: "Interior Wash", date: "2025-10-15", price: "$25.00", status: "Completed" },
  ]

  const vehicles = [
    { id: 1, make: "Toyota", model: "Land Cruiser", plate: "AB1234", color: "White" },
    { id: 2, make: "Suzuki", model: "Swift", plate: "CD5678", color: "Silver" },
  ]

  const subscription = {
    plan: "Silver Plan",
    status: "Active",
    renewalDate: "2025-12-15",
    washesLeft: "Unlimited",
    interiorLeft: 1,
  }

  return (
    <div className="min-h-screen bg-muted/30 flex flex-col md:flex-row">
      {/* Sidebar Navigation */}
      <aside className="w-full md:w-64 bg-card border-r border-border md:min-h-screen">
        <div className="p-6 border-b border-border">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
              <Droplets className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-lg font-bold text-foreground">CarWash Somalia</span>
          </Link>
        </div>

        <nav className="p-4 space-y-2">
          <Button
            variant={activeTab === "overview" ? "secondary" : "ghost"}
            className="w-full justify-start"
            onClick={() => setActiveTab("overview")}
          >
            <LayoutDashboard className="mr-2 h-4 w-4" /> Overview
          </Button>
          <Button
            variant={activeTab === "bookings" ? "secondary" : "ghost"}
            className="w-full justify-start"
            onClick={() => setActiveTab("bookings")}
          >
            <Calendar className="mr-2 h-4 w-4" /> My Bookings
          </Button>
          <Button
            variant={activeTab === "subscription" ? "secondary" : "ghost"}
            className="w-full justify-start"
            onClick={() => setActiveTab("subscription")}
          >
            <CreditCard className="mr-2 h-4 w-4" /> Subscription
          </Button>
          <Button
            variant={activeTab === "vehicles" ? "secondary" : "ghost"}
            className="w-full justify-start"
            onClick={() => setActiveTab("vehicles")}
          >
            <Car className="mr-2 h-4 w-4" /> My Vehicles
          </Button>
          <Button
            variant={activeTab === "history" ? "secondary" : "ghost"}
            className="w-full justify-start"
            onClick={() => setActiveTab("history")}
          >
            <History className="mr-2 h-4 w-4" /> History
          </Button>
          <Button
            variant={activeTab === "profile" ? "secondary" : "ghost"}
            className="w-full justify-start"
            onClick={() => setActiveTab("profile")}
          >
            <User className="mr-2 h-4 w-4" /> Profile
          </Button>
        </nav>

        <div className="p-4 mt-auto border-t border-border">
          <Button
            variant="ghost"
            className="w-full justify-start text-destructive hover:text-destructive hover:bg-destructive/10"
          >
            <LogOut className="mr-2 h-4 w-4" /> Log Out
          </Button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-4 md:p-8 overflow-y-auto">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Welcome back, Ahmed</h1>
              <p className="text-muted-foreground">Manage your bookings and car care services</p>
            </div>
            <Link href="/book">
              <Button>
                <Plus className="mr-2 h-4 w-4" /> New Booking
              </Button>
            </Link>
          </div>

          {activeTab === "overview" && (
            <div className="space-y-8">
              {/* Stats Overview */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <Card className="p-4 border-l-4 border-primary">
                  <p className="text-sm text-muted-foreground mb-1">Next Appointment</p>
                  <p className="font-bold text-lg">Nov 25, 10:00 AM</p>
                  <p className="text-xs text-primary mt-1">Deep Cleaning</p>
                </Card>
                <Card className="p-4 border-l-4 border-accent">
                  <p className="text-sm text-muted-foreground mb-1">Active Plan</p>
                  <p className="font-bold text-lg">Silver Plan</p>
                  <p className="text-xs text-accent mt-1">Renews Dec 15</p>
                </Card>
                <Card className="p-4 border-l-4 border-green-500">
                  <p className="text-sm text-muted-foreground mb-1">Total Services</p>
                  <p className="font-bold text-lg">12</p>
                  <p className="text-xs text-muted-foreground mt-1">Since Jan 2025</p>
                </Card>
              </div>

              {/* Upcoming Bookings */}
              <div>
                <h2 className="text-xl font-semibold mb-4">Upcoming Bookings</h2>
                <div className="space-y-4">
                  {upcomingBookings.map((booking) => (
                    <Card
                      key={booking.id}
                      className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                    >
                      <div className="flex items-start gap-4">
                        <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Calendar className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold">{booking.service}</h3>
                          <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground mt-1">
                            <span className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" /> {booking.date}
                            </span>
                            <span className="flex items-center gap-1">
                              <History className="h-3 w-3" /> {booking.time}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin className="h-3 w-3" /> {booking.location}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge variant={booking.status === "Confirmed" ? "default" : "secondary"}>
                          {booking.status}
                        </Badge>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>Reschedule</DropdownMenuItem>
                            <DropdownMenuItem className="text-destructive">Cancel Booking</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Current Subscription */}
              <div>
                <h2 className="text-xl font-semibold mb-4">Your Subscription</h2>
                <Card className="p-6 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
                  <div className="flex flex-col sm:flex-row justify-between gap-6">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-2xl font-bold text-primary">Silver Plan</h3>
                        <Badge className="bg-green-500 hover:bg-green-600">Active</Badge>
                      </div>
                      <p className="text-muted-foreground mb-4">
                        Your next renewal is on <span className="font-medium text-foreground">December 15, 2025</span>
                      </p>
                      <div className="flex gap-4 text-sm">
                        <div className="bg-background p-2 rounded border">
                          <span className="block text-xs text-muted-foreground">Basic Washes</span>
                          <span className="font-bold">Unlimited</span>
                        </div>
                        <div className="bg-background p-2 rounded border">
                          <span className="block text-xs text-muted-foreground">Interior Cleans</span>
                          <span className="font-bold">{subscription.interiorLeft} Left</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 justify-center">
                      <Button>Upgrade Plan</Button>
                      <Button variant="outline">Manage Subscription</Button>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          )}

          {activeTab === "bookings" && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold">My Bookings</h2>
              {/* Similar list to overview but possibly more detailed or with past bookings tabs */}
              <div className="space-y-4">
                {upcomingBookings.map((booking) => (
                  <Card
                    key={booking.id}
                    className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  >
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Calendar className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{booking.service}</h3>
                        <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground mt-1">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" /> {booking.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <History className="h-3 w-3" /> {booking.time}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" /> {booking.location}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge variant={booking.status === "Confirmed" ? "default" : "secondary"}>{booking.status}</Badge>
                      <Button variant="outline" size="sm">
                        Details
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {activeTab === "vehicles" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">My Vehicles</h2>
                <Button size="sm" variant="outline">
                  <Plus className="mr-2 h-4 w-4" /> Add Vehicle
                </Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {vehicles.map((vehicle) => (
                  <Card key={vehicle.id} className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center">
                        <Car className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>Edit Details</DropdownMenuItem>
                          <DropdownMenuItem className="text-destructive">Remove Vehicle</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                    <h3 className="font-bold text-lg">
                      {vehicle.make} {vehicle.model}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">{vehicle.plate}</p>
                    <div className="flex gap-2">
                      <Badge variant="secondary">{vehicle.color}</Badge>
                      <Badge variant="outline">Primary</Badge>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Placeholder for other tabs */}
          {(activeTab === "history" || activeTab === "subscription" || activeTab === "profile") && (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <div className="h-16 w-16 rounded-full bg-secondary flex items-center justify-center mb-4">
                <LayoutDashboard className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Coming Soon</h3>
              <p className="text-muted-foreground max-w-sm">
                This section of the dashboard is currently under development. Check back later for updates.
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
