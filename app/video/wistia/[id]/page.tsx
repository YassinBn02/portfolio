'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { X } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function WistiaPlayer() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [videoId, setVideoId] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Get the ID from the URL search params
    const id = typeof window !== 'undefined' ? window.location.pathname.split('/').pop() : ''
    
    if (id) {
      setVideoId(id)
      setIsLoading(false)
    } else {
      setIsLoading(false)
    }
  }, [])

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
      </div>
    )
  }

  if (!videoId) {
    return (
      <div className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center text-white text-center p-4">
        <h2 className="text-2xl font-bold mb-4">Video Not Found</h2>
        <p className="mb-6">The requested video could not be loaded.</p>
        <button
          onClick={() => router.push('/')}
          className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-md transition-colors"
        >
          Return Home
        </button>
      </div>
    )
  }

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
          <div className="w-full h-full">
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
    </div>
  )
}
