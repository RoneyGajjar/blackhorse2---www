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
            title: "Understand",
            description: "We assess your firm's workflows, software, and service needs to build a customized engagement model."
        },
        {
            number: "02",
            title: "Onboard",
            description: "Secure setup, NDAs, team assignment, and SOP alignment ensure a smooth, confidential start."
        },
        {
            number: "03",
            title: "Execute",
            description: "Skilled professionals handle your tax, accounting, or audit tasks with precision, daily updates, and transparent tracking."
        },
        {
            number: "04",
            title: "Review & Deliver",
            description: "Multi-level quality checks and CPA oversight ensure accurate, compliant, and timely deliverables — every time."
        }
    ];

    return (
        // bg-brand-dark uses your global CSS variable (#0A1435)
        <section className="bg-brand-dark py-24 px-4">
            <div className="max-w-6xl mx-auto">

                {/* Section Header */}
                <div className="text-center mb-20">
                    <Text className="text-xs uppercase tracking-widest text-white/50 font-bold mb-6">
                        How We Work
                    </Text>
                    {/* Strictly using H2 for section titles */}
                    <Heading level={2} className="text-4xl md:text-5xl lg:text-[56px] text-white font-normal leading-tight">
                        A streamlined process designed <br className="hidden md:block" /> to feel like an in-house extension of your firm.
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