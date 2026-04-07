'use client';

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const categories = ["All", "Momos", "Mutton", "Biryani", "Chowmein", "Ambience"];

const galleryItems = [
    { id: 1, image: "/images/momo.jpg", name: "Jhol Momo", category: "Momos" },
    { id: 2, image: "/images/thakali.jpg", name: "Thakali Set", category: "Ambience" },
    { id: 3, image: "/images/chickentaas.jpg", name: "Chicken Taas", category: "Mutton" },
    { id: 4, image: "/images/drumstick2.jpg", name: "Sekuwa", category: "Mutton" },
    { id: 5, image: "/images/drumstick2.jpg", name: "Kathmandu Biryani", category: "Biryani" },
    { id: 6, image: "/images/chickentaas.jpg", name: "Mutton Sukuti", category: "Mutton" },
    { id: 7, image: "/images/hero.jpg", name: "Buff Chowmein", category: "Chowmein" },
    { id: 8, image: "/images/hero.png", name: "Fried Kothey Momo", category: "Momos" },
    { id: 9, image: "/images/thakali.jpg", name: "Our Dining Hall", category: "Ambience" },
];

export default function GalleryPage() {
    const [active, setActive] = useState("All");
    const [lightbox, setLightbox] = useState<null | typeof galleryItems[0]>(null);

    const filtered =
        active === "All" ? galleryItems : galleryItems.filter(i => i.category === active);

    return (
        <main
            className="min-h-screen bg-[#13131313] text-white pt-28 pb-24 relative overflow-hidden"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
            {/* -- PREMIUM GEOMETRIC ORNAMENT -- */}
            <div className="absolute bottom-0 right-0 pointer-events-none z-0 opacity-20 transform translate-x-1/4 translate-y-1/4 overflow-hidden">
                <svg width="800" height="800" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient id="patternGradient" x1="0" y1="0" x2="800" y2="800" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#F26522" stopOpacity="0.8" />
                            <stop offset="1" stopColor="#F26522" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                    {[...Array(15)].map((_, i) => (
                        <motion.path
                            key={i}
                            d={`M ${150 + i * 40} 0 Q ${800 - i * 30} 400 ${150 + i * 40} 800`}
                            stroke="url(#patternGradient)"
                            strokeWidth="1.2"
                            strokeLinecap="round"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 1 }}
                            transition={{ duration: 4, delay: i * 0.1, ease: "easeInOut" }}
                        />
                    ))}
                    {[...Array(15)].map((_, i) => (
                        <motion.path
                            key={`h-${i}`}
                            d={`M 0 ${150 + i * 40} Q 400 ${800 - i * 30} 800 ${150 + i * 40}`}
                            stroke="url(#patternGradient)"
                            strokeWidth="0.8"
                            strokeOpacity="0.5"
                            strokeLinecap="round"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 1 }}
                            transition={{ duration: 4, delay: i * 0.15, ease: 'easeInOut' }}
                        />
                    ))}
                </svg>
            </div>


            <header className="text-center mb-12 px-6">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-5xl md:text-6xl font-black tracking-tight text-white mb-4"
                >
                    Our Gallery
                </motion.h1>


            </header>

            {/* ════ FILTER TABS ════ */}
            <motion.nav
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-center justify-center flex-wrap gap-0 mb-12 px-8 border-b border-white/10 max-w-4xl mx-auto"
            >
                {categories.map((cat, i) => (
                    <button
                        key={cat}
                        onClick={() => setActive(cat)}
                        className={`relative px-7 py-4 text-sm font-bold tracking-wider transition-colors duration-300
                            ${i < categories.length - 1 ? 'border-r border-white/10' : ''}
                            ${active === cat ? 'text-[#F26522]' : 'text-white/50 hover:text-white/80'}`}
                    >
                        {cat}
                        {active === cat && (
                            <motion.div
                                layoutId="tab-underline"
                                className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#F26522]"
                            />
                        )}
                    </button>
                ))}
            </motion.nav>


            <section className="w-full max-w-[2200px] mx-auto px-6 lg:px-16 2xl:px-32">
                <motion.div
                    layout
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
                >
                    <AnimatePresence mode="popLayout">
                        {filtered.map((item, index) => (
                            <motion.div
                                key={item.id}
                                layout
                                initial={{ opacity: 0, scale: 0.92 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.88 }}
                                transition={{ duration: 0.45, delay: index * 0.05 }}
                                className="relative overflow-hidden rounded-sm cursor-pointer group"
                                style={{ aspectRatio: '4/3' }}
                                onClick={() => setLightbox(item)}
                            >
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110 brightness-90 group-hover:brightness-100"
                                />


                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-500 flex items-center justify-center">

                                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-400 w-12 h-12 rounded-full border-2 border-[#F26522] flex items-center justify-center">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <circle cx="9" cy="9" r="6" stroke="#F26522" strokeWidth="1.8" />
                                            <line x1="13.5" y1="13.5" x2="18" y2="18" stroke="#F26522" strokeWidth="1.8" strokeLinecap="round" />
                                            <line x1="9" y1="6" x2="9" y2="12" stroke="#F26522" strokeWidth="1.5" strokeLinecap="round" />
                                            <line x1="6" y1="9" x2="12" y2="9" stroke="#F26522" strokeWidth="1.5" strokeLinecap="round" />
                                        </svg>
                                    </div>
                                </div>


                                <div className="absolute bottom-0 left-0 right-0 py-3 px-4 bg-gradient-to-t from-black/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-400">
                                    <span className="text-white text-sm font-bold tracking-wide">{item.name}</span>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>


                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex justify-center mt-14"
                >
                    <button className="bg-[#F26522] text-white px-10 py-4 font-bold text-sm tracking-widest uppercase hover:bg-[#d9561e] hover:-translate-y-1 transition-all duration-300 shadow-xl shadow-[#F26522]/20 rounded-sm">
                        View All
                    </button>
                </motion.div>
            </section>

            <AnimatePresence>
                {lightbox && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-6"
                        onClick={() => setLightbox(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.88, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.88, opacity: 0 }}
                            transition={{ duration: 0.35 }}
                            className="relative max-w-3xl w-full aspect-video rounded-sm overflow-hidden shadow-2xl"
                            onClick={e => e.stopPropagation()}
                        >
                            <Image
                                src={lightbox.image}
                                alt={lightbox.name}
                                fill
                                className="object-cover"
                            />

                            <button
                                onClick={() => setLightbox(null)}
                                className="absolute top-4 right-4 w-10 h-10 bg-black/60 hover:bg-[#F26522] transition-colors rounded-full flex items-center justify-center text-white"
                            >
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                    <line x1="1" y1="1" x2="13" y2="13" stroke="white" strokeWidth="2" strokeLinecap="round" />
                                    <line x1="13" y1="1" x2="1" y2="13" stroke="white" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            </button>

                            <div className="absolute bottom-0 left-0 right-0 py-4 px-6 bg-gradient-to-t from-black/80 to-transparent">
                                <p className="text-white font-bold text-lg">{lightbox.name}</p>
                                <p className="text-[#F26522] text-xs font-bold tracking-widest uppercase mt-0.5">{lightbox.category}</p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    );
}



