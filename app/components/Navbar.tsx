// components/Navbar.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const toggle = () => setOpen(!open);

    return (
        <div className="w-full flex justify-center z-40 fixed top-10 ">
            <nav className="backdrop-blur-2xl  rounded-4xl  w-1/2 p-2 outline outline-gray-800">
                <div className="max-w-4xl   py-2 flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="text-xl font-semibold tracking-tight">
                        Snap<span className="text-indigo-600">P</span>ass
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <NavLink href="/Dashboard" label="Dashboard" />
                        <NavLink href="#Contact" label="Support" />
                        <Link
                            href="/login"
                            className="px-5 py-1 ml-5 rounded-4xl bg-indigo-600 text-white hover:bg-indigo-700 transition"
                        >
                            Login
                        </Link>
                    </div>

                    {/* Mobile Button */}
                    <button
                        onClick={toggle}
                        className="md:hidden p-2 rounded hover:bg-neutral-100 transition"
                    >
                        {open ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {open && (
                    <div className="md:hidden border-t bg-white px-4 pb-4 animate-fadeIn">
                        <div className="flex flex-col space-y-3 mt-3">
                            <MobileLink href="/Dashboard" label="Dashboard" onClick={toggle} />
                            <MobileLink href="/faq" label="FAQ" onClick={toggle} />
                            <Link
                                href="/login"
                                onClick={toggle}
                                className="px-4 py-2 rounded-2xl bg-indigo-600 text-white text-center hover:bg-indigo-700 transition"
                            >
                                Login
                            </Link>
                        </div>
                    </div>
                )}
            </nav>
        </div>
    );
}

// Desktop link component
function NavLink({ href, label }: { href: string; label: string }) {
    return (
        <Link
            href={href}
            className="text-neutral-400 hover:text-indigo-600 transition font-medium"
        >
            {label}
        </Link>
    );
}

// Mobile link component
function MobileLink({
    href,
    label,
    onClick,
}: {
    href: string;
    label: string;
    onClick: () => void;
}) {
    return (
        <Link
            href={href}
            onClick={onClick}
            className="py-2 px-2 rounded hover:bg-neutral-100 transition text-neutral-700 font-medium"
        >
            {label}
        </Link>
    );
}
