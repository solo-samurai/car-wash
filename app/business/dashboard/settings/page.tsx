import { SettingsTab } from "@/components/business/settings-tab";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Settings | CarWash Somalia",
  description: "Configure your business settings and preferences",
};

export default function SettingsPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground">Settings</h1>
        <p className="text-muted-foreground">
          Configure your business settings and preferences
        </p>
      </div>
      <SettingsTab />
    </div>
  );
}
