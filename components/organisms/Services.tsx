import React from 'react';
import { Heading } from '../atoms/Heading';
import { Text } from '../atoms/Text';
import { ServiceCard } from '../molecules/ServiceCard';

interface ServiceData {
    title: string;
    description: string;
    icon: React.ReactNode;
}

export const Services: React.FC = () => {
    const services: ServiceData[] = [
        {
            title: "Strategic Taxation",
            description: "Deep, focused conversations to untangle what's blocking you — and map a clear way forward.",
            icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>
        },
        {
            title: "Clean-Slate Accounting",
            description: "For high-stakes moments. Career pivots, business decisions, relationship crossroads — guided with frameworks that work.",
            icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
        },
        {
            title: "Zero-Error Payroll",
            description: "We don't just set goals. We build the structure, habits, and accountability to make them inevitable.",
            icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22v-8" /><path d="M12 8v4" /><path d="M8 12a4 4 0 0 1-4-4V4a4 4 0 0 1 4 4" /><path d="M16 12a4 4 0 0 0 4-4V4a4 4 0 0 0-4 4" /></svg>
        },
        {
            title: "Ongoing advisory retainer",
            description: "A real thinking partner for every major decision — not a once-a-year check-in where nothing actually changes.",
            icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></svg>
        }
    ];

    return (
        <section className="py-24 px-4 border-t border-gray-100">
            <div className="max-w-7xl mx-auto">

                {/* Section Header */}
                <div className="text-center mb-16">
                    <Text className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-4">
                        HOW I HELP
                    </Text>
                    {/* Strict H2 Usage */}
                    <Heading level={2} className="text-5xl lg:text-[56px] font-normal text-brand-dark leading-tight">
                        Rigorous Solutions <br /> for a Complex Market
                    </Heading>
                </div>

                {/* 2x2 Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            title={service.title}
                            description={service.description}
                            icon={service.icon}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};