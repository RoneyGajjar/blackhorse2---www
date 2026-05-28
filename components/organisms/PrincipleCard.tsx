import { Heading } from "@/components/atoms/Heading";
import Principles from "@/components/molecules/Principle";


const PrincipleCard = () => {
    const features = [
        {
            title: "Our Mission",
            description:
                "To reduce your firm's overhead, eliminate tax season burnout, and deliver consistently accurate, compliant work — so your team can operate leaner, smarter, and more profitably.",
        },
        {
            title: "Our Vision",
            description:
                "A future where every CPA firm, regardless of size, has access to expert-level outsourced support — scalable, affordable, and built for long-term partnership.",
        },
    ];
    return (
        <section className="py-24 px-6 bg-brand-dark text-White">

            <div className="max-w-7xl mx-auto">

                {/* Heading */}
                <div className="text-center mb-20">

                    <p
                        className="
              uppercase
              tracking-[5px]
              text-sm
              text-[#8EA4D2]
              mb-4
            "
                    >
                        Guiding Principles
                    </p>

                    <Heading className="text-5xl text-white" level={2} >
                        The Pillars of Our Practice
                    </Heading>

                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-1 gap-8 lg:grid-cols-2">
                    {features.map((item, index) => (
                        <div className="border border-[#9cb8f5] rounded-lg p-6  shadow-sm text-justify "
                            key={index}>
                            <Principles
                                title={item.title}
                                description={item.description}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PrincipleCard;