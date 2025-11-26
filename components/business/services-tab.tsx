"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus, MoreHorizontal, Clock, DollarSign } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ServicesTab() {
  const services = [
    {
      id: 1,
      name: "Basic Wash",
      description: "Exterior wash, wheel cleaning, and hand dry.",
      price: 25.0,
      duration: "30 min",
      status: "Active",
    },
    {
      id: 2,
      name: "Premium Wash",
      description: "Basic wash plus wax, tire shine, and window cleaning.",
      price: 45.0,
      duration: "45 min",
      status: "Active",
    },
    {
      id: 3,
      name: "Interior Detail",
      description: "Deep cleaning of carpets, seats, and dashboard.",
      price: 85.0,
      duration: "90 min",
      status: "Active",
    },
    {
      id: 4,
      name: "Full Detail",
      description: "Complete interior and exterior detailing package.",
      price: 150.0,
      duration: "180 min",
      status: "Active",
    },
    {
      id: 5,
      name: "Ceramic Coating",
      description: "Long-lasting paint protection.",
      price: 300.0,
      duration: "240 min",
      status: "Inactive",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-lg font-medium">Service Menu</h2>
          <p className="text-sm text-muted-foreground">
            Manage your service offerings and pricing.
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Add Service
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <Card key={service.id}>
            <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
              <div className="space-y-1">
                <CardTitle>{service.name}</CardTitle>
                <CardDescription className="line-clamp-2">
                  {service.description}
                </CardDescription>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="-mr-2">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Edit Service</DropdownMenuItem>
                  <DropdownMenuItem>Duplicate</DropdownMenuItem>
                  <DropdownMenuItem className="text-destructive">
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4 mt-4">
                <div className="flex items-center text-sm text-muted-foreground">
                  <DollarSign className="mr-1 h-4 w-4" />
                  {service.price.toFixed(2)}
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="mr-1 h-4 w-4" />
                  {service.duration}
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Badge
                variant={service.status === "Active" ? "default" : "secondary"}
              >
                {service.status}
              </Badge>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
