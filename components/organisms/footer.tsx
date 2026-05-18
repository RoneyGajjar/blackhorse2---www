import Link from 'next/link';
import { Icon } from '../atoms/icons';
import { Logo } from '../atoms/logo';

export const Footer = () => (
    <footer className="bg-primary py-16 border-t border-outline-variant/20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-[1200px] mx-auto px-6 md:px-12">
            <div className="space-y-8">
                <div>
                    <Logo className="text-on-primary text-2xl" />
                    <p className="text-surface-container-highest mt-4 max-w-sm font-label-sm uppercase tracking-widest leading-relaxed text-xs">
                        Meticulous taxation and accounting services for the world's most discerning entities.
                    </p>
                </div>
                <div className="space-y-2 text-surface-container-highest font-body-md">
                    <p className="flex items-center gap-3"><Icon name="mail" className="text-sm" /> kamal@blackhorseassociates.com</p>
                    <p className="flex items-center gap-3"><Icon name="call" className="text-sm" /> +1 320-516-1288</p>
                    <p className="flex items-center gap-3 mt-4"><Icon name="location_on" className="text-sm" /> Ahmedabad, Gujarat, WY, USA</p>
                </div>
            </div>
            <div className="flex flex-col md:items-end justify-between">
                <nav className="flex flex-wrap gap-x-8 gap-y-4 md:justify-end">
                    <a className="text-surface-container-highest font-label-md text-sm uppercase tracking-widest hover:text-on-primary transition-all" href="#">Privacy Policy</a>
                    <a className="text-surface-container-highest font-label-md text-sm uppercase tracking-widest hover:text-on-primary transition-all" href="#">Terms of Service</a>
                    <a className="text-surface-container-highest font-label-md text-sm uppercase tracking-widest hover:text-on-primary transition-all" href="#">Regulatory Disclosures</a>
                    {/* <a className="text-surface-container-highest font-label-md text-sm uppercase tracking-widest hover:text-on-primary transition-all" href="#">Careers</a> */}
                </nav>
                <div className="mt-12 md:mt-0 text-surface-variant font-label-sm text-xs uppercase tracking-widest text-left md:text-right leading-relaxed">
                    © 2026 Black Horse Associates. All rights reserved.
                    <p className="text-[11px] text-primary-fixed/40 font-headline font-bold uppercase tracking-widest">
                        Designed and Developed by <Link href="https://honeyhexa.com" className="text-secondary-fixed">Honey Hexa</Link>
                    </p>
                </div>
            </div>
        </div>
    </footer>
);