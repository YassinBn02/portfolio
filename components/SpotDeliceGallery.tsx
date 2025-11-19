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
  return `/spot delice/${image}`;
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
        <DialogTitle className="sr-only">Spot Delice Gallery</DialogTitle>
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
              alt={`Spot Delice ${currentIndex + 1}`}
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

export default function SpotDeliceGallery() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  // List of images from the spot delice folder (excluding the video file)
  const spotDeliceImages = [
    'Délice Smoothie TVC emna.png',
    'Délice Smoothie TVC emna 2.png',
    'Délice Smoothie TVC emna 3.png',
    'Délice Smoothie TVC emna 4.png',
    'Délice Smoothie TVC emna 5.png'
  ];

  const spotDeliceVideoUrl = 'https://yassinbn02.wistia.com/medias/2qk583xmki';
  const handleOpenVideo = () => {
    const videoId = spotDeliceVideoUrl.split('/').pop();
    if (videoId) router.push(`/video/wistia/${videoId}`);
  };

  const openModal = (index: number) => {
    setSelectedIndex(index);
    setIsOpen(true);
  };

  if (spotDeliceImages.length === 0) {
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
            src={getImageUrl('Délice Smoothie TVC emna.png')}
            alt="Spot Delice Video"
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

        {spotDeliceImages.map((image, index) => (
          <div 
            key={image} 
            className="aspect-square relative cursor-pointer hover:opacity-90 transition-opacity"
            onClick={() => openModal(index)}
          >
            <Image
              src={getImageUrl(image)}
              alt={`Spot Delice ${index + 1}`}
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
        images={spotDeliceImages}
        initialIndex={selectedIndex}
      />
    </div>
  );
}
