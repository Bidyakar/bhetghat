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
        <section className="py-12 sm:py-16 md:py-24 bg-[#0A0A0A] relative overflow-hidden">

            <div className="w-full max-w-[2200px] mx-auto px-6 lg:px-16 2xl:px-32 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-32">


                    <div className="lg:w-1/2 relative flex flex-col items-center justify-center min-h-[400px] sm:min-h-[480px] md:min-h-[500px]">

                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, delay: 0.2 }}
                            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 rounded-r-[3rem] hidden lg:block"
                            style={{
                                width: '52%',
                                height: '82%',
                                background: 'linear-gradient(160deg, #F26522 0%, #af370cff 100%)',
                                zIndex: 0,
                            }}
                        />

                        <motion.div
                            initial={{ opacity: 0, x: -50, scale: 0.92 }}
                            whileInView={{ opacity: 1, x: 0, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                            className="relative z-10 rounded-full overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.6)] border-[6px] sm:border-[10px] border-white/8 group w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] md:w-[380px] md:h-[380px]"
                        >
                            <Image
                                src="/images/thakali.jpg"
                                alt="Signature Thakali Set"
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-[1200ms] contrast-105 brightness-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-transparent" />
                        </motion.div>


                        <div className="absolute inset-0 z-20 pointer-events-none hidden md:block">
                            {smallDishes.map((dish, index) => {
                                const radius = 280;
                                const startAngle = -40;
                                const spread = 80;

                                const angle =
                                    (startAngle + (index / (smallDishes.length - 1)) * spread) *
                                    (Math.PI / 180);

                                const x = radius * Math.cos(angle);
                                const y = radius * Math.sin(angle);

                                return (
                                    <motion.div
                                        key={dish.id}
                                        initial={{ opacity: 0, scale: 0.7 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2 + index * 0.1 }}
                                        className="absolute rounded-full overflow-hidden border-[5px] border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.55)] group/small cursor-pointer pointer-events-auto hover:scale-110 hover:border-[#F26522]/50 transition-all duration-500"
                                        style={{
                                            width: 112,
                                            height: 112,
                                            left: `calc(50% + ${x}px - 56px)`,
                                            top: `calc(50% + ${y}px - 56px)`
                                        }}
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
                                );
                            })}
                        </div>
                        <div className="relative z-10 flex flex-row md:hidden justify-center gap-6 mt-12">
                            {smallDishes.map((dish, index) => (
                                <motion.div
                                    key={dish.id}
                                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        delay: 0.4 + index * 0.15,
                                        type: "spring",
                                        stiffness: 100
                                    }}
                                    className="relative rounded-full overflow-hidden border-[3px] border-white/10 shadow-[0_10px_25px_rgba(0,0,0,0.5)] group/small cursor-pointer active:scale-95 transition-transform duration-300"
                                    style={{ width: 80, height: 80, flexShrink: 0 }}
                                >
                                    <Image
                                        src={dish.image}
                                        alt={dish.name}
                                        fill
                                        className="object-cover brightness-90 contrast-110"
                                    />
                                    <div className="absolute inset-0 bg-[#F26522]/20 flex items-end justify-center pb-2">
                                        <span className="text-white text-[8px] font-black tracking-wide drop-shadow-md">
                                            {dish.name.split(' ')[0]}
                                        </span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:w-1/2 pl-0 lg:pl-10 2xl:pl-20 space-y-10 mt-16 lg:mt-0">


                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="space-y-5"
                        >
                            <h2
                                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-white leading-[0.95] tracking-tight"
                            >
                                Signature Culinary<br />
                                <span className="italic text-[#F26522]">Masterpieces.</span>
                            </h2>


                        </motion.div>


                        <div className="space-y-4 max-w-xl">
                            <motion.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="text-zinc-300 text-base sm:text-lg leading-relaxed"
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
                                className="text-zinc-500 text-base sm:text-lg leading-relaxed italic"
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
                            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 pt-2"
                        >
                            <Link href="/Menu" className="w-full sm:w-auto">
                                <button
                                    className="w-full bg-[#F26522] text-white px-10 md:px-12 py-4 md:py-5 rounded-2xl font-bold text-base md:text-lg shadow-[0_15px_40px_rgba(242,101,34,0.25)] hover:shadow-[0_15px_40px_rgba(242,101,34,0.45)] hover:-translate-y-1 transition-all duration-300 text-center"
                                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                                >
                                    Explore Menu
                                </button>
                            </Link>
                            <Link href="/about" className="w-full sm:w-auto">
                                <button className="w-full bg-white/5 backdrop-blur-md text-white border border-white/10 px-10 md:px-12 py-4 md:py-5 rounded-2xl font-bold text-base md:text-lg hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 shadow-xl text-center">
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