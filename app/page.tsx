"use client"

import { useState } from "react"
import CategorySection from "@/components/category-section"
import Hero from "@/components/hero"

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const categories = [
    {
      id: "photos",
      title: "Photos",
      description: "Galerie de photographie",
      items: [
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
      ],
    },
    {
      id: "videos",
      title: "Vidéos",
      description: "Collection de vidéographie",
      items: [
        { id: 7, title: "Tanit", image: "/images/tanit-thumbnail.jpg", videoPath: "https://yassinbn02.wistia.com/medias/zkwzgjm9wm" },
        { id: 8, title: "Rafle", image: "/rafle/Untitled_1.1538.2.jpg", videoPath: "https://yassinbn02.wistia.com/medias/eem6coiyge" },
        { id: 9, title: "Spot Delice", image: "/spot delice/Délice Smoothie TVC emna.png", videoPath: "https://yassinbn02.wistia.com/medias/2qk583xmki" }
      ],
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Hero />

      <div className="px-4 md:px-8 py-12 space-y-16" id="photos-section">
        {categories.map((category) => (
          <CategorySection key={category.id} category={category} />
        ))}
      </div>
    </main>
  )
}
