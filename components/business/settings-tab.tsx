"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Building2, Mail, Phone, Globe, MapPin, Save } from "lucide-react";

export function SettingsTab() {
  return (
    <div className="space-y-6">
      <div className="grid gap-6 max-w-5xl">
        {/* Business Profile Card */}
        <Card className="border-2">
          <CardHeader className="space-y-1 pb-4">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-primary/10">
                <Building2 className="h-5 w-5 text-primary" />
              </div>
              <div>
                <CardTitle className="text-xl">Business Profile</CardTitle>
                <CardDescription className="text-sm">
                  Update your business information visible to customers
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Business Name */}
              <div className="space-y-2">
                <Label
                  htmlFor="businessName"
                  className="text-sm font-medium flex items-center gap-2"
                >
                  <Building2 className="h-4 w-4 text-muted-foreground" />
                  Business Name
                </Label>
                <Input
                  id="businessName"
                  defaultValue="CarWash Somalia"
                  className="h-11"
                  placeholder="Enter business name"
                />
              </div>

              {/* Business Email */}
              <div className="space-y-2">
                <Label
                  htmlFor="email"
                  className="text-sm font-medium flex items-center gap-2"
                >
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  Business Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  defaultValue="contact@carwashsomalia.com"
                  className="h-11"
                  placeholder="email@example.com"
                />
              </div>

              {/* Phone Number */}
              <div className="space-y-2">
                <Label
                  htmlFor="phone"
                  className="text-sm font-medium flex items-center gap-2"
                >
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  defaultValue="+252 61 123 4567"
                  className="h-11"
                  placeholder="+252 XX XXX XXXX"
                />
              </div>

              {/* Website */}
              <div className="space-y-2">
                <Label
                  htmlFor="website"
                  className="text-sm font-medium flex items-center gap-2"
                >
                  <Globe className="h-4 w-4 text-muted-foreground" />
                  Website
                </Label>
                <Input
                  id="website"
                  type="url"
                  defaultValue="www.carwashsomalia.com"
                  className="h-11"
                  placeholder="www.example.com"
                />
              </div>
            </div>

            {/* Address - Full Width */}
            <div className="space-y-2">
              <Label
                htmlFor="address"
                className="text-sm font-medium flex items-center gap-2"
              >
                <MapPin className="h-4 w-4 text-muted-foreground" />
                Business Address
              </Label>
              <Input
                id="address"
                defaultValue="123 Maka Al Mukarama Rd, Mogadishu, Somalia"
                className="h-11"
                placeholder="Enter full business address"
              />
            </div>

            {/* Description */}
            <div className="space-y-2">
              <Label htmlFor="description" className="text-sm font-medium">
                Business Description (Optional)
              </Label>
              <Textarea
                id="description"
                placeholder="Describe your car wash services and what makes your business unique..."
                className="resize-none min-h-[100px]"
                defaultValue=""
              />
              <p className="text-xs text-muted-foreground">
                A brief description helps customers understand your services
                better
              </p>
            </div>

            <div className="flex justify-end pt-2">
              <Button size="lg" className="min-w-[140px]">
                <Save className="mr-2 h-4 w-4" />
                Save Changes
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
