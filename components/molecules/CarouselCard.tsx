import React from 'react';
import { Heading } from '../atoms/Heading';
import { Text } from '../atoms/Text';
import { Badge } from '../atoms/Badge';

interface CarouselCardProps {
    badgeText: string;
    title: string;
    description: string;
}

export const CarouselCard: React.FC<CarouselCardProps> = ({ badgeText, title, description }) => {
    return (
        <div className="flex-none w-[85vw] md:w-[400px] p-8 md:p-10 bg-[#F8F9FB] rounded-sm border border-gray-100 flex flex-col snap-start h-full min-h-[380px]">
            <div className="mb-8">
                <Badge>{badgeText}</Badge>
            </div>

            {/* Title uses H3 - automatically applies Playfair Display via your atom */}
            <Heading level={3} className="text-2xl lg:text-3xl font-normal text-brand-dark mb-6 leading-snug">
                {title}
            </Heading>

            {/* Description uses Inter via your atom */}
            <Text className="text-sm text-gray-500 mt-auto">
                {description}
            </Text>
        </div>
    );
};