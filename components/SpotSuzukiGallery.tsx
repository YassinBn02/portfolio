'use client';

import { useState } from 'react';
import { Play } from 'lucide-react';

export default function SpotSuzukiGallery() {
    // Project Information
    const projectInfo = {
        title: "SPOT SUZUKI",
        year: "2024",
        director: "Mamdouh Ben Abdelghaffar",
        producer: "Linea Prod",
        role: "Costume Designer",
        trailerUrl: "https://www.facebook.com/SuzukiTunisie/videos/909309611145226",
    };

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
                            Watch Spot on Facebook
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
