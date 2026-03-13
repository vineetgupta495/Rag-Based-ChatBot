"use client";
import { useEffect } from "react";
import gsap from "gsap";

export const useGsapTypewriterr = (
    ref: React.RefObject<HTMLParagraphElement | null>,
    text: string,
    speed: number = 0.15
) => {
    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        el.textContent = "";
        const tl = gsap.timeline();

        text.split("").forEach((char) => {
            tl.to({}, {
                duration: speed,
                onStart: () => {
                    el.textContent += char;
                },
            });
        });

        return () => {
            tl.kill();
        }
    }, [ref, text, speed]);
};
