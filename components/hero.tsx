const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export default function Hero() {
  return (
    <section className="relative w-full h-auto overflow-hidden bg-gradient-to-b from-primary/20 to-background pb-4">
      <div className="absolute inset-0 bg-[url('/artistic-background-texture-earth-tones.jpg')] bg-cover bg-center opacity-40" suppressHydrationWarning />

      <div className="relative z-10 flex flex-col items-center justify-center p-8" suppressHydrationWarning>
        {/* Logo at the top center */}
        <div className="flex justify-center pt-8" suppressHydrationWarning>
          <img
            src="/logo.jpg"
            alt="Emna Bouaoun"
            className="h-24 md:h-32 lg:h-40 w-auto object-contain"
            style={{ mixBlendMode: 'multiply' }}
          />
        </div>

        {/* Bottom content */}
        {/* <div className="flex flex-col items-center text-center pb-8">
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
        </div> */}
      </div>
    </section>
  )
}

import { ChevronRight } from "lucide-react"
