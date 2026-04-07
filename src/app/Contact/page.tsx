'use client';

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

const contactInfo = [
    {
        id: "01",
        label: "Address",
        value: "Bhetghat Restaurant, Kathmandu, Nepal",
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
            </svg>
        ),
    },
    {
        id: "02",
        label: "Phone",
        value: "+977 9800000000",
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
        ),
    },
    {
        id: "03",
        label: "Email",
        value: "info@bhetghat.com",
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
            </svg>
        ),
    },
    {
        id: "04",
        label: "Hours",
        value: "Sun – Sat: 10:00 AM – 10:00 PM",
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
            </svg>
        ),
    },
];

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 4000);
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <main className="bg-[#131313] text-white selection:bg-[#F26522] selection:text-white overflow-x-hidden min-h-screen pt-24">
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,600;1,300;1,600&family=Syne:wght@400;700;800&display=swap');
                .font-cormorant { font-family: 'Cormorant Garamond', serif; }
                .font-syne { font-family: 'Syne', sans-serif; }
            `}</style>

            <section className="relative px-6 md:px-12 lg:px-24 pt-32 pb-24 border-b border-white/5">
                <div className="w-full max-w-[2200px] mx-auto px-6 lg:px-16 2xl:px-32">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-px bg-[#F26522]" />
                            <span className="font-syne text-[10px] tracking-[0.5em] uppercase text-[#F26522]">Get In Touch</span>
                            <div className="w-12 h-px bg-[#F26522]" />
                        </div>
                        <h1 className="text-7xl md:text-8xl font-serif text-white leading-[1.1] tracking-tight">
                            Find
                            <em className="text-[#F26522] italic">Us</em>
                        </h1>
                        <p className="text-zinc-400 text-lg leading-relaxed max-w-xl">
                            Whether you want to reserve a table, inquire about catering, or simply share a thought — we'd love to hear from you.
                        </p>
                    </motion.div>
                </div>

                {/* Vertical Text */}
                <div className="absolute right-12 top-1/2 -translate-y-1/2 hidden xl:block">
                    <span className="font-syne text-[10px] tracking-[1em] uppercase text-white/10 [writing-mode:vertical-rl]">
                        Kathmandu / Nepal
                    </span>
                </div>
            </section>

            {/* ── GOOGLE MAP (FULL WIDTH) ── */}
            <section className="relative w-full h-[450px] md:h-[550px] border-b border-white/5 overflow-hidden">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.456!2d85.324!3d27.717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDQzJzAxLjIiTiA4NcKwMTknMjYuNCJF!5e0!3m2!1sen!2snp!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: 'grayscale(0.6) contrast(1.1) brightness(0.7)' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Bhetghat Restaurant Location"
                />
                {/* Gradient overlay (top and bottom) to blend map into the dark theme */}
                <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#131313] to-transparent pointer-events-none z-10" />
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#131313] to-transparent pointer-events-none z-10" />

                {/* Floating Location Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="absolute bottom-12 left-6 md:left-12 z-20 bg-[#0A0A0A]/90 backdrop-blur-xl border border-white/10 px-6 py-4 flex items-center gap-4"
                >
                    <div className="w-10 h-10 rounded-full bg-[#F26522]/10 border border-[#F26522]/30 flex items-center justify-center text-[#F26522]">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                            <circle cx="12" cy="10" r="3" />
                        </svg>
                    </div>
                    <div>
                        <span className="font-syne text-[8px] tracking-[0.4em] uppercase text-[#F26522] block">Location</span>
                        <span className="text-white text-sm font-light">Kathmandu, Nepal</span>
                    </div>
                </motion.div>
            </section>

            {/* ── CONTACT DETAILS + FORM ── */}
            <section className="relative py-32 px-6 md:px-12 lg:px-24">
                <div className="w-full max-w-[2200px] mx-auto px-6 lg:px-16 2xl:px-32 grid grid-cols-1 lg:grid-cols-2 gap-24">

                    {/* Left: Contact Info */}
                    <div className="space-y-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <span className="font-syne text-[10px] tracking-[0.5em] uppercase text-[#F26522]">Contact Details</span>
                            <h2 className="text-5xl md:text-6xl font-serif text-white leading-[1.1] tracking-tight">
                                Visit Our <br />
                                <em className="italic text-[#F26522]">Restaurant</em>
                            </h2>
                            <div className="w-12 h-px bg-[#F26522]/40" />
                        </motion.div>

                        <div className="space-y-10">
                            {contactInfo.map((item, index) => (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1, duration: 0.6 }}
                                    className="group flex items-start gap-6 border-b border-white/5 pb-8 hover:border-[#F26522] transition-colors duration-500 group-hover:w-100 transition-all duration-700"
                                >
                                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/40 group-hover:text-[#F26522] group-hover:border-[#F26522]/40 transition-all duration-500 shrink-0 mt-1">
                                        {item.icon}
                                    </div>
                                    <div className="space-y-1">
                                        <span className="font-syne text-[9px] tracking-[0.4em] uppercase text-[#F26522]/60 block">
                                            {item.label}
                                        </span>
                                        <p className="text-white/80 text-lg font-light group-hover:text-white transition-colors">
                                            {item.value}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="space-y-4"
                        >
                            <span className="font-syne text-[9px] tracking-[0.4em] uppercase text-white/30">Follow Us</span>
                            <div className="flex gap-4">
                                <Link
                                    href="https://www.facebook.com/profile.php?id=100094227939280"
                                    target="_blank"
                                    className="w-12 h-12 border border-white/10 flex items-center justify-center text-white/40 hover:text-[#F26522] hover:border-[#F26522]/40 transition-all duration-300"
                                >
                                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                        <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978 1.62 0 3.33.19 3.33.19v3.656h-1.877c-1.518 0-1.99.943-1.99 1.908v1.804h4.133l-.66 3.667h-3.473v7.98H9.101Z" />
                                    </svg>
                                </Link>
                                <Link
                                    href="https://www.instagram.com/bhetghat_restro/"
                                    target="_blank"
                                    className="w-12 h-12 border border-white/10 flex items-center justify-center text-white/40 hover:text-[#F26522] hover:border-[#F26522]/40 transition-all duration-300"
                                >
                                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                    </svg>
                                </Link>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right: Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="border border-white/5 bg-white/[0.02] p-10 md:p-14 space-y-10">
                            <div className="space-y-4">
                                <span className="font-syne text-[10px] tracking-[0.5em] uppercase text-[#F26522]">Send a Message</span>
                                <h3 className="text-3xl md:text-4xl font-serif text-white leading-tight">
                                    We&apos;d Love to <em className="italic text-[#F26522]">Hear</em> From You
                                </h3>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-8">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="font-syne text-[9px] tracking-[0.3em] uppercase text-white/30 block">
                                            Your Name
                                        </label>
                                        <input
                                            name="name"
                                            type="text"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            placeholder="John Doe"
                                            className="w-full bg-transparent border-b border-white/10 focus:border-[#F26522] outline-none py-3 text-white placeholder:text-white/15 transition-colors duration-300 text-sm"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="font-syne text-[9px] tracking-[0.3em] uppercase text-white/30 block">
                                            Email Address
                                        </label>
                                        <input
                                            name="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            placeholder="john@example.com"
                                            className="w-full bg-transparent border-b border-white/10 focus:border-[#F26522] outline-none py-3 text-white placeholder:text-white/15 transition-colors duration-300 text-sm"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="font-syne text-[9px] tracking-[0.3em] uppercase text-white/30 block">
                                        Subject
                                    </label>
                                    <input
                                        name="subject"
                                        type="text"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        placeholder="Reservation / Catering / General Inquiry"
                                        className="w-full bg-transparent border-b border-white/10 focus:border-[#F26522] outline-none py-3 text-white placeholder:text-white/15 transition-colors duration-300 text-sm"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="font-syne text-[9px] tracking-[0.3em] uppercase text-white/30 block">
                                        Message
                                    </label>
                                    <textarea
                                        name="message"
                                        rows={5}
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        placeholder="Tell us what's on your mind..."
                                        className="w-full bg-transparent border-b border-white/10 focus:border-[#F26522] outline-none py-3 text-white placeholder:text-white/15 transition-colors duration-300 text-sm resize-none"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="group flex items-center gap-3 bg-[#F26522] text-white px-10 py-5 font-syne text-[10px] tracking-[0.3em] uppercase hover:bg-[#d9561e] transition-all duration-300 w-full justify-center"
                                >
                                    {submitted ? 'Message Sent ✓' : 'Send Message'}
                                    {!submitted && (
                                        <svg className="group-hover:translate-x-1 transition-transform" width="16" height="10" viewBox="0 0 16 10" fill="none">
                                            <path d="M1 5h14M11 1l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    )}
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ── CLOSING CTA STRIP ── */}
            <section className="border-t border-white/5 py-24 px-6">
                <div className="w-full max-w-[2200px] mx-auto px-6 lg:px-16 2xl:px-32 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="space-y-2">
                        <span className="font-syne text-[9px] tracking-[0.4em] uppercase text-[#F26522]">Reservations</span>
                        <h3 className="text-3xl md:text-4xl font-serif text-white">
                            Prefer to call? <em className="italic text-white/50">We&apos;re here.</em>
                        </h3>
                    </div>
                    <Link
                        href="tel:+9779800000000"
                        className="group flex items-center gap-4 border border-white/10 hover:border-[#F26522]/40 px-8 py-5 transition-all duration-300"
                    >
                        <div className="w-10 h-10 rounded-full border border-[#F26522]/30 flex items-center justify-center text-[#F26522]">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                            </svg>
                        </div>
                        <div>
                            <span className="font-syne text-[8px] tracking-[0.3em] uppercase text-white/30 block">Direct Line</span>
                            <span className="text-white text-lg font-light group-hover:text-[#F26522] transition-colors">+977 9800000000</span>
                        </div>
                    </Link>
                </div>
            </section>
        </main>
    );
}
