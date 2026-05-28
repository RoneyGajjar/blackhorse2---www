import ExecutiveLeadershipSection from "@/components/organisms/ExecutiveLeadership";
import Hero from "@/components/organisms/AboutHero";
import OurStory from "@/components/organisms/OurStory";
import PrincipleCard from "@/components/organisms/PrincipleCard";
import { Footer } from "@/components/organisms/footer";
import { Navbar } from "@/components/organisms/Navbar";

function AboutUs() {
    return (
        <main className="bg-white min-h-screen selection:bg-brand-dark selection:text-white">
            <Navbar />
            <Hero />
            <OurStory />
            <PrincipleCard />
            {/* Add remaining organisms here: */}
            {/* <ComplexNeeds /> */}
            {/* <Testimonials /> */}
            <ExecutiveLeadershipSection />
            <Footer />
        </main>
    )

}
export default AboutUs;