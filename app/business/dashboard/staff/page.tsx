import { StaffTab } from "@/components/business/staff-tab";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Staff Management | CarWash Somalia",
  description: "Manage your team members and their roles",
};

export default function StaffPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground">Staff</h1>
        <p className="text-muted-foreground">
          Manage your team members and their roles
        </p>
      </div>
      <StaffTab />
    </div>
  );
}
