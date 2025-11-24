import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  price: string;
}

export function ServiceCard({
  icon,
  title,
  description,
  price,
}: ServiceCardProps) {
  return (
    <Card className="p-6 hover:shadow-xl hover:border-primary/40 transition-all duration-300 group bg-card/50 backdrop-blur-sm border-primary/10">
      <div className="flex flex-col h-full">
        <div className="h-14 w-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground mb-6 flex-grow leading-relaxed">
          {description}
        </p>
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/50">
          <span className="text-2xl font-bold text-primary">{price}</span>
          <Link href="/book">
            <Button
              variant="ghost"
              size="sm"
              className="gap-2 group-hover:bg-primary group-hover:text-primary-foreground transition-all rounded-full px-4"
            >
              Book Now
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  );
}
