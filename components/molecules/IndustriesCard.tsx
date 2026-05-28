import React from 'react';
import { Heading } from '../atoms/Heading';
import { Text } from '../atoms/Text';

interface StatCardProps {
    title: string;
    description: string;
}

export const StatCard: React.FC<StatCardProps> = ({ title, description }) => {
    return (
        // Added taller min-height, flex-col with justify-between to push text to the bottom
        <div className="p-8 lg:p-10 bg-brand-beige rounded-sm border border-gray-100 flex flex-col justify-between h-full min-h-[260px]">

            {/* Changed to text-5xl/6xl and font-normal to match the elegant serif numbers */}
            <Heading level={3} className="text-5xl lg:text-6xl text-brand-dark mb-12">
                {title}
            </Heading>

            <Text className="text-sm text-gray-500 max-w-[200px]">
                {description}
            </Text>

        </div>
    );
};