import React from 'react';
import { Text } from '../atoms/Text';
import Link from 'next/link';

export const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        // We use your global bg-brand-dark color here
        <footer className="bg-brand-dark pt-20 pb-8 px-4 border-t border-white/10 mt-auto">
            <div className="max-w-7xl mx-auto">

                {/* Top Section: 4-Column Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">

                    {/* Column 1: Brand & Bio (Takes up 4 columns of space) */}
                    <div className="lg:col-span-4 pr-0 lg:pr-8">
                        <div className="flex items-center gap-3 mb-6">
                            {/* Abstract Logo SVG */}
                            {/* <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                            </svg> */}
                            <span className="text-white font-sans text-xl font-bold tracking-tight">
                                Black Horse Associates
                            </span>
                        </div>

                        <Text className="text-white/70 text-sm leading-relaxed mb-8 max-w-sm">
                            Independent advisory practice helping professionals, business owners, and investors make decisions with clarity and confidence.
                        </Text>

                        {/* Social Icons */}
                        <div className="flex gap-3">
                            <a href="#" className="w-9 h-9 rounded bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-colors">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
                            </a>
                            <a href="#" className="w-9 h-9 rounded bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-colors">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                            </a>
                            <a href="#" className="w-9 h-9 rounded bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-colors">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></svg>
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Navigation (Takes up 2 columns) */}
                    <div className="lg:col-span-2">
                        <span className="block text-white font-sans text-base font-medium mb-6">Navigate</span>
                        <ul className="space-y-4">
                            <li><a href="#home" className="text-white/70 hover:text-white text-sm font-sans transition-colors">Home</a></li>
                            <li><a href="#about" className="text-white/70 hover:text-white text-sm font-sans transition-colors">About</a></li>
                            <li><a href="#services" className="text-white/70 hover:text-white text-sm font-sans transition-colors">Services</a></li>
                            {/* <li><a href="#results" className="text-white/70 hover:text-white text-sm font-sans transition-colors">Results</a></li> */}
                        </ul>
                    </div>

                    {/* Column 3: Content (Takes up 2 columns) */}
                    <div className="lg:col-span-2">
                        <span className="block text-white font-sans text-base font-medium mb-6">Content</span>
                        <ul className="space-y-4">
                            <li><a href="#blogs" className="text-white/70 hover:text-white text-sm font-sans transition-colors">Privacy Policy</a></li>
                            <li><a href="#newsletter" className="text-white/70 hover:text-white text-sm font-sans transition-colors">Legal</a></li>
                            {/* <li><a href="#speaking" className="text-white/70 hover:text-white text-sm font-sans transition-colors">Speaking</a></li> */}
                        </ul>
                    </div>

                    {/* Column 4: Contact (Takes up 4 columns) */}
                    <div className="lg:col-span-4">
                        <span className="block text-white font-sans text-base font-medium mb-6">Contact</span>
                        <div className="space-y-5">

                            {/* Address */}
                            <div className="flex items-start gap-3 text-white/70 text-sm font-sans">
                                <svg className="w-5 h-5 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                                <span>Black Horse Associates<br />417, Bhagirath Icon<br />Ahmedabad, Gujarat - 382405</span>
                            </div>

                            {/* Email */}
                            <div className="flex items-center gap-3 text-white/70 text-sm font-sans">
                                <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                                <a href="mailto:kamal@blackhorseassociates.com" className="hover:text-white transition-colors">kamal@blackhorseassociates.com</a>
                            </div>

                            {/* Phone */}
                            <div className="flex items-center gap-3 text-white/70 text-sm font-sans">
                                <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                                <a href="tel:+19084765882" className="hover:text-white transition-colors">(908) 476 5882</a>
                            </div>
                            <div className="flex items-center gap-3 text-white/70 text-sm font-sans">
                                <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                                <a href="tel:+918401165350" className="hover:text-white transition-colors">+91 84011 65350</a>
                            </div>

                        </div>
                    </div>

                </div>

                {/* Bottom Section: Copyright & Credit */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
                    <Text className="text-white/50 text-xs">
                        © {currentYear} Black Horse Associates. All rights reserved.
                    </Text>
                    <Text className="text-white/50 text-xs">
                        Designed by <Link href="https://honeyhexa.com">Honey Hexa</Link>
                    </Text>
                </div>

            </div>
        </footer>
    );
};