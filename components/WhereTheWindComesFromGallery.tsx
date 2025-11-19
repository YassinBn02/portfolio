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

  // List of images from the "Where the wind comes from" folder
  const windImages = [
    'Imagen de WhatsApp 2025-10-27 a las 14.04.31_c5bd3dd9.jpg',
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
