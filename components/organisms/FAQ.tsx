import React from 'react';
import { Heading } from '../atoms/Heading';
import { Text } from '../atoms/Text';
import { AccordionItem } from '../molecules/AccordionItem';

interface FAQData {
    question: string;
    answer: string;
}

export const FAQ: React.FC = () => {
    // Questions mapped directly from your screenshot, with placeholder answers
    const faqs: FAQData[] = [
        {
            question: "Who do you typically work with?",
            answer: "We work primarily with high-growth startups, established SMEs, and enterprise leaders who are facing complex compliance or structural challenges."
        },
        {
            question: "Is this consulting or coaching?",
            answer: "It is a hybrid approach. We consult on the hard structural frameworks (tax, legal, payroll) and coach you through the execution and leadership decisions."
        },
        {
            question: "Do you work with real estate clients?",
            answer: "Yes, real estate is one of our primary verticals. We handle complex portfolio structuring, acquisitions, and compliance planning."
        },
        {
            question: "How long does a typical engagement last?",
            answer: "Initial sprint projects take 4-6 weeks. However, the majority of our clients transition to our ongoing advisory retainer for continuous, proactive support."
        },
        {
            question: "What makes this different from hiring a consultant?",
            answer: "We don't just hand you a deck of recommendations. We build the systems, integrate them with your team, and stay on to ensure they actually work in reality."
        }
    ];

    return (
        <section className="py-24 px-4 border-t border-gray-100">
            {/* max-w-3xl keeps the accordions from stretching too wide on massive screens */}
            <div className="max-w-3xl mx-auto">

                {/* Section Header */}
                <div className="text-center mb-16">
                    <Text className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-6">
                        LATEST THINKING
                    </Text>
                    {/* Strictly using H2 for section titles, applying Playfair Display */}
                    <Heading level={2} className="text-5xl lg:text-[64px] font-normal text-brand-dark leading-tight tracking-tight">
                        Frequently<br />Asked Questions
                    </Heading>
                </div>

                {/* Accordion List */}
                <div className="flex flex-col">
                    {faqs.map((faq, index) => (
                        <AccordionItem
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};