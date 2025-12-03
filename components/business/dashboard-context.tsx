"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { toast } from "sonner";
import type {
  Booking,
  Service,
  Staff,
  BusinessSettings,
  DashboardContextType,
  BookingStatus,
  StaffStatus,
  OperatingHours,
  NotificationSettings,
  PaymentMethods,
  BookingRules,
} from "./dashboard-types";

const DashboardContext = createContext<DashboardContextType | undefined>(
  undefined
);

const STORAGE_KEY = "business_dashboard_data";

// Generate realistic mock data
function generateMockData() {
  const now = new Date();

  // Mock Services
  const mockServices: Service[] = [
    {
      id: "svc-1",
      name: "Basic Wash",
      description: "Exterior wash, wheel cleaning, and hand dry",
      category: "Washing",
      price: 25,
      duration: 30,
      isActive: true,
      createdAt: new Date(2024, 0, 1).toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: "svc-2",
      name: "Premium Wash",
      description: "Basic wash plus wax, tire shine, and window cleaning",
      category: "Washing",
      price: 45,
      duration: 45,
      isActive: true,
      createdAt: new Date(2024, 0, 1).toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: "svc-3",
      name: "Interior Detail",
      description: "Deep cleaning of carpets, seats, and dashboard",
      category: "Detailing",
      price: 85,
      duration: 90,
      isActive: true,
      createdAt: new Date(2024, 0, 1).toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: "svc-4",
      name: "Full Detail",
      description: "Complete interior and exterior detailing package",
      category: "Premium",
      price: 150,
      duration: 180,
      isActive: true,
      createdAt: new Date(2024, 0, 1).toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: "svc-5",
      name: "Oil Change",
      description: "Professional oil change service with filter replacement",
      category: "Maintenance",
      price: 60,
      duration: 45,
      isActive: true,
      createdAt: new Date(2024, 0, 1).toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: "svc-6",
      name: "Ceramic Coating",
      description: "Long-lasting paint protection with ceramic coating",
      category: "Premium",
      price: 300,
      duration: 240,
      isActive: false,
      createdAt: new Date(2024, 0, 1).toISOString(),
      updatedAt: new Date().toISOString(),
    },
  ];

  // Mock Staff
  const mockStaff: Staff[] = [
    {
      id: "staff-1",
      name: "Ahmed Hassan",
      email: "ahmed@carwash.com",
      phone: "+252 61 234 5678",
      role: "Manager",
      status: "Active",
      hireDate: "2023-06-15",
      hourlyRate: 25,
      initials: "AH",
      emergencyContact: "+252 61 234 5679",
      createdAt: new Date(2023, 5, 15).toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: "staff-2",
      name: "Fatima Mohamed",
      email: "fatima@carwash.com",
      phone: "+252 61 345 6789",
      role: "Detailer",
      status: "Active",
      hireDate: "2023-08-20",
      hourlyRate: 18,
      initials: "FM",
      createdAt: new Date(2023, 7, 20).toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: "staff-3",
      name: "Omar Ali",
      email: "omar@carwash.com",
      phone: "+252 61 456 7890",
      role: "Washer",
      status: "Active",
      hireDate: "2024-01-10",
      hourlyRate: 15,
      initials: "OA",
      createdAt: new Date(2024, 0, 10).toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: "staff-4",
      name: "Amina Abdi",
      email: "amina@carwash.com",
      phone: "+252 61 567 8901",
      role: "Receptionist",
      status: "Active",
      hireDate: "2023-09-01",
      hourlyRate: 16,
      initials: "AA",
      createdAt: new Date(2023, 8, 1).toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: "staff-5",
      name: "Yusuf Ibrahim",
      email: "yusuf@carwash.com",
      phone: "+252 61 678 9012",
      role: "Technician",
      status: "On Leave",
      hireDate: "2023-07-15",
      hourlyRate: 22,
      initials: "YI",
      createdAt: new Date(2023, 6, 15).toISOString(),
      updatedAt: new Date().toISOString(),
    },
  ];

  // Mock Bookings
  const mockBookings: Booking[] = [
    {
      id: "BK-001",
      customerId: "cust-1",
      customerName: "Abdullahi Mohamud",
      customerPhone: "+252 61 111 2222",
      customerEmail: "abdullahi@example.com",
      serviceId: "svc-2",
      serviceName: "Premium Wash",
      date: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1)
        .toISOString()
        .split("T")[0],
      time: "10:00",
      status: "Pending",
      paymentStatus: "Pending",
      paymentMethod: "Waafi",
      amount: 45,
      notes: "Please use eco-friendly products",
      createdAt: new Date(now.getTime() - 86400000).toISOString(),
      updatedAt: new Date(now.getTime() - 86400000).toISOString(),
    },
    {
      id: "BK-002",
      customerId: "cust-2",
      customerName: "Maryan Jama",
      customerPhone: "+252 61 222 3333",
      customerEmail: "maryan@example.com",
      serviceId: "svc-3",
      serviceName: "Interior Detail",
      date: new Date(now.getFullYear(), now.getMonth(), now.getDate())
        .toISOString()
        .split("T")[0],
      time: "11:30",
      status: "Confirmed",
      paymentStatus: "Pending",
      paymentMethod: "Cash",
      amount: 85,
      createdAt: new Date(now.getTime() - 172800000).toISOString(),
      updatedAt: new Date(now.getTime() - 86400000).toISOString(),
    },
    {
      id: "BK-003",
      customerId: "cust-3",
      customerName: "Hassan Osman",
      customerPhone: "+252 61 333 4444",
      customerEmail: "hassan@example.com",
      serviceId: "svc-1",
      serviceName: "Basic Wash",
      date: new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1)
        .toISOString()
        .split("T")[0],
      time: "13:00",
      status: "Completed",
      paymentStatus: "Paid",
      paymentMethod: "eDahab",
      amount: 25,
      createdAt: new Date(now.getTime() - 259200000).toISOString(),
      updatedAt: new Date(now.getTime() - 86400000).toISOString(),
    },
    {
      id: "BK-004",
      customerId: "cust-4",
      customerName: "Sahra Ahmed",
      customerPhone: "+252 61 444 5555",
      customerEmail: "sahra@example.com",
      serviceId: "svc-4",
      serviceName: "Full Detail",
      date: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 2)
        .toISOString()
        .split("T")[0],
      time: "09:00",
      status: "Pending",
      paymentStatus: "Pending",
      amount: 150,
      notes: "SUV vehicle, extra care needed",
      createdAt: new Date(now.getTime() - 3600000).toISOString(),
      updatedAt: new Date(now.getTime() - 3600000).toISOString(),
    },
    {
      id: "BK-005",
      customerId: "cust-5",
      customerName: "Mohamed Farah",
      customerPhone: "+252 61 555 6666",
      customerEmail: "mohamed@example.com",
      serviceId: "svc-5",
      serviceName: "Oil Change",
      date: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1)
        .toISOString()
        .split("T")[0],
      time: "14:30",
      status: "Confirmed",
      paymentStatus: "Pending",
      paymentMethod: "Card",
      amount: 60,
      createdAt: new Date(now.getTime() - 172800000).toISOString(),
      updatedAt: new Date(now.getTime() - 43200000).toISOString(),
    },
    {
      id: "BK-006",
      customerId: "cust-6",
      customerName: "Halima Yusuf",
      customerPhone: "+252 61 666 7777",
      customerEmail: "halima@example.com",
      serviceId: "svc-2",
      serviceName: "Premium Wash",
      date: new Date(now.getFullYear(), now.getMonth(), now.getDate() - 2)
        .toISOString()
        .split("T")[0],
      time: "15:00",
      status: "Completed",
      paymentStatus: "Paid",
      paymentMethod: "Waafi",
      amount: 45,
      createdAt: new Date(now.getTime() - 345600000).toISOString(),
      updatedAt: new Date(now.getTime() - 172800000).toISOString(),
    },
    {
      id: "BK-007",
      customerId: "cust-7",
      customerName: "Ibrahim Ali",
      customerPhone: "+252 61 777 8888",
      customerEmail: "ibrahim@example.com",
      serviceId: "svc-1",
      serviceName: "Basic Wash",
      date: new Date(now.getFullYear(), now.getMonth(), now.getDate())
        .toISOString()
        .split("T")[0],
      time: "16:00",
      status: "InProgress",
      paymentStatus: "Pending",
      paymentMethod: "Cash",
      amount: 25,
      createdAt: new Date(now.getTime() - 7200000).toISOString(),
      updatedAt: new Date(now.getTime() - 3600000).toISOString(),
    },
    {
      id: "BK-008",
      customerId: "cust-8",
      customerName: "Hodan Mohamed",
      customerPhone: "+252 61 888 9999",
      customerEmail: "hodan@example.com",
      serviceId: "svc-4",
      serviceName: "Full Detail",
      date: new Date(now.getFullYear(), now.getMonth(), now.getDate() - 3)
        .toISOString()
        .split("T")[0],
      time: "10:00",
      status: "Cancelled",
      paymentStatus: "Refunded",
      amount: 150,
      notes: "Customer requested cancellation",
      createdAt: new Date(now.getTime() - 432000000).toISOString(),
      updatedAt: new Date(now.getTime() - 345600000).toISOString(),
    },
  ];

  // Mock Settings
  const mockSettings: BusinessSettings = {
    name: "Premium Car Wash Somalia",
    email: "contact@premiumcarwash.so",
    phone: "+252 61 123 4567",
    website: "www.premiumcarwash.so",
    address: "Maka Al Mukarama Road, Mogadishu, Somalia",
    operatingHours: [
      { day: "Monday", isOpen: true, openTime: "08:00", closeTime: "18:00" },
      { day: "Tuesday", isOpen: true, openTime: "08:00", closeTime: "18:00" },
      { day: "Wednesday", isOpen: true, openTime: "08:00", closeTime: "18:00" },
      { day: "Thursday", isOpen: true, openTime: "08:00", closeTime: "18:00" },
      { day: "Friday", isOpen: true, openTime: "08:00", closeTime: "18:00" },
      { day: "Saturday", isOpen: true, openTime: "09:00", closeTime: "17:00" },
      { day: "Sunday", isOpen: false, openTime: "09:00", closeTime: "17:00" },
    ],
    notifications: {
      email: true,
      sms: true,
      push: false,
    },
    paymentMethods: {
      cash: true,
      waafi: true,
      edahab: true,
      card: false,
    },
    bookingRules: {
      advanceBookingDays: 14,
      cancellationHours: 24,
      bufferTimeMinutes: 15,
    },
    holidays: [],
  };

  return {
    bookings: mockBookings,
    services: mockServices,
    staff: mockStaff,
    settings: mockSettings,
  };
}

export function DashboardProvider({ children }: { children: ReactNode }) {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [services, setServices] = useState<Service[]>([]);
  const [staff, setStaff] = useState<Staff[]>([]);
  const [settings, setSettings] = useState<BusinessSettings | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Load data from localStorage or generate mock data
  useEffect(() => {
    const loadData = () => {
      try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
          const parsed = JSON.parse(stored);
          setBookings(parsed.bookings || []);
          setServices(parsed.services || []);
          setStaff(parsed.staff || []);
          setSettings(parsed.settings || null);
        } else {
          // Generate and save mock data
          const mockData = generateMockData();
          setBookings(mockData.bookings);
          setServices(mockData.services);
          setStaff(mockData.staff);
          setSettings(mockData.settings);
          localStorage.setItem(STORAGE_KEY, JSON.stringify(mockData));
        }
      } catch (error) {
        console.error("Error loading dashboard data:", error);
        // If there's an error, use mock data
        const mockData = generateMockData();
        setBookings(mockData.bookings);
        setServices(mockData.services);
        setStaff(mockData.staff);
        setSettings(mockData.settings);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  // Save data to localStorage whenever it changes
  useEffect(() => {
    if (!isLoading && settings) {
      try {
        localStorage.setItem(
          STORAGE_KEY,
          JSON.stringify({ bookings, services, staff, settings })
        );
      } catch (error) {
        console.error("Error saving dashboard data:", error);
      }
    }
  }, [bookings, services, staff, settings, isLoading]);

  // Booking Operations
  const addBooking = (
    booking: Omit<Booking, "id" | "createdAt" | "updatedAt">
  ) => {
    const now = new Date().toISOString();
    const newBooking: Booking = {
      ...booking,
      id: `BK-${String(bookings.length + 1).padStart(3, "0")}`,
      createdAt: now,
      updatedAt: now,
    };
    setBookings((prev) => [...prev, newBooking]);
    toast.success("Booking created successfully");
  };

  const updateBooking = (id: string, updates: Partial<Booking>) => {
    setBookings((prev) =>
      prev.map((b) =>
        b.id === id
          ? { ...b, ...updates, updatedAt: new Date().toISOString() }
          : b
      )
    );
    toast.success("Booking updated successfully");
  };

  const deleteBooking = (id: string) => {
    setBookings((prev) => prev.filter((b) => b.id !== id));
    toast.success("Booking deleted successfully");
  };

  const updateBookingStatus = (id: string, status: BookingStatus) => {
    updateBooking(id, { status });
  };

  // Service Operations
  const addService = (
    service: Omit<
      Service,
      "id" | "createdAt" | "updatedAt" | "bookingCount" | "totalRevenue"
    >
  ) => {
    const now = new Date().toISOString();
    const newService: Service = {
      ...service,
      id: `svc-${services.length + 1}`,
      createdAt: now,
      updatedAt: now,
    };
    setServices((prev) => [...prev, newService]);
    toast.success("Service created successfully");
  };

  const updateService = (id: string, updates: Partial<Service>) => {
    setServices((prev) =>
      prev.map((s) =>
        s.id === id
          ? { ...s, ...updates, updatedAt: new Date().toISOString() }
          : s
      )
    );
    toast.success("Service updated successfully");
  };

  const deleteService = (id: string) => {
    setServices((prev) => prev.filter((s) => s.id !== id));
    toast.success("Service deleted successfully");
  };

  const toggleServiceActive = (id: string) => {
    setServices((prev) =>
      prev.map((s) =>
        s.id === id
          ? { ...s, isActive: !s.isActive, updatedAt: new Date().toISOString() }
          : s
      )
    );
    toast.success("Service status updated");
  };

  // Staff Operations
  const addStaff = (
    staffMember: Omit<
      Staff,
      | "id"
      | "createdAt"
      | "updatedAt"
      | "initials"
      | "bookingsHandled"
      | "totalRevenue"
    >
  ) => {
    const now = new Date().toISOString();
    const initials = staffMember.name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
    const newStaff: Staff = {
      ...staffMember,
      id: `staff-${staff.length + 1}`,
      initials,
      createdAt: now,
      updatedAt: now,
    };
    setStaff((prev) => [...prev, newStaff]);
    toast.success("Staff member added successfully");
  };

  const updateStaff = (id: string, updates: Partial<Staff>) => {
    setStaff((prev) =>
      prev.map((s) =>
        s.id === id
          ? { ...s, ...updates, updatedAt: new Date().toISOString() }
          : s
      )
    );
    toast.success("Staff member updated successfully");
  };

  const deleteStaff = (id: string) => {
    setStaff((prev) => prev.filter((s) => s.id !== id));
    toast.success("Staff member removed successfully");
  };

  const updateStaffStatus = (id: string, status: StaffStatus) => {
    updateStaff(id, { status });
  };

  // Settings Operations
  const updateBusinessInfo = (
    info: Partial<
      Pick<
        BusinessSettings,
        "name" | "email" | "phone" | "website" | "address" | "logoUrl"
      >
    >
  ) => {
    setSettings((prev) => (prev ? { ...prev, ...info } : null));
    toast.success("Business information updated");
  };

  const updateOperatingHours = (hours: OperatingHours[]) => {
    setSettings((prev) => (prev ? { ...prev, operatingHours: hours } : null));
    toast.success("Operating hours updated");
  };

  const updateNotifications = (
    notifications: Partial<NotificationSettings>
  ) => {
    setSettings((prev) =>
      prev
        ? {
            ...prev,
            notifications: { ...prev.notifications, ...notifications },
          }
        : null
    );
    toast.success("Notification preferences updated");
  };

  const updatePaymentMethods = (methods: Partial<PaymentMethods>) => {
    setSettings((prev) =>
      prev
        ? { ...prev, paymentMethods: { ...prev.paymentMethods, ...methods } }
        : null
    );
    toast.success("Payment methods updated");
  };

  const updateBookingRules = (rules: Partial<BookingRules>) => {
    setSettings((prev) =>
      prev
        ? { ...prev, bookingRules: { ...prev.bookingRules, ...rules } }
        : null
    );
    toast.success("Booking rules updated");
  };

  const addHoliday = (date: string) => {
    setSettings((prev) =>
      prev ? { ...prev, holidays: [...prev.holidays, date] } : null
    );
    toast.success("Holiday added");
  };

  const removeHoliday = (date: string) => {
    setSettings((prev) =>
      prev
        ? { ...prev, holidays: prev.holidays.filter((d) => d !== date) }
        : null
    );
    toast.success("Holiday removed");
  };

  // Utility functions
  const getBookingById = (id: string) => bookings.find((b) => b.id === id);
  const getServiceById = (id: string) => services.find((s) => s.id === id);
  const getStaffById = (id: string) => staff.find((s) => s.id === id);

  const refreshData = () => {
    localStorage.removeItem(STORAGE_KEY);
    const mockData = generateMockData();
    setBookings(mockData.bookings);
    setServices(mockData.services);
    setStaff(mockData.staff);
    setSettings(mockData.settings);
    toast.success("Data refreshed");
  };

  const value: DashboardContextType = {
    bookings,
    services,
    staff,
    settings: settings!,
    isLoading,
    addBooking,
    updateBooking,
    deleteBooking,
    updateBookingStatus,
    addService,
    updateService,
    deleteService,
    toggleServiceActive,
    addStaff,
    updateStaff,
    deleteStaff,
    updateStaffStatus,
    updateBusinessInfo,
    updateOperatingHours,
    updateNotifications,
    updatePaymentMethods,
    updateBookingRules,
    addHoliday,
    removeHoliday,
    getBookingById,
    getServiceById,
    getStaffById,
    refreshData,
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          <p className="mt-2 text-muted-foreground">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
}

export function useDashboard() {
  const context = useContext(DashboardContext);
  if (context === undefined) {
    throw new Error("useDashboard must be used within a DashboardProvider");
  }
  return context;
}
