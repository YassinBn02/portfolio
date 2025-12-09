'use client';

import { useState } from 'react';
import Image from 'next/image';
import { GalleryModal } from './GalleryModal';

const IMAGE_FOLDER = '/Ken Ya Makanach/';

// This function will be used to dynamically import all images from the public folder
// In a real implementation, you would use a dynamic import or get this from your API
const galleryImages = [
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
  '4ec51146-5426-4b46-8afe-c79e7f55e2a3 - copia.jpeg',
];

export function Gallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const openModal = (index: number) => {
    setSelectedIndex(index);
    setIsOpen(true);
  };

  if (galleryImages.length === 0) {
    return <div>No images found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-wrap justify-center gap-4">
        {galleryImages.map((image, index) => (
          <div
            key={image}
            className="w-[calc(50%-8px)] md:w-[calc(33.333%-11px)] lg:w-[calc(25%-12px)] aspect-square relative cursor-pointer hover:opacity-90 transition-opacity"
            onClick={() => openModal(index)}
          >
            <Image
              src={`${IMAGE_FOLDER}${image}`}
              alt={`Gallery image ${index + 1}`}
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33.33vw, 25vw"
              priority={index < 4} // Only preload first 4 images
            />
          </div>
        ))}
      </div>

      <GalleryModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        images={galleryImages}
        initialIndex={selectedIndex}
      />
    </div>
  );
}
