import React, { ReactNode } from 'react';
import { Heading } from '../atoms/Heading';
import { Text } from '../atoms/Text';
import { IconBox } from '../atoms/IconBox';

interface ServiceCardProps {
    title: string;
    description: string;
    icon: ReactNode;
    linkText?: string;
    href?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
    title,
    description,
    icon,
    linkText = "Learn more",
    href = "#"
}) => {
    return (
        <div className="p-10 bg-brand-beige shadow-md rounded-sm border border-gray-200 flex flex-col h-full min-h-[280px] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <IconBox>
                {icon}
            </IconBox>
            {/* H3 inherently applies Playfair Display from your atom setup */}
            <Heading level={3} className="text-3xl font-normal text-slate-700 mb-3">
                {title}
            </Heading>

            <Text className="text-md text-slate-700 mb-8 flex-grow pr-4">
                {description}
            </Text>
            <a
                href={href}
                className="text-brand-dark text-sm font-semibold flex items-center gap-2 hover:opacity-70 transition-opacity mt-auto"
            >
                {linkText} <span aria-hidden="true" className="text-[10px] pt-[2px]">❯</span>
            </a>
        </div>
    );
};