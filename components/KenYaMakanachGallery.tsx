'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { X, Play } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';

interface GalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  initialIndex?: number;
}


const getImageUrl = (image: string) => {
  return `/Ken Ya Makanach/${image}`;
};

function GalleryModal({ isOpen, onClose, images, initialIndex = 0 }: GalleryModalProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  if (!images.length) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[90vw] max-h-[90vh] p-0 bg-transparent border-none">
        <DialogTitle className="sr-only">Ken Ya Makanach Gallery</DialogTitle>
        <div className="relative w-full h-full">
          <button
            onClick={onClose}
            className="absolute -top-10 right-0 text-white hover:text-gray-300 z-50"
            aria-label="Close gallery"
          >
            <X className="w-8 h-8" />
          </button>

          <div className="relative w-full h-[80vh]">
            <Image
              src={`/Ken Ya Makanach/${images[currentIndex]}`}
              alt={`Ken Ya Makanach ${currentIndex + 1}`}
              fill
              className="object-contain"
              priority
            />
          </div>

          {images.length > 1 && (
            <>
              <button
                onClick={goToPrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                aria-label="Previous image"
              >
                ←
              </button>
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                aria-label="Next image"
              >
                →
              </button>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                {currentIndex + 1} / {images.length}
              </div>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

// useRouter moved to top

export default function KenYaMakanachGallery() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Project Information
  const projectInfo = {
    title: "KEN YA MAKENCH",
    director: "Abdelhamid Bouchnak",
    role: "Wardrobe assistant",
    trailerUrl: "https://www.youtube.com/embed/-22VyioH1uo",
  };

  // List of images from the Ken Ya Makanach folder
  const kenYaMakanachImages = [
    '173507912_10227311512113216_4645507778149017221_n.jpg',
    '277530811_10158848135412616_4567132115097189539_n.jpg',
    '277583295_10158847429177616_8734465017008893907_n.jpg',
    '277587101_10158847429197616_8281877272981055827_n.jpg',
    '277778725_10158847429182616_1260924532532422940_n.jpg',
    '277792884_10158847429172616_1112012869513344447_n.jpg',
    '277795545_10158851027677616_4804376373641650961_n.jpg',
    '277798403_10158858393707616_8647319820138494427_n.jpg',
    '277800871_10158855482207616_2199295335355645841_n.jpg',
    '277991941_10158843522502616_3330149995407809204_n.jpg',
    '278441344_10158854059872616_2949644131999317386_n.jpg',
    '278489154_10158857914767616_1445923939465616330_n.jpg',
    '278671469_10158858393617616_6665752856445024971_n.jpg',
    '469375783_929059532504609_230151008395075808_n.jpg',
    '469441361_929059419171287_5816902094337395349_n.jpg',
    '469477929_929059522504610_7901229805640376043_n.jpg',
  ];

  const handleOpenVideo = () => {
    // Using a placeholder or the first image as the video thumbnail implies we might simply want to open the YouTube link in a new tab or use a player.
    // However, the logic for video tiles usually navigates to a video player page or opens a different modal.
    // Looking at other galleries, they push to /video/wistia/... or similar.
    // But here we have a YouTube embed link.
    // Let's assume we want to open it. But wait, `router` is not defined?
    // Actually I need to verify if `useRouter` is used.
    // Ah, line 82: `export default function KenYaMakanachGallery() { ... const [isOpen...` - useRouter is missing.
  };

  const openModal = (index: number) => {
    setSelectedIndex(index);
    setIsOpen(true);
  };

  if (kenYaMakanachImages.length === 0) {
    return <div className="text-center py-12">No images found</div>;
  }

  return (
    <div className="container mx-auto px-4">
      {/* Project Details Header */}
      <div className="flex flex-col items-center mb-16 space-y-6">
        <h1 className="text-4xl md:text-5xl font-light uppercase tracking-widest text-center">
          {projectInfo.title}
        </h1>

        <div className="flex flex-col items-center space-y-2">
          <p className="text-xl md:text-2xl font-light text-center">
            {projectInfo.director}
          </p>
        </div>

        {/* The trailer section was moved into the flex layout below, but keeping this comment for context */}
        {/* {projectInfo.trailerUrl && (
          <div className="w-full max-w-4xl aspect-video rounded-sm overflow-hidden shadow-xl my-8">
            <iframe
              width="100%"
              height="100%"
              src={projectInfo.trailerUrl}
              title={`${projectInfo.title} Trailer`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        )} */}

        <div className="flex flex-col items-center space-y-1 text-sm md:text-base text-muted-foreground uppercase tracking-wide">
          <p>Role: {projectInfo.role}</p>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        {/* Video tile */}
        {projectInfo.trailerUrl && ( // Only show video tile if trailerUrl exists
          <div
            className="w-[calc(50%-8px)] md:w-[calc(33.333%-11px)] lg:w-[calc(25%-12px)] aspect-square relative cursor-pointer group"
            onClick={handleOpenVideo}
          >
            <Image
              src={getImageUrl('4ec51146-5426-4b46-8afe-c79e7f55e2a3 - copia.jpeg')} // Assuming this is the video thumbnail
              alt="Ken Ya Makanach Video"
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33.33vw, 25vw"
              priority
            />
            <div className="absolute inset-0 bg-black/40 rounded-lg flex items-center justify-center opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity">
              <div className="flex flex-col items-center text-white">
                <Play className="w-10 h-10 mb-2" />
                <span className="font-semibold">Lire la vidéo</span>
              </div>
            </div>
          </div>
        )}

        {kenYaMakanachImages.map((image, index) => (
          <div
            key={image}
            className="w-[calc(50%-8px)] md:w-[calc(33.333%-11px)] lg:w-[calc(25%-12px)] aspect-square relative cursor-pointer hover:opacity-90 transition-opacity"
            onClick={() => openModal(index)}
          >
            <Image
              src={`/Ken Ya Makanach/${image}`}
              alt={`Ken Ya Makanach ${index + 1}`}
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33.33vw, 25vw"
              priority={index < 4}
            />
          </div>
        ))}
      </div>

      <GalleryModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        images={kenYaMakanachImages}
        initialIndex={selectedIndex}
      />
    </div>
  );
}
