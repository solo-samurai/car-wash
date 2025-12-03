// TypeScript type definitions for Business Dashboard

// Booking Types
export type BookingStatus =
  | "Pending"
  | "Confirmed"
  | "InProgress"
  | "Completed"
  | "Cancelled";
export type PaymentStatus = "Pending" | "Paid" | "Refunded";
export type PaymentMethod = "Cash" | "Waafi" | "eDahab" | "Card";

export interface Booking {
  id: string;
  customerId: string;
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  serviceId: string;
  serviceName: string;
  date: string; // YYYY-MM-DD
  time: string; // HH:MM
  status: BookingStatus;
  paymentStatus: PaymentStatus;
  paymentMethod?: PaymentMethod;
  amount: number;
  notes?: string;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
}

// Service Types
export type ServiceCategory =
  | "Washing"
  | "Detailing"
  | "Maintenance"
  | "Premium";

export interface Service {
  id: string;
  name: string;
  description: string;
  category: ServiceCategory;
  price: number;
  duration: number; // in minutes
  isActive: boolean;
  imageUrl?: string;
  bookingCount?: number; // Calculated field
  totalRevenue?: number; // Calculated field
  createdAt: string;
  updatedAt: string;
}

// Staff Types
export type StaffRole =
  | "Manager"
  | "Detailer"
  | "Washer"
  | "Receptionist"
  | "Technician";
export type StaffStatus = "Active" | "On Leave" | "Inactive";

export interface Staff {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: StaffRole;
  status: StaffStatus;
  hireDate: string; // YYYY-MM-DD
  hourlyRate?: number;
  emergencyContact?: string;
  avatar?: string;
  initials: string;
  bookingsHandled?: number; // Calculated field
  totalRevenue?: number; // Calculated field
  createdAt: string;
  updatedAt: string;
}

// Settings Types
export interface OperatingHours {
  day: string;
  isOpen: boolean;
  openTime: string; // HH:MM
  closeTime: string; // HH:MM
}

export interface NotificationSettings {
  email: boolean;
  sms: boolean;
  push: boolean;
}

export interface PaymentMethods {
  cash: boolean;
  waafi: boolean;
  edahab: boolean;
  card: boolean;
}

export interface BookingRules {
  advanceBookingDays: number;
  cancellationHours: number;
  bufferTimeMinutes: number;
}

export interface BusinessSettings {
  name: string;
  email: string;
  phone: string;
  website: string;
  address: string;
  logoUrl?: string;
  operatingHours: OperatingHours[];
  notifications: NotificationSettings;
  paymentMethods: PaymentMethods;
  bookingRules: BookingRules;
  holidays: string[]; // Array of date strings YYYY-MM-DD
}

// Dashboard Context Types
export interface DashboardContextType {
  // State
  bookings: Booking[];
  services: Service[];
  staff: Staff[];
  settings: BusinessSettings;
  isLoading: boolean;

  // Booking Operations
  addBooking: (
    booking: Omit<Booking, "id" | "createdAt" | "updatedAt">
  ) => void;
  updateBooking: (id: string, updates: Partial<Booking>) => void;
  deleteBooking: (id: string) => void;
  updateBookingStatus: (id: string, status: BookingStatus) => void;

  // Service Operations
  addService: (
    service: Omit<
      Service,
      "id" | "createdAt" | "updatedAt" | "bookingCount" | "totalRevenue"
    >
  ) => void;
  updateService: (id: string, updates: Partial<Service>) => void;
  deleteService: (id: string) => void;
  toggleServiceActive: (id: string) => void;

  // Staff Operations
  addStaff: (
    staff: Omit<
      Staff,
      | "id"
      | "createdAt"
      | "updatedAt"
      | "initials"
      | "bookingsHandled"
      | "totalRevenue"
    >
  ) => void;
  updateStaff: (id: string, updates: Partial<Staff>) => void;
  deleteStaff: (id: string) => void;
  updateStaffStatus: (id: string, status: StaffStatus) => void;

  // Settings Operations
  updateBusinessInfo: (
    info: Partial<
      Pick<
        BusinessSettings,
        "name" | "email" | "phone" | "website" | "address" | "logoUrl"
      >
    >
  ) => void;
  updateOperatingHours: (hours: OperatingHours[]) => void;
  updateNotifications: (notifications: Partial<NotificationSettings>) => void;
  updatePaymentMethods: (methods: Partial<PaymentMethods>) => void;
  updateBookingRules: (rules: Partial<BookingRules>) => void;
  addHoliday: (date: string) => void;
  removeHoliday: (date: string) => void;

  // Utility functions
  getBookingById: (id: string) => Booking | undefined;
  getServiceById: (id: string) => Service | undefined;
  getStaffById: (id: string) => Staff | undefined;
  refreshData: () => void;
}

// Filter Types
export interface BookingFilters {
  search?: string;
  status?: BookingStatus | "All";
  paymentStatus?: PaymentStatus | "All";
  dateFrom?: string;
  dateTo?: string;
}

export interface ServiceFilters {
  category?: ServiceCategory | "All";
  isActive?: boolean | "All";
}

export interface StaffFilters {
  role?: StaffRole | "All";
  status?: StaffStatus | "All";
}

// Analytics Types
export interface RevenueDataPoint {
  date: string;
  revenue: number;
}

export interface BookingTrendDataPoint {
  date: string;
  count: number;
}

export interface StatCardData {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  trend?: {
    value: number; // percentage
    isPositive: boolean;
  };
  description?: string;
}
