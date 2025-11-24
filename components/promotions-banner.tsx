"use client"

import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import { useState } from "react"

interface PromotionsBannerProps {
  title: string
  description: string
  discount?: string
  ctaText?: string
  bgColor?: string
}

export function PromotionsBanner({
  title,
  description,
  discount,
  ctaText = "Claim Offer",
  bgColor = "bg-primary",
}: PromotionsBannerProps) {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className={`${bgColor} text-primary-foreground`}>
      <div className="container mx-auto px-4 py-4 md:py-6">
        <div className="flex items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-lg md:text-xl font-bold">{title}</h3>
            <p className="text-sm md:text-base opacity-90">{description}</p>
          </div>
          {discount && (
            <div className="hidden sm:block text-center bg-white/20 px-4 py-2 rounded-lg">
              <p className="text-2xl md:text-3xl font-bold">{discount}</p>
              <p className="text-xs opacity-75">OFF</p>
            </div>
          )}
          <div className="flex items-center gap-2">
            <Button size="sm" variant="secondary" className="hidden sm:inline-flex">
              {ctaText}
            </Button>
            <button
              onClick={() => setIsVisible(false)}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Close banner"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
        <div className="sm:hidden mt-3 flex gap-2">
          <Button size="sm" variant="secondary" className="flex-1">
            {ctaText}
          </Button>
        </div>
      </div>
    </div>
  )
}
