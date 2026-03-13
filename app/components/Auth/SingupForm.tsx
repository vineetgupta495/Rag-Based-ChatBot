// app/signup/SignupForm.tsx
"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Divider from "@/app/components/UI/Divider";
import AuthButton from "@/app/components/UI/AuthButton";

export default function SignupForm() {
    const isLoaded = true;
    const router = useRouter();

    const [email, setEmail] = React.useState("");
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [confirmPassword, setConfirmPassword] = React.useState("");
    const [code, setCode] = React.useState("");
    const [pendingVerification, setPendingVerification] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState<string | null>(null);

    if (!isLoaded) return <div>Loading auth...</div>;

    const handleSignUp = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        setLoading(true);
        try {
            // Mock signup and bypass email verification
            await new Promise(res => setTimeout(res, 1000));
            router.push("/dashboard");
        } catch (err: any) {
            console.error("Sign-up error", err);
            setError("Sign-up failed");
        } finally {
            setLoading(false);
        }
    };

    const handleVerifyCode = async (e: React.FormEvent) => {
        e.preventDefault();
        // Since we bypass verification in mock, this won't be called
        router.push("/dashboard");
    };


    // UI: show initial signup form or verification input
    return (
        <>
            <div className="flex flex-col h-full gap-5 px-4">
                <h2 className="text-center font-bold text-4xl p-10">Welcome to SnapPass!</h2>
                <p className="text-center">Please sign up to create your account</p>

                {!pendingVerification ? (
                    <form className="flex flex-col items-center w-full gap-8" onSubmit={handleSignUp}>
                        <input
                            className="h-12 w-4/5"
                            style={{
                                boxShadow: "10px 10px 50px 50px rgba(0,0,0,0.2)",
                                borderRadius: "10px",
                            }}
                            type="email"
                            placeholder="   Email :"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />

                        <input
                            className="h-12 w-4/5"
                            style={{
                                boxShadow: "10px 10px 50px 50px rgba(0,0,0,0.2)",
                                borderRadius: "10px",
                            }}
                            type="text"
                            placeholder="   Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />

                        <input
                            className="h-12 w-4/5"
                            style={{
                                boxShadow: "10px 10px 50px 50px rgba(0,0,0,0.2)",
                                borderRadius: "10px",
                            }}
                            type="password"
                            placeholder="   Password ****"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />

                        <input
                            className="h-12 w-4/5"
                            style={{
                                boxShadow: "10px 10px 50px 50px rgba(0,0,0,0.2)",
                                borderRadius: "10px",
                            }}
                            type="password"
                            placeholder="   Confirm Password ****"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />

                        {error && <div className="text-sm text-red-600">{error}</div>}

                        <button
                            className="h-12 w-2/4 cursor-pointer rounded-2xl"
                            style={{
                                boxShadow: "10px 10px 50px 50px rgba(0,0,0,0.2)",
                                backgroundColor: "rgba(16, 24, 80,0.8)",
                            }}
                            type="submit"
                            disabled={loading}
                        >
                            {loading ? "Signing up..." : "Sign up"}
                        </button>
                    </form>
                ) : (
                    <form className="flex flex-col items-center w-full gap-6" onSubmit={handleVerifyCode}>
                        <p className="text-center">We sent a code to {email}. Enter it below.</p>

                        <input
                            className="h-12 w-3/4"
                            style={{ borderRadius: "10px" }}
                            placeholder="Verification code"
                            value={code}
                            onChange={(e) => setCode(e.target.value)}
                            required
                        />

                        {error && <div className="text-sm text-red-600">{error}</div>}

                        <button
                            className="h-12 w-1/3 cursor-pointer rounded-2xl"
                            style={{ backgroundColor: "rgba(16, 24, 80,0.8)" }}
                            type="submit"
                            disabled={loading}
                        >
                            {loading ? "Verifying..." : "Verify"}
                        </button>
                    </form>
                )}

                <Divider />
                <AuthButton />
            </div>
        </>
    );
}
