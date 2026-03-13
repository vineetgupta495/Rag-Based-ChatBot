"use client";
import { useState } from "react";

export default function HighlightList() {
    const [selected, setSelected] = useState("Random");
    const buttons = ["Random", "EasyPass", "Numbers"];

    return (

        <div className="flex flex-col sm:flex-row bg-amber-50 shadow-md overflow-hidden gap-1 rounded-2xl p-0.5 w-full ">
            {buttons.map((btn) => (
                <button
                    key={btn}
                    onClick={() => setSelected(btn)}

                    className={`px-4 py-2 sm:px-6 sm:py-3  sm:text-[20px]  transition-all duration-200 w-full h-full rounded-xl
            ${
                        selected === btn
                            ? "text-gray-700 bg-amber-400"
                            : "text-gray-500"
                    }`}
                >
                    {btn}
                </button>
            ))}
        </div>
    );
}