import { Navbar } from '@/components/organisms/Navbar';
import { Hero } from '@/components/organisms/Hero';
import { Features } from '@/components/organisms/Features';
import { Statement } from '@/components/organisms/Statement';
import { Situations } from '@/components/molecules/Situtations';
import { Services } from '@/components/organisms/Services';
import { Process } from '@/components/organisms/Process';
import { FAQ } from '@/components/organisms/FAQ';
import { CTA } from '@/components/organisms/CTA';

export default function Home() {
  return (
    <main className="bg-white min-h-screen selection:bg-brand-dark selection:text-white">
      <Navbar />
      <Hero />
      <Statement />
      <Features />
      <Situations />
      <Services />
      <Process />
      <FAQ />
      <CTA />
      {/* Add remaining organisms here:
        <ComplexNeeds />
        <Testimonials />
        <Footer />
      */}
    </main>
  );
}