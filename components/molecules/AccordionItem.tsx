'use client';

import React, { useState } from 'react';
import { Text } from '../atoms/Text';

interface AccordionItemProps {
    question: string;
    answer: string;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="mb-4">
            {/* The button spans the full width for easy clicking.
        We use the Inter font (font-sans) for the question to match the design.
      */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center p-6 bg-[#F8F9FB] hover:bg-gray-100 transition-colors duration-200 rounded-sm text-left cursor-pointer"
                aria-expanded={isOpen}
            >
                <span className="font-sans text-brand-dark font-medium pr-8">{question}</span>

                {/* The Plus Icon - Rotates 45 degrees to become an 'X' when open */}
                <span className={`transform transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-45' : ''}`}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                </span>
            </button>

            {/* The Answer Drawer - Uses CSS grid grid-rows transition for a smooth, native-feeling slide down 
      */}
            <div
                className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-1' : 'grid-rows-[0fr] opacity-0'}`}
            >
                <div className="overflow-hidden">
                    <div className="p-6 bg-[#F8F9FB] rounded-sm">
                        <Text className="text-sm leading-relaxed text-gray-600">
                            {answer}
                        </Text>
                    </div>
                </div>
            </div>
        </div>
    );
};