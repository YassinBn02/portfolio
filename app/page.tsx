"use client"

import { useState } from "react"
import CategorySection from "@/components/category-section"
import Hero from "@/components/hero"
import HomeGalleryMenu from "@/components/HomeGalleryMenu"

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("Film")

  // All available items
  const allItems = [
    { id: 1, title: "Ken Ya Makanach", image: "/Ken Ya Makanach/4ec51146-5426-4b46-8afe-c79e7f55e2a3 - copia.jpeg" },
    { id: 2, title: "Fragment of live", image: "/Fragment of live/poster_9231.jpg" },
    { id: 3, title: "Jo Malon", image: "/Jo Malon/IMG-20251105-WA0003.jpg" },
    { id: 4, title: "Le bout de la mer", image: "/Le bout de la mer/1716370780_acb2e67a1544cc4032c7_large.jpg" },
    { id: 5, title: "Lucidream", image: "/Lucidream/1.png" },
    { id: 6, title: "may b", image: "/may b/475442515_924754456445662_3822544371269994327_n.jpg" },
    { id: 10, title: "noubet gharam", image: "/noubet gharam/480169077_1239155007578260_276561949140420097_n.jpg" },
    { id: 11, title: "Orange", image: "/orange 2024/Captura de pantalla 2025-11-05 104425.png" },
    { id: 12, title: "Rafle", image: "/rafle/IMG-20250818-WA0206.jpg" },
    { id: 13, title: "Salam", image: "/Salam/imed jemaa.jpg" },
    { id: 14, title: "Salwa", image: "/Salwa/Affiche_Salwa.jpg" },
    { id: 15, title: "Spot Delice", image: "/spot delice/Délice Smoothie TVC emna.png" },
    { id: 16, title: "Where the wind comes from", image: "/Where the wind comes from/Imagen de WhatsApp 2025-10-27 a las 14.04.31_c5bd3dd9.jpg" },
    { id: 17, title: "Tanit", image: "/images/tanit-thumbnail.jpg" },
  ]

  // Mapping of categories to item titles
  const categoryMap: Record<string, string[]> = {
    "Film": ["Where the wind comes from"],
    "Series": ["Rafle", "Ken Ya Makanach"],
    "Short-film": ["Fragment of live", "Salwa"],
    "Theater": ["noubet gharam", "Tanit", "Salam", "Lucidream", "Le bout de la mer", "may b"],
    "Commercials": ["Orange", "Jo Malon", "Spot Delice"],
  }

  // Filter items based on active category
  const filteredItems = allItems.filter(item => {
    const allowedTitles = categoryMap[activeCategory] || []
    return allowedTitles.includes(item.title)
  })

  return (
    <main className="min-h-screen bg-background">
      <Hero />

      {/* Navigation menu under the hero */}
      <div className="px-4 md:px-8 pt-0" suppressHydrationWarning>
        <HomeGalleryMenu
          activeCategory={activeCategory}
          onSelect={setActiveCategory}
          items={[
            { id: 1, title: "Film", href: "#" },
            { id: 2, title: "Series", href: "#" },
            { id: 3, title: "Short-film", href: "#" },
            { id: 4, title: "Theater", href: "#" },
            { id: 5, title: "Commercials", href: "#" },
            { id: 6, title: "About", href: "/about" },
          ]}
        />
      </div>

      <div className="px-4 md:px-8 py-12 space-y-16" id="photos-section" suppressHydrationWarning>
        <CategorySection
          category={{
            id: activeCategory.toLowerCase(),
            title: "", // Empty title as requested previously
            description: "",
            items: filteredItems
          }}
        />
      </div>
    </main>
  )
}
