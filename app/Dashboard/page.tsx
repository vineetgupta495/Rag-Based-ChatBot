
"use client";
import React, { useEffect, useState, useRef } from "react";
import { Panel, PanelGroup, PanelResizeHandle, ImperativePanelHandle } from "react-resizable-panels";
import { X ,Paperclip, Send,  MessageCircle, } from "lucide-react";
import ReflectBackground from "../components/UI/ReflectBackground";
import {motion, AnimatePresence} from "framer-motion";
import { TbLayoutSidebarLeftCollapseFilled, TbLayoutSidebarLeftCollapse } from "react-icons/tb";


export default function Vault() {
    const [messages, setMessages] = useState<{ id: string, role: 'user' | 'assistant', text: string, fileName?: string }[]>([]);
    const [inputValue, setInputValue] = useState("");
    const historyPanelRef = useRef<ImperativePanelHandle>(null);



    const [showPopup, setShowPopup] = useState(false);


    const triggerFileInput = () => {
        fileInputRef.current?.click();
    };
    const fileInputRef = useRef<HTMLInputElement | null>(null);


    const uploadFileToBackend = async (file: File) => {
        const formData = new FormData();
        formData.append("file", file);

        const res = await fetch("http://localhost:8000/upload", {
            method: "POST",
            body: formData
        });



        const data = await res.json();
        console.log(data);
    };


    const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
    const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];
            setUploadedFiles((prev) => [...prev, file]);

            await uploadFileToBackend(file);
        }
    };





    const handleSend = async () => {
        if (!inputValue.trim()) return;

        const userMessage = {
            id: crypto.randomUUID(),
            role: "user" as const,
            text: inputValue
        };

        let sessionId = currentSession

        if (!sessionId) {
            const res = await fetch("http://127.0.0.1:8000/sessions", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ title: userMessage.text })
            })

            const data = await res.json()
            sessionId = data.sessionId
            setCurrentSession(sessionId)
        }

        setMessages(prev => [...prev, userMessage]);
        setInputValue("");

        try {

            // save user message
            await fetch("http://127.0.0.1:8000/messages", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    sessionId: sessionId,
                    role: "user",
                    text: userMessage.text
                })
            });

            // ask model
            const res = await fetch("http://127.0.0.1:8000/ask", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    question: userMessage.text
                })
            });

            if (!res.ok) throw new Error("API request failed");

            const data = await res.json();

            const assistantMessage = {
                id: crypto.randomUUID(),
                role: "assistant" as const,
                text: data.answer
            };

            // save assistant message
            await fetch("http://127.0.0.1:8000/messages", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    sessionId: sessionId,
                    role: "assistant",
                    text: data.answer
                })
            });

            setMessages(prev => [...prev, assistantMessage]);

        } catch (err) {

            console.error("Fetch error:", err);

            const errorMessage = {
                id: crypto.randomUUID(),
                role: "assistant" as const,
                text: "Server error. Check backend."
            };

            setMessages(prev => [...prev, errorMessage]);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault()
            handleSend()
        }
    }


    // selection state lifted to parent

    const [isHistoryOpen, setIsHistoryOpen] = useState(true);
    const [isDragging, setIsDragging] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement | null>(null)
    const [currentSession, setCurrentSession] = useState<string | null>(null)
    type Session = {
        id: string
        title: string
        createdAt?: string
        updatedAt?: string
    }

    const [sessions, setSessions] = useState<Session[]>([])


    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }, [messages])


    // Session logic
    const createNewSession = () => {
        setCurrentSession(null)
        setMessages([])
    }
    const loadSession = async (sessionId: string) => {
        setCurrentSession(sessionId)

        const res = await fetch(`http://127.0.0.1:8000/sessions/${sessionId}/messages`)
        const data = await res.json()

        console.log("messages from backend:", data)

        const formatted = data.map((m: { role: "user" | "assistant"; text: string }) => ({
            id: crypto.randomUUID(),
            role: m.role,
            text: m.text
        }))

        setMessages(formatted)
    }
    useEffect(() => {
        const fetchSessions = async () => {
            const res = await fetch("http://127.0.0.1:8000/sessions");
            const data = await res.json();

            setSessions(data);   // <- correct
        };

        fetchSessions();
    }, []);


    return (
        <>
            <PanelGroup autoSaveId="example" direction="horizontal">
                <Panel
                    ref={historyPanelRef}
                    defaultSize={20}
                    minSize={20}
                    collapsible={true}
                    onCollapse={() => setIsHistoryOpen(false)}
                    onExpand={() => setIsHistoryOpen(true)}
                    className="rounded-l-2xl relative h-screen"
                >
                    <AnimatePresence initial={false}>
                        {isHistoryOpen && (
                            <motion.div
                                initial={{ width: 0, opacity: 0 }}
                                animate={{ width: "100%", opacity: 1 }}
                                exit={{ width: 0, opacity: 0 }}
                                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                                className="bg-[#0f172a]/70 backdrop-blur-xl h-full relative border-r border-white/5 shadow-[4px_0_24px_rgba(0,0,0,0.2)] overflow-hidden"
                            >
                                <div className="flex flex-col h-full absolute inset-0 min-w-[260px] ">
                                    {/* Header */}
                                    <div className="flex items-center justify-between px-6 pt-6 pb-4 bg-gray-800">
                                        <h1 className="text-slate-200 text-lg font-semibold">GRuX</h1>
                                        <button onClick={() => historyPanelRef.current?.collapse()} className="text-slate-400 hover:text-slate-200 transition-colors cursor-pointer">
                                            <TbLayoutSidebarLeftCollapse  size={25} />
                                        </button>

                                    </div>
                                    <div className="w-full h-1 bg-gray-800 rounded opacity-50" />

                                    <div className="mt-5 flex flex-col items-start  ">
                                        <button onClick={createNewSession} className="flex gap-2 p-5 cursor-pointer hover:bg-gray-700 rounded-2xl  w-full "> <MessageCircle/>New Chat</button>


                                    </div>

                                    {/* History List */}

                                    <div className="flex-1 overflow-y-auto w-full flex flex-col mt-10 ">
                                        <div className="w-1/8 self-center h-0.5 bg-blue-950 rounded opacity-50" />
                                        {sessions.map(session => (
                                            <div
                                                key={session.id}
                                                onClick={() => loadSession(session.id)}
                                                className="px-5 py-4 hover:bg-slate-800/70 rounded-lg cursor-pointer transition text-[15px]  "
                                            >
                                                {session.title}
                                            </div>
                                        ))}

                                    </div>


                                    {/* User Profile */}
                                    <div className="flex items-center w-full h-16 bg-[#1e293b]/40 hover:bg-[#1e293b]/80 border-t border-[#1e293b] gap-3 px-4 flex-shrink-0 cursor-pointer transition-colors" id="user">
                                        <div className="w-8 h-8 rounded-full bg-red-400 text-white flex items-center justify-center font-medium text-sm border-2 border-[#0f172a] shadow-sm relative">
                                            N
                                            <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-slate-500 rounded-full border border-[#0f172a]"></div>
                                        </div>
                                        <span className="text-slate-200 text-sm font-medium">User Name</span>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </Panel>

                <PanelResizeHandle
                    onDragging={setIsDragging}
                    className={`${!isHistoryOpen ? 'opacity-0 w-0 pointer-events-none' : ''}`}
                >
                    <div className="h-full w-1 flex items-center justify-center select-none gap-0.5 bg-gray-800">
                        <div className="w-0.5 h-7 bg-gray-400 rounded opacity-50" />
                        <div className="w-0.5 h-5 bg-gray-400 rounded opacity-50" />
                    </div>
                </PanelResizeHandle>

                <Panel defaultSize={85} minSize={60}>

                    <div className="h-full w-full relative flex flex-col overflow-hidden rounded-t-3xl">
                        <ReflectBackground className="absolute inset-0 z-0" backdropBlurAmount="sm" />
                        <div className="relative z-10 flex flex-col h-full w-full">

                            {!isHistoryOpen && (
                                <button onClick={() => historyPanelRef.current?.expand()} className="hover:text-slate-200  cursor-pointer ml-3 mt-3 absolute">
                                    <TbLayoutSidebarLeftCollapseFilled  size={28} />
                                </button>
                            )}

                            {/* Main Content */}
                            <div className="flex flex-col h-screen w-full max-w-4xl mx-auto">

                                {/* Messages */}
                                <div className="flex-1 overflow-y-auto px-6 flex flex-col gap-6 scrollbar-hidden mt-1 mb-0.5">
                                    {messages.map((msg) => (
                                        <div
                                            key={msg.id}
                                            className={`flex flex-col max-w-[90%] ${
                                                msg.role === "user" ? "self-end items-end" : "self-start"
                                            }`}
                                        >

                                            <div className="p-3.5 rounded-2xl bg-[#1e293b] text-slate-200  whitespace-pre-wrap break-words break-all">
                                                {msg.text}
                                            </div>
                                        </div>
                                    ))}
                                    <div ref={messagesEndRef} />
                                </div>

                                {showPopup && (

                                    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50 backdrop-blur-md ">

                                        <div className="bg-transparent p-6 rounded-xl w-1/2  shadow-lg  backdrop-blur-md ">

                                            <div className="flex items-center justify-end">
                                            <button onClick={() => setShowPopup(false)}  >
                                                <X  size={25}/>
                                            </button>
                                            </div>
                                            <h2 className="text-md font-semibold mb-15">
                                                Uploaded Files
                                            </h2>


                                            {uploadedFiles.map((file, index) => (
                                                <div
                                                    key={index}
                                                    className="mb-3 border-gray-700 border-1 bg-gray-950 pl-10 rounded-2xl py-4 font-sans text-[20px]"
                                                >
                                                    <div>{file.name}</div>
                                                    <div className="text-sm text-gray-500">
                                                        {(file.size / 1024).toFixed(2)} KB
                                                    </div>
                                                </div>
                                            ))}

                                            <div className="flex gap-3 mt-4 justify-center">

                                                <button onClick={triggerFileInput} className="border-1 border-gray-800 bg-gray-900 p-3 rounded-3xl mt-10">
                                                    Upload  File
                                                </button>


                                                <input
                                                    type="file"
                                                    ref={fileInputRef}
                                                    onChange={handleFileSelect}
                                                    hidden
                                                />
                                            </div>

                                        </div>

                                    </div>
                                )}

                                {/* Input */}
                                <div
                                    className={`w-full max-w-4xl mx-auto transition-all duration-300 ${
                                        messages.length === 0 ? "mb-[50vh]" : "mb-6"
                                    }`}
                                >
                                    <div className="bg-white/5 backdrop-blur-3xl rounded-4xl p-3 flex items-end gap-5 border border-white/10 pr-7 pl-5">

                                       <textarea
                                           rows={1}
                                           value={inputValue}
                                           placeholder="Message Grux..."
                                           onChange={(e) => {
                                               setInputValue(e.target.value)

                                               e.currentTarget.style.height = "auto"
                                               e.currentTarget.style.height = e.currentTarget.scrollHeight + "px"
                                           }}
                                           onKeyDown={handleKeyDown}
                                           className="flex-1 bg-transparent  border-none text-white text-lg outline-none px-2 resize-none max-h-50 overflow-y-auto scrollbar-custom"
                                       />

                                        <button type="button" onClick={() => setShowPopup(true)} className="pb-1">
                                            <Paperclip size={18} />
                                        </button>



                                        <button onClick={handleSend} className="pb-1">
                                            <Send size={18} />
                                        </button>

                                    </div>
                               </div>

                            </div>

                        </div>
                    </div>
                </Panel>
            </PanelGroup>
        </>
    );
}
