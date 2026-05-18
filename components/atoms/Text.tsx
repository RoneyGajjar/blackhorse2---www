import React, { ReactNode } from 'react';

interface TextProps {
    children: ReactNode;
    className?: string;
}

export const Text: React.FC<TextProps> = ({ children, className = '' }) => {
    return (
        <p className={`font-sans text-gray-600 leading-relaxed ${className}`}>
            {children}
        </p>
    );
};