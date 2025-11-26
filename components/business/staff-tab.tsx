"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Plus, MoreHorizontal, Mail, Phone } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function StaffTab() {
  const staff = [
    {
      id: 1,
      name: "Alex Johnson",
      role: "Manager",
      email: "alex@example.com",
      phone: "+1 234 567 890",
      status: "Active",
      avatar: "/avatars/01.png",
      initials: "AJ",
    },
    {
      id: 2,
      name: "Sarah Williams",
      role: "Detailer",
      email: "sarah@example.com",
      phone: "+1 234 567 891",
      status: "Active",
      avatar: "/avatars/02.png",
      initials: "SW",
    },
    {
      id: 3,
      name: "Mike Brown",
      role: "Washer",
      email: "mike@example.com",
      phone: "+1 234 567 892",
      status: "On Leave",
      avatar: "/avatars/03.png",
      initials: "MB",
    },
    {
      id: 4,
      name: "Emily Davis",
      role: "Receptionist",
      email: "emily@example.com",
      phone: "+1 234 567 893",
      status: "Active",
      avatar: "/avatars/04.png",
      initials: "ED",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-lg font-medium">Staff Management</h2>
          <p className="text-sm text-muted-foreground">
            Manage your team members and their roles.
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Add Staff
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {staff.map((member) => (
          <Card key={member.id}>
            <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
              <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={member.avatar} alt={member.name} />
                  <AvatarFallback>{member.initials}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-base">{member.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="-mr-2">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Edit Details</DropdownMenuItem>
                  <DropdownMenuItem>Change Role</DropdownMenuItem>
                  <DropdownMenuItem className="text-destructive">
                    Remove
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </CardHeader>
            <CardContent className="mt-4 space-y-3">
              <div className="flex items-center text-sm text-muted-foreground">
                <Mail className="mr-2 h-4 w-4" />
                {member.email}
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Phone className="mr-2 h-4 w-4" />
                {member.phone}
              </div>
              <div className="pt-2">
                <Badge
                  variant={member.status === "Active" ? "default" : "secondary"}
                >
                  {member.status}
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
