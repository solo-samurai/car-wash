import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  rating: number;
}

export function TestimonialCard({
  name,
  role,
  content,
  rating,
}: TestimonialCardProps) {
  return (
    <Card className="p-8 hover:shadow-lg transition-all duration-300 border-primary/10 bg-card/50 backdrop-blur-sm">
      <div className="flex gap-1 mb-6">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`h-5 w-5 ${
              i < rating
                ? "fill-primary text-primary"
                : "fill-muted text-muted-foreground/20"
            }`}
          />
        ))}
      </div>
      <blockquote className="text-lg text-muted-foreground mb-6 leading-relaxed">
        "{content}"
      </blockquote>
      <div className="flex items-center gap-4">
        <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-lg">
          {name.charAt(0)}
        </div>
        <div>
          <p className="font-bold text-foreground">{name}</p>
          <p className="text-sm text-primary font-medium">{role}</p>
        </div>
      </div>
    </Card>
  );
}
