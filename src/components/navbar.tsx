'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';

export default function Navbar() {
    const pathname = usePathname();
    const [mobileOpen, setMobileOpen] = useState(false);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Our Story', href: '/about' },
        { name: 'Specials', href: '/Specials' },
        { name: 'Gallery', href: '/gallery' },
        { name: 'Contact', href: '/Contact' }
    ];

    return (
        <nav className="fixed top-0 w-full z-50 bg-[#181818]/20 backdrop-blur-lg border-b border-white/5">
            <div className="flex justify-between items-center px-4 sm:px-8 lg:px-16 2xl:px-32 py-2 md:py-3 w-full max-w-[2200px] mx-auto">
                <div className="relative h-12 md:h-14 flex items-center w-28 sm:w-36 md:w-44 lg:w-52">
                    <Link href="/" className="block">
                        <Image src="/images/logo.png" alt="Bhetghat Logo" width={300} height={200} className="w-full h-auto object-contain" priority />
                    </Link>
                </div>

                <div className="hidden md:flex gap-6 lg:gap-10">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`font-headline font-bold tracking-tight transition-all duration-300 relative py-1 text-sm lg:text-base ${isActive
                                    ? "text-[#F26522]"
                                    : "text-white/70 hover:text-white"
                                    }`}
                            >
                                {link.name}
                                {isActive && (
                                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#F26522] rounded-full" />
                                )}
                            </Link>
                        );
                    })}
                </div>

                <div className="flex items-center gap-4">
                    <Link
                        href="/Menu"
                        className={`hidden sm:block px-6 lg:px-8 py-2.5 rounded-xl font-bold text-sm transition-all duration-300 shadow-lg ${pathname === '/Menu'
                            ? "bg-[#F26522] text-white shadow-white/10"
                            : "bg-[#F26522] text-white shadow-[#F26522]/20 hover:shadow-[#F26522]/40 hover:-translate-y-0.5"
                            }`}
                    >
                        Menu
                    </Link>

                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] group"
                        aria-label="Toggle menu"
                    >
                        <span className={`block w-6 h-[2px] bg-[#F26522] transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
                        <span className={`block w-6 h-[2px] bg-[#F26522] transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
                        <span className={`block w-6 h-[2px] bg-[#F26522] transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
                    </button>
                </div>
            </div>


            <div className={`md:hidden overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${mobileOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="bg-[#131313]/95 backdrop-blur-xl border-t border-white/5 px-6 py-8 space-y-2">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setMobileOpen(false)}
                                className={`block py-3 px-4 text-lg font-bold tracking-tight transition-all duration-300 border-l-2 ${isActive
                                    ? "text-[#F26522] border-[#F26522] bg-[#F26522]/5"
                                    : "text-white/60 border-transparent hover:text-white hover:border-white/20"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                    <Link
                        href="/Menu"
                        onClick={() => setMobileOpen(false)}
                        className="block mt-4 text-center bg-[#F26522] text-white py-3 rounded-xl font-bold text-lg shadow-lg"
                    >
                        Menu
                    </Link>
                </div>
            </div>
        </nav>
    );
}