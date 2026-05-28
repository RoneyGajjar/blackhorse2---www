import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";

const OurStory = () => {
    return (
        <section className="py-20 px-6 lg:px-12 bg-gray-150">

            <div
                className="
      grid
      grid-cols-1
      lg:grid-cols-[30%_70%]
      gap-16
      max-w-7xl
      mx-auto
      items-start
    "
            >

                {/* Left Side */}
                <div>

                    <Heading
                        level={2}
                        className="
          text-5xl
          lg:text-6xl
          text-[#0A1435]
          sticky
          top-20
        "
                    >
                        Our Story
                    </Heading>

                </div>

                {/* Right Side */}
                <div className="space-y-8">

                    <Text
                        className="
          text-lg
          lg:text-xl
          text-gray-600
          leading-10
          text-justify
        "
                    >
                        We didn't set out to build a company — we set out to solve a problem. Years working inside and alongside U.S. CPA firms gave us a front-row seat to the pressures of tax season: overworked teams, mounting deadlines, and a shortage of technically skilled support that firms could genuinely rely on.
                    </Text>

                    <Text
                        className="
          text-lg
          lg:text-xl
          text-gray-600
          leading-10
          text-justify  
        "
                    >
                        As Enrolled Agents with deep expertise in individual, business, and international taxation, we knew we could fill that gap — and fill it well. So we did. Blackhorse Associates LLC was founded on the belief that outsourced should never mean second-rate. Every return we prepare, every set of books we manage, every filing we submit carries the same standard we would hold ourselves to as practitioners.
                    </Text>

                    <Text
                        className="
          text-lg
          lg:text-xl
          text-gray-600
          leading-10
          text-justify
        "
                    >
                        That standard is our story. And it is the reason our clients keep coming back.
                    </Text>

                </div>

            </div>

        </section>
    )
}

export default OurStory;