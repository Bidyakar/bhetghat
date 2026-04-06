'use client';

import Link from "next/link";
import Image from "next/image";

const instaFeed = [
    "/images/momo.jpg",
    "/images/thakali.jpg",
    "/images/chickentaas.jpg",
    "/images/drumstick2.jpg",
    "/images/hero.jpg",
    "/images/momo.jpg",
];

export default function Footer() {
    return (
        <footer className="bg-[#0e0e0e] pt-24 pb-12 mt-20 border-outline-variant/10 ">
            <div className="container max-w-7xl mx-auto px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Logo & Info */}
                    <div className="space-y-6">
                        <div className="text-3xl font-black text-white tracking-tighter font-headline">
                            Bhetghat
                        </div>
                        <p className="text-on-surface-variant text-sm leading-relaxed max-w-xs">
                            Preserving the culinary heritage of Nepal through every spice
                            and every dish we serve with authentic Himalayan hospitality.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div className="space-y-6">
                        <h4 className="text-xl font-headline font-bold text-white">Navigation</h4>
                        <ul className="space-y-3">
                            <li><Link href="/" className="text-on-surface-variant hover:text-[#F26522] transition-colors">Home</Link></li>
                            <li><Link href="/about" className="text-on-surface-variant hover:text-[#F26522] transition-colors">Our Story</Link></li>
                            <li><Link href="/gallery" className="text-on-surface-variant hover:text-[#F26522] transition-colors">Gallery</Link></li>
                            <li><Link href="/Menu" className="text-on-surface-variant hover:text-[#F26522] transition-colors">Full Menu</Link></li>
                            <li><Link href="#" className="text-on-surface-variant hover:text-[#F26522] transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Useful Links */}
                    <div className="space-y-6">
                        <h4 className="text-xl font-headline font-bold text-white">Useful Links</h4>
                        <ul className="space-y-3">
                            <li><Link href="#" className="text-on-surface-variant hover:text-[#F26522] transition-colors">Registration</Link></li>
                            <li><Link href="#" className="text-on-surface-variant hover:text-[#F26522] transition-colors">Login</Link></li>
                            <li><Link href="#" className="text-on-surface-variant hover:text-[#F26522] transition-colors">Policy</Link></li>
                            <li><Link href="#" className="text-on-surface-variant hover:text-[#F26522] transition-colors">Terms & Conditions</Link></li>
                        </ul>
                    </div>

                    {/* Instagram Feed */}
                    <div className="space-y-6">
                        <h4 className="text-xl font-headline font-bold text-white">Instagram Feed</h4>
                        <div className="grid grid-cols-3 gap-2">
                            {instaFeed.map((src, index) => (
                                <div key={index} className="relative h-20 w-full rounded-md overflow-hidden group">
                                    <Image
                                        src={src}
                                        alt={`Insta ${index}`}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-500 saturate-[0.8]"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="footer-copy-right">
                        <p className="text-on-surface-variant text-sm">
                            Copyright © {new Date().getFullYear()} All rights reserved |
                            This experience is curated with <span className="text-[#F26522]">❤</span> by Bhetghat
                        </p>
                    </div>
                    <div className="flex items-center gap-6">
                        <span className="text-white font-bold text-sm tracking-wider uppercase">Follow Us</span>
                        <div className="flex gap-4">
                            {/* Facebook */}
                            <Link href="#" className="w-10 h-10 rounded-full bg-surface-container-low border border-white/5 flex items-center justify-center text-on-surface-variant hover:text-[#0866FF] hover:border-[#0866FF]/30 transition-all group">
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                    <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978 1.62 0 3.33.19 3.33.19v3.656h-1.877c-1.518 0-1.99.943-1.99 1.908v1.804h4.133l-.66 3.667h-3.473v7.98H9.101Z" />
                                </svg>
                            </Link>
                            {/* Instagram */}
                            <Link href="#" className="w-10 h-10 rounded-full bg-surface-container-low border border-white/5 flex items-center justify-center text-on-surface-variant hover:text-[#E4405F] hover:border-[#E4405F]/30 transition-all group">
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </Link>
                            {/* X (Twitter) */}
                            <Link href="#" className="w-10 h-10 rounded-full bg-surface-container-low border border-white/5 flex items-center justify-center text-on-surface-variant hover:text-white hover:border-white/30 transition-all group">
                                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932Zm-1.292 19.49h2.039L6.486 3.24H4.298l13.311 17.403Z" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}