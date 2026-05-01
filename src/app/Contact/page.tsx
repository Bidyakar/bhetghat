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
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
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
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
        ),
    },
    {
        id: "03",
        label: "Email",
        value: "info@bhetghat.com",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
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
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
            </svg>
        ),
    },
];

const socialLinks = [
    { 
        name: "Facebook", 
        url: "https://www.facebook.com/profile.php?id=100094227939280",
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978 1.62 0 3.33.19 3.33.19v3.656h-1.877c-1.518 0-1.99.943-1.99 1.908v1.804h4.133l-.66 3.667h-3.473v7.98H9.101Z" />
            </svg>
        )
    },
    { 
        name: "Instagram", 
        url: "https://www.instagram.com/bhetghat_restro/",
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
        )
    },
    { 
        name: "Twitter", 
        url: "https://twitter.com",
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
            </svg>
        )
    }
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
        <main className="bg-[#0A0A0A] text-white selection:bg-[#F26522] selection:text-white min-h-screen pt-32 pb-24 overflow-hidden">
            {/* Background Texture */}
            <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')]" />
            </div>

            <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
                
                {/* ── HEADER SECTION ── */}
                <div className="flex flex-col items-center text-center mb-24 space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="space-y-6 w-full max-w-4xl"
                    >
                        <div className="flex items-center justify-center gap-4">
                            <div className="w-8 h-px bg-[#F26522]" />
                            <span className="font-syne text-[10px] tracking-[0.5em] uppercase text-[#F26522] font-bold">Get In Touch</span>
                            <div className="w-8 h-px bg-[#F26522]" />
                        </div>
                        <h1 className="text-5xl md:text-8xl font-serif text-white leading-[1.1] md:leading-[0.95] tracking-tight">
                            Connect <br />
                            <span className="text-[#F26522] italic">With Us</span>
                        </h1>
                        <p className="text-zinc-500 text-lg md:text-xl font-light leading-relaxed italic border-x border-white/5 px-10 max-w-2xl mx-auto">
                            &quot;A meal is a conversation shared. We are here to make yours unforgettable.&quot;
                        </p>
                    </motion.div>
                </div>

                {/* ── MAP & FORM GRID (Equal height) ── */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch mb-32">
                    
                    {/* Left: Map */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-5 relative group"
                    >
                        <div className="relative h-[400px] lg:h-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-zinc-900 min-h-[400px]">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.456!2d85.324!3d27.717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDQzJzAxLjIiTiA4NcKwMTknMjYuNCJF!5e0!3m2!1sen!2snp!4v1234567890"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Bhetghat Restaurant Location"
                            />
                        </div>
                    </motion.div>

                    {/* Right: Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-7"
                    >
                        <div className="h-full bg-zinc-900/40 backdrop-blur-3xl border border-white/5 p-8 md:p-12 lg:p-16 rounded-[2rem] relative overflow-hidden flex flex-col justify-center">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#F26522]/5 blur-[100px] -translate-y-1/2 translate-x-1/2" />
                            
                            <div className="relative z-10 space-y-10">
                                <div className="space-y-4">
                                    <h2 className="text-3xl md:text-4xl font-serif leading-tight">
                                        Drop us a <em className="text-[#F26522] italic">Line</em>
                                    </h2>
                                    <p className="text-zinc-500 font-light text-sm">
                                        Expected response time: within 24 hours.
                                    </p>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-8">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="relative group">
                                            <input
                                                name="name"
                                                type="text"
                                                required
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full bg-transparent border-b border-white/10 pt-6 pb-3 outline-none focus:border-[#F26522] transition-colors peer text-base font-light"
                                                placeholder=" "
                                            />
                                            <label className="absolute left-0 top-6 text-zinc-600 font-syne text-[10px] tracking-[0.2em] uppercase transition-all duration-200 peer-focus:top-0 peer-focus:text-[#F26522] peer-[:not(:placeholder-shown)]:top-0">
                                                Full Name
                                            </label>
                                        </div>
                                        <div className="relative group">
                                            <input
                                                name="email"
                                                type="email"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full bg-transparent border-b border-white/10 pt-6 pb-3 outline-none focus:border-[#F26522] transition-colors peer text-base font-light"
                                                placeholder=" "
                                            />
                                            <label className="absolute left-0 top-6 text-zinc-600 font-syne text-[10px] tracking-[0.2em] uppercase transition-all duration-200 peer-focus:top-0 peer-focus:text-[#F26522] peer-[:not(:placeholder-shown)]:top-0">
                                                Email Address
                                            </label>
                                        </div>
                                    </div>

                                    <div className="relative group">
                                        <input
                                            name="subject"
                                            type="text"
                                            required
                                            value={formData.subject}
                                            onChange={handleChange}
                                            className="w-full bg-transparent border-b border-white/10 pt-6 pb-3 outline-none focus:border-[#F26522] transition-colors peer text-base font-light"
                                            placeholder=" "
                                        />
                                        <label className="absolute left-0 top-6 text-zinc-600 font-syne text-[10px] tracking-[0.2em] uppercase transition-all duration-200 peer-focus:top-0 peer-focus:text-[#F26522] peer-[:not(:placeholder-shown)]:top-0">
                                            Subject
                                        </label>
                                    </div>

                                    <div className="relative group">
                                        <textarea
                                            name="message"
                                            rows={4}
                                            required
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="w-full bg-transparent border-b border-white/10 pt-6 pb-3 outline-none focus:border-[#F26522] transition-colors peer text-base font-light resize-none"
                                            placeholder=" "
                                        />
                                        <label className="absolute left-0 top-6 text-zinc-600 font-syne text-[10px] tracking-[0.2em] uppercase transition-all duration-200 peer-focus:top-0 peer-focus:text-[#F26522] peer-[:not(:placeholder-shown)]:top-0">
                                            How can we help?
                                        </label>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={submitted}
                                        className="relative group w-full overflow-hidden rounded-xl bg-[#F26522] py-5 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(242,101,34,0.3)] active:scale-[0.98]"
                                    >
                                        <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                                        <span className="relative z-10 font-syne text-[11px] tracking-[0.4em] uppercase font-bold text-white">
                                            {submitted ? "Message Sent Successfully" : "Send Inquiry"}
                                        </span>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* ── CONTACT CARDS SECTION ── */}
                <div className="pt-24 border-t border-white/5">
                    <div className="flex flex-col items-center text-center mb-16 space-y-4">
                        <span className="font-syne text-[10px] tracking-[0.5em] uppercase text-[#F26522] font-bold">Contact Details</span>
                        <h2 className="text-3xl md:text-5xl font-serif">Visit Our Sanctuary</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                        {contactInfo.map((info, idx) => (
                            <motion.div
                                key={info.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="flex flex-col items-center text-center gap-6 bg-white/[0.02] p-8 rounded-3xl border border-white/5 hover:border-[#F26522]/30 transition-all duration-500 group"
                            >
                                <div className="w-16 h-16 rounded-full bg-[#F26522]/5 border border-[#F26522]/20 flex items-center justify-center text-[#F26522] group-hover:bg-[#F26522] group-hover:text-white transition-all duration-500 shrink-0">
                                    {info.icon}
                                </div>
                                <div className="space-y-2">
                                    <h4 className="font-syne text-[10px] tracking-[0.3em] uppercase text-zinc-500 font-bold">{info.label}</h4>
                                    <p className="text-zinc-100 font-light text-lg group-hover:text-white transition-colors leading-tight">
                                        {info.value}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Social Media (Centered) */}
                    <div className="flex flex-col items-center gap-8">
                        <span className="font-syne text-[10px] tracking-[0.4em] uppercase text-zinc-500 font-bold">Connect on Social</span>
                        <div className="flex gap-6">
                            {socialLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.url}
                                    target="_blank"
                                    className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:text-[#F26522] hover:border-[#F26522]/40 hover:bg-[#F26522]/5 transition-all duration-300"
                                    aria-label={link.name}
                                >
                                    {link.icon}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Bottom (Reduced spacing) */}
            <div className="mt-20 border-t border-white/5 pt-12 px-6">
                <div className="max-w-[1400px] mx-auto text-center">
                    <h5 className="font-syne text-[10px] tracking-[1em] uppercase text-zinc-800">Kathmandu • Nepal</h5>
                </div>
            </div>
        </main>
    );
}
