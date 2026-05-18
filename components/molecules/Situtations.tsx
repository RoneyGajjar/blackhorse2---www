'use client'; // <-- Crucial for the onClick buttons to work in Next.js

import React, { useRef } from 'react';
import { Heading } from '../atoms/Heading';
import { Text } from '../atoms/Text';
import { CarouselCard } from '../molecules/CarouselCard';

interface SituationData {
    badgeText: string;
    title: string;
    description: string;
}

export const Situations: React.FC = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = 424; // card width + gap
            scrollContainerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    // We expanded this array to 5 items. 
    // This guarantees some cards will hang off the screen, enabling the scroll!
    const situations: SituationData[] = [
        {
            badgeText: "At a crossroads",
            title: "A big move is on the table and the stakes are real.",
            description: "Acquisition, expansion, pivot, new market — something significant is in front of you. The cost of getting it wrong is too high to rely on gut feeling alone."
        },
        {
            badgeText: "Stuck in the weeds",
            title: "You built the business. Now it's running you.",
            description: "You're deep in operations, firefighting daily, and can't find time to think strategically. The vision is still there — it's just buried under everything urgent."
        },
        {
            badgeText: "Ready to invest",
            title: "You have capital. You just need the right opportunity.",
            description: "Whether it's real estate, a business venture, or a portfolio decision — you're ready to move but want clarity and confidence before you commit."
        },
        {
            badgeText: "Scaling fast",
            title: "Growth is breaking your current systems.",
            description: "What got you here won't get you there. You need scalable frameworks for tax and payroll before the structural cracks become critical failures."
        },
        {
            badgeText: "Transitioning out",
            title: "You are looking towards an exit or succession.",
            description: "You need to untangle yourself from the day-to-day and ensure the business valuation is maximized, compliant, and protected."
        }
    ];

    return (
        <section className="py-24 px-4 overflow-hidden border-t border-gray-100">
            <div className="max-w-7xl mx-auto">

                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div className="max-w-2xl">
                        <Text className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-4">
                            IS THIS YOU?
                        </Text>
                        <Heading level={2} className="text-5xl lg:text-6xl text-brand-dark font-normal leading-tight">
                            You're capable. You just need the right guidance.
                        </Heading>
                    </div>

                    <div className="flex gap-3 hidden md:flex pb-2">
                        <button
                            onClick={() => scroll('left')}
                            className="w-10 h-10 rounded-full bg-brand-dark text-white flex items-center justify-center hover:opacity-90 transition-opacity cursor-pointer z-10"
                            aria-label="Scroll left"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            className="w-10 h-10 rounded-full bg-brand-dark text-white flex items-center justify-center hover:opacity-90 transition-opacity cursor-pointer z-10"
                            aria-label="Scroll right"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
                        </button>
                    </div>
                </div>

                <div
                    ref={scrollContainerRef}
                    className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {situations.map((sit, index) => (
                        <CarouselCard
                            key={index}
                            badgeText={sit.badgeText}
                            title={sit.title}
                            description={sit.description}
                        />
                    ))}
                </div>

                <div className="flex justify-center gap-2 mt-4">
                    <div className="h-2 w-2 rounded-full bg-brand-dark"></div>
                    <div className="h-2 w-2 rounded-full bg-gray-300"></div>
                    <div className="h-2 w-2 rounded-full bg-gray-300"></div>
                </div>

            </div>
        </section>
    );
};