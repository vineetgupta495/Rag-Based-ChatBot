"use client"
import React from 'react';
import { useState } from 'react';
import {words} from "@/constants"
import ToggleButton from "@/app/components/ToggleButton/ToggleButton";
import HighlightList from "@/app/components/HighlightList/HighlightList";
export function PasswordGenerator() {
    const [value, setValue] = useState(25);
    return (
        <div className="password-generator w-full bg-gray-900" id="PasswordGenerator">
            <div className="flex flex-row justify-around items-center w-full ">
                <div className="flex flex-col gap-2">
                    <p className="text-5xl font-bold">Keep every password strong</p>
                    <p className=" text-4xl font-bold">random today,<span> </span>
                        <span className="slide"><span className="wrapper hover-triger">{words.map((word) => (
                            <span key={word.text}><span>{word.text}</span></span>))}</span></span>
                    </p>
                    <p className="text-2xl font-bold mt-3 text-blue-200">Cool people don’t reuse passwords.</p>
                </div>

                <div className=" flex flex-col min-h-screen  items-end justify-center relative right-0 ">
                    <div className=" backdrop-blur-2xl bg-gray-500  rounded-2xl  flex flex-col p-20  "
                         style={{boxShadow: "10px 10px 50px 50px rgba(0,0,0,0.2)"}}>
                        <p className="text-sm relative bottom-2 text-gray-300">Password type</p>
                        <HighlightList/>
                        <div className="flex flex-col mt-10">
                            <p className="text-sm text-gray-300">Customization</p>
                            <hr className="flex-grow border-gray-600 relative top-2"/>
                            <div className="flex flex-row gap-8 mt-10">
                                <p className="">Password Length</p>
                                <input className="w-50" type="range" min="5" max="100" defaultValue="value"
                                       onChange={(e) => setValue((e.target as HTMLInputElement).valueAsNumber)}/>
                                <span id="value">{value}</span>
                            </div>
                            <div className="flex flex-row gap-5 mt-8">
                                <ToggleButton inputOne="Include Number's" inputTwo="Only Character's"
                                              onChange={undefined}/>
                                <ToggleButton inputOne="No Symbol's" inputTwo="Symbol's" onChange={undefined}/>
                            </div>
                            <div className="flex flex-col gap-5 mt-5">
                                <label>Generated Password</label>
                                <textarea className="bg-white text-black rounded-lg h-15 "></textarea>
                            </div>
                            <div className="flex flex-col gap-5 relative top-5">
                                <button className=" rounded-lg p-2 bg-gray-700 hover:bg-gray-600">Copy Password</button>
                                <button className=" rounded-lg p-1.5 bg-blue-900 hover:bg-blue-950">Regenerate
                                    Password
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

