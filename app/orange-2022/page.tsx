import Orange2022Gallery from "@/components/Orange2022Gallery"
import BackButton from "@/components/back-button"

export default function Orange2022Page() {
    return (
        <main className="min-h-screen bg-background py-12">
            <div className="container mx-auto px-4">
                <div className="flex items-center mb-8">
                    <BackButton />
                </div>
                <Orange2022Gallery />
            </div>
        </main>
    )
}
