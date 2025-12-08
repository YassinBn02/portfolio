'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { X, Play } from 'lucide-react';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';

interface GalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  initialIndex?: number;
}

// Function to get the correct image URL with proper encoding
const getImageUrl = (image: string) => {
  return `/orange 2024/${image}`;
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
        <DialogTitle className="sr-only">Orange Gallery</DialogTitle>
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
              alt={`Orange ${currentIndex + 1}`}
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

export default function OrangeGallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Project Information
  const projectInfo = {
    title: "SPOT ORANGE 2024",
    year: "2024",
    director: "Anwar Fekih",
    producer: "Linea Prod",
    role: "Wardrobe Assistant",
    trailerUrl: "https://vimeo.com/1013443601",
  };

  // List of images from the orange 2024 folder
  const orangeImages = [
    'Captura de pantalla 2025-11-05 104425.png',
    'Captura de pantalla 2025-11-05 104905.png'
  ];

  const openModal = (index: number) => {
    setSelectedIndex(index);
    setIsOpen(true);
  };

  if (orangeImages.length === 0) {
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
          <div className="my-8 text-center">
            <a
              href={projectInfo.trailerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-full hover:opacity-90 transition-opacity font-medium"
            >
              <Play className="w-4 h-4" fill="currentColor" />
              Watch Trailer on Vimeo
            </a>
          </div>
        )}

        <div className="flex flex-col items-center space-y-1 text-sm md:text-base text-muted-foreground uppercase tracking-wide">
          <p>Produced by: {projectInfo.producer}</p>
          <p>Role: {projectInfo.role}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {orangeImages.map((image, index) => (
          <div
            key={image}
            className="aspect-square relative cursor-pointer hover:opacity-90 transition-opacity"
            onClick={() => openModal(index)}
          >
            <Image
              src={getImageUrl(image)}
              alt={`Orange ${index + 1}`}
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
        images={orangeImages}
        initialIndex={selectedIndex}
      />
    </div>
  );
}
