import React from 'react';
import { Heading } from '../atoms/Heading';
import { Text } from '../atoms/Text';

interface ProcessListItemProps {
    number: string;
    title: string;
    description: string;
}

export const ProcessListItem: React.FC<ProcessListItemProps> = ({ number, title, description }) => {
    return (
        // Flex row on desktop, column on mobile. Subdued bottom border.
        <div className="flex flex-col md:flex-row py-10 md:py-12 border-b border-white/10 gap-6 md:gap-12">

            {/* Left side: Number & Title */}
            <div className="flex items-start gap-6 md:w-1/2 shrink-0">
                <span className="font-sans text-xl md:text-2xl text-white/50 mt-1">{number}</span>
                {/* H3 inherently applies Playfair Display */}
                <Heading level={3} className="text-2xl md:text-3xl text-white font-normal">
                    {title}
                </Heading>
            </div>

            {/* Right side: Description */}
            <div className="md:w-1/2 flex items-center">
                {/* Inter font with slightly reduced opacity for contrast against the white heading */}
                <Text className="text-white/70 text-sm md:text-base leading-relaxed">
                    {description}
                </Text>
            </div>

        </div>
    );
};