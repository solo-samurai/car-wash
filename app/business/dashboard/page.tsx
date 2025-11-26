"use client";

import { useState } from "react";
import { DashboardSidebar } from "@/components/business/dashboard-sidebar";
import { OverviewTab } from "@/components/business/overview-tab";
import { BookingsTab } from "@/components/business/bookings-tab";
import { ServicesTab } from "@/components/business/services-tab";
import { StaffTab } from "@/components/business/staff-tab";
import { SettingsTab } from "@/components/business/settings-tab";

export default function BusinessDashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-muted/30 flex flex-col md:flex-row">
      <DashboardSidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="flex-1 p-4 md:p-8 overflow-y-auto">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground capitalize">
              {activeTab}
            </h1>
            <p className="text-muted-foreground">
              Manage your business operations
            </p>
          </div>

          {activeTab === "overview" && <OverviewTab />}
          {activeTab === "bookings" && <BookingsTab />}
          {activeTab === "services" && <ServicesTab />}
          {activeTab === "staff" && <StaffTab />}
          {activeTab === "settings" && <SettingsTab />}
        </div>
      </main>
    </div>
  );
}
