'use client';

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const storySections = [
    {
        year: "1987",
        title: "A Vision of Heritage",
        content: "Bhetghat was born from a simple yet profound vision: to bring the authentic flavors of Kathmandu to the world. Our journey started in the heart of the Himalayas, where spices and traditions were passed down through generations, crafting a sanctuary for those who seek the soul of Nepalese cuisine.",
        image: "/images/chickentaas.jpg",
        alt: "Vintage-style shot of a Himalayan mountain village at dawn"
    },
    {
        year: "1998",
        title: "Establishing Roots",
        content: "We introduced multiple heritage dishes to our menu, each with its own unique story and flavor profile. Every ingredient was carefully sourced, and every recipe was a tribute to our ancestral heritage, ensuring that the legacy of our mountains lived on in every bite.",
        image: "/images/drumstick2.jpg",
        alt: "Authentic Thakali set being prepared in a traditional copper kitchen"
    }
];

const values = [
    {
        id: "01",
        title: "Pure Authenticity",
        description: "We never compromise on the traditional methods and hand-ground spices that define our mountain cuisine.",
    },
    {
        id: "02",
        title: "Sacred Hospitality",
        description: "Guests are treated as family, in accordance with the age-old mountain traditions of 'Atithi Devo Bhava'.",
    },
    {
        id: "03",
        title: "Uncompromising Quality",
        description: "Only the freshest locally sourced ingredients make it into our signature heritage dishes.",
    }
];

export default function AboutPage() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    return (
        <main
            ref={containerRef}
            className="bg-[#131313] text-white selection:bg-[#F26522] selection:text-white pt-24 overflow-x-hidden min-h-screen"
        >
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,600;1,300;1,600&family=Syne:wght@400;700;800&family=Alex+Brush&display=swap');
                .font-cormorant { font-family: 'Cormorant Garamond', serif; }
                .font-syne { font-family: 'Syne', sans-serif; }
                .font-signature { font-family: 'Alex Brush', cursive; }
                .noise-overlay {
                    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
                    opacity: 0.04;
                    pointer-events: none;
                }
            `}</style>

            <div className="absolute inset-0 noise-overlay pointer-events-none z-50 mix-blend-overlay" />

            <section className="relative px-6 md:px-12 lg:px-24 pt-32 pb-24 border-b border-white/5">
                <div className="w-full max-w-[2200px] mx-auto px-6 lg:px-16 2xl:px-32 flex flex-col items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <div className="flex items-center justify-center gap-4">
                            <div className="w-8 h-px bg-[#F26522]" />
                            <span className="font-syne text-[10px] tracking-[0.5em] uppercase text-[#F26522]">Our Sacred Legacy</span>
                            <div className="w-8 h-px bg-[#F26522]" />
                        </div>
                        <h1 className="text-7xl md:text-8xl py-10 font-serif text-white leading-[1.1] tracking-tight">
                            A Heritage of <br />
                            <em className="text-[#F26522] italic">Excellence</em>
                        </h1>
                        <p className="text-zinc-400 text-lg leading-relaxed max-w-xl">
                            A philosophical approach to traditional dining, where every dish is a living archive of our mountain culture.
                        </p>
                    </motion.div>
                </div>

                <div className="absolute right-12 top-1/2 -translate-y-1/2 hidden xl:block">
                    <span className="font-syne text-[10px] tracking-[1em] uppercase text-[#F26522]/30 [writing-mode:vertical-rl]">
                        Chronicles / 1987 — 2024
                    </span>
                </div>
            </section>

            <section className="relative py-40 px-6 md:px-12 lg:px-24">
                <div className="w-full max-w-[2200px] mx-auto px-6 lg:px-16 2xl:px-32 space-y-48">
                    {storySections.map((section, index) => (
                        <div
                            key={section.year}
                            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16 lg:gap-24 group`}
                        >

                            <div className="lg:w-1/2 space-y-10 relative z-10">
                                <motion.div
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.8 }}
                                    className="space-y-8"
                                >
                                    <div className="flex flex-col">
                                        <span className="font-cormorant text-9xl font-light text-[#f26522]/10 group-hover:text-[#f26522]/80 transition-all duration-700 select-none" style={{ WebkitTextStroke: '1px rgba(242, 101, 34, 0.2)' }}>
                                            {section.year}
                                        </span>
                                        <h2 className="text-6xl md:text-7xl font-serif text-white leading-[1.1] tracking-tight">
                                            {section.title}
                                        </h2>
                                    </div>

                                    <div className="w-12 h-px bg-[#F26522]/40 group-hover:w-143 group-hover:bg-[#F26522] transition-all duration-700" />

                                    <p className="text-zinc-400 text-lg leading-relaxed max-w-xl">
                                        &ldquo;{section.content}&rdquo;
                                    </p>
                                </motion.div>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.2 }}
                                className="lg:w-1/2 relative aspect-[3/4] w-full max-w-md mx-auto overflow-hidden bg-neutral-900 shadow-2xl"
                            >
                                <Image
                                    src={section.image}
                                    alt={section.alt}
                                    fill
                                    className="object-cover grayscale hover:grayscale-0 transition-all duration-[1.5s] ease-out hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-[#181818]/10 group-hover:bg-transparent transition-colors duration-700 pointer-events-none" />

                                <div className="absolute bottom-6 left-6 border border-white/10 bg-[#0A0A0A]/80 backdrop-blur-md px-4 py-2">
                                    <span className="font-syne text-[9px] tracking-[0.4em] uppercase text-[#F26522]">
                                        Archive {index + 1}
                                    </span>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="relative bg-[#131313] text-white py-40 px-6 md:px-12 lg:px-24 overflow-hidden border-t border-white/5">


                <div className="w-full max-w-[2200px] mx-auto px-6 lg:px-16 2xl:px-32 relative z-10">
                    <div className="text-center mb-32 space-y-6">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="font-syne text-[10px] tracking-[0.5em] uppercase text-[#F26522] block"
                        >
                            The Foundation
                        </motion.span>
                        <h2 className="text-7xl md:text-8xl py-10 font-serif text-white leading-[1.1] tracking-tight">
                            The Spirit of <br />
                            <span className="italic text-[#F26522]">Bhetghat</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-y-16 gap-x-12">
                        {values.map((value, index) => (
                            <motion.div
                                key={value.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15, duration: 0.8 }}
                                className="group flex flex-col gap-6"
                            >
                                <div className="flex items-center gap-4 border-b border-gray pb-6 group-hover:border-[#F26522]/30 transition-colors duration-500">
                                    <span className="font-syne text-[11px] tracking-[0.3em] text-[#F26522]">
                                        {value.id}
                                    </span>
                                    <h3 className="font-cormorant text-3xl font-light italic text-gray-400">
                                        {value.title}
                                    </h3>
                                </div>
                                <p className="text-zinc-400 text-lg leading-relaxed max-w-xl">
                                    {value.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="relative py-48 px-6 text-center bg-gradient-to-b from-[#131313] to-[#181818]">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="max-w-4xl mx-auto space-y-12 relative z-10"
                >
                    <span className="font-syne text-[10px] tracking-[0.5em] uppercase text-[#F26522]">
                        Join the Legacy
                    </span>
                    <h2 className="text-7xl md:text-8xl font-serif text-white leading-[1.1] tracking-tight">
                        Experience the <br />
                        <em className="italic text-[#F26522]">Heritage.</em>
                    </h2>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-10">
                        <Link
                            href="/Menu"
                            className="group flex items-center justify-center gap-3 bg-[#F26522] text-white w-full sm:w-auto px-10 py-5 font-syne text-[10px] tracking-[0.3em] uppercase hover:bg-[#d9561e] transition-colors duration-300"
                        >
                            Explore Menu
                            <svg className="group-hover:translate-x-1 transition-transform" width="16" height="10" viewBox="0 0 16 10" fill="none">
                                <path d="M1 5h14M11 1l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </Link>
                        <Link
                            href="/"
                            className="w-full sm:w-auto border border-white/10 text-white/50 hover:text-white hover:border-[#F26522]/50 px-10 py-5 font-syne text-[10px] tracking-[0.3em] uppercase transition-all duration-300"
                        >
                            Back to Home
                        </Link>
                    </div>
                </motion.div>


                <div className="absolute h-full w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-serif font-light text-[18vw] leading-none select-none pointer-events-none whitespace-nowrap opacity-[0.02] z-0">
                    <Image
                        src="/images/delivery.jpg"
                        alt="Logo"

                        fill
                    />
                </div>
            </section>
        </main>
    );
}
