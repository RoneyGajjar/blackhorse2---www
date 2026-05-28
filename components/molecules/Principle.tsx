interface PrincipleProps {
    title: string;
    description: string;
}

const Principles: React.FC<PrincipleProps> = ({ title, description }) => {
    return (
        <div className="flex items-start gap-4">
            <div>
                <h3 className="text-3xl font-semibold text-white mb-2">
                    {title}
                </h3>
                <p className="text-gray-400 text-xl">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default Principles;