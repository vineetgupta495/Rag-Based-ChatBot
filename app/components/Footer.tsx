"use client"
import React from "react";

export default function Footer(){
    return (
        <footer id="footer" className="footer bg-black h-[30vh] md:h-[15vh]  w-screen roun " style={{boxShadow:'0px 0px 20px 0px black'}} >
            <div className=" relative top-40 md:top-15 md:left-5 ">
                <p className=" text-gray-600 ">©2025</p>
                <p className=" text-gray-600">Snap⚡Pass</p>
            </div>
            <div className="flex flex-row justify-end md:gap-20 gap-5 relative right-10 md:right-15 md:top-3">
                <div>
                    <p className=" text-gray-600">Built in</p>
                    <p className=" text-gray-300">NeXt.js</p>
                </div>
                <div>
                    <p className=" text-gray-600 ">Created By</p>
                    <p className=" text-gray-300">Shivam Prasad Verma</p>
                </div>
            </div>
        </footer>
    );
};