import React from "react";


export default function SignatureSection() {
    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex justify-between ">
                    <h2 className="text-4xl font-bold mb-8">Signature Dishes</h2>
                    <p className="text-on-surface-variant text-gray-400">The soul of Bhetghat, curated for the connoisseur.</p>
                    <div className="flex gap-4">
                        <button className="flex text-[#ffb599] items-center gap-2 text-primary hover:translate-x-1 transition">
                            View All
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-5 h-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M5 12h14M13 5l7 7-7 7"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <h5 className="text-2xl font-bold mb-4">Special Offer</h5>
                    <p className="text-lg text-gray-600 mb-4">Get 10% off on your first order</p>
                    <button className="bg-orange-500 px-8 py-4 rounded-xl font-bold">Order Now</button>
                </div>
            </div>
        </section>
    );
}