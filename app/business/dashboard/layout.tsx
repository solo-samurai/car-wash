import { DashboardProvider } from "@/components/business/dashboard-context";
import { AppSidebar } from "@/components/business/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/sonner";
import { DashboardHeader } from "@/components/business/dashboard-header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Dashboard | CarWash Somalia",
  description: "Manage your car wash business operations",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DashboardProvider>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <DashboardHeader />
          <div className="flex-1 p-4 pt-0 md:p-8 overflow-y-auto">
            <div className="max-w-7xl mx-auto">{children}</div>
          </div>
        </SidebarInset>
      </SidebarProvider>
      <Toaster />
    </DashboardProvider>
  );
}
