import { ServicesTab } from "@/components/business/services-tab";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services Management | CarWash Somalia",
  description: "Manage your service offerings and pricing",
};

export default function ServicesPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground">Services</h1>
        <p className="text-muted-foreground">
          Manage your service offerings and pricing
        </p>
      </div>
      <ServicesTab />
    </div>
  );
}
