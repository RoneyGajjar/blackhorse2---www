import BackgroundImage from "@/components/atoms/BackGroundImage";
import { Heading } from "@/components/atoms/Heading";
import Overlay from "@/components/atoms/Overlay";
import { Text } from "@/components/atoms/Text";

const Hero = () => {
    return (
        <section className="relative w-full lg:h-[640px] overflow-hidden">

            {/* Background Image */}
            <BackgroundImage
                image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
                alt="Building Trust with Every Transaction"
                className="object-cover w-full h-full"
            />

            {/* Dark Overlay */}
            <Overlay />

            {/* Content */}
            <div
                className="
      absolute
      inset-0
      flex
      flex-col
      justify-center
      px-6
      lg:px-20
      z-10
    "
            >

                <p
                    className="
        uppercase
        tracking-[6px]
        text-sm
        text-gray-300
        mb-6
      "
                >
                    Institutional Heritage
                </p>

                <Heading
                    level={1}
                    className="
        text-5xl
        md:text-7xl
        lg:text-8xl
        text-white
        leading-tight
        max-w-4xl
        mb-8
      "
                >
                    About Us
                </Heading>

                <Text
                    className="
        text-lg
        md:text-xl
        leading-8
        max-w-2xl
        text-white
        text-justify
        
      "
                >
                    At Blackhorse Associates, precision is not a promise — it's a practice. Led by twin Enrolled Agents with 12+ years of hands-on experience across individual, business, and international taxation, we deliver outsourced tax preparation, bookkeeping, and accounting support that CPA firms and sole practitioners can rely on — season after season.
                </Text>

            </div>
        </section>

    )
};
export default Hero;