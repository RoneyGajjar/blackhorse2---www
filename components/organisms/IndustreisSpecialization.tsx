import React from 'react';
import { Globe, HeartHandshake, Building2 } from 'lucide-react';

// 1. Define the TypeScript interface for our data structure
interface IndustryCard {
    id: string;
    title: string;
    description: string;
    Icon: React.ElementType;
}

// 2. Centralize the data to keep the component clean and scalable
const industriesData: IndustryCard[] = [
    {
        id: 'Tax Advisery',
        title: 'Tax Advisery',
        description: 'Navigate complex tax landscapes with a proactive, forward-looking strategy. We analyze your financial architecture to identify opportunities for minimizing liabilities and maximizing operational cash flow. From local compliance to global reporting, we provide actionable insights designed to build resilient, long-term business wealth.',
        Icon: Globe,
    },
    {
        id: 'Tax preparation / Review',
        title: 'Tax preparation / Review',
        description: 'Precision is non-negotiable. We execute and review your tax filings through a rigorous, multi-level quality control process to guarantee absolute accuracy and eliminate audit risks. Stop leaving money on the table—our streamlined approach ensures compliant, flawless, and timely deliverables every single time.',
        Icon: HeartHandshake,
    },
    {
        id: 'Accounting / Payroll',
        title: 'Accounting / Payroll',
        description: 'Transform your bookkeeping from a bottleneck into a strategic asset. We handle the complete lifecycle of your accounting and payroll operations with seamless, transparent tracking. By delivering accurate, real-time financial reporting, we give you the exact numbers you need to scale confidently and focus purely on growth.',
        Icon: Building2,
    },
];

export default function IndustriesSpecialize() {
    return (
        // Applied the dark theme background from the second image (#080c16 approximation)
        <section className="bg-brand-dark py-24 px-6 md:px-12 lg:px-24 w-full flex flex-col items-center justify-center font-sans">

            <div className="max-w-7xl w-full">
                {/* Header styling adapted for the dark theme */}
                <h2 className="text-4xl md:text-5xl font-medium text-white text-center mb-16 tracking-tight">
                    Services We Provide
                </h2>

                {/* CSS Grid for the 3-column layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {industriesData.map((industry) => (
                        <div
                            key={industry.id}
                            // Card styling: Slightly lighter navy background with a subtle border to pop against the main background
                            className="bg-white border border-[#1e293b] rounded-2xl p-8 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-900/20"
                        >
                            {/* Icon Container */}
                            <div className="mb-8 inline-flex items-center justify-center w-16 h-16 rounded-full border border-blue-400/30 bg-[#1a243d]">
                                <industry.Icon className="w-8 h-8 text-blue-100" strokeWidth={1.5} />
                            </div>

                            {/* Title */}
                            <h3 className="text-2xl font-semibold text-gray mb-4">
                                {industry.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray leading-relaxed text-sm md:text-base">
                                {industry.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
}