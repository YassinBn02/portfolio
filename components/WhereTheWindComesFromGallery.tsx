'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';

interface GalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  initialIndex?: number;
}

// Function to get the correct image URL with proper encoding
const getImageUrl = (image: string) => {
  return `/Where the wind comes from/${encodeURIComponent(image)}`;
};

function GalleryModal({ isOpen, onClose, images, initialIndex = 0 }: GalleryModalProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setCurrentIndex(initialIndex);
    setIsLoading(true);
  }, [initialIndex]);

  const goToNext = () => {
    setIsLoading(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrev = () => {
    setIsLoading(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  if (!images.length) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[90vw] max-h-[90vh] p-0 bg-transparent border-none">
        <DialogTitle className="sr-only">Where the wind comes from Gallery</DialogTitle>
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
              src={getImageUrl(images[currentIndex])}
              alt={`Where the wind comes from ${currentIndex + 1}`}
              fill
              className={`object-contain ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-200`}
              priority
              onLoadingComplete={() => setIsLoading(false)}
            />
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-900">
                <div className="animate-pulse text-gray-500">Loading...</div>
              </div>
            )}
          </div>

          {images.length > 1 && (
            <>
              <button
                onClick={goToPrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors z-10"
                aria-label="Previous image"
              >
                ←
              </button>
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors z-10"
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

export default function WhereTheWindComesFromGallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);

  // Project Information
  const projectInfo = {
    title: "WHERE THE WIND COMES FROM",
    year: "2023",
    director: "Amal Guelety",
    producer: "Atlas Vision",
    role: "Wardrobe assistant",
    trailerUrl: "https://www.youtube.com/embed/nO6IpvVE0wY",
    producedBy: "Atlas Vision"
  };

  const awards = [
    "Sant Francisco International Film Festival, Nominee Golden Grate Award, New Director 2025",
    "Stockholm Film Festival, Nominee, Bronze Horse, Best Film 2025",
    "Sundance Film Festival, Nominee, Grand Jury Prize, World Cinema - Dramatic 2025",
    "Lucas - International Festival of Films for Children and Young People, Winner, Youngster award, Best Director 2024",
    "Septimius Awards, Winner Best Experimental Film 2025",
    "Septimius Awards, Nominee Best Soundtrack 2025",
    "Toronto Arab Film Festival, Winner Best Feature Film 2025",
    "Mediterrane Film Festival, Golden Bee Award, Best Feature Film 2025",
    "Mediterrane Film Festival, Golden Bee Award, Best Performance, Eya Bellagha 2025"
  ];

  // List of images from the "Where the wind comes from" folder
  const windImages = [
    '608d28cb-9f05-4cb4-bd44-ba77237a18ec.JPG',
    '88b1109c-3b46-41c1-ab01-230bc44d439e - copia.JPG',
    'Capture d’écran 2024-11-17 à 10.45.37.png',
    'Capture d’écran 2024-11-17 à 11.11.35.png',
    'Capture d’écran 2024-11-17 à 11.12.32.png',
    'Capture d’écran 2025-10-28 à 09.52.36.png',
    'Capture d’écran 2025-10-28 à 10.18.04.png',
    'c3b02b1d-ee1c-485e-830c-7f35f3409027.JPG',
    'd8a55c56-d3cb-4004-9a96-7c9baf07aab0.JPG'
  ];

  useEffect(() => {
    setIsClient(true);
  }, []);

  const openModal = (index: number) => {
    setSelectedIndex(index);
    setIsOpen(true);
  };

  if (!isClient) {
    return <div className="container mx-auto px-4 py-12">Loading gallery...</div>;
  }

  if (windImages.length === 0) {
    return <div className="text-center py-12">No images found</div>;
  }

  return (
    <div className="container mx-auto px-4">
      {/* Project Details Header */}
      <div className="flex flex-col items-center mb-16 space-y-6">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-light uppercase tracking-widest text-center mb-2">
            {projectInfo.title}
          </h1>
          <p className="text-lg md:text-xl font-light text-muted-foreground">{projectInfo.year}</p>
        </div>

        <div className="flex flex-col items-center space-y-2">
          <p className="text-xl md:text-2xl font-light text-center">
            {projectInfo.director}
          </p>
        </div>

        {projectInfo.trailerUrl && (
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
        )}

        <div className="flex flex-col items-center space-y-1 text-sm md:text-base text-muted-foreground uppercase tracking-wide">
          <p>Produced by: {projectInfo.producedBy}</p>
          <p>Role: {projectInfo.role}</p>
        </div>

        <div className="mt-12 w-full max-w-3xl">
          <h3 className="text-center text-xl uppercase tracking-widest mb-6 border-b pb-2 mx-auto w-32">Awards</h3>
          <ul className="space-y-3 text-center">
            {awards.map((award, index) => (
              <li key={index} className="text-sm md:text-base font-light text-foreground/80">
                {award}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {windImages.map((image, index) => (
          <div
            key={image}
            className="aspect-square relative cursor-pointer hover:opacity-90 transition-opacity"
            onClick={() => openModal(index)}
          >
            <Image
              src={getImageUrl(image)}
              alt={`Where the wind comes from ${index + 1}`}
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
        images={windImages}
        initialIndex={selectedIndex}
      />
    </div>
  );
}
