"use client"

import Image from "next/image"
import Hero from "@/components/hero"
import BackButton from "@/components/back-button"

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-background">
            <Hero />

            <div className="container mx-auto px-4 py-8 md:py-16">
                <div className="mb-8">
                    <BackButton />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Image Placeholder Section */}
                    <div className="relative aspect-[4/5] w-full max-w-md mx-auto overflow-hidden rounded-2xl shadow-2xl bg-muted/30 group">
                        <Image
                            src="/emna-about.jpg"
                            alt="Emna Bouaoun Carrasco"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            priority
                        />
                    </div>

                    {/* Content Section */}
                    <div className="space-y-8">
                        <div className="space-y-2">
                            <h2 className="text-sm uppercase tracking-[0.3em] text-primary font-medium">About</h2>
                            <h1 className="text-4xl md:text-5xl font-light tracking-tight text-foreground">
                                Emna Bouaoun Carrasco
                            </h1>
                            <div className="h-1 w-20 bg-primary mt-4" />
                        </div>

                        <div className="prose prose-lg dark:prose-invert">
                            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
                                I am <span className="text-foreground font-medium">Emna Bouaoun Carrasco</span>,
                                a fashion designer and stylist trained in Barcelona. My experience combines design, styling,
                                and upcycling, integrating different creative techniques.
                            </p>

                            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
                                I founded a streetwear clothing brand, <span className="text-foreground italic">Boauna</span>,
                                and I have worked as a stylist in film, theater, and television.
                            </p>

                            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
                                Thanks to my dual Spanish-Tunisian nationality, I have developed projects in countries
                                such as Tunisia, Algeria, Spain, Dubai, and Saudi Arabia, enriching my cultural vision of
                                fashion and the visual arts.
                            </p>
                        </div>

                        <div className="pt-8">
                            <div className="flex gap-4 items-center text-sm text-muted-foreground/60 uppercase tracking-widest">
                                <span>Design</span>
                                <span className="w-1 h-1 rounded-full bg-muted-foreground/40" />
                                <span>Styling</span>
                                <span className="w-1 h-1 rounded-full bg-muted-foreground/40" />
                                <span>Upcycling</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
