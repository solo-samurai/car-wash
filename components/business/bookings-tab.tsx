"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, Filter } from "lucide-react";

export function BookingsTab() {
  const [bookings] = useState([
    {
      id: "BK-001",
      customer: "John Doe",
      service: "Premium Wash",
      date: "2025-11-25",
      time: "10:00 AM",
      status: "Pending",
      amount: "$45.00",
    },
    {
      id: "BK-002",
      customer: "Jane Smith",
      service: "Interior Detail",
      date: "2025-11-25",
      time: "11:30 AM",
      status: "Confirmed",
      amount: "$85.00",
    },
    {
      id: "BK-003",
      customer: "Robert Johnson",
      service: "Basic Wash",
      date: "2025-11-25",
      time: "01:00 PM",
      status: "Completed",
      amount: "$25.00",
    },
    {
      id: "BK-004",
      customer: "Emily Davis",
      service: "Full Detail",
      date: "2025-11-26",
      time: "09:00 AM",
      status: "Pending",
      amount: "$150.00",
    },
    {
      id: "BK-005",
      customer: "Michael Wilson",
      service: "Oil Change",
      date: "2025-11-26",
      time: "10:30 AM",
      status: "Confirmed",
      amount: "$60.00",
    },
  ]);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search bookings..."
              className="pl-8 w-[250px]"
            />
          </div>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">Export</Button>
          <Button>New Booking</Button>
        </div>
      </div>

      <div className="rounded-md border bg-card">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Booking ID</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Service</TableHead>
              <TableHead>Date & Time</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Amount</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {bookings.map((booking) => (
              <TableRow key={booking.id}>
                <TableCell className="font-medium">{booking.id}</TableCell>
                <TableCell>{booking.customer}</TableCell>
                <TableCell>{booking.service}</TableCell>
                <TableCell>
                  {booking.date} at {booking.time}
                </TableCell>
                <TableCell>
                  <Badge
                    variant={
                      booking.status === "Confirmed"
                        ? "default"
                        : booking.status === "Completed"
                        ? "secondary"
                        : "outline"
                    }
                  >
                    {booking.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">{booking.amount}</TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="sm">
                    View
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
