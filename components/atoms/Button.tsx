import React, { ReactNode, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: 'primary' | 'secondary';
    className?: string;
}

export const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    className = '',
    ...props
}) => {
    const baseClasses = 'px-6 py-3 font-sans font-medium rounded transition-colors duration-200 cursor-pointer';

    // Hardcoding the hex values ensures these never fail to render
    const variants = {
        primary: 'bg-[#0A1435] text-white hover:opacity-90 hover:bg-white hover:text-[#0A1435] hover:border border-[#0A1435]',
        secondary: 'bg-white text-[#0A1435] border border-[#0A1435] hover:bg-gray-50',
    };

    return (
        <button
            className={`${baseClasses} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};