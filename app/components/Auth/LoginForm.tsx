// app/login/LoginForm.tsx
"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Divider from "@/app/components/UI/Divider";
import AuthButton from "@/app/components/UI/AuthButton";


export function LoginForm() {
    const isLoaded = true;
    const router = useRouter();

    const [identifier, setIdentifier] = React.useState(""); // email or username
    const [password, setPassword] = React.useState("");
    const [code, setCode] = React.useState("");
    const [needsVerification, setNeedsVerification] = React.useState(false);
    const [error, setError] = React.useState<string | null>(null);
    const [loading, setLoading] = React.useState(false);
    const [keepSignedIn, setKeepSignedIn] = React.useState(true);


    // Wait for Clerk client to be ready
    if (!isLoaded) return <div>Loading auth...</div>;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setLoading(true);

        try {
            // Mock authentication
            await new Promise((res) => setTimeout(res, 1000));
            router.push("/dashboard");
        } catch (err: any) {
            console.error("Sign-in error", err);
            setError("Sign-in failed");
        } finally {
            setLoading(false);
        }
    };

    const handleVerifyCode = async (e: React.FormEvent) => {
        e.preventDefault();
        // Since needsVerification is never triggered in the mock, this is unused
        router.push("/");
    };


    return (
        <div className="px-5" >
            <h2 className="text-center font-bold text-4xl p-5 relative bottom-8">Welcome Back!</h2>
            <p>Please sign in to your account</p>

            {!needsVerification ? (
                <form className="flex flex-col mt-5 gap-6" onSubmit={handleSubmit}>
                    <input
                        className="h-15 outline-none px-5 rounded-2xl"
                        style={{ boxShadow: "10px 10px 50px 50px rgba(0,0,0,0.2)" }}
                        type="text"
                        placeholder="   Email/Username"
                        value={identifier}
                        onChange={(e) => setIdentifier(e.target.value)}
                        required
                    />

                    <input
                        className="h-15 outline-none px-5 rounded-2xl"
                        style={{ boxShadow: "10px 10px 50px 50px rgba(0,0,0,0.2)" }}
                        type="password"
                        placeholder="   Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <a className="text-right" href="/forgot-password">
                        Forgot password?
                    </a>

                    <div className="checkbox-container">
                        <input
                            type="checkbox"
                            id="keepSignedIn"
                            checked={keepSignedIn}
                            onChange={(e) => setKeepSignedIn(e.target.checked)}
                        />
                        <label htmlFor="keepSignedIn"> Keep me signed in</label>
                    </div>

                    {error && <div className="text-sm text-red-600">{error}</div>}

                    <button
                        className="cursor-pointer rounded-2xl h-[45px]"
                        style={{ backgroundColor: "rgba(16, 24, 80,0.8)" }}
                        type="submit"
                        disabled={loading}
                    >
                        {loading ? "Signing in..." : "Sign in"}
                    </button>
                </form>
            ) : (
                <form className="flex flex-col mt-5 gap-6" onSubmit={handleVerifyCode}>
                    <p>We sent a code to {identifier}. Enter it below.</p>

                    <input className="h-12 outline-none px-5" placeholder="Enter verification code" value={code}
                        onChange={(e) => setCode(e.target.value)} required />

                    {error && <div className="text-sm text-red-600">{error}</div>}
                    <button className="cursor-pointer rounded-2xl h-[45px]"
                        style={{ backgroundColor: "rgba(16, 24, 80,0.8)" }} type="submit" disabled={loading}>
                        {loading ? "Verifying..." : "Verify"}
                    </button>
                </form>
            )}

            <Divider />

            {/* Keep your AuthButton (e.g., for social / magic links) */}
            <AuthButton />
        </div>
    );
}
