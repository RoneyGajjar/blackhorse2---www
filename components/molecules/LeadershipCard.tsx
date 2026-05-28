import ProfileImage from "@/components/atoms/ProfileImage";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";

interface LeadershipCardProps {
    // image: string;
    name: string;
    role: string;
    description: string;
}

const LeadershipCard = ({
    // image,
    name,
    role,
    description,
}: LeadershipCardProps) => {
    return (
        <div className="space-y-5">

            {/* Profile Image */}
            {/* <ProfileImage
                src={image}
                alt={name}
            /> */}

            {/* Content */}
            <div className="space-y-2">

                {/* Name */}
                <Heading
                    level={3}
                    className="
            text-2xl
            text-[#0A1435]
            font-medium
          "
                >
                    {name}
                </Heading>

                {/* Role */}
                <Text
                    className="
            uppercase
            tracking-[0.2em]
            text-sm
            text-gray-500
            font-semibold
          "
                >
                    {role}
                </Text>

                {/* Description */}
                <Text
                    className="
            text-gray-600
            leading-8
            text-base
          "
                >
                    {description}
                </Text>

            </div>
        </div>
    );
};

export default LeadershipCard;