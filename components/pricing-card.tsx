import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

interface PricingFeature {
  text: string
  included: boolean
}

interface PricingCardProps {
  title: string
  price: string
  period?: string
  features: PricingFeature[]
  isPopular?: boolean
  buttonText?: string
}

export function PricingCard({
  title,
  price,
  period = "/month",
  features,
  isPopular = false,
  buttonText = "Subscribe Now",
}: PricingCardProps) {
  return (
    <Card
      className={`relative p-8 flex flex-col h-full ${isPopular ? "border-primary shadow-lg scale-105 z-10" : "border-border"} hover:shadow-xl transition-all duration-300`}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
            Most Popular
          </span>
        </div>
      )}

      <div className="text-center mb-8">
        <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
        <div className="flex items-baseline justify-center gap-1">
          <span className="text-4xl font-bold text-foreground">{price}</span>
          <span className="text-muted-foreground">{period}</span>
        </div>
      </div>

      <ul className="space-y-4 mb-8 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <div
              className={`mt-1 h-5 w-5 rounded-full flex items-center justify-center flex-shrink-0 ${feature.included ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"}`}
            >
              <Check className="h-3 w-3" />
            </div>
            <span className={`text-sm ${feature.included ? "text-foreground" : "text-muted-foreground line-through"}`}>
              {feature.text}
            </span>
          </li>
        ))}
      </ul>

      <div className="w-full">
        <Button className="w-full" variant={isPopular ? "default" : "outline"} size="lg">
          {buttonText}
        </Button>
      </div>
    </Card>
  )
}
