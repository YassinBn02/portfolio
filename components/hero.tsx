const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export default function Hero() {
  return (
    <section className="relative w-full h-96 md:h-[500px] lg:h-[600px] overflow-hidden bg-gradient-to-b from-primary/20 to-background">
      <div className="absolute inset-0 bg-[url('/artistic-background-texture-earth-tones.jpg')] bg-cover bg-center opacity-40" />

      <div className="relative z-10 h-full flex flex-col items-start justify-end p-8 md:p-16">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 tracking-tight max-w-2xl">
          Emna Bouaoun
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-xl">
          Portfolio de photographie et vidéographie
        </p>
        <button
          onClick={() => scrollToSection('photos-section')}
          className="px-8 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2 shadow-md hover:shadow-lg"
          style={{ backgroundColor: "#F1D4AF", color: "#5a4a3a" }}
        >
          Explorer
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  )
}

import { ChevronRight } from "lucide-react"
