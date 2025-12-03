"use client";

import * as React from "react";
import {
  LayoutDashboard,
  Calendar,
  Briefcase,
  Users,
  Settings,
  LogOut,
  Store,
} from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuBadge,
  SidebarRail,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
} from "@/components/ui/sidebar";
import { useDashboard } from "@/components/business/dashboard-context";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();
  const { bookings, settings } = useDashboard();

  // Count pending bookings for badge
  const pendingCount = bookings.filter((b) => b.status === "Pending").length;

  const navItems = [
    {
      title: "Overview",
      url: "/business/dashboard",
      icon: LayoutDashboard,
      exact: true,
    },
    {
      title: "Bookings",
      url: "/business/dashboard/bookings",
      icon: Calendar,
      badge: pendingCount > 0 ? pendingCount : undefined,
    },
    {
      title: "Services",
      url: "/business/dashboard/services",
      icon: Briefcase,
    },
    {
      title: "Staff",
      url: "/business/dashboard/staff",
      icon: Users,
    },
    {
      title: "Settings",
      url: "/business/dashboard/settings",
      icon: Settings,
    },
  ];

  const isActive = (url: string, exact?: boolean) => {
    if (exact) {
      return pathname === url;
    }
    return pathname.startsWith(url);
  };

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <Store className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">
                    {settings?.name || "Business Portal"}
                  </span>
                  <span className="truncate text-xs">Partner Dashboard</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.url}>
                  <SidebarMenuButton
                    asChild
                    isActive={isActive(item.url, item.exact)}
                    tooltip={item.title}
                  >
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                  {item.badge && (
                    <SidebarMenuBadge>{item.badge}</SidebarMenuBadge>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild tooltip="Log Out">
              <Link href="/">
                <LogOut />
                <span>Log Out</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
