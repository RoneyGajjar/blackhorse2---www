import React, { ReactNode } from 'react';

interface BadgeProps {
    children: ReactNode;
    className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ children, className = '' }) => {
    return (
        <span className={`inline-block px-3 py-1 bg-[#E8EBF5] text-brand-dark text-xs font-bold rounded-full font-sans ${className}`}>
            {children}
        </span>
    );
};