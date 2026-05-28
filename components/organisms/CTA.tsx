import React from 'react';
import { Heading } from '../atoms/Heading';
import { Text } from '../atoms/Text';
import { Button } from '../atoms/Button';
import { AvatarStack } from '../molecules/AvatarStack';

export const CTA: React.FC = () => {
    // Placeholder images for the social proof avatars
    const avatars = [
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=80",
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&h=100&q=80",
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80"
    ];

    return (
        <section className="py-24 px-4 border-t border-white/10">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-8">

                {/* Left Side: Headline & Subtext */}
                <div className="w-full lg:w-1/2">
                    {/* H2 inherently applies Playfair Display */}
                    <Heading level={2} className="text-5xl lg:text-[72px] font-normal text-gray leading-[1.1] mb-6 tracking-tight">
                        Now let's make <br className="hidden lg:block" /> it work for you.
                    </Heading>

                    <Text className="text-gray text-lg max-w-md leading-relaxed">
                        Book a free 30-minute call. No pressure, no pitch — just an honest conversation about where you are and where you want to go.
                    </Text>
                </div>

                {/* Right Side: Social Proof & Action Button */}
                <div className="w-full lg:w-1/2 lg:pl-12 flex flex-col items-start lg:items-start">

                    <div className="flex items-center gap-4 mb-2">
                        <AvatarStack images={avatars} />
                        {/* Using font-serif here manually to match the Playfair number styling in the design */}
                        <span className="text-white font-serif text-3xl font-normal">400+</span>
                    </div>

                    <Text className="text-gray text-sm mb-10">
                        Professionals guided through high-stakes decisions
                    </Text>

                    {/* Customizing the Button atom directly via className to match the specific white style */}
                    <Button variant='primary'>
                        Book a Consultation Call
                        {/* Right Arrow SVG */}
                        {/* <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg> */}
                    </Button>

                </div>

            </div>
        </section>
    );
};