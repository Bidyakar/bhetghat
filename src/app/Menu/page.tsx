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
                <Image
                    src="/images/delivery.jpg"
                    alt="Bhetghat Menu Hero"
                    fill
                    className="object-cover object-center brightness-[0.4]"
                    priority
                />
                <div className="absolute inset-0 flex items-center justify-center pt-16">
                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-white tracking-widest drop-shadow-2xl shadow-black">
                        Bhetghat <span className="text-[#F26522]">Menu</span>
                    </h1>
                </div>
            </section>


            <div className="relative z-10 w-full max-w-[2200px] mx-auto px-6 lg:px-16 2xl:px-32 mt-16 mb-24">
                <nav className="flex overflow-x-auto gap-x-8 md:gap-x-10 pb-4 snap-x scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                    {allCategories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCategoryId(cat.id)}
                            className={`flex-shrink-0 snap-center text-xs md:text-sm tracking-widest uppercase transition-all duration-300 ${activeCategoryId === cat.id
                                ? "text-[#d2a35e] border-b border-[#d2a35e] pb-1"
                                : "text-white/60 hover:text-white pb-1 border-b border-transparent"
                                }`}
                        >
                            {cat.name}
                        </button>
                    ))}
                </nav>
            </div>


            <div className="relative z-10 w-full max-w-[2200px] mx-auto px-6 lg:px-16 2xl:px-32 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-6 lg:gap-x-10 gap-y-28">
                <AnimatePresence mode="popLayout">
                    {displayItems.map((item) => (
                        <motion.div
                            layout
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.4 }}
                            key={item.id}
                            className="relative mt-20"
                        >
                            <div className="absolute -top-35 left-1/2 -translate-x-1/2 w-56 sm:w-64 h-56 sm:h-64 rounded-full border-[6px] border-[#f26522]/80 overflow-hidden z-20 shadow-2xl bg-[#112536] transition-transform duration-500 group-hover:scale-105">
                                <Image
                                    src={item.image || '/images/thakali.jpg'}
                                    alt={item.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>


                            <div className="border border-[#d2a35e]/40 rounded-b-lg rounded-t-lg pt-28 px-6 pb-6  flex flex-col h-[340px] bg-transparent relative z-10">


                                <div className="text-right text-white/40 text-[10px] sm:text-xs tracking-widest mb-3 uppercase">
                                    {item.isVegetarian ? '100% Veg' : 'Non-Veg'}
                                </div>

                                <h3 className="text-[#d2a35e] text-center text-[13px] md:text-[15px] font-bold tracking-widest uppercase mb-4 h-12 flex items-start justify-center">
                                    <span className="line-clamp-2 leading-relaxed">{item.name}</span>
                                </h3>

                                <p className="text-white/75 text-xs md:text-[13px] text-center flex-grow leading-relaxed font-light">
                                    <span className="line-clamp-4">{item.description}</span>
                                </p>

                                <div className="flex justify-between items-end mt-4">
                                    <span className="text-white px-6 sm:px-8 md:px-22 text-sm sm:text-base md:text-lg font-bold tracking-wider">
                                        NPR.{(item.price)}
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