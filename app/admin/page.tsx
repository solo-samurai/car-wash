"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Droplets,
  LayoutDashboard,
  CalendarDays,
  Users,
  Settings,
  BarChart3,
  Search,
  Bell,
  MoreVertical,
  Clock,
  MapPin,
  DollarSign,
  Filter,
} from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard")

  // Mock Data
  const stats = [
    { label: "Total Revenue", value: "$12,450", change: "+12%", icon: DollarSign },
    { label: "Active Subscriptions", value: "145", change: "+5%", icon: Users },
    { label: "Bookings Today", value: "28", change: "+2", icon: CalendarDays },
    { label: "Pending Approvals", value: "5", change: "-1", icon: Clock },
  ]

  const recentBookings = [
    {
      id: "BK-7829",
      customer: "Mohamed Ali",
      service: "Deep Cleaning",
      type: "Home Service",
      date: "Today, 10:00 AM",
      status: "In Progress",
      amount: "$45.00",
    },
    {
      id: "BK-7830",
      customer: "Sara Hassan",
      service: "Basic Wash",
      type: "Center",
      date: "Today, 11:30 AM",
      status: "Pending",
      amount: "$15.00",
    },
    {
      id: "BK-7831",
      customer: "Abdi Rahman",
      service: "Oil Change",
      type: "Center",
      date: "Today, 01:00 PM",
      status: "Confirmed",
      amount: "$35.00",
    },
    {
      id: "BK-7832",
      customer: "Fadumo Sheikh",
      service: "Interior Wash",
      type: "Home Service",
      date: "Tomorrow, 09:00 AM",
      status: "Confirmed",
      amount: "$25.00",
    },
    {
      id: "BK-7833",
      customer: "Hassan Nur",
      service: "Full Detail",
      type: "Center",
      date: "Yesterday",
      status: "Completed",
      amount: "$120.00",
    },
  ]

  return (
    <div className="min-h-screen bg-background flex flex-col md:flex-row">
      {/* Admin Sidebar */}
      <aside className="w-full md:w-64 bg-foreground text-background border-r border-border md:min-h-screen flex flex-col">
        <div className="p-6 border-b border-white/10">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
              <Droplets className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-lg font-bold">CarWash Admin</span>
          </Link>
        </div>

        <nav className="p-4 space-y-2 flex-grow">
          <Button
            variant={activeTab === "dashboard" ? "secondary" : "ghost"}
            className={`w-full justify-start ${activeTab === "dashboard" ? "bg-white/10 text-white hover:bg-white/20" : "text-gray-400 hover:text-white hover:bg-white/5"}`}
            onClick={() => setActiveTab("dashboard")}
          >
            <LayoutDashboard className="mr-2 h-4 w-4" /> Dashboard
          </Button>
          <Button
            variant={activeTab === "bookings" ? "secondary" : "ghost"}
            className={`w-full justify-start ${activeTab === "bookings" ? "bg-white/10 text-white hover:bg-white/20" : "text-gray-400 hover:text-white hover:bg-white/5"}`}
            onClick={() => setActiveTab("bookings")}
          >
            <CalendarDays className="mr-2 h-4 w-4" /> Bookings
          </Button>
          <Button
            variant={activeTab === "customers" ? "secondary" : "ghost"}
            className={`w-full justify-start ${activeTab === "customers" ? "bg-white/10 text-white hover:bg-white/20" : "text-gray-400 hover:text-white hover:bg-white/5"}`}
            onClick={() => setActiveTab("customers")}
          >
            <Users className="mr-2 h-4 w-4" /> Customers
          </Button>
          <Button
            variant={activeTab === "reports" ? "secondary" : "ghost"}
            className={`w-full justify-start ${activeTab === "reports" ? "bg-white/10 text-white hover:bg-white/20" : "text-gray-400 hover:text-white hover:bg-white/5"}`}
            onClick={() => setActiveTab("reports")}
          >
            <BarChart3 className="mr-2 h-4 w-4" /> Reports
          </Button>
          <Button
            variant={activeTab === "settings" ? "secondary" : "ghost"}
            className={`w-full justify-start ${activeTab === "settings" ? "bg-white/10 text-white hover:bg-white/20" : "text-gray-400 hover:text-white hover:bg-white/5"}`}
            onClick={() => setActiveTab("settings")}
          >
            <Settings className="mr-2 h-4 w-4" /> Settings
          </Button>
        </nav>

        <div className="p-4 border-t border-white/10">
          <div className="flex items-center gap-3 px-2">
            <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
              <span className="font-bold text-primary text-xs">AD</span>
            </div>
            <div>
              <p className="text-sm font-medium text-white">Admin User</p>
              <p className="text-xs text-gray-400">Manager</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden bg-muted/10">
        {/* Top Header */}
        <header className="h-16 border-b border-border bg-background px-6 flex items-center justify-between sticky top-0 z-10">
          <h1 className="text-xl font-bold capitalize">{activeTab}</h1>

          <div className="flex items-center gap-4">
            <div className="relative w-64 hidden md:block">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search bookings, customers..."
                className="pl-9 bg-muted/30 border-none focus-visible:ring-1"
              />
            </div>
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5 text-muted-foreground" />
              <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-destructive"></span>
            </Button>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {stats.map((stat, index) => (
              <Card key={index} className="p-4 border-none shadow-sm bg-background">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">{stat.label}</p>
                    <h3 className="text-2xl font-bold text-foreground">{stat.value}</h3>
                  </div>
                  <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <stat.icon className="h-4 w-4 text-primary" />
                  </div>
                </div>
                <p className={`text-xs mt-2 ${stat.change.startsWith("+") ? "text-green-500" : "text-red-500"}`}>
                  {stat.change} from last month
                </p>
              </Card>
            ))}
          </div>

          {/* Recent Bookings Table */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Recent Bookings</h2>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="h-8 gap-1 bg-transparent">
                  <Filter className="h-3.5 w-3.5" /> Filter
                </Button>
                <Button variant="outline" size="sm" className="h-8 gap-1 bg-transparent">
                  Export
                </Button>
              </div>
            </div>

            <Card className="border-none shadow-sm overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/30 hover:bg-muted/30">
                    <TableHead>Booking ID</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Service</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentBookings.map((booking) => (
                    <TableRow key={booking.id}>
                      <TableCell className="font-medium">{booking.id}</TableCell>
                      <TableCell>{booking.customer}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">{booking.service}</div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline" className="font-normal">
                          {booking.type === "Home Service" ? <MapPin className="mr-1 h-3 w-3" /> : null}
                          {booking.type}
                        </Badge>
                      </TableCell>
                      <TableCell>{booking.date}</TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            booking.status === "Completed"
                              ? "default"
                              : booking.status === "In Progress"
                                ? "secondary"
                                : booking.status === "Confirmed"
                                  ? "outline"
                                  : "destructive"
                          }
                          className={
                            booking.status === "Completed"
                              ? "bg-green-500 hover:bg-green-600 border-none"
                              : booking.status === "In Progress"
                                ? "bg-blue-500/10 text-blue-600 hover:bg-blue-500/20 border-blue-200"
                                : booking.status === "Confirmed"
                                  ? "bg-amber-500/10 text-amber-600 hover:bg-amber-500/20 border-amber-200"
                                  : ""
                          }
                        >
                          {booking.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{booking.amount}</TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                              <span className="sr-only">Open menu</span>
                              <MoreVertical className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem>View Details</DropdownMenuItem>
                            <DropdownMenuItem>Update Status</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Contact Customer</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
