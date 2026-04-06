'use client';

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
    {
        image: "/images/hero.png",
        title: "Taste the <br/> <span class='text-[#F26522]'>Soul</span> of <br/> Kathmandu",
        description: "Journey through the authentic flavors of the Himalayas. Our kitchen crafts timeless Nepalese traditions since 1987.",
        badge: "Est. 1987",
        cta: "Explore Full Menu",
        href: "/Menu"
    },
    {
        image: "/images/thakali.jpg",
        title: "The Ultimate <br/> <span class='text-[#F26522]'>Thakali</span> <br/> Experience",
        description: "From the high altitudes of Thak Khola to your plate. Discover the most authentic Thakali set in the city.",
        badge: "Chef's Signature",
        cta: "View Specials",
        href: "/Specials"
    },
    {
        image: "/images/momo.jpg",
        title: "Crafted with <br/> <span class='text-[#F26522]'>Heritage</span> <br/> & Love",
        description: "Succulent, hand-pulled momos steamed to perfection. A testament to the rich culinary legacy of Nepal.",
        badge: "Guest Favorite",
        cta: "Our Story",
        href: "/about"
    }
];

export default function HeroSection() {
    const [current, setCurrent] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, []);

    useEffect(() => {
        const timer = setInterval(nextSlide, 5000);
        return () => clearInterval(timer);
    }, [nextSlide]);

    return (
        <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden pt-16 bg-[#0e0e0e]">
            <div className="absolute inset-0 z-0">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={current}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 0.5, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.05 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="relative w-full h-full"
                    >
                        <Image
                            src={slides[current].image}
                            alt="Cinematic Himalayan Shot"
                            fill
                            className="object-cover"
                            priority
                        />
                    </motion.div>
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-transparent to-[#0e0e0e]/40" />
                <div className="absolute inset-0 bg-black/20" />
            </div>


            <div className="relative z-10 text-center max-w-5xl px-6">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={current}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <motion.span
                            initial={{ opacity: 0, letterSpacing: "0.5em" }}
                            animate={{ opacity: 1, letterSpacing: "0.2em" }}
                            className="text-[#ffb599] font-bold uppercase text-xs sm:text-sm mb-6 block"
                        >
                            {slides[current].badge}
                        </motion.span>
                        <h1
                            className="text-4xl md:text-6xl lg:text-8xl font-headline font-black text-white leading-[0.95] tracking-tighter mb-8"
                            dangerouslySetInnerHTML={{ __html: slides[current].title }}
                        />
                        <p className="text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto mb-12 font-medium leading-relaxed opacity-90">
                            {slides[current].description}
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <Link href={slides[current].href}>
                                <button className="bg-[#F26522] text-white px-12 py-5 rounded-2xl font-bold text-lg shadow-2xl shadow-[#F26522]/20 hover:shadow-[#F26522]/40 hover:-translate-y-1 transition-all">
                                    {slides[current].cta}
                                </button>
                            </Link>
                            <Link href="/gallery">
                                <button className="bg-white/5 backdrop-blur-md text-white border border-white/10 px-12 py-5 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all">
                                    View Gallery
                                </button>
                            </Link>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>


        </section>
    );
}
