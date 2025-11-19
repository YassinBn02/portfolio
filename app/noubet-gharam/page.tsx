import NoubetGharamGallery from "@/components/NoubetGharamGallery"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function NoubetGharamPage() {
  return (
    <main className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-8">
          <Link 
            href="/" 
            className="flex items-center text-foreground hover:text-foreground/80 transition-colors mr-4"
          >
            <ArrowLeft className="w-6 h-6 mr-2" />
            Retour
          </Link>
          <h1 className="text-4xl font-bold text-center flex-grow">noubet gharam</h1>
          <div className="w-10"></div> {/* Spacer to balance the layout */}
        </div>
        <NoubetGharamGallery />
      </div>
    </main>
  )
}
