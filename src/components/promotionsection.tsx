'use client';

import Image from "next/image";
import { motion } from "framer-motion";

export default function PromoSection() {
    return (
        <section className="py-20 px-6 lg:px-16 2xl:px-32 min-h-[70vh] w-full max-w-[2500px] mx-auto bg-[#131313]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-auto">





                <div className="bg-white rounded-xl p-10 flex flex-col justify-center items-start relative overflow-hidden group">
                    <div className="relative z-10">
                        <span className="bg-[#F26522] text-white px-3 py-1 rounded-full text-xs font-bold mb-4 inline-block">
                            LIMITED TIME
                        </span>
                        <h2 className="text-3xl md:text-4xl font-headline font-black text-background mb-4">
                            First Order <br />
                            Special - 10% OFF
                        </h2>
                        <p className="text-background/70 mb-8 max-w-xs">
                            Enjoy 10% off on your first home delivery through our mobile
                            app.
                        </p>
                        <button className="bg-[#F26522] text-white px-6 py-3 rounded-xl font-bold shadow-lg hover:bg-on-primary-container transition-colors">
                            Claim Now
                        </button>
                    </div>
                    <div className="absolute -right-1 -bottom-1 opacity-10 group-hover:scale-110 transition-transform duration-500 pointer-events-none">
                        <span className="font-headline text-[15rem] text-[#F26522] leading-none">
                            %
                        </span>
                    </div>
                </div>


                <div className="bg-surface-container-low rounded-xl p-10 flex flex-col justify-center items-start relative overflow-hidden border border-outline-variant/10">
                    <div className="relative z-10">
                        <span className="text-[#F26522] font-bold mb-4 inline-block">
                            LUNCH COMBO
                        </span>
                        <h2 className="text-3xl md:text-4xl font-headline font-black text-white mb-4">
                            The Thakali <br />
                            Experience
                        </h2>
                        <p className="text-on-surface-variant mb-8 max-w-xs">
                            Traditional mountain lunch served with authentic spices and local
                            textures.
                        </p>
                        <button className="border-2 border-primary text-primary px-6 py-3 rounded-xl font-bold hover:bg-primary/10 transition-colors">
                            Explore Gallery
                        </button>
                    </div>
                    <div className="absolute right-0 top-0 w-1/2 h-full">
                        <Image
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuApJ_4eLYZoYIRvL1YSLcleo3JNtuJ_X0LKmlkSsZdBi3xuCcbS4Ncq2fHghSJVV7a81Ev_rcJFSYDFz4jLZqHlGUYY8xTQZEArFLP0kTC6u-d_cK7pQPKnK7WP67bEhOHiPpPWM27BACSMAvws6RVz2IUCS0G4fzFjCZHZ5ikGmYFYnl4nfzSYG902iiU3ddnaRf39hM-ugSjM5FhCkF9S3gWMX3UkifUlPh4KLzXbscwmGBOBDEcHK_M_S2143xMHIpU0sDIIK5A"
                            alt="Top view of a traditional Nepalese Thakali set on a copper plate with various bowls of curry, dal, and pickles"
                            fill
                            className="object-cover grayscale brightness-50 contrast-125"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
