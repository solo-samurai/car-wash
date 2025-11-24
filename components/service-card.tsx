import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { ReactNode } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface ServiceCardProps {
  icon: ReactNode
  title: string
  description: string
  price: string
}

export function ServiceCard({ icon, title, description, price }: ServiceCardProps) {
  return (
    <Card className="p-6 hover:shadow-lg hover:border-primary/40 transition-all group">
      <div className="flex flex-col h-full">
        <div className="h-12 w-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4 flex-grow leading-relaxed">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-primary">{price}</span>
          <Link href="/book">
            <Button variant="outline" size="sm" className="gap-1 group-hover:gap-2 transition-all bg-transparent">
              Book
              <ArrowRight className="h-3 w-3" />
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  )
}
