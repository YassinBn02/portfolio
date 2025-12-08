import GoldenCoffee2023Gallery from "@/components/GoldenCoffee2023Gallery"
import BackButton from "@/components/back-button"

export default function GoldenCoffee2023Page() {
    return (
        <main className="min-h-screen bg-background py-12">
            <div className="container mx-auto px-4">
                <div className="flex items-center mb-8">
                    <BackButton />
                </div>
                <GoldenCoffee2023Gallery />
            </div>
        </main>
    )
}
