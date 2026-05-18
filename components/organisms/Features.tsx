import React from 'react';
import { Heading } from '../atoms/Heading';
import { Text } from '../atoms/Text';
import { StatCard } from '../molecules/StatCard';

interface StatData {
    title: string;
    description: string;
}

export const Features: React.FC = () => {
    // This is the updated 4-item array. If Next.js reads this, you will get 4 columns.
    const stats: StatData[] = [
        { title: "400+", description: "People guided through major life decisions" },
        { title: "96%", description: "Clients who report a clear shift within 3 sessions" },
        { title: "14 yrs", description: "Of independent, conflict-free practice" },
        { title: "4.9", description: "Average Client satisfaction rating" }
    ];

    return (
        <section className="py-24 px-4 max-w-7xl mx-auto text-center border-t border-gray-100">

            {/* Updated Header Section */}
            <Text className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-6">
                PROBLEM SECTION
            </Text>

            <Heading level={2} className="text-5xl lg:text-[64px] mb-20 max-w-3xl mx-auto text-brand-dark leading-tight font-normal">
                Accuracy isn’t an <br /> aspiration—it’s our history.
            </Heading>

            {/* The grid is explicitly set to 4 columns on desktop (lg:grid-cols-4) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
                {stats.map((stat, index) => (
                    <StatCard key={index} title={stat.title} description={stat.description} />
                ))}
            </div>
        </section>
    );
};