'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

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
        id: 1,
        title: "Pure Authenticity",
        description: "We never compromise on the traditional methods and hand-ground spices that define our mountain cuisine.",
        icon: "verified"
    },
    {
        id: 2,
        title: "Sacred Hospitality",
        description: "Guests are treated as family, in accordance with the age-old mountain traditions of 'Atithi Devo Bhava'.",
        icon: "handshake"
    },
    {
        id: 3,
        title: "Uncompromising Quality",
        description: "Only the freshest locally sourced ingredients make it into our signature heritage dishes.",
        icon: "stars"
    }
];

export default function AboutPage() {
    return (
        <main className="bg-[#0e0e0e] min-h-screen text-white pt-24 overflow-hidden">
            {/* Cinematic Hero Section */}
            <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjv3MBPQM-RUYDOzGZDgr9uTiByPZdH8VCN4A8QrOs7nSIBXKINPnAt7zNfl4XCtbcQw_ozPewPA7WDcEPyOSeB-8vx082JPbPhpB1t0jI96W530DA3ZXaLlIcStjx9rgB_U081obmucKM5eSHdMCdiI2VfER_mcO5HQ2bMiYprdSDhW6gJBSH2d1UrysoQqFriO_1hhA8TzkPFGq0wf1Uu9-wiRlTdj6w7jxtEef9ylDHn6HgaDuMj9-52QGSFj37jfIqBAnluxs"
                        alt="Cinematic Himalayan peaks shrouded in mist"
                        fill
                        className="object-cover opacity-40 grayscale contrast-125 saturate-0"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0e0e0e] via-transparent to-[#0e0e0e]" />
                </div>
                <div className="relative z-10 text-center max-w-5xl px-6 space-y-8">
                    <motion.span 
                        initial={{ opacity: 0, letterSpacing: "0.5em" }}
                        animate={{ opacity: 1, letterSpacing: "0.2em" }}
                        className="text-[#F26522] font-black uppercase text-xs sm:text-sm block"
                    >
                        Our Sacred Legacy
                    </motion.span>
                    <motion.h1 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-6xl md:text-8xl lg:text-9xl font-serif leading-[0.95] tracking-tighter"
                    >
                        A Heritage of <br />
                        <span className="italic text-[#F26522]">Excellence.</span>
                    </motion.h1>
                </div>
            </section>

            {/* Editorial Story Section */}
            <section className="py-40 px-8 max-w-[1400px] mx-auto space-y-64">
                {storySections.map((section, index) => (
                    <div 
                        key={section.year}
                        className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-24`}
                    >
                        <div className="lg:w-1/2 space-y-10">
                            <motion.div
                                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="space-y-6"
                            >
                                <span className="text-[#F26522] font-serif italic text-8xl md:text-9xl opacity-20 block leading-none">
                                    {section.year}
                                </span>
                                <h2 className="text-5xl md:text-6xl font-serif text-white tracking-tight leading-tight">
                                    {section.title}
                                </h2>
                                <p className="text-zinc-400 text-xl leading-relaxed max-w-xl italic">
                                    &ldquo;{section.content}&rdquo;
                                </p>
                            </motion.div>
                        </div>
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="lg:w-1/2 relative h-[600px] w-full rounded-[4rem] overflow-hidden shadow-3xl group border border-white/5 bg-[#151515]"
                        >
                            <Image
                                src={section.image}
                                alt={section.alt}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-[2000ms] contrast-110 grayscale group-hover:grayscale-0 duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        </motion.div>
                    </div>
                ))}
            </section>

            {/* Core Values Section */}
            <section className="py-40 bg-[#121212] relative overflow-hidden border-y border-white/5">
                <div className="max-w-7xl mx-auto px-8 relative z-10">
                    <div className="text-center mb-32 space-y-6">
                        <motion.span 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-[#F26522] font-black tracking-[0.4em] uppercase text-xs block"
                        >
                            The Foundation
                        </motion.span>
                        <h2 className="text-6xl md:text-7xl font-serif text-white tracking-tight">
                            The Spirit of <span className="italic text-[#F26522]">Bhetghat</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {values.map((value, index) => (
                            <motion.div 
                                key={value.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="p-12 rounded-[3.5rem] bg-white/5 border border-white/10 space-y-8 hover:bg-white/[0.08] transition-all group hover:-translate-y-2 shadow-2xl"
                            >
                                <div className="w-20 h-20 rounded-[2rem] bg-[#F26522]/10 flex items-center justify-center text-[#F26522] group-hover:bg-[#F26522] group-hover:text-white transition-all shadow-xl">
                                    <span className="material-symbols-outlined text-4xl">{value.icon}</span>
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-3xl font-serif text-white">{value.title}</h3>
                                    <p className="text-zinc-500 leading-relaxed italic text-lg">
                                        {value.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
                
                {/* Background Art */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-[#F26522]/5 rounded-full blur-[200px] pointer-events-none" />
            </section>

            {/* Premium CTA Section */}
            <section className="py-40 px-8">
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="max-w-5xl mx-auto text-center space-y-12 p-16 md:p-24 rounded-[4.5rem] bg-[#151515] border border-white/5 relative overflow-hidden shadow-3xl"
                >
                    <div className="relative z-10 space-y-10">
                        <h2 className="text-5xl md:text-7xl font-serif text-white leading-tight tracking-tight">
                            Experience the <br />
                            Sacred <span className="italic text-[#F26522]">Heritage.</span>
                        </h2>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-8 pt-4">
                            <Link href="/Menu">
                                <button className="bg-[#F26522] text-white px-14 py-6 rounded-2xl font-bold text-xl shadow-2xl shadow-[#F26522]/20 hover:shadow-[#F26522]/40 hover:-translate-y-1 transition-all">
                                    Explore Menu
                                </button>
                            </Link>
                            <Link href="/">
                                <button className="bg-white/5 border border-white/10 text-white px-14 py-6 rounded-2xl font-bold text-xl hover:bg-white/10 transition-all">
                                    Back to Home
                                </button>
                            </Link>
                        </div>
                    </div>
                    {/* Background Art */}
                    <div className="absolute -bottom-24 -right-24 w-[500px] h-[500px] bg-[#F26522]/10 rounded-full blur-[150px] opacity-40 pointer-events-none" />
                </motion.div>
            </section>
        </main>
    );
}
