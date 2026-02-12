"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Play } from "lucide-react"

interface PortfolioCardProps {
  item: {
    id: number
    title: string
    image: string
    videoPath?: string
  }
  category?: string
}

export default function PortfolioCard({ item, category }: PortfolioCardProps) {
  const router = useRouter()
  const [isHovered, setIsHovered] = useState(false)

  const handleClick = (e: React.MouseEvent) => {
    // Helper to add category param
    const getPath = (path: string) => category ? `${path}?category=${encodeURIComponent(category)}` : path;

    // Handle Wistia videos
    if (item.videoPath && item.videoPath.includes('wistia.com')) {
      e.preventDefault();
      const videoId = item.videoPath.split('/').pop();
      if (videoId) {
        router.push(getPath(`/video/wistia/${videoId}`));
        return;
      }
    }

    // For other video paths
    if (item.videoPath) {
      router.push(getPath(`/video/player?video=${encodeURIComponent(item.videoPath)}`))
    } else if (item.title === "Ken Ya Makanach") {
      router.push(getPath('/ken-ya-makanach'))
    } else if (item.title === "Fragment of live") {
      router.push(getPath('/fragment-of-live'))
    } else if (item.title === "Jo Malon") {
      router.push(getPath('/jo-malon'))
    } else if (item.title === "Le bout de la mer") {
      router.push(getPath('/bout-de-la-mer'))
    } else if (item.title === "Lucidream") {
      router.push(getPath('/lucidream'))
    } else if (item.title === "May B") {
      router.push(getPath('/may-b'))
    } else if (item.title === "Noubet Gharam") {
      router.push(getPath('/noubet-gharam'))
    } else if (item.title === "Orange") {
      router.push(getPath('/orange'))
    } else if (item.title === "Tanit") {
      router.push(getPath('/tanit'))
    } else if (item.title === "Rafle") {
      router.push(getPath('/rafle'))
    } else if (item.title === "Salam") {
      router.push(getPath('/salam'))
    } else if (item.title === "Salwa") {
      router.push(getPath('/salwa'))
    } else if (item.title === "Spot Delice") {
      router.push(getPath('/spot-delice'))
    } else if (item.title === "Where the wind comes from") {
      router.push(getPath('/where-the-wind-comes-from'))
    } else if (item.title === "La Maison Dorée") {
      router.push(getPath('/la-maison-doree'))
    } else if (item.title === "Salla Salla") {
      router.push(getPath('/salla-salla'))
    } else if (item.title === "Spot Coca Cola Marroc") {
      router.push(getPath('/spot-coca-cola-marroc'))
    } else if (item.title === "Spot Suzuki") {
      router.push(getPath('/spot-suzuki'))
    } else if (item.title === "Spot Selja") {
      router.push(getPath('/spot-selja'))
    } else if (item.title === "Golden Coffee TVC1") {
      router.push(getPath('/golden-coffee-tvc1'))
    } else if (item.title === "Golden Coffee 2023") {
      router.push(getPath('/golden-coffee-2023'))
    } else if (item.title === "Spot Al Mazraa 2023") {
      router.push(getPath('/spot-al-mazraa'))
    } else if (item.title === "Orange 2022") {
      router.push(getPath('/orange-2022'))
    }
  }

  return (
    <div
      className="group relative cursor-pointer overflow-hidden rounded-lg bg-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      suppressHydrationWarning
    >
      <div className="relative w-full pt-[125%]" suppressHydrationWarning>
        <Image
          src={item.image || "/placeholder.svg"}
          alt={item.title}
          fill
          className={`absolute inset-0 w-full h-full ${item.title === "Le bout de la mer" || item.title === "Lucidream" || item.title === "Spot Coca Cola Marroc" || item.title === "Spot Suzuki" || item.title === "Spot Selja" || item.title === "Golden Coffee TVC1" || item.title === "Golden Coffee 2023" ? "object-contain bg-black" : "object-cover"} transition-transform duration-300 group-hover:scale-110`}
        />
      </div>

      <div
        className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-4 transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"
          }`}
        suppressHydrationWarning
      >
        <h3 className="text-white font-semibold text-lg mb-2 text-balance">{item.title}</h3>
        <div className="flex items-center gap-2" suppressHydrationWarning>
          <Play className="w-4 h-4 text-accent fill-accent" />
          <span className="text-sm text-white/80">Voir détails</span>
        </div>
      </div>

      <div className="absolute inset-0 border border-border/50 rounded-lg pointer-events-none" suppressHydrationWarning />
    </div>
  )
}
