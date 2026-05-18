import React from 'react';
import { Heading } from '../atoms/Heading';
import { Text } from '../atoms/Text';
import Link from 'next/link';

export const Statement: React.FC = () => {
  return (
    <section className="bg-brand-dark text-white py-24 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24 items-start">

        {/* Left Column: Navigation/Meta */}
        <div className="w-full md:w-64 flex-shrink-0 flex flex-col mt-2">
          <Text className="text-white/50 text-xs font-bold uppercase tracking-widest mb-6">
            Marcus Reid
          </Text>

          <nav className="flex flex-col border-t border-white/10">
            <Link href="#story" className="py-4 border-b border-white/10 text-sm font-sans text-white/80 hover:text-white transition-colors">
              Read Full Story
            </Link>
            <Link href="#newsletter" className="py-4 border-b border-white/10 text-sm font-sans text-white/80 hover:text-white transition-colors">
              Join Newsletter
            </Link>
            <Link href="#work" className="py-4 border-b border-white/10 text-sm font-sans text-white/80 hover:text-white transition-colors">
              Work Together
            </Link>
          </nav>
        </div>

        {/* Right Column: Main Statement */}
        <div className="w-full md:flex-1">
          {/* Using H2 to automatically apply the Playfair Display serif rule */}
          <Heading level={2} className="text-2xl md:text-3xl lg:text-[40px] text-white leading-snug lg:leading-snug">
            The cost of a mistake in U.S. taxation isn't just a number—it&apos;s lost time, heavy penalties, and damaged reputation. Most firms offer general advice we offer a rigorous financial fortress.
          </Heading>
        </div>

      </div>
    </section>
  );
};