"use client";

import {
  LayoutDashboard,
  Calendar,
  Briefcase,
  Users,
  Settings,
  LogOut,
  Store,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface DashboardSidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export function DashboardSidebar({
  activeTab,
  setActiveTab,
}: DashboardSidebarProps) {
  return (
    <aside className="w-full md:w-64 bg-card border-r border-border md:min-h-screen flex flex-col">
      <div className="p-6 border-b border-border">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
            <Store className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-lg font-bold text-foreground">
            Business Portal
          </span>
        </Link>
      </div>

      <nav className="p-4 space-y-2 flex-1">
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
          <Calendar className="mr-2 h-4 w-4" /> Bookings
        </Button>
        <Button
          variant={activeTab === "services" ? "secondary" : "ghost"}
          className="w-full justify-start"
          onClick={() => setActiveTab("services")}
        >
          <Briefcase className="mr-2 h-4 w-4" /> Services
        </Button>
        <Button
          variant={activeTab === "staff" ? "secondary" : "ghost"}
          className="w-full justify-start"
          onClick={() => setActiveTab("staff")}
        >
          <Users className="mr-2 h-4 w-4" /> Staff
        </Button>
        <Button
          variant={activeTab === "settings" ? "secondary" : "ghost"}
          className="w-full justify-start"
          onClick={() => setActiveTab("settings")}
        >
          <Settings className="mr-2 h-4 w-4" /> Settings
        </Button>
      </nav>

      <div className="p-4 border-t border-border">
        <Button
          variant="ghost"
          className="w-full justify-start text-destructive hover:text-destructive hover:bg-destructive/10"
        >
          <LogOut className="mr-2 h-4 w-4" /> Log Out
        </Button>
      </div>
    </aside>
  );
}
