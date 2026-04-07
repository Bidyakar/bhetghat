import Image from "next/image";

export default function DeliverySection() {
    return (
        <section className="bg-[#2a2a2a] max-w-xl 2xl:max-w-[1600px] mx-auto rounded-3xl p-1  md:p-12 overflow-hidden relative">

            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
                <div className="p-8 md:p-0">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-headline font-black text-white mb-4 sm:mb-6">
                        Bhetghat <br />
                        at your door
                    </h2>
                    <p className="text-on-surface-variant text-base sm:text-lg mb-6 sm:mb-10">
                        We bring the authentic taste of Kathmandu directly to your dining
                        room. Fast, fresh, and contact-free delivery across the city.
                    </p>
                    <div className="space-y-6 mb-10">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-primary-container/20 flex items-center justify-center text-primary-container">
                                <span className="material-symbols-outlined">speed</span>
                            </div>
                            <div>
                                <h4 className="font-bold text-white">Rapid Service</h4>
                                <p className="text-sm text-on-surface-variant">
                                    Avg. delivery time 30-45 minutes
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-primary-container/20 flex items-center justify-center text-primary-container">
                                <span className="material-symbols-outlined">
                                    delivery_dining
                                </span>
                            </div>
                            <div>
                                <h4 className="font-bold text-white">Free Delivery</h4>
                                <p className="text-sm text-on-surface-variant">
                                    On all orders above Rs.5000
                                </p>
                            </div>
                        </div>
                    </div>
                    <button className="smoldering-gradient bg-[#F26522] text-on-primary-fixed px-6 sm:px-10 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:shadow-[0_0_20px_rgba(242,101,34,0.3)] transition-all w-full sm:w-auto text-center">
                        Order for Delivery
                    </button>
                </div>

                <div className="relative h-full min-h-[280px] sm:min-h-[400px]">
                    <Image
                        src="/images/delivery.jpg"
                        alt="Delivery boy in a scooter to deliver food"
                        fill
                        className="object-cover rounded-2xl"
                    />
                    <div className="absolute -bottom-3 -left-3 sm:-bottom-6 sm:-left-6 glass-panel bg-[#131313]/80 backdrop-blur-md p-4 sm:p-6 rounded-xl sm:rounded-2xl">
                        <div className="flex items-center gap-4">
                            <div className="flex -space-x-4">
                                <div className="w-10 h-10 rounded-full border-2 border-surface-container-high bg-gray-500" />
                                <div className="w-10 h-10 rounded-full border-2 border-surface-container-high bg-gray-600" />
                                <div className="w-10 h-10 rounded-full border-2 border-surface-container-high bg-gray-700" />
                            </div>
                            <div className="text-sm ">
                                <p className="font-bold text-white">2k+ Deliveries</p>
                                <p className="text-on-surface-variant">Last 30 days</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}
