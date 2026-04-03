import React from "react";

export default function PromotionSection() {
    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-4xl font-bold mb-8">Promotions</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <h5 className="text-2xl font-bold mb-4">Special Offer</h5>
                    <p className="text-lg text-gray-600 mb-4">Get 10% off on your first order</p>
                    <button className="bg-orange-500 px-8 py-4 rounded-xl font-bold">Order Now</button>
                </div>
            </div>
        </section>
    );
}