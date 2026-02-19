"use client"

import Hero from "@/components/hero"
import BackButton from "@/components/back-button"
import CVComponent from "@/components/CV"

export default function CVPage() {
    return (
        <main className="min-h-screen bg-background">
            <Hero />

            <div className="container mx-auto px-4 py-8 md:py-16">
                <div className="mb-8">
                    <BackButton />
                </div>

                <div className="flex flex-col items-center">
                    <CVComponent />
                </div>
            </div>
        </main>
    )
}
