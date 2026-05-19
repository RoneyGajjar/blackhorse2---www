import { HTMLAttributes } from 'react';

interface LogoProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
}

export const Logo = ({ className = "", ...props }: LogoProps) => (
    <div
        className={`flex flex-col text-left font-['Inter',sans-serif] font-bold uppercase tracking-wide leading-[1.15] ${className}`}
        {...props}
    >
        <span>Black Horse</span>
        <span>Associates</span>
        {/* <img src="/bh-logo.png" alt="Black Horse Associates" /> */}
    </div>
);