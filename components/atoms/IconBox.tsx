import React, { ReactNode } from 'react';

interface IconBoxProps {
    children: ReactNode;
}

export const IconBox: React.FC<IconBoxProps> = ({ children }) => {
    return (
        <div className="w-20 h-20 bg-[#EFE9E2] border-gray-200 rounded-sm flex items-center justify-center text-brand-dark mb-6">
            {children}
        </div>
    );
};