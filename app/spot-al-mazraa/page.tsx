import SpotAlMazraaGallery from "@/components/SpotAlMazraaGallery"
import BackButton from "@/components/back-button"

export default function SpotAlMazraaPage() {
    return (
        <main className="min-h-screen bg-background py-12">
            <div className="container mx-auto px-4">
                <div className="flex items-center mb-8">
                    <BackButton />
                </div>
                <SpotAlMazraaGallery />
            </div>
        </main>
    )
}
