"use client"
import React, { useState } from "react";

type FAQ = {
    q: string;
    a: React.ReactNode;
};

const FAQS: FAQ[] = [
    {
        q: "How does this password manager protect my data?",
        a: (
            <>
                Your vault is encrypted <strong>in your browser</strong> before anything is sent to the server.
                The server only sees ciphertext, nonces, salts and metadata — never plaintext.
            </>
        ),
    },
    {
        q: "Do you ever see my master password?",
        a: (
            <>
                No. The master password is never sent to our servers. We store verifiers (salted hashes) for
                authentication only — the decryption key stays with you.
            </>
        ),
    },
    {
        q: "Can I recover my account if I forget my master password?",
        a: (
            <>
                If you forget your master password and have no recovery key/backups, we cannot decrypt your
                vault. We recommend keeping an encrypted backup or enabling an emergency recovery key.
            </>
        ),
    },
    {
        q: "Is two-factor authentication (2FA) supported?",
        a: <>Yes — enable TOTP (authenticator apps) for login protection. 2FA complements, but does not replace, the master password.</>,
    },
    {
        q: "Can I export or import my vault?",
        a: <>Yes — export/import an encrypted JSON backup. Exported files remain encrypted with your master password.</>,
    },
    {
        q: "What happens if the server is down?",
        a: (
            <>
                Downtime affects storage access only. If you use an offline cache or keep an encrypted export,
                you can still access local data. Always keep an encrypted backup for critical items.
            </>
        ),
    },
    {
        q: "How do I delete my account & data?",
        a: <>Account deletion removes your account and stored ciphertext. You’ll be asked to confirm before we permanently delete anything.</>,
    },
    {
        q: "How can I report a security issue?",
        a: <>Contact <strong>security@example.com</strong> (replace with your contact) or open an issue in the repo. We prioritize security reports.</>,
    },
];

export default function FaqSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    function toggle(i: number) {
        setOpenIndex((prev) => (prev === i ? null : i));
    }
    return (
        <section className="max-w-4xl mx-auto  " aria-labelledby="faq-heading">
            <div className="space-y-2">
                {FAQS.map((f, i) => {
                    const isOpen = openIndex === i;
                    return (
                        <div key={i} className=" rounded-lg border-sky-800 border-1">
                            <button
                                onClick={() => toggle(i)}
                                aria-expanded={isOpen}
                                aria-controls={`faq-${i}`}
                                className="w-full flex justify-between items-center px-30 py-3 text-left focus:outline-none focus-visible:ring focus-visible:ring-indigo-300"
                            >
                                <span className="text-lg font-medium">{f.q}</span>
                                <span className="ml-4 text-indigo-600" aria-hidden>
                  {isOpen ? "−" : "+"}
                </span>
                            </button>

                            <div
                                id={`faq-${i}`}
                                role="region"
                                aria-hidden={!isOpen}
                                className={`px-4 pb-4 transition-all duration-200 ${isOpen ? "block" : "hidden"}`}
                            >
                                <div className="prose max-w-none text-gray-300">{f.a}</div>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="text-sm text-neutral-200 pt-5 text-right">
                <a href="mailto:support@example.com" className="text-blue-400 underline">snappass@example.com</a> Still have a question? Reach us
                .
            </div>
        </section>
    );
}
