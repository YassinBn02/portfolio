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


      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-4 md:gap-6" suppressHydrationWarning>
        {displayedItems.map((item) => (
          <PortfolioCard
            key={item.id}
            item={{
              id: item.id,
              title: item.title,
              image: item.image,
              videoPath: item.videoPath
            }}
          />
        ))}
      </div>
    </section>
  )
}
