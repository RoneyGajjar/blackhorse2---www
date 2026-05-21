import React from 'react';
import { Heading } from '../atoms/Heading';
import { Text } from '../atoms/Text';

export const Statement: React.FC = () => {
  return (
    <section className="bg-brand-dark text-white py-24 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24 items-start">

        {/* Left Column: Navigation/Meta */}
        <div className="w-full md:w-64 flex-shrink-0 flex flex-col mt-2">
          {/* Updated to reflect the case study context */}
          <Text className="text-white/50 text-xs font-bold uppercase tracking-widest mb-6">
            Case Study Highlight
          </Text>

          <nav className="flex flex-col border-t border-white/10">
            <a href="#case-study-details" className="py-4 border-b border-white/10 text-sm font-sans text-white/80 hover:text-white transition-colors">
              Read Full Case Study
            </a>
            <a href="#results" className="py-4 border-b border-white/10 text-sm font-sans text-white/80 hover:text-white transition-colors">
              See More Client Results
            </a>
            <a href="#contact" className="py-4 border-b border-white/10 text-sm font-sans text-white/80 hover:text-white transition-colors">
              Optimize Your Capacity
            </a>
          </nav>
        </div>

        {/* Right Column: The Narrative Statement */}
        <div className="w-full md:flex-1">
          <Heading level={2} className="text-3xl md:text-4xl lg:text-[40px] text-white font-normal leading-snug lg:leading-snug">
            Scaling isn't always about building a bigger team—sometimes it's about building a smarter system. When a growing firm faced slow, expensive hiring, we optimized their workflow instead. By managing first-pass prep during peak months, we doubled their capacity and freed leadership to focus on growth.
          </Heading>
        </div>

      </div>
    </section>
  );
};