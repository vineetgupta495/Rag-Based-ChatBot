// app/components/UI/AuthButton.tsx
"use client";

import React, { useCallback, useState } from "react";

type Provider = "oauth_google" | "oauth_apple" | "oauth_github";

export default function AuthButton({ redirectTo = "/dashboard" }: { redirectTo?: string }) {
    const isLoaded = true;
    const [loadingProvider, setLoadingProvider] = useState<Provider | null>(null);
    const [error, setError] = useState<string | null>(null);

    const startOAuth = useCallback(
        async (strategy: Provider) => {
            if (loadingProvider) return;
            setError(null);
            setLoadingProvider(strategy);

            try {
                // Mock OAuth flow
                await new Promise((res) => setTimeout(res, 1000));
                window.location.href = redirectTo;
            } catch (finalErr: any) {
                console.error("OAuth start failed:", finalErr);
                setError(finalErr?.message ?? "Failed to start sign-in flow");
            } finally {
                setLoadingProvider(null);
            }
        },
        [loadingProvider, redirectTo]
    );

    const onGoogle = useCallback(() => startOAuth("oauth_google"), [startOAuth]);
    const onApple = useCallback(() => startOAuth("oauth_apple"), [startOAuth]);
    const onGithub = useCallback(() => startOAuth("oauth_github"), [startOAuth]);

    return (
        <div className="flex flex-col items-center">
            <div className="flex justify-center items-center gap-5">
                <button
                    type="button"
                    onClick={onGoogle}
                    disabled={!!loadingProvider}
                    className="border border-gray-800 p-2 rounded-2xl flex items-center gap-2 cursor-pointer hover:bg-gray-800 disabled:opacity-50"
                >
                    {/* Google SVG */}
                    <svg className="w-8 fill-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12.22182,5.97728c1.42137-0.02391,2.79488,0.51341,3.82273,1.49545l2.86819-2.86818c-1.81006-1.7-4.20788-2.63339-6.69092-2.60455C8.44087,1.99855,4.98265,4.13047,3.28544,7.5091L6.62636,10.1C7.41416,7.66784,9.66545,6.00909,12.22182,5.97728z" /><path fill="yellow" d="M3.28547,7.50908c-1.41819,2.82599-1.41819,6.15582,0,8.98181L6.62634,13.9c-0.41812-1.23216-0.41812-2.56784,0-3.8L3.28547,7.50908z" /><path fill="green" d="M15.60822,17.06822c-2.80401,1.79981-6.53614,0.98574-8.33595-1.81827c-0.2705-0.42143-0.48748-0.8749-0.64593-1.34995l-3.34087,2.59089C4.98265,19.86954,8.44089,22.00147,12.22185,22c2.43429,0.06602,4.8018-0.80065,6.61815-2.42269L15.60822,17.06822z" /><path fill="cyan" d="M21.64001,10.18182h-9.41815v3.86816h5.38177c-0.22498,1.23639-0.94592,2.3269-1.99542,3.01819c-0.00317,0.00208-0.00647,0.0036-0.00964,0.00562c0.00317-0.00201,0.00647-0.00354,0.00964-0.00555l3.23175,2.50909l0.00006-0.00006c1.9903-1.91693,3.07397-4.5882,2.98181-7.34998C21.82239,11.54138,21.76154,10.85687,21.64001,10.18182z" /></svg>
                    {loadingProvider === "oauth_google" ? "Starting..." : "Google"}
                </button>

                <button
                    type="button"
                    onClick={onApple}
                    disabled={!!loadingProvider}
                    className="border border-gray-800 p-2 rounded-2xl flex items-center gap-2 cursor-pointer hover:bg-gray-800 disabled:opacity-50"
                >
                    {/* Apple SVG */}
                    <svg className="w-8 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.94,5.19A4.38,4.38,0,0,0,16,2,4.44,4.44,0,0,0,13,3.52,4.17,4.17,0,0,0,12,6.61,3.69,3.69,0,0,0,14.94,5.19Zm2.52,7.44a4.51,4.51,0,0,1,2.16-3.81,4.66,4.66,0,0,0-3.66-2c-1.56-.16-3,.91-3.83.91s-2-.89-3.3-.87A4.92,4.92,0,0,0,4.69,9.39C2.93,12.45,4.24,17,6,19.47,6.8,20.68,7.8,22.05,9.12,22s1.75-.82,3.28-.82,2,.82,3.3.79,2.22-1.24,3.06-2.45a11,11,0,0,0,1.38-2.85A4.41,4.41,0,0,1,17.46,12.63Z" /></svg>
                    {loadingProvider === "oauth_apple" ? "Starting..." : "Apple"}
                </button>

                <button
                    type="button"
                    onClick={onGithub}
                    disabled={!!loadingProvider}
                    className="border border-gray-800 p-2 rounded-2xl flex items-center gap-2 cursor-pointer hover:bg-gray-800 disabled:opacity-50"
                >
                    {/* GitHub SVG */}
                    <svg className="w-8 fill-blue-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z" /></svg>
                    {loadingProvider === "oauth_github" ? "Starting..." : "Github"}
                </button>
            </div>

            {error && <div className="mt-3 text-sm text-red-400">{error}</div>}
        </div>
    );
}
