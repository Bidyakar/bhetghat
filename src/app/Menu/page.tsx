'use client';

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { menuCategories, menuItems } from "@/data/menuData";

export default function MenuPage() {
    const allCategories = [{ id: 'all', name: 'All' }, ...menuCategories];
    const [activeCategoryId, setActiveCategoryId] = useState('all');

    const displayItems = activeCategoryId === 'all'
        ? menuItems
        : menuItems.filter(item => item.category === activeCategoryId);

    return (
        <main className="min-h-screen bg-[#131313] text-white pb-24 font-sans relative">

            <div
                className="absolute inset-0 z-0 opacity-10 pointer-events-none mix-blend-overlay"
                style={{
                    backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")'
                }}
            />

            <section className="relative w-full h-[250px] md:h-[350px] z-10 border-b-4 border-[#131313]">

                <div className="absolute inset-0 flex items-center justify-center pt-16">
                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-white tracking-widest drop-shadow-2xl shadow-black">
                        Bhetghat <span className="text-[#F26522] italic">Menu</span>
                    </h1>
                </div>
            </section>


            <div className="relative z-10 w-full max-w-[2200px] mx-auto px-6 lg:px-16 2xl:px-32 mb-24">
                <nav className="flex items-center justify-start overflow-x-auto gap-x-6 md:gap-x-10 pb-6 snap-x scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                    {allCategories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCategoryId(cat.id)}
                            className={`relative flex-shrink-0 snap-center text-[10px] md:text-xs tracking-[0.3em] uppercase transition-colors duration-300 px-4 py-2 ${activeCategoryId === cat.id
                                ? "text-[#131313] font-bold"
                                : "text-white/50 hover:text-white"
                                }`}
                        >
                            <span className="relative z-10">{cat.name}</span>
                            {activeCategoryId === cat.id && (
                                <motion.div
                                    layoutId="menu-active"
                                    className="absolute inset-0 bg-[#F26522] rounded-full z-0 shadow-[0_0_20px_rgba(210,163,94,0.3)]"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                        </button>
                    ))}
                </nav>
            </div>


            <div className="relative z-10 w-full max-w-[2200px] mx-auto px-6 lg:px-16 2xl:px-32 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-6 lg:gap-x-10 gap-y-32 md:gap-y-40">
                <AnimatePresence mode="popLayout">
                    {displayItems.map((item) => (
                        <motion.div
                            layout
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.4 }}
                            key={item.id}
                            className="relative mt-24 md:mt-32 group"
                        >
                            <div className="absolute -top-24 md:-top-32 left-1/2 -translate-x-1/2 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full border-[4px] md:border-[6px] border-[#f26522]/80 overflow-hidden z-20 shadow-2xl bg-[#112536] transition-transform duration-500 group-hover:scale-105">
                                <Image
                                    src={item.image || '/images/thakali.jpg'}
                                    alt={item.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>


                            <div className="border border-[#d2a35e]/40 rounded-xl pt-28 md:pt-36 px-6 pb-8 flex flex-col h-[360px] md:h-[400px] bg-[#1a1a1a]/40 backdrop-blur-sm relative z-10 hover:border-[#f26522]/60 transition-colors duration-300">


                                <div className="text-right text-[#f26522]/60 text-[10px] sm:text-xs tracking-widest mb-3 uppercase font-bold">
                                    {item.isVegetarian ? '100% Veg' : 'Non-Veg'}
                                </div>

                                <h3 className="text-[#d2a35e] text-center text-sm md:text-base font-bold tracking-widest uppercase mb-4 h-12 flex items-start justify-center">
                                    <span className="line-clamp-2 leading-relaxed">{item.name}</span>
                                </h3>

                                <p className="text-white/70 text-xs md:text-sm text-center flex-grow leading-relaxed font-light italic">
                                    <span className="line-clamp-4">{item.description}</span>
                                </p>

                                <div className="flex justify-center items-center mt-6 pt-4 border-t border-[#d2a35e]/20">
                                    <span className="text-white text-lg md:text-xl font-black tracking-tighter">
                                        <span className="text-[#f26522] mr-1 text-sm font-bold">NPR</span>{(item.price)}
                                    </span>

                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </main>
    );
}