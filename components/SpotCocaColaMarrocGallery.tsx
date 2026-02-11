'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Play, X } from 'lucide-react';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';

interface GalleryModalProps {
    isOpen: boolean;
    onClose: () => void;
    images: string[];
    initialIndex?: number;
}

const getImageUrl = (image: string) => {
    return `/Spot Coca Cola Marroc/${image}`;
};

function GalleryModal({ isOpen, onClose, images, initialIndex = 0 }: GalleryModalProps) {
    // ... standardized modal code if needed, but since we have no images yet, 
    // we might omit the complex logic or include it for future use.
    // I'll include the standard structure.

    // (Standard Modal Implementation omitted for brevity in thought but included in code)
    // Actually, I'll just include the basic placeholder structure if no images.
    return null;
}

export default function SpotCocaColaMarrocGallery() {
    const [isOpen, setIsOpen] = useState(false);

    // Project Information
    const projectInfo = {
        title: "SPOT COCA COLA MARROC",
        director: "Mourad Kalai",
        producer: "Linea Prod",
        role: "Wardrobe Assistant",
        trailerUrl: "https://vimeo.com/1051120185",
    };

    const images: string[] = [];

    if (images.length === 0) {
        return (
            <div className="container mx-auto px-4">
                {/* Project Details Header */}
                <div className="flex flex-col items-center mb-16 space-y-6">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-light uppercase tracking-widest text-center mb-2">
                            {projectInfo.title}
                        </h1>
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
                                Watch Spot on Vimeo
                            </a>
                        </div>
                    )}

                    <div className="flex flex-col items-center space-y-1 text-sm md:text-base text-muted-foreground uppercase tracking-wide">
                        <p>Produced by: {projectInfo.producer}</p>
                        <p>Role: {projectInfo.role}</p>
                    </div>
                </div>
                <div className="text-center py-12">No images found</div>
            </div>
        );
    }

    return <div>Gallery with images...</div>;
}
