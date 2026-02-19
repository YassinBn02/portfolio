"use client"

import { useState, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import CategorySection from "@/components/category-section"
import Hero from "@/components/hero"
import HomeGalleryMenu from "@/components/HomeGalleryMenu"

function HomeContent() {
  const searchParams = useSearchParams()
  const initialCategory = searchParams.get("category") || "Film"
  const [activeCategory, setActiveCategory] = useState(initialCategory)

  // All available items
  const allItems = [
    { id: 1, title: "Ken Ya Makanach", image: "/Ken Ya Makanach/4ec51146-5426-4b46-8afe-c79e7f55e2a3 - copia.jpeg" },
    { id: 2, title: "Fragment of live", image: "/Fragment of live/poster_9231.jpg" },
    { id: 3, title: "Jo Malon", image: "/Jo Malon/IMG-20251105-WA0008.jpg" },
    { id: 4, title: "Le bout de la mer", image: "/Le bout de la mer/1716370780_acb2e67a1544cc4032c7_large.jpg" },
    { id: 5, title: "Lucidream", image: "/Lucidream/1.png" },
    { id: 6, title: "May B", image: "/may b/475442515_924754456445662_3822544371269994327_n.jpg" },
    { id: 10, title: "Noubet Gharam", image: "/noubet gharam/480169077_1239155007578260_276561949140420097_n.jpg" },
    { id: 11, title: "Orange", image: "/orange 2024/Captura de pantalla 2025-11-05 104425.png" },
    { id: 12, title: "Rafle", image: "/rafle/MV5BMGM1MTI1NGQtNjMxZS00YmM5LThkYjAtNzlmNDk2ZTA0MzdmXkEyXkFqcGc@._V1_QL75_UY281_CR17,0,190,281_.jpg" },
    { id: 13, title: "Salam", image: "/Salam/imed jemaa.jpg" },
    { id: 14, title: "Salwa", image: "/Salwa/Affiche_Salwa.jpg" },
    { id: 15, title: "Spot Delice", image: "/spot delice/Délice Smoothie TVC emna.png" },
    { id: 16, title: "Where the wind comes from", image: "/Where the wind comes from/Imagen de WhatsApp 2025-10-27 a las 14.04.31_c5bd3dd9.jpg" },
    { id: 17, title: "Tanit", image: "/images/tanit-thumbnail.jpg" },
    { id: 18, title: "La Maison Dorée", image: "/La Maison Dorée/cover.jpg" },
    { id: 19, title: "Salla Salla", image: "Salla Salla/cover.jpg" },
    { id: 20, title: "Spot Coca Cola Marroc", image: "/cocacola/Captura de pantalla 2026-02-11 140915.png" },
    { id: 21, title: "Spot Suzuki", image: "/suzuki/Captura de pantalla 2026-02-12 111922.png" },
    { id: 22, title: "Spot Selja", image: "/Selja/Captura de pantalla 2026-02-12 113225.png" },
    { id: 23, title: "Golden Coffee TVC1", image: "/golden Coffee Tvc 1/Captura de pantalla 2026-02-12 113936.png" },
    { id: 24, title: "Golden Coffee 2023", image: "/golde caffe 2023/Captura de pantalla 2026-02-12 115304.png" },
    { id: 25, title: "Spot Al Mazraa 2023", image: "/mazraa/Captura de pantalla 2026-02-12 121835.png" },
    { id: 26, title: "Orange 2022", image: "/orange 2022/Captura de pantalla 2026-02-12 120559.png" },
  ]

  // Mapping of categories to item titles
  const categoryMap: Record<string, string[]> = {
    "Film": ["Where the wind comes from", "La Maison Dorée"],
    "Series": ["Rafle", "Ken Ya Makanach", "Salla Salla"],
    "Short-film": ["Fragment of live", "Salwa"],
    "Theater": ["Noubet Gharam", "Tanit", "Salam", "Lucidream", "Le bout de la mer", "May B"],
    "Commercials": ["Orange", "Jo Malon", "Spot Delice", "Spot Coca Cola Marroc", "Spot Suzuki", "Spot Selja", "Golden Coffee TVC1", "Golden Coffee 2023", "Spot Al Mazraa 2023", "Orange 2022"],
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
            { id: 7, title: "CV", href: "/cv" },
          ]}
        />
      </div>

      <div className="px-4 md:px-8 py-12 space-y-16" id="photos-section" suppressHydrationWarning>
        <CategorySection
          category={{
            id: activeCategory.toLowerCase(),
            title: "", // Empty title as requested previously
            description: "",
            items: filteredItems,
            rawTitle: activeCategory // Passing the raw title for the card to use
          }}
        />
      </div>
    </main>
  )
}

export default function Home() {
  return (
    <Suspense fallback={<main className="min-h-screen bg-background"><Hero /></main>}>
      <HomeContent />
    </Suspense>
  )
}
