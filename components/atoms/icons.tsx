interface IconProps {
    name: string;
    filled?: boolean;
    className?: string;
}

export const Icon = ({ name, filled = false, className = "" }: IconProps) => (
    <span
        className={`material-symbols-outlined ${className}`}
        style={filled ? { fontVariationSettings: "'FILL' 1" } : {}}
    >
        {name}
    </span>
);