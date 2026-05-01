'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const aboutCaptions = [
    {
        id: 1,
        icon: "restaurant",
        text: "Authentic Himalayan spices and traditional recipes passed down through generations.",
    },
    {
        id: 2,
        icon: "soup_kitchen",
        text: "Freshly prepared ingredients sourced from local farms and mountain regions.",
    },
    {
        id: 3,
        icon: "cooking",
        text: "Expert chefs specializing in the unique culinary arts of Kathmandu.",
    },
    {
        id: 4,
        icon: "restaurant_menu",
        text: "A diverse menu featuring the soul of Nepalese hospitality and flavor.",
    }
];

export default function AboutSection() {
    return (
        <section className="py-15 bg-[#0A0A0A] overflow-hidden relative">
            <div className="w-full max-w-[2200px] mx-auto px-6 lg:px-10 2xl:px-25 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between ">

                    <div className="lg:w-[45%] space-y-10">
                        <div className="space-y-6">
                            <motion.span
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="text-[#F26522] font-bold tracking-[0.3em] uppercase text-xs block"
                            >
                                Our Heritage
                            </motion.span>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-white leading-[0.95] tracking-tight"
                            >
                                Discover Your <br />
                                <span className="italic text-[#F26522]">Taste.</span>
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="text-zinc-400 text-lg leading-relaxed max-w-xl"
                            >
                                Since 1987, Bhetghat has been a sanctuary for authentic Nepalese cuisine.
                                We believe that food is more than just sustenance—it's a journey through
                                the heart of the Himalayas. Our kitchen crafts timeless traditions into
                                modern culinary masterpieces.
                            </motion.p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-6">
                            {aboutCaptions.map((caption, index) => (
                                <motion.div
                                    key={caption.id}
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 * index }}
                                    className="flex items-start gap-4 group"
                                >
                                    <div className="w-12 h-12 shrink-0 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#F26522]/10 group-hover:border-[#F26522]/30 transition-all duration-300">
                                        <span className="material-symbols-outlined text-[#F26522] text-2xl">
                                            {caption.icon}
                                        </span>
                                    </div>
                                    <div>
                                        <p className="text-sm text-zinc-400 leading-relaxed group-hover:text-white transition-colors">
                                            {caption.text}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}

                        >
                            <Link href="/about" className="inline-flex items-center">
                                <span className="bg-white/5 border border-white/10 text-white px-5 py-4 rounded-2xl font-bold hover:bg-[#F26522] mb-5 hover:border-transparent transition-all">
                                    Our Story
                                </span>
                            </Link>
                        </motion.div>
                    </div>

                    <div className="lg:w-[45%] relative group">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="relative rounded-[3rem] overflow-hidden mt-20 shadow-2xl border border-white/5 bg-[#131313]"
                        >
                            <Image
                                src="/images/thakali.jpg"
                                alt="Authentic Thakali Experience"
                                width={900}
                                height={900}
                                className="object-cover group-hover:scale-105 transition-transform duration-1000 contrast-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        </motion.div>
                    </div>
                </div>
            </div>

        </section>
    );
}
