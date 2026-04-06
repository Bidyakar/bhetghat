'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import { menuItems } from "@/data/menuData";
import Link from "next/link";

export default function SpecialsPage() {
    // Filter Chef's Specials and Popular items
    const chefsSpecials = menuItems.filter(item => item.subcategory === "Chef's Special");
    const popularItems = menuItems.filter(item => item.isPopular).slice(0, 8); // Top 8 popular items

    return (
        <main className="min-h-screen bg-[#0e0e0e] text-white pt-32 pb-24">
            {/* Header */}
            <header className="text-center mb-24 px-6">
                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-[#ffb599] font-bold tracking-[0.3em] uppercase text-sm mb-4 block"
                >
                    Exclusives
                </motion.span>
                <motion.h1
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-6xl md:text-8xl font-headline font-black tracking-tighter mb-8"
                >
                    Chef's <span className="text-[#F26522]">Selection</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-on-surface-variant max-w-2xl mx-auto text-xl italic font-medium"
                >
                    Curated masterpieces from our kitchen, blending ancient Himalayan secrets with
                    contemporary culinary craft.
                </motion.p>
            </header>

            {/* Chef's Specials - Large Highlight Cards */}
            <section className="max-w-7xl mx-auto px-8 mb-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {chefsSpecials.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="flex flex-col md:flex-row items-center gap-10 group"
                        >
                            {/* Clean Circular Image */}
                            <div className="relative w-64 h-64 shrink-0 transition-transform duration-700 group-hover:scale-105">
                                <div className="absolute inset-0 rounded-full border-2 border-white/10 group-hover:border-[#F26522]/30 transition-colors duration-500 overflow-hidden bg-[#1a1a1a] shadow-2xl">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-1000 contrast-110 brightness-110"
                                    />
                                </div>
                                <div className="absolute inset-2 rounded-full bg-[#F26522]/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />
                            </div>

                            <div className="space-y-4 text-center md:text-left">
                                <span className="bg-[#F26522]/10 text-[#F26522] px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest border border-[#F26522]/20">
                                    Chef's Signature
                                </span>
                                <h2 className="text-4xl font-headline font-black text-white group-hover:text-[#F26522] transition-colors leading-none tracking-tight">
                                    {item.name}
                                </h2>
                                <p className="text-on-surface-variant text-lg leading-relaxed max-w-sm">
                                    {item.description}
                                </p>
                                <div className="text-[#F26522] text-3xl font-black pt-2">
                                    Rs. {item.price}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Most Popular - Grid Layout */}
            <section className="bg-surface-container-low/20 py-32">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                        <div>
                            <span className="text-white/40 font-bold tracking-[0.3em] uppercase text-xs mb-4 block">
                                Guest Favorites
                            </span>
                            <h3 className="text-5xl font-headline font-black text-white leading-tight">
                                Loved by the <br />
                                <span className="text-[#F26522]">Himalayan Community</span>
                            </h3>
                        </div>
                        <Link href="/Menu" className="text-white font-bold border-b-2 border-[#F26522] pb-1 hover:text-[#F26522] transition-colors">
                            View Full Menu
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {popularItems.map((item, index) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="group flex flex-col items-center text-center space-y-6"
                            >
                                <div className="relative w-40 h-40 transition-transform duration-700 group-hover:scale-105">
                                    <div className="absolute inset-0 rounded-full border-2 border-white/5 group-hover:border-[#F26522]/30 transition-colors duration-500 overflow-hidden bg-[#1a1a1a]">
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                    </div>
                                    <div className="absolute inset-2 rounded-full bg-[#F26522]/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />
                                </div>
                                <div className="space-y-2">
                                    <h4 className="text-xl font-headline font-bold text-white group-hover:text-[#F26522] transition-colors">
                                        {item.name}
                                    </h4>
                                    <p className="text-[#F26522] font-black">Rs. {item.price}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="mt-32 text-center px-6">
                <div className="max-w-3xl mx-auto space-y-8">
                    <h2 className="text-4xl md:text-5xl font-headline font-black text-white italic">
                        Experience the <span className="text-[#F26522] not-italic">Extraordinary</span>
                    </h2>
                    <p className="text-on-surface-variant text-lg">
                        These selections represent the very best of Bhetghat. Book your table now to enjoy
                        these exclusive flavors in our authentic Himalayan ambience.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <Link
                            href="/"
                            className="bg-[#F26522] text-white px-10 py-4 rounded-2xl font-bold shadow-xl shadow-[#F26522]/20 hover:-translate-y-1 transition-all"
                        >
                            Book a Table
                        </Link>
                        <Link href="/Menu" className="bg-white/5 border border-white/10 text-white px-10 py-4 rounded-2xl font-bold hover:bg-white/10 hover:-translate-y-1 transition-all flex items-center justify-center">
                            Explore Full Menu
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
