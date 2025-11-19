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
}

export default function PortfolioCard({ item }: PortfolioCardProps) {
  const router = useRouter()
  const [isHovered, setIsHovered] = useState(false)

  const handleClick = (e: React.MouseEvent) => {
    // Handle Wistia videos
    if (item.videoPath && item.videoPath.includes('wistia.com')) {
      e.preventDefault();
      const videoId = item.videoPath.split('/').pop();
      if (videoId) {
        router.push(`/video/wistia/${videoId}`);
        return;
      }
    }
    
    // For other video paths
    if (item.videoPath) {
      router.push(`/video/player?video=${encodeURIComponent(item.videoPath)}`)
    } else if (item.title === "Ken Ya Makanach") {
      router.push('/ken-ya-makanach')
    } else if (item.title === "Fragment of live") {
      router.push('/fragment-of-live')
    } else if (item.title === "Jo Malon") {
      router.push('/jo-malon')
    } else if (item.title === "Le bout de la mer") {
      router.push('/bout-de-la-mer')
    } else if (item.title === "Lucidream") {
      router.push('/lucidream')
    } else if (item.title === "may b") {
      router.push('/may-b')
    } else if (item.title === "noubet gharam") {
      router.push('/noubet-gharam')
    } else if (item.title === "Orange") {
      router.push('/orange')
    } else if (item.title === "Tanit") {
      router.push('/tanit')
    } else if (item.title === "Rafle") {
      router.push('/rafle')
    } else if (item.title === "Salam") {
      router.push('/salam')
    } else if (item.title === "Salwa") {
      router.push('/salwa')
    } else if (item.title === "Spot Delice") {
      router.push('/spot-delice')
    } else if (item.title === "Where the wind comes from") {
      router.push('/where-the-wind-comes-from')
    }
  }

  return (
    <div
      className="group relative cursor-pointer overflow-hidden rounded-lg bg-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      <div className="relative w-full pt-[200%]">
        <Image
          src={item.image || "/placeholder.svg"}
          alt={item.title}
          fill
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      <div
        className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-4 transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <h3 className="text-white font-semibold text-lg mb-2 text-balance">{item.title}</h3>
        <div className="flex items-center gap-2">
          <Play className="w-4 h-4 text-accent fill-accent" />
          <span className="text-sm text-white/80">Voir détails</span>
        </div>
      </div>

      <div className="absolute inset-0 border border-border/50 rounded-lg pointer-events-none" />
    </div>
  )
}
