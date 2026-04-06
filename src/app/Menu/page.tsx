'use client';

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { menuCategories, menuItems } from "@/data/menuData";

export default function MenuPage() {
    const [activeCategoryId, setActiveCategoryId] = useState(menuCategories[0].id);

    const activeCategory = menuCategories.find(cat => cat.id === activeCategoryId);
    const filteredItems = menuItems.filter(item => item.category === activeCategoryId);

    return (
        <main className="min-h-screen bg-[#0e0e0e] text-[#ededed] pt-24">
            {/* Editorial Hero Section */}
            <section className="relative h-[80vh] flex items-center justify-center overflow-hidden px-6">
                <div className="absolute inset-0 z-0 opacity-20">
                     <div className="absolute top-20 left-10 w-64 h-64 bg-[#F26522]/20 rounded-full blur-[120px]" />
                     <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500/10 rounded-full blur-[150px]" />
                </div>

                <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h1 className="text-7xl md:text-8xl font-serif leading-[1.1] mb-6 text-white">
                            Fresh and <br />
                            <span className="italic text-[#F26522]">Healthy</span> <br />
                            Food Specialties
                        </h1>
                        <p className="text-zinc-400 text-lg max-w-md leading-relaxed mb-8">
                            Variety of fresh and authentic Himalayan flavors served just for you. 
                            Your solution when craving extraordinary taste.
                        </p>
                        <div className="flex gap-4">
                            <button className="bg-[#F26522] text-white px-10 py-4 rounded-full font-bold shadow-2xl hover:scale-105 transition-transform">
                                Explore Menu
                            </button>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 1.2, ease: "circOut" }}
                        className="relative hidden lg:block"
                    >
                        {/* Floating Leaves decoration */}
                        <motion.div 
                            animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                            transition={{ duration: 5, repeat: Infinity }}
                            className="absolute -top-10 -right-10 w-32 h-32 z-20 pointer-events-none"
                        >
                            <Image src="/images/momo.jpg" alt="deco" fill className="object-contain opacity-40 blur-sm rounded-full" />
                        </motion.div>
                        
                        <div className="relative w-[500px] h-[500px] rounded-full p-4 border border-white/5 bg-gradient-to-tr from-white/5 to-transparent backdrop-blur-3xl shadow-2xl">
                            <div className="relative w-full h-full rounded-full overflow-hidden shadow-[0_0_80px_rgba(242,101,34,0.15)]">
                                <Image
                                    src="/images/thakali.jpg"
                                    alt="Hero Dish"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Category Navigation - Floating Sticky */}
            <nav className="sticky top-24 z-[100] py-6 bg-[#0e0e0e]/80 backdrop-blur-xl border-y border-white/5">
                <div className="max-w-7xl mx-auto px-6 overflow-x-auto no-scrollbar flex justify-start md:justify-center gap-4">
                    {menuCategories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCategoryId(cat.id)}
                            className={`px-8 py-2.5 rounded-full font-bold text-sm transition-all whitespace-nowrap ${
                                activeCategoryId === cat.id
                                    ? "bg-[#F26522] text-white"
                                    : "bg-white/5 text-zinc-400 hover:text-white"
                            }`}
                        >
                            {cat.name}
                        </button>
                    ))}
                </div>
            </nav>

            {/* Editorial Grid Sections */}
            <div className="max-w-7xl mx-auto px-6 py-24">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeCategoryId}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -30 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-32"
                    >
                        {activeCategory?.subcategories.map((subcat, subIndex) => {
                            const subcatItems = filteredItems.filter(item => item.subcategory === subcat);
                            if (subcatItems.length === 0) return null;

                            return (
                                <section key={subcat} className="space-y-16">
                                    <div className="space-y-4">
                                        <h2 className="text-5xl font-serif text-white tracking-tight">
                                            {subcat}
                                        </h2>
                                        <p className="text-zinc-500 max-w-xl">
                                            The combination of traditional recipes combined with 
                                            regional expertise creates our newest {subcat.toLowerCase()} collection.
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
                                        {subcatItems.map((item, itemIndex) => (
                                            <motion.div
                                                key={item.id}
                                                initial={{ opacity: 0, y: 40 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: itemIndex * 0.1 }}
                                                className={`group flex items-center gap-8 ${
                                                    itemIndex % 2 !== 0 ? 'md:translate-y-12' : ''
                                                }`}
                                            >
                                                {/* Editorial Card Style */}
                                                <div className="relative w-48 h-48 sm:w-56 sm:h-56 shrink-0 group">
                                                    {/* Floating Decoration Elements */}
                                                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-green-500/10 rounded-full blur-xl animate-pulse" />
                                                    
                                                    <div className="relative w-full h-full rounded-full border border-white/10 group-hover:border-[#F26522]/40 transition-colors duration-500 bg-[#151515] overflow-hidden shadow-2xl">
                                                        <Image
                                                            src={item.image}
                                                            alt={item.name}
                                                            fill
                                                            className="object-cover group-hover:scale-110 transition-transform duration-1000"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="space-y-3 flex-grow">
                                                    <h3 className="text-2xl sm:text-3xl font-serif text-white leading-snug group-hover:text-[#F26522] transition-colors">
                                                        {item.name}
                                                    </h3>
                                                    <p className="text-zinc-500 text-sm leading-relaxed max-w-xs line-clamp-2">
                                                        {item.description}
                                                    </p>
                                                    <div className="flex items-center justify-between pt-4">
                                                        <span className="text-yellow-500 text-2xl font-bold font-serif">
                                                            Rs. {item.price}
                                                        </span>
                                                        <button className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-[#F26522] hover:text-white transition-all shadow-lg active:scale-90">
                                                            <span className="material-symbols-outlined text-xl">add</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </section>
                            );
                        })}
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* "We Have A Service" Section (Inspired by Image) */}
            <section className="py-32 px-6 bg-gradient-to-b from-transparent to-[#101010]">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="max-w-xl">
                        <h2 className="text-6xl font-serif leading-tight text-white mb-6">
                            We Have A <br />
                            <span className="text-[#F26522]">Service</span> That <br />
                            Can Satisfy You
                        </h2>
                        <p className="text-zinc-400 mb-10 text-lg">
                            Experience the highest level of Himalayan hospitality. From private dining 
                            to express delivery, we ensure your satisfaction is our top priority.
                        </p>
                        <button className="bg-yellow-500 text-black px-12 py-4 rounded-full font-bold hover:bg-yellow-400 transition-colors uppercase tracking-widest text-sm">
                            See All Features
                        </button>
                    </div>

                    <div className="relative w-full max-w-md aspect-video rounded-[2rem] overflow-hidden group border border-white/5">
                        <Image 
                            src="/images/thakali.jpg" 
                            alt="Service" 
                            fill 
                            className="object-cover group-hover:scale-105 transition-transform duration-700" 
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                            <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                                <span className="material-symbols-outlined text-white text-4xl fill-1">play_arrow</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}