import React from 'react';
import { Heading } from '../atoms/Heading';
import { Text } from '../atoms/Text';
import { Button } from '../atoms/Button';

export const Hero: React.FC = () => {
    return (
        <section className="flex flex-col lg:flex-row items-center justify-between py-16 lg:py-24 px-4 max-w-7xl mx-auto">
            <div className="w-full lg:w-1/2 pr-0 lg:pr-12">

                <Heading level={1} className="text-5xl lg:text-7xl mb-18 text-[#0A1435] leading-tighter">
                    Where U.S. compliance meets global efficiency
                </Heading>

                <Text className="text-lg mb-10 max-w-md text-gray-500">
                    Reliable, compliant, cost-effective tax and accounting outsourcing for US CPA firms. From bookkeeping to tax prep and audit support, we deliver precision, scalability, and faster turnarounds — every season.
                </Text>
                {/* 
                <div className="flex flex-wrap gap-4">
                    <Button variant="primary">Secure Your Financial Future</Button>
                    <Button variant="secondary">Learn More</Button>
                </div> */}
            </div>

            <div className="w-full lg:w-1/2 mt-12 lg:mt-0 relative">
                {/* Removed overflow-hidden from this outer wrapper */}
                <div className="aspect-[4/5] lg:aspect-square w-full max-w-md mx-auto relative">

                    {/* Inner wrapper specifically for the image to handle the rounded corners */}
                    <div className="w-full h-full rounded-sm overflow-hidden shadow-2xl bg-gray-100">
                        {/* Using a live placeholder image for immediate rendering */}
                        <img
                            src="hero-bha.jpeg"
                            alt="Professional Consultant"
                            className="object-cover w-full h-full"
                        />
                    </div>

                    {/* Floating UI Element - Added z-10 so it sits above the image */}
                    {/* <div className="absolute bottom-8 left-[-2rem] bg-white p-4 shadow-lg rounded-sm hidden lg:block border border-gray-100 z-10">
                        <Text className="font-bold text-[#0A1435]">Expert Review</Text>
                        <Text className="text-xs">Completed today at 9:00 AM</Text>
                    </div> */}

                </div>
            </div>
        </section>
    );
};