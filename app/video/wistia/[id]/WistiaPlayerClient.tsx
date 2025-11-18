// app/video/wistia/[id]/WistiaPlayerClient.tsx
'use client'

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function WistiaPlayer({ videoId }: { videoId: string }) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(false)
  }, [])

  if (isLoading) return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
    </div>
  )

  const embedUrl = `https://fast.wistia.net/embed/iframe/${videoId}?autoplay=1`

  return (
    <div className="fixed inset-0 bg-black z-50">
      <div className="fixed top-4 left-4 z-10">
        <button
          onClick={() => router.back()}
          className="flex items-center text-white hover:text-gray-300 transition-colors bg-black/50 p-2 rounded-full"
          aria-label="Close video"
        >
          <X className="w-6 h-6" />
        </button>
      </div>
      <div className="flex items-center justify-center w-full h-full">
        <div className="w-full max-w-6xl h-[80vh] px-4">
          <iframe
            src={embedUrl}
            allow="autoplay; fullscreen"
            allowFullScreen
            className="w-full h-full"
            frameBorder="0"
            scrolling="no"
            title="Wistia Video Player"
          ></iframe>
        </div>
      </div>
    </div>
  )
}
