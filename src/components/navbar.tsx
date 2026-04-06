'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const pathname = usePathname();

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Specials', href: '/Specials' },
        { name: 'Gallery', href: '/gallery' },
        { name: 'Contact', href: '/Contact' }
    ];

    return (
        <nav className="fixed top-0 w-full z-50 bg-[[#181818]]/80 backdrop-blur-md border-b border-white/5">
            <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
                <div className="text-3xl font-serif text-white tracking-tight">
                    <Link href="/" className="hover:text-[#F26522] transition-colors italic">
                        Bhetghat
                    </Link>
                </div>

                <div className="hidden md:flex gap-10">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`font-headline font-bold tracking-tight transition-all duration-300 relative py-1 ${isActive
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

                <div className="flex items-center gap-6">
                    <Link
                        href="/Menu"
                        className={`px-8 py-2.5 rounded-xl font-bold transition-all duration-300 shadow-lg ${pathname === '/Menu'
                            ? "bg-white text-black shadow-white/10"
                            : "bg-[#F26522] text-white shadow-[#F26522]/20 hover:shadow-[#F26522]/40 hover:-translate-y-0.5"
                            }`}
                    >
                        Menu
                    </Link>
                </div>
            </div>
        </nav>
    );
}