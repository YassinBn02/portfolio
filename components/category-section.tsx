"use client"

import { useState } from "react"
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

  const displayedItems = isExpanded ? category.items : category.items.slice(0, 6)

  return (
    <section className="space-y-4">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">{category.title}</h2>
        <p className="text-muted-foreground text-lg">{category.description}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
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

      {category.items.length > 6 && !isExpanded && (
        <button
          onClick={() => setIsExpanded(true)}
          className="px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:bg-secondary/90 transition-colors mt-8"
        >
          Voir plus
        </button>
      )}

      {isExpanded && category.items.length > 6 && (
        <button
          onClick={() => setIsExpanded(false)}
          className="px-6 py-3 bg-muted text-muted-foreground rounded-lg font-semibold hover:bg-muted/80 transition-colors mt-8"
        >
          Voir moins
        </button>
      )}
    </section>
  )
}
