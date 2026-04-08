'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const teaserImages = [
    { src: "/images/thakali.jpg", span: "row-span-2 col-span-2" },
    { src: "/images/momo.jpg", span: "row-span-1 col-span-1" },
    { src: "/images/chickentaas.jpg", span: "row-span-1 col-span-1" },
];

export default function GalleryTeaser() {
    return (
        <section className="bg-[#131313] py-20 sm:py-28 md:py-40 px-4 sm:px-8 overflow-hidden relative">
            <div className="w-full max-w-[2200px] mx-auto px-6 lg:px-16 2xl:px-32 relative z-10">
                <div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-32 items-center">
                    <div className="lg:w-[55%] grid grid-cols-2 gap-3 sm:gap-6 h-[350px] sm:h-[450px] md:h-[600px] lg:h-[600px] w-full">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="relative rounded-2xl sm:rounded-[3rem] overflow-hidden col-span-1 row-span-2 border border-white/5"
                        >
                            <Image
                                src="/images/thakali.jpg"
                                alt="Visual Story 1"
                                fill
                                className="object-cover hover:scale-110 transition-transform duration-1000 contrast-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.1 }}
                            className="relative rounded-2xl sm:rounded-[3rem] overflow-hidden col-span-1 row-span-1 border border-white/5"
                        >
                            <Image
                                src="/images/momo.jpg"
                                alt="Visual Story 2"
                                fill
                                className="object-cover hover:scale-110 transition-transform duration-1000 contrast-110"
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="relative rounded-2xl sm:rounded-[3rem] overflow-hidden col-span-1 row-span-1 border border-white/5"
                        >
                            <Image
                                src="/images/chickentaas.jpg"
                                alt="Visual Story 3"
                                fill
                                className="object-cover hover:scale-110 transition-transform duration-1000 contrast-110"
                            />
                        </motion.div>
                    </div>

                    <div className="lg:w-[30%] space-y-10 mb-40">
                        <div className="space-y-6 ">
                            <motion.span
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="text-[#F26522] font-black tracking-[0.4em] uppercase text-xs block"
                            >
                                Our Portfolio
                            </motion.span>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-white leading-[0.95] tracking-tight"
                            >
                                A Visual <br />
                                <span className="italic text-[#F26522]">Narrative.</span>
                            </motion.h2>
                        </div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-zinc-400 text-base sm:text-lg leading-relaxed max-w-sm"
                        >
                            Capture the essence of the Himalayas through our lens. From vibrant spices to
                            warm heritage interiors, discover Bhetghat's soul.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <Link href="/gallery" className="inline-flex items-center gap-6 group">
                                <span className="text-white font-bold text-lg border-b-2 border-white/10 pb-1 group-hover:border-[#F26522] group-hover:text-[#F26522] transition-colors font-sans">
                                    Explore Every Moment
                                </span>
                                <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#F26522] group-hover:border-transparent transition-all shadow-xl">
                                    <span className="material-symbols-outlined text-white text-2xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                                        arrow_outward
                                    </span>
                                </div>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Background elements */}
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#F26522]/5 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2" />
        </section>
    );
}
