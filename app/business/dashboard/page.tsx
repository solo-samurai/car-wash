import { OverviewTab } from "@/components/business/overview-tab";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard Overview | CarWash Somalia",
  description: "Business analytics and performance overview",
};

export default function DashboardOverviewPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground">Overview</h1>
        <p className="text-muted-foreground">
          Business analytics and performance metrics
        </p>
      </div>
      <OverviewTab />
    </div>
  );
}
