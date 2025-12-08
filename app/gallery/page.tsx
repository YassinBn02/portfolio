import { Gallery } from "@/components/Gallery"
import BackButton from "@/components/back-button"

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-8">
          <BackButton />
          <h1 className="text-4xl font-bold text-center flex-grow">Ken Ya Makanach</h1>
          <div className="w-10"></div>
        </div>
        <Gallery />
      </div>
    </main>
  )
}
