"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StatCard } from "./stat-card";
import { useDashboard } from "./dashboard-context";
import {
  DollarSign,
  Users,
  Calendar,
  TrendingUp,
  Plus,
  ArrowUpRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

export function OverviewTab() {
  const { bookings, services, settings } = useDashboard();
  const router = useRouter();

  // Calculate metrics
  const totalRevenue = bookings
    .filter((b) => b.paymentStatus === "Paid")
    .reduce((sum, b) => sum + b.amount, 0);

  const totalBookings = bookings.length;
  const activeClients = new Set(bookings.map((b) => b.customerId)).size;

  // Calculate trends (mock - comparing to "last month")
  const revenueTrend = { value: 20.1, isPositive: true };
  const bookingsTrend = { value: 15.5, isPositive: true };
  const clientsTrend = { value: 8.3, isPositive: true };
  const growthTrend = { value: 12.4, isPositive: true };

  // Prepare revenue chart data (last 7 days)
  const revenueData = Array.from({ length: 7 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - (6 - i));
    const dateStr = date.toISOString().split("T")[0];

    const dayRevenue = bookings
      .filter((b) => b.date === dateStr && b.paymentStatus === "Paid")
      .reduce((sum, b) => sum + b.amount, 0);

    return {
      date: date.toLocaleDateString("en-US", { weekday: "short" }),
      revenue: dayRevenue,
    };
  });

  // Prepare bookings trend data (last 7 days)
  const bookingsTrendData = Array.from({ length: 7 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - (6 - i));
    const dateStr = date.toISOString().split("T")[0];

    const dayBookings = bookings.filter((b) => b.date === dateStr).length;

    return {
      date: date.toLocaleDateString("en-US", { weekday: "short" }),
      count: dayBookings,
    };
  });

  // Get recent bookings for activity feed
  const recentBookings = [...bookings]
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    )
    .slice(0, 5);

  const chartConfig = {
    revenue: {
      label: "Revenue",
      color: "var(--chart-1)",
    },
    count: {
      label: "Bookings",
      color: "var(--chart-2)",
    },
  };

  return (
    <div className="space-y-8">
      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Revenue"
          value={`$${totalRevenue.toFixed(2)}`}
          icon={DollarSign}
          trend={revenueTrend}
          description="from last month"
        />
        <StatCard
          title="Bookings"
          value={totalBookings}
          icon={Calendar}
          trend={bookingsTrend}
          description="from last month"
        />
        <StatCard
          title="Active Clients"
          value={activeClients}
          icon={Users}
          trend={clientsTrend}
          description="from last month"
        />
        <StatCard
          title="Growth"
          value={`${growthTrend.value}%`}
          icon={TrendingUp}
          trend={growthTrend}
          description="overall growth"
        />
      </div>

      {/* Charts Section */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        {/* Revenue Chart */}
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Revenue Overview</CardTitle>
            <p className="text-sm text-muted-foreground">
              Daily revenue for the last 7 days
            </p>
          </CardHeader>
          <CardContent className="pl-2">
            <ChartContainer config={chartConfig} className="h-[250px] w-full">
              <AreaChart data={revenueData}>
                <defs>
                  <linearGradient id="fillRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop
                      offset="5%"
                      stopColor="var(--chart-1)"
                      stopOpacity={0.8}
                    />
                    <stop
                      offset="95%"
                      stopColor="var(--chart-1)"
                      stopOpacity={0.1}
                    />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis
                  dataKey="date"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                />
                <YAxis
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  tickFormatter={(value) => `$${value}`}
                />
                <ChartTooltip
                  content={
                    <ChartTooltipContent
                      labelFormatter={(value) => `${value}`}
                      formatter={(value) => [`$${value}`, "Revenue"]}
                    />
                  }
                />
                <Area
                  dataKey="revenue"
                  type="natural"
                  fill="url(#fillRevenue)"
                  fillOpacity={0.4}
                  stroke="var(--chart-1)"
                  stackId="a"
                />
              </AreaChart>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Recent Bookings</CardTitle>
            <p className="text-sm text-muted-foreground">
              Latest booking activity
            </p>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentBookings.map((booking) => (
                <div
                  key={booking.id}
                  className="flex items-center justify-between"
                >
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">
                      {booking.customerName}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {booking.serviceName}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">${booking.amount.toFixed(2)}</p>
                    <p className="text-xs text-muted-foreground">
                      {booking.date}
                    </p>
                  </div>
                </div>
              ))}
              {recentBookings.length === 0 && (
                <p className="text-center text-sm text-muted-foreground py-4">
                  No recent bookings
                </p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Booking Trends Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Booking Trends</CardTitle>
          <p className="text-sm text-muted-foreground">
            Number of bookings per day for the last 7 days
          </p>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[300px] w-full">
            <BarChart data={bookingsTrendData}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis
                dataKey="date"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
              />
              <YAxis tickLine={false} axisLine={false} tickMargin={8} />
              <ChartTooltip
                content={
                  <ChartTooltipContent
                    labelFormatter={(value) => `${value}`}
                    formatter={(value) => [`${value}`, "Bookings"]}
                  />
                }
              />
              <Bar dataKey="count" fill="var(--chart-2)" radius={4} />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <p className="text-sm text-muted-foreground">
            Common tasks and shortcuts
          </p>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <Button
              className="h-20 flex-col gap-2"
              variant="outline"
              onClick={() => router.push("/business/dashboard/bookings")}
            >
              <Plus className="h-5 w-5" />
              <span>New Booking</span>
            </Button>
            <Button
              className="h-20 flex-col gap-2"
              variant="outline"
              onClick={() => router.push("/business/dashboard/services")}
            >
              <Plus className="h-5 w-5" />
              <span>Add Service</span>
            </Button>
            <Button
              className="h-20 flex-col gap-2"
              variant="outline"
              onClick={() => router.push("/business/dashboard/staff")}
            >
              <Plus className="h-5 w-5" />
              <span>Add Staff</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
