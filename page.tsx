"use client"
import Link from "next/link";
import { useState } from 'react';
import { motion } from 'motion/react';
import {
    Search,
    ChevronDown,
    LogIn,
    FileText,
    Lock
} from 'lucide-react';


export default function App() {
    const [isDetailsOpen, setIsDetailsOpen] = useState(false);

    return (
        <div className="min-h-screen bg-[#02040a] text-white selection:bg-accent-blue selection:text-white font-sans overflow-x-hidden">
            {/* Background Layers */}
            <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute inset-0 hex-grid opacity-50 scale-[2] origin-top" />
                <div className="mesh-chain" />
                <div className="absolute top-[15%] left-0 w-full glow-line animate-pulse" />
                <div className="absolute top-[45%] left-0 w-full glow-line animate-pulse delay-500" />
                <div className="absolute top-[75%] left-0 w-full glow-line animate-pulse delay-1000" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#02040a]/40 to-[#02040a]" />
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-accent-blue/10 blur-[150px] rounded-full" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-accent-purple/10 blur-[150px] rounded-full" />
            </div>

            {/* Navigation */}
            <nav className="relative z-50">
                <div className="nav-bar-container">
                    <div className="flex items-center gap-2">
                        <span className="text-2xl font-black tracking-tighter glow-text font-display">GRuX</span>
                    </div>

                    <div className="hidden lg:flex items-center gap-8 ml-20">
                        <div className="relative group/nav">
                            <button className="flex items-center gap-1 text-[11px] uppercase tracking-[0.2em] font-bold text-white/50 hover:text-white transition-colors cursor-pointer py-4">
                                Features <ChevronDown className="w-3 h-3 transition-transform group-hover/nav:rotate-180" />
                            </button>

                            <div className="absolute top-full left-1/2 -translate-x-1/2 w-[90vw] max-w-6xl pt-2 opacity-0 translate-y-2 pointer-events-none group-hover/nav:opacity-100 group-hover/nav:translate-y-0 group-hover/nav:pointer-events-auto transition-all duration-300 z-[100]">
                                <div className="bg-[#0a0c14]/95 border border-white/10 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-2xl p-6 ml-80">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 ">
                                        {[
                                            {
                                                title: "Semantic Search",
                                                desc: "Understanding intent, not just words.",
                                                img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
                                            },
                                            {
                                                title: "Source Citation",
                                                desc: "Trust through verified references.",
                                                img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop"
                                            },
                                            {
                                                title: "Auto Indexing",
                                                desc: "Seamless document processing.",
                                                img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2070&auto=format&fit=crop"
                                            },
                                            {
                                                title: "Secure Access",
                                                desc: "Enterprise-grade data protection.",
                                                img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop"
                                            }
                                        ].map((item, i) => (
                                            <a
                                                key={i}
                                                href="#"
                                                className="relative aspect-[4/3] overflow-hidden group/card rounded-xl border border-white/5"
                                            >
                                                <img
                                                    src={item.img}
                                                    alt={item.title}
                                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110 opacity-50"
                                                    referrerPolicy="no-referrer"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c14] via-[#0a0c14]/40 to-transparent" />
                                                <div className="absolute bottom-4 left-4 right-4">
                                                    <h3 className="text-[10px] font-black uppercase tracking-widest mb-1 group-hover/card:text-accent-blue transition-colors">{item.title}</h3>
                                                    <p className="text-[9px] text-white/40 uppercase tracking-tighter leading-tight">{item.desc}</p>
                                                    <div className="h-[1px] bg-white/10 w-0 group-hover/card:w-full mt-2 transition-all duration-500" />
                                                </div>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {[ 'Contact', 'About Us'].map((item) => (
                            <a key={item} href="#" className="text-[11px] uppercase tracking-[0.2em] font-bold text-white/50 hover:text-white transition-colors">
                                {item}
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-4 ml-auto">

                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <main className="relative z-10">
                <section className="relative pt-32 pb-20 px-12 min-h-[80vh] flex flex-col items-center justify-center text-center">
                    {/* Hero Section Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <h1 className="text-[12vw] font-black tracking-tighter leading-none font-display mb-4">
                            GRUX
                        </h1>
                        <p className="text-sm md:text-lg font-bold uppercase tracking-[0.6em] text-white/60 mb-12">
                            Next-Gen Semantic Intelligence
                        </p>

                        <Link href="/Dashboard"
                                className="px-15 py-4 rounded-xl bg-accent-blue/20 border border-accent-blue/20 text-xs font-bold  tracking-widest hover:bg-accent-blue/30 transition-all backdrop-blur-lg">
                            Try Grux
                        </Link>
                        {/* 3D AI Text Placeholder */}
                        <div className="absolute top-1/2 -right-[40%] -translate-y-1/2 hidden xl:block">
                            <div className="relative">
                                <span className="text-[180px] font-black italic text-transparent bg-clip-text bg-gradient-to-br from-accent-blue via-accent-purple to-transparent opacity-40 select-none">AI</span>
                                <div className="absolute inset-0 bg-accent-blue/20 blur-3xl -z-10"/>
                            </div>
                        </div>
                    </motion.div>
                </section>

                {/* Features Grid */}
                <section className="px-12 py-20 max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Semantic Search",
                                desc: "Search the searching and search ennis the-exediting search information.",
                                icon: <Search className="w-8 h-8 text-accent-blue" />
                            },
                            {
                                title: "Document Intelligence",
                                desc: "Ensures the document complete avit oreees and document intelligence.",
                                icon: <FileText className="w-8 h-8 text-accent-blue" />
                            },
                            {
                                title: "Secure Portal",
                                desc: "Secure portal enableation to your information, format and contact contact.",
                                icon: <Lock className="w-8 h-8 text-accent-blue" />
                            }
                        ].map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="feature-card group"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-accent-blue/10 flex items-center justify-center mb-8 group-hover:bg-accent-blue/20 transition-colors">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-4 font-display tracking-tight">{feature.title}</h3>
                                <p className="text-sm text-white/40 leading-relaxed">
                                    {feature.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </section>

            </main>

            {/* Footer */}
            <footer className="relative z-10 border-t border-white/5 bg-[#02040a] py-8 px-12">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                    {/* Logo */}
                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-accent-blue shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                        <span className="text-sm font-black tracking-[0.3em] uppercase">GRUX</span>
                    </div>

                    {/* Copyright */}
                    <div className="text-[9px] font-medium  tracking-[0.2em] text-white/30">
                        © 2026 GRuX. ALL RIGHTS RESERVED.
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-12">
                        {['Privacy', 'Terms', 'Support'].map((link) => (
                            <a
                                key={link}
                                href="#"
                                className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60 hover:text-white transition-colors"
                            >
                                {link}
                            </a>
                        ))}
                    </div>
                </div>
            </footer>
        </div>
    );
}
