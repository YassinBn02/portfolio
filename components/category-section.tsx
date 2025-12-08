"use client"

import { useEffect, useState } from "react"
import PortfolioCard from "./portfolio-card"

interface CategorySectionProps {
  category: {
    id: string
    title: string
    description: string
    items: Array<{
      id: number
      title: string
      image: string
      videoPath?: string
    }>
    rawTitle?: string
  }
}

export default function CategorySection({ category }: CategorySectionProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(typeof window !== 'undefined' && window.innerWidth < 640)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const displayedItems = category.items

  return (
    <section className="space-y-4">


      <div className="flex flex-wrap justify-center gap-4 md:gap-6" suppressHydrationWarning>
        {displayedItems.map((item) => (
          <div key={item.id} className="w-[calc(33.333%-11px)] md:w-[calc(25%-18px)]">
            <PortfolioCard
              item={{
                id: item.id,
                title: item.title,
                image: item.image,
                videoPath: item.videoPath
              }}
              category={category.rawTitle}
            />
          </div>
        ))}
      </div>
    </section>
  )
}
