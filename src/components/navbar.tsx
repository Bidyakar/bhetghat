'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full z-50 bg-[#131313]/80 backdrop-blur-md">
            <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
                <div className="text-2xl font-black text-white tracking-tighter font-headline">
                    Bhetghat
                </div>

                <div className="hidden md:flex gap-8">
                    <a className="font-headline font-bold tracking-tight text-[#F26522] border-b-2 border-[#F26522] pb-1" href="#">
                        Home
                    </a>
                    <a className="font-headline font-bold tracking-tight text-white/70 hover:text-white" href="/about">Specials</a>
                    <a className="font-headline font-bold tracking-tight text-white/70 hover:text-white" href="#">Gallery</a>
                    <a className="font-headline font-bold tracking-tight text-white/70 hover:text-white" href="#">Contact</a>
                </div>

                <button className="bg-orange-500 px-6 py-2 rounded-xl font-bold hover:opacity-80">
                    Menu
                </button>
            </div>
        </nav>
    );
}