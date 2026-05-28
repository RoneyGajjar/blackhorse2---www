import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import LeadershipCard from "@/components/molecules/LeadershipCard";

const leadershipData = [
    {
        id: 1,
        // image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop",
        name: "Kamal Mulchandani",
        role: "Founder &  Principle",
        description:
            "Enrolled Agent with 6+ years of experience specializing in cross-border and expatriate taxation. Skilled in foreign income exclusions, FATCA, FBAR, and tax treaty analysis for globally mobile individuals and businesses. Experienced in preparing and reviewing a broad range of returns— Forms 1040, 1120S, 1065, 1120, FinCEN 114, and 990— and has successfully represented clients before the IRS, including penalty abatement cases and other compliance matters, securing favorable outcomes with confidence and precision.",
    },
    {
        id: 2,
        // image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop",
        name: "Kailash Mulchandani",
        role: "Partner",
        description:
            "Enrolled Agent with 6+ years in U.S. federal and business taxation. Experienced in preparing and reviewing Forms 1040, 1065, 1120S, and 1120, with solid command of K-1 allocations, multi-state filings, and entity compliance. Oversees full-cycle accounting and bookkeeping operations alongside tax work. Known for mentoring and training junior staff— driving accuracy, efficiency, and consistent quality across all client engagements.",
    },
];

const ExecutiveLeadershipSection = () => {
    return (
        <section className="py-20 px-6 lg:px-12 bg-gray-50">

            <div className="max-w-7xl mx-auto">

                {/* Section Header */}
                <div className="mb-14">

                    <Heading
                        level={2}
                        className="
              text-4xl
              lg:text-5xl
              text-[#0A1435]
              mb-4
            "
                    >
                        The People Behind Blackhorse
                    </Heading>

                    <Text
                        className="
              text-lg
              text-gray-600
              max-w-2xl
              leading-8
            "
                    >
                        Architects of stability, leading with decades of collective
                        experience in U.S. financial law and corporate governance.
                    </Text>

                </div>

                {/* Leadership Grid */}
                <div
                    className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-2
            gap-10
          "
                >
                    {leadershipData.map((leader) => (
                        <LeadershipCard
                            key={leader.id}
                            // image={leader.image}
                            name={leader.name}
                            role={leader.role}
                            description={leader.description}
                        />
                    ))}
                </div>

            </div>

        </section>
    );
};

export default ExecutiveLeadershipSection;