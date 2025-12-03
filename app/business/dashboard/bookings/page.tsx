import { BookingsTab } from "@/components/business/bookings-tab";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bookings Management | CarWash Somalia",
  description: "Manage customer bookings and appointments",
};

export default function BookingsPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground">Bookings</h1>
        <p className="text-muted-foreground">
          Manage customer bookings and appointments
        </p>
      </div>
      <BookingsTab />
    </div>
  );
}
