import React, { JSX, ReactNode } from 'react';

interface HeadingProps {
    level: 1 | 2 | 3 | 4 | 5 | 6;
    children: ReactNode;
    className?: string;
}

export const Heading: React.FC<HeadingProps> = ({ level, children, className = '' }) => {
    const Tag = `h${level}` as keyof JSX.IntrinsicElements;
    const baseClasses = 'font-serif text-gray-900 tracking-tight';

    return (
        <Tag className={`${baseClasses} ${className}`}>
            {children}
        </Tag>
    );
};