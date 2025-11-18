import FragmentOfLiveGallery from "@/components/FragmentOfLiveGallery"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function FragmentOfLivePage() {
  return (
    <main className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-8">
          <Link 
            href="/" 
            className="flex items-center text-foreground hover:text-foreground/80 transition-colors mr-4"
          >
            <ArrowLeft className="w-6 h-6 mr-2" />
            Back
          </Link>
          <h1 className="text-4xl font-bold text-center flex-grow">Fragment of Live</h1>
          <div className="w-10"></div> {/* Spacer to balance the layout */}
        </div>
        <FragmentOfLiveGallery />
      </div>
    </main>
  )
}
