"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative font-headline font-extrabold h-screen flex items-center justify-center overflow-hidden pt-16">

            <div className="absolute inset-0">
                <img
                    src="/images/hero.png"
                    alt="Hero"
                    className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent"></div>
            </div>

            <div className="relative z-10 text-center max-w-4xl px-6">
                <span className="text-[#ffb599] font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
                    Est. 1998
                </span>

                <h1 className="text-5xl md:text-8xl font-headline font-extrabold text-white leading-none tracking-tighter mb-8">
                    Experience the <br />
                    <span className="text-[#f26422]">Authenticity</span> <br />
                    of Kathmandu
                </h1>

                <p className="text-lg text-gray-300 mb-10">
                    Journey through the flavors of the Himalayas.
                </p>

                <div className="flex gap-4 justify-center">
                    <button className="bg-orange-500 px-8 py-4 rounded-xl font-bold">
                        Explore Full Menu
                    </button>
                    <button className="border px-8 py-4 rounded-xl">
                        Our Story
                    </button>
                </div>
            </div>
        </section>
    );
}
