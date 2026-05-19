"use client";

import React from 'react';
import { Text } from '../atoms/Text';
import MyApp from '../atoms/cal';
import { Logo } from '../atoms/logo';


export const Navbar: React.FC = () => {
    return (
        <div className='sticky top-0 z-50 bg-white'>

            <nav className="flex items-center justify-between py-6 px-4 max-w-7xl mx-auto border-b border-gray-100">
                {/* Brand logo/name */}
                {/* <Text className="font-bold text-xl text-brand-dark tracking-tighter uppercase">
                Verano
            </Text> */}
                <Logo />

                <div className="hidden md:flex gap-8">
                    <a href="#tax" className="text-sm font-sans font-medium text-gray-600 hover:text-brand-dark transition-colors">Tax</a>
                    <a href="#payroll" className="text-sm font-sans font-medium text-gray-600 hover:text-brand-dark transition-colors">Payroll</a>
                    <a href="#legal" className="text-sm font-sans font-medium text-gray-600 hover:text-brand-dark transition-colors">Legal</a>
                </div>
                <div>
                    <MyApp />
                </div>
            </nav>
        </div>

    );
};