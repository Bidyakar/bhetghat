'use client';

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

const specialItems = [
    {
        id: 'jimbu-thakali-mutton',
        name: 'The Heritage Mutton Thakali',
        description: 'The definitive Bhetghat experience. Slow-cooked mutton curry tempered with wild Himalayan Jimbu, served on traditional handcrafted brass. Each element—from the sun-dried spinach to the stone-ground chutneys—is a tribute to the Mustang trails.',
        price: '1,050',
        image: '/images/thakali.jpg',
        category: 'Heritage Elite',
    },
    {
        id: 'nepali-fusion-pizza',
        name: 'Timur Spiced Fusion Pizza',
        description: 'Where Naples meets the Himalayas. Our slow-fermented sourdough crust carries the aromatic sting of Timur (Sichuan Pepper), layered with yak-milk cheese and sun-dried mountain buffalo. A courageous evolution of tradition.',
        price: '850',
        image: '/images/hero.jpg',
        category: 'Innovation',
    },
    {
        id: 'golden-chicken-thakali',
        name: 'Golden Chicken Thakali',
        description: 'A masterpiece of balance. Locally-sourced free-range chicken simmered in a velvet turmeric-based sauce. A dish that captures the golden hour over our hills, served with a palette of traditional seasonal accompaniments.',
        price: '850',
        image: '/images/thakali.jpg',
        category: 'Heritage Classic',
    }
];

export default function SpecialsPage() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <main
            ref={containerRef}
            className="bg-[#181818] text-white selection:bg-[#F26522] selection:text-white overflow-x-hidden"
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
                .item-number {
                    font-family: 'Cormorant Garamond', serif;
                    font-size: clamp(7rem, 15vw, 14rem);
                    font-weight: 300;
                    line-height: 1;
                    color: transparent;
                    -webkit-text-stroke: 1px rgba(242,101,34,0.15);
                }
            `}</style>

            <section className="relative min-h-screen grid grid-cols-1 lg:grid-cols-2 overflow-hidden">

                <div className="relative z-10 flex flex-col mb-10 justify-center gap-6 lg:gap-8 px-10 md:px-16 pt-36 pb-16 bg-[#181818]">


                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex items-center gap-4"
                    >
                        <div className="w-8 h-px bg-[#F26522]" />
                        <span className="font-syne text-[10px] tracking-[0.4em] uppercase text-[#F26522]">
                            Established in Chitwan
                        </span>
                        <div className="w-8 h-px bg-[#F26522]" />
                    </motion.div>


                    <div className="space-y-6">
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="font-syne text-[15px] tracking-[0.5em] uppercase text-white/30"
                        >
                            Our finest compositions
                        </motion.p>
                        <motion.h1
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="text-7xl md:text-8xl py-10 font-serif text-white leading-[1.1] tracking-tight"
                        >
                            The<br />
                            <em className="text-[#F26522]">Specimens</em>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="text-zinc-400 text-lg leading-relaxed max-w-xl">
                            One Thakali set. Balanced flavors. Rooted in the mountains. A complete harmony of tradition, taste, and culture.                        </motion.p>
                    </div>

                    <Link
                        href="/Menu"
                        className="group/btn flex items-center w-fit gap-3 px-6 py-3 border border-white/10 hover:border-[#F26522] hover:bg-[#F26522]/5 transition-all duration-500"
                    >
                        <span className="font-syne text-[9px] tracking-[0.3em] uppercase text-white/50 group-hover/btn:text-[#F26522] transition-colors">
                            full menu
                        </span>
                        <svg className="group-hover/btn:translate-x-1 transition-transform text-[#F26522]" width="12" height="8" viewBox="0 0 12 8" fill="none">
                            <path d="M1 4h10M8 1l3 3-3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>

                </div>


                <div className="relative flex items-center justify-center overflow-hidden" style={{ padding: "clamp(1.5rem, 4vw, 5rem)" }}>
                    <motion.div
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.4 }}
                        className="relative z-10 rounded-full overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.6)] border-[5px] border-[#F26522]/70 group w-full aspect-square" style={{ maxWidth: "clamp(280px, 38vw, 800px)" }}
                    >
                        <Image
                            src="/images/thakali.jpg"
                            alt="Bhetghat signature dish"
                            fill
                            className="object-cover  transition-transform duration-[2000ms] group-hover:scale-105"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#131313] via-[#0a0805]/10 to-transparent" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#131313] via-transparent to-transparent " />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1.2 }}
                            className="absolute bottom-[10%] right-[10%] w-20 h-20 md:w-28 md:h-28 rounded-full border border-[#F26522]/40 flex flex-col items-center justify-center bg-[#0a0805]/70 backdrop-blur-sm"
                        >
                            <span className="font-syne text-[8px] md:text-[10px] tracking-widest uppercase text-[#F26522]">From</span>
                            <span className="font-cormorant text-2xl md:text-4xl font-light text-white">850</span>
                            <span className="font-syne text-[8px] text-white/40">NPR</span>
                        </motion.div>
                    </motion.div>
                </div>
            </section>


            <section className="relative py-32 px-6 md:px-12 lg:px-24 ">


                <div className="space-y-0">
                    {specialItems.map((item, index) => (
                        <motion.article
                            key={item.id}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            className="relative group"
                        >

                            <div className="h-px bg-white/5 group-hover:bg-[#F26522]/30 transition-colors duration-700 ml-16" />

                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 py-16 lg:py-24 ml-16">


                                <div className="lg:col-span-2 flex flex-col items-start gap-8 pt-4">
                                    <div className="flex flex-col gap-1">
                                        <span className="font-syne text-[8px] tracking-[0.4em] uppercase text-[#F26522]/60">Specimen No.</span>
                                        <span className="font-cormorant text-9xl font-light text-white/10 group-hover:text-white/80 transition-all duration-700 select-none">
                                            0{index + 1} <span className="text-[10px] text-[#F26522]/30 group-hover:text-[#F26522]/60 transition-colors ml-1">/ 03</span>
                                        </span>
                                    </div>
                                </div>


                                <div className={`lg:col-span-4 ${index % 2 !== 0 ? 'lg:order-last' : ''}`}>
                                    <div className="relative aspect-[3/4] overflow-hidden bg-neutral-900">
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            fill
                                            className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                                        />

                                        <div className="absolute top-0 left-0 w-0 h-0 group-hover:w-16 group-hover:h-16 transition-all duration-700 overflow-hidden">
                                            <div className="absolute top-0 left-0 w-16 h-16 bg-[#F26522]" style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }} />
                                        </div>

                                        <div className="absolute bottom-4 left-4 bg-[#131313]/80 backdrop-blur-sm px-3 py-1.5 border border-white/10">
                                            <span className="font-syne text-[9px] tracking-[0.3em] uppercase text-[#F26522]">
                                                {item.category}
                                            </span>
                                        </div>
                                    </div>
                                </div>


                                <div className={`lg:col-span-5 flex flex-col justify-center gap-8 px-0 lg:px-12 ${index % 2 !== 0 ? 'lg:col-start-3' : ''}`}>
                                    <div className="space-y-5">
                                        <h2 className="text-5xl md:text-6xl py-10 font-serif text-white leading-[1.1] tracking-tight group-hover:text-[#F26522] transition-colors duration-500 ">
                                            <em>{item.name}</em>
                                        </h2>
                                        <div className="w-10 h-px bg-[#F26522] group-hover:w-100 transition-all duration-700" />
                                        <p className="text-zinc-400 text-lg leading-relaxed max-w-xl">
                                            &ldquo;{item.description}&rdquo;
                                        </p>
                                    </div>

                                    <div className="flex items-center justify-between pt-6 border-t border-white/5">
                                        <div className="space-y-1">
                                            <span className="font-syne text-[9px] tracking-[0.4em] uppercase text-white/25 block">Price</span>
                                            <span className="font-cormorant text-4xl font-light text-[#F26522]">
                                                Rs. {item.price}
                                            </span>
                                        </div>

                                        <Link
                                            href="/Menu"
                                            className="group/btn flex items-center gap-3 px-6 py-3 border border-white/10 hover:border-[#F26522] hover:bg-[#F26522]/5 transition-all duration-500"
                                        >
                                            <span className="font-syne text-[9px] tracking-[0.3em] uppercase text-white/50 group-hover/btn:text-[#F26522] transition-colors">
                                                Visit Menu
                                            </span>
                                            <svg className="group-hover/btn:translate-x-1 transition-transform text-[#F26522]" width="12" height="8" viewBox="0 0 12 8" fill="none">
                                                <path d="M1 4h10M8 1l3 3-3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </motion.article>
                    ))}


                    <div className="h-px bg-white/5 ml-16" />
                </div>
            </section>


            <section className="relative bg-[#131313] text-gray-200 py-32 px-6 md:px-12 lg:px-24 overflow-hidden">

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center w-full max-w-[2200px] mx-auto px-6 lg:px-16 2xl:px-32">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2 }}
                        className="lg:col-span-5 relative aspect-[4/5] bg-neutral-200 overflow-hidden shadow-2xl"
                    >
                        <Image
                            src="https://images.pexels.com/photos/3814446/pexels-photo-3814446.jpeg"
                            alt="Executive Chef Pasang Sherpa"
                            fill
                            className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#131313] to-transparent" />
                        <div className="absolute bottom-10 left-10 text-white flex flex-col gap-1">
                            <span className="font-syne text-[8px] tracking-[0.4em] uppercase text-[#F26522]">Executive Chef</span>
                            <h3 className="font-cormorant text-4xl font-light italic">Pasang Sherpa</h3>
                        </div>
                    </motion.div>

                    <div className="lg:col-span-7 flex flex-col gap-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <span className="text-6xl md:text-7xl font-serif text-white leading-[1.1] tracking-tight">The Craftsman</span>
                            <h2 className="text-6xl md:text-7xl font-serif text-white leading-[1.1] tracking-tight">
                                Curating the<br />
                                <em className="text-[#F26522]">Soul of Kathmandu</em>
                            </h2>
                            <p className="font-cormorant text-gray/60 text-xl leading-relaxed max-w-xl italic">
                                &ldquo;Cuisine is a bridge across time. My mission at Bhetghat is to preserve the rugged honesty of Himalayan seasoning while celebrating the sophisticated palette of modern Kathmandu.&rdquo;
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t border-gray/10"
                        >
                            <div className="space-y-3">
                                <h4 className="font-syne text-[9px] tracking-[0.3em] uppercase text-[#F26522]">The Heritage</h4>
                                <p className="text-gray/70 text-sm leading-relaxed">
                                    Born in the foothills of the Everest region, Chef Pasang brings three decades of ancestral knowledge in spice-handling and stone-grinding techniques.
                                </p>
                            </div>
                            <div className="space-y-3">
                                <h4 className="font-syne text-[9px] tracking-[0.3em] uppercase text-[#F26522]">The Philosophy</h4>
                                <p className="text-gray/70 text-sm leading-relaxed">
                                    Pasang believes in the "Third Element"—where the fire, the clay, and the spirit of the chef converge to create more than just a meal.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                            className="pt-4"
                        >
                            <p className="font-signature text-5xl text-[#F26522] opacity-80" style={{ fontFamily: "Alex Brush, cursive" }}>
                                Pasang Sherpa
                            </p>
                            <span className="font-syne text-[8px] tracking-[0.2em] uppercase text-[#181818]/30 block -mt-2">Founder & Curator</span>
                        </motion.div>
                    </div>
                </div>
            </section>


            <section className="relative min-h-[50vh] flex flex-col items-center justify-center text-center overflow-hidden px-6 py-32">

                <div className="absolute inset-0 z-0">
                    <Image src="/images/thakali.jpg" alt="" fill className="object-cover opacity-[0.06]" />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0a0805] via-transparent to-[##181818]" />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="relative z-10 space-y-10 max-w-4xl"
                >
                    <p className="font-syne text-[10px] tracking-[0.5em] uppercase text-[#F26522]">
                        Reserve Your Experience
                    </p>

                    <h2 className="font-cormorant font-light text-6xl md:text-8xl xl:text-9xl leading-[0.88] tracking-tight">
                        Experience<br />
                        <em className="text-[#F26522]">the Evolution</em>
                    </h2>

                    <p className="font-cormorant italic text-white/40 text-xl max-w-md mx-auto leading-relaxed">
                        These selections represent the very best of Bhetghat — book your table to enjoy exclusive flavors in authentic Himalayan ambience.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                        <Link
                            href="/contact"
                            className="group flex items-center gap-4 bg-[#F26522] text-white px-10 py-5 font-syne text-[10px] tracking-[0.3em] uppercase hover:bg-[#d9561e] transition-colors duration-300"
                        >
                            Book a Table
                            <svg className="group-hover:translate-x-1 transition-transform" width="16" height="10" viewBox="0 0 16 10" fill="none">
                                <path d="M1 5h14M11 1l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </Link>
                        <Link
                            href="/Menu"
                            className="flex items-center gap-4 border border-white/10 text-white/70 hover:text-white hover:border-white/30 px-10 py-5 font-syne text-[10px] tracking-[0.3em] uppercase transition-all duration-300"
                        >
                            Explore Full Menu
                        </Link>
                    </div>
                </motion.div>

                <div
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 font-cormorant font-light text-[15vw] leading-none select-none pointer-events-none whitespace-nowrap"
                    style={{ color: 'transparent', WebkitTextStroke: '1px #181818' }}
                >
                    BHETGHAT
                </div>
            </section>
        </main>
    );
}