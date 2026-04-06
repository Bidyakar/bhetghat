'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const smallDishes = [
    { id: 1, image: "/images/momo.jpg", name: "Jhol Momo" },
    { id: 2, image: "/images/chickentaas.jpg", name: "Chicken Taas" },
    { id: 3, image: "/images/drumstick2.jpg", name: "Sekuwa" },
];

export default function SignatureSection() {
    return (
        <section className="py-24 bg-[#181818] relative overflow-hidden">






            <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-0">


                    <div className="lg:w-1/2 relative flex items-center justify-center min-h-[520px]">

                        <div
                            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 rounded-r-[3rem]"
                            style={{
                                width: '52%',
                                height: '82%',
                                background: 'linear-gradient(160deg, #F26522 0%, #ffb599 100%)',
                                zIndex: 0,
                            }}
                        />

                        <motion.div
                            initial={{ opacity: 0, x: -50, scale: 0.92 }}
                            whileInView={{ opacity: 1, x: 0, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                            className="relative z-10 rounded-full overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.6)] border-[10px] border-white/8 group"
                            style={{ width: 380, height: 380, flexShrink: 0 }}
                        >
                            <Image
                                src="/images/thakali.jpg"
                                alt="Signature Thakali Set"
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-[1200ms] contrast-105 brightness-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-transparent" />
                        </motion.div>


                        <div className="relative z-10 flex flex-col gap-5 ml-6">
                            {smallDishes.map((dish, index) => (
                                <motion.div
                                    key={dish.id}
                                    initial={{ opacity: 0, x: 40 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.25 + index * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                                    className="relative rounded-full overflow-hidden border-[5px] border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.55)] group/small cursor-pointer hover:scale-110 hover:border-[#F26522]/50 transition-all duration-500"
                                    style={{ width: 112, height: 112, flexShrink: 0 }}
                                >
                                    <Image
                                        src={dish.image}
                                        alt={dish.name}
                                        fill
                                        className="object-cover group-hover/small:scale-125 transition-transform duration-700 brightness-90 group-hover/small:brightness-110"
                                    />

                                    <div className="absolute inset-0 bg-[#F26522]/0 group-hover/small:bg-[#F26522]/20 transition-colors duration-400 flex items-end justify-center pb-2">
                                        <span className="text-white text-[10px] font-black tracking-wide opacity-0 group-hover/small:opacity-100 transition-opacity duration-300 drop-shadow-lg">
                                            {dish.name}
                                        </span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:w-1/2 pl-0 lg:pl-20 space-y-10 mt-16 lg:mt-0">


                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="space-y-5"
                        >
                            <h2
                                className="text-5xl md:text-6xl font-black leading-[1.0] tracking-tight text-white"
                                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                            >
                                Signature Culinary <br />
                                <span
                                    className="italic"
                                    style={{ color: '#F26522', fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                                >
                                    Masterpieces
                                </span>
                            </h2>


                        </motion.div>


                        <div className="space-y-6 max-w-xl">
                            <motion.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="text-zinc-300 text-lg leading-relaxed"
                                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                            >
                                At Bhetghat, our signature dishes are more than just meals — they are a tribute
                                to the rich heritage of the Himalayas. We blend time-honored recipes with
                                contemporary techniques to create an experience that transcends the ordinary.
                            </motion.p>

                            <motion.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.32 }}
                                className="text-zinc-500 text-lg leading-relaxed italic"
                                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                            >
                                From our hand-wrapped momos in sesame broth to the legendary Thakali feast
                                that has defined us for over three decades, every bite is a narrative of
                                flavor, tradition, and sacred hospitality.
                            </motion.p>
                        </div>


                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.44 }}
                            className="flex items-center gap-8 pt-2"
                        >
                            <Link href="/Menu">
                                <button
                                    className="bg-[#F26522] text-white border border-white/10 px-12 py-5 rounded-2xl font-bold text-lg hover:bg-[#F26522]/80 transition-all"
                                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                                >
                                    Explore Menu
                                </button>
                            </Link>
                            <Link href="/about">
                                <button className="bg-white/5 backdrop-blur-md text-white border border-white/10 px-12 py-5 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all">
                                    Our Heritage
                                </button>
                            </Link>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}