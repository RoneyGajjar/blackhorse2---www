import React from 'react';
import { Heading } from '../atoms/Heading';
import { Text } from '../atoms/Text';
import { ProcessListItem } from '../molecules/ProcessListItem';

interface ProcessData {
    number: string;
    title: string;
    description: string;
}

export const Process: React.FC = () => {
    // Data mapped directly from your design
    const processes: ProcessData[] = [
        {
            number: "01",
            title: "The Audit-Trail Methodology",
            description: "We start with a deep dive into where you are, what you want, and what's been standing in the way."
        },
        {
            number: "02",
            title: "Proactive Regulation Monitoring",
            description: "Together we map out a clear, personalized plan — no generic advice, no one-size-fits-all solutions."
        },
        {
            number: "03",
            title: "Direct Partner Access",
            description: "We execute step by step, with guidance at every decision point so you never feel lost or alone."
        },
        {
            number: "04",
            title: "Refining for Lasting Results",
            description: "As things evolve, so does the plan. We stay aligned to make sure progress doesn't just happen — it sticks."
        }
    ];

    return (
        // bg-brand-dark uses your global CSS variable (#0A1435)
        <section className="bg-brand-dark py-24 px-4">
            <div className="max-w-6xl mx-auto">

                {/* Section Header */}
                <div className="text-center mb-20">
                    <Text className="text-xs uppercase tracking-widest text-white/50 font-bold mb-6">
                        THE PROCESS
                    </Text>
                    {/* Strictly using H2 for section titles */}
                    <Heading level={2} className="text-4xl md:text-5xl lg:text-[56px] text-white font-normal leading-tight">
                        A Decade of Navigating <br className="hidden md:block" /> the IRS Landscape.
                    </Heading>
                </div>

                {/* List Container 
          Adding a top border here so the very first item is sandwiched between lines 
        */}
                <div className="border-t border-white/10">
                    {processes.map((item, index) => (
                        <ProcessListItem
                            key={index}
                            number={item.number}
                            title={item.title}
                            description={item.description}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};