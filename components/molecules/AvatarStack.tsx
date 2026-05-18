import React from 'react';

interface AvatarStackProps {
    images: string[];
}

export const AvatarStack: React.FC<AvatarStackProps> = ({ images }) => {
    return (
        // The -space-x-3 utility pulls the images to the left so they overlap
        <div className="flex items-center -space-x-3">
            {images.map((src, index) => (
                <img
                    key={index}
                    src={src}
                    alt={`Client Avatar ${index + 1}`}
                    // We add a border that matches the background color so they don't visually bleed into each other
                    className="w-12 h-12 rounded-full border-2 border-[#0A1435] object-cover relative"
                    style={{ zIndex: images.length - index }}
                />
            ))}
        </div>
    );
};