import { Card } from "@/components/ui/card"
import { Star } from 'lucide-react'

interface TestimonialCardProps {
  name: string
  role: string
  content: string
  rating: number
}

export function TestimonialCard({ name, role, content, rating }: TestimonialCardProps) {
  return (
    <Card className="p-6">
      <div className="flex gap-1 mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="h-5 w-5 fill-primary text-primary" />
        ))}
      </div>
      <p className="text-muted-foreground mb-4 italic">"{content}"</p>
      <div>
        <p className="font-semibold text-foreground">{name}</p>
        <p className="text-sm text-muted-foreground">{role}</p>
      </div>
    </Card>
  )
}
