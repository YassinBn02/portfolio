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
      <DialogContent className="max-w-[90vw] max-h-[90vh] p-0 bg-transparent border-none">
        <DialogTitle className="sr-only">Rafle Gallery</DialogTitle>
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

  const rafleVideoUrl = 'https://yassinbn02.wistia.com/medias/eem6coiyge';
  const handleOpenVideo = () => {
    const videoId = rafleVideoUrl.split('/').pop();
    if (videoId) router.push(`/video/wistia/${videoId}`);
  };

  const openModal = (index: number) => {
    setSelectedIndex(index);
    setIsOpen(true);
  };

  if (rafleImages.length === 0) {
    return <div className="text-center py-12">No images found</div>;
  }

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* Video tile */}
        <div
          className="aspect-square relative cursor-pointer group"
          onClick={handleOpenVideo}
        >
          <Image
            src={getImageUrl('Untitled_1.1538.2.jpg')}
            alt="Rafle Video"
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

        {rafleImages.map((image, index) => (
          <div 
            key={image} 
            className="aspect-square relative cursor-pointer hover:opacity-90 transition-opacity"
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
