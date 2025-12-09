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

  // Project Information
  const projectInfo = {
    title: "SPOT SMOOTHIE DÉLICE",
    year: "2023",
    director: "Mourad Kalai",
    producer: "Linea Prod",
    role: "Wardrobe Assistant",
    trailerUrl: "https://vimeo.com/824738410?turnstile=0.MouBeKNFKeJeuXKosUwDoOeFlML3E53r-K7q66aIK1CrR3pPpT30tlQcdtd3ABdwIZO6W8_YvbGUh1QV1ivlYPEXsjpbCV-VUwVvpa3-IGQiBlD0aDikjy01MdRE7XwpWxm2pZkdD_Bqxc4i4-NgRv6iCl7LYvgYwLiZ_wwhw_zkvZmAZBjWMEwQr8lVgu3iEM3akUcqVCLi0fJIfrI6Hhv-10Xj7HfeqIz1WOSWkHuqJsmA7ZSggfcdr4cwTXvoDXdkZrF80_CxuPj7jcQ1Jr9u0qwF3MXCiH4VrOwuftGbbnG_aUFDi0JvKvvdCEUCxBelO_tRiddModmaetK3XabSb2OkGyuojDujv-nNPWeVl47ZAFbKDdX2pAnCYdkumPyaOvRE2qunBG_RRlChe_IfvVru7CotfhvqblxXIFv80d2qqhlnK2N27EozQOFP22S9bf2P6w2W-wTlnLMBrnZnyrf8u26w-tYcaao0oLUO45H_9DRc7_1irPiH13BwuGSqFND862G8rgxhCbk32isSOYnj-11nysu7KYINPnCk8f6WXGdO8PYKX3XzKqqV1w85WCRn-r9FsnLNgOHUE3zVqSovV9UX69m4ogu_vP7sJZ4ldhdOziLjRmq4dEmcJ9ZOADf61X4vx1jjF0Tf2nqFxaX1x5QBWNSS-1A0izp2kexN4rr0-B4toVhK-G3pOiQXWCIs9rJ6BKRi7O-FlRYKrNGZaUhUZFUr-A9dOM4GB7HDKjefYAZP3I7vJ_yzZMDFhkzjp_S4VMPOmxKOX8zyQtCY1AoDKLmuwB16m8PsBvg__XjR-akd-LT9ZnbB7lCCjEqtv_suHFrLQHFI1PaiuA3C8V_ueah69zMUqqVsd1jOJaN2uuL_NL8j7za07lJVFCFasznyFzSUousccw.Zybfx88m_jCGiXdymwWTvA.7c4f235f789da7342f146b3fe21ba99f2a375d5771b052248ce2b1190c7a9397",
  };

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

      <div className="flex flex-wrap justify-center gap-4">
        {/* Video tile */}
        <div
          className="w-[calc(50%-8px)] md:w-[calc(33.333%-11px)] lg:w-[calc(25%-12px)] aspect-square relative cursor-pointer group"
          onClick={handleOpenVideo}
        >
          <Image
            src={getImageUrl(spotDeliceImages[0] || 'Délice Smoothie TVC emna.png')}
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
            className="w-[calc(50%-8px)] md:w-[calc(33.333%-11px)] lg:w-[calc(25%-12px)] aspect-square relative cursor-pointer hover:opacity-90 transition-opacity"
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
