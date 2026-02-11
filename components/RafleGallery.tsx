'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Play, X } from 'lucide-react';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';

interface GalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  initialIndex?: number;
}

// Function to get the correct image URL with proper encoding
const getImageUrl = (image: string) => {
  return `/rafle/${image}`;
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
      <DialogContent className="max-w-screen max-h-screen w-screen h-screen m-0 rounded-none p-0 bg-black border-none sm:max-w-none sm:h-screen gap-0 p-0">
        <DialogTitle className="sr-only">Rafle Gallery</DialogTitle>
        <div className="relative w-full h-full">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:text-gray-300 z-50"
            aria-label="Close gallery"
          >
            <X className="w-8 h-8" />
          </button>

          <div className="relative w-full h-screen">
            <Image
              src={getImageUrl(images[currentIndex])}
              alt={`Rafle ${currentIndex + 1}`}
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

export default function RafleGallery() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Project Information
  const projectInfo = {
    title: "RAFLE",
    year: "2024",
    director: "Rabii Takeli",
    role: "Costume designer",
    instagramTrailerUrl: "https://www.instagram.com/p/DGlM7eDt_ns/",
    youtubeTrailerUrl: "https://www.youtube.com/embed/PSawwfyU3wY",
  };

  // List of images from the rafle folder (excluding the video file)
  const rafleImages = [
    'IMG-20250818-WA0206.jpg',
    'IMG-20250818-WA0208.jpg',
    'IMG-20250818-WA0209.jpg',
    'IMG-20250818-WA0224.jpg',
    'IMG-20250818-WA0263.jpg',
    'IMG-20250818-WA0269.jpg',
    'Untitled_1.1453.8.jpg',
    'Untitled_1.1538.2.jpg',
    'Untitled_1.1585.2.jpg',
    'Untitled_1.1587.4.jpg',
    'Untitled_1.1646.12.jpg',
    'Untitled_1.1997.4.jpg',
    'Untitled_1.2000.2.jpg',
    'Untitled_1.2480.13.jpg',
    'Untitled_1.2480.16.jpg',
    'Untitled_1.2842.12.jpg',
    'Untitled_1.2842.13.jpg',
    'Untitled_1.2842.16.jpg',
    'Untitled_1.2842.9.jpg',
    'Untitled_1.3393.4.jpg',
    'Untitled_2.87.2.jpg'
  ];

  const openModal = (index: number) => {
    setSelectedIndex(index);
    setIsOpen(true);
  };

  if (rafleImages.length === 0) {
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

        {projectInfo.youtubeTrailerUrl && (
          <div className="w-full max-w-4xl aspect-video rounded-sm overflow-hidden shadow-xl my-8">
            <iframe
              width="100%"
              height="100%"
              src={projectInfo.youtubeTrailerUrl}
              title={`${projectInfo.title} Trailer`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        )}

        {projectInfo.instagramTrailerUrl && (
          <div className="my-4 text-center">
            <a
              href={projectInfo.instagramTrailerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-full hover:opacity-90 transition-opacity font-medium"
            >
              <Play className="w-4 h-4" fill="currentColor" />
              Watch Trailer on Instagram
            </a>
          </div>
        )}

        <div className="flex flex-col items-center space-y-1 text-sm md:text-base text-muted-foreground uppercase tracking-wide">
          <p>Role: {projectInfo.role}</p>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        {rafleImages.map((image, index) => (
          <div
            key={image}
            className="w-[calc(50%-8px)] md:w-[calc(33.333%-11px)] lg:w-[calc(25%-12px)] aspect-square relative cursor-pointer hover:opacity-90 transition-opacity"
            onClick={() => openModal(index)}
          >
            <Image
              src={getImageUrl(image)}
              alt={`Rafle ${index + 1}`}
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
        images={rafleImages}
        initialIndex={selectedIndex}
      />
    </div>
  );
}
