import React, { ReactNode } from 'react';

interface IconBoxProps {
    children: ReactNode;
}

export const IconBox: React.FC<IconBoxProps> = ({ children }) => {
    return (
        <div className="w-10 h-10 bg-[#EFE9E2] rounded-sm flex items-center justify-center text-brand-dark mb-6">
            {children}
        </div>
    );
};