"use client";
import {useState} from "react";
import Modal from "@/app/components/UI/Modal";
import SignupForm from "@/app/components/Auth/SingupForm";
import {LoginForm} from "@/app/components/Auth/LoginForm";

export default function LoginPage() {
    const [isSignupOpen, setSignupOpen] = useState(false);

  return (
    <div style={{backgroundColor: "#1a1a1a"}} >
      <div className="h-screen w-screen " >
        <h1 className="font-bold text-2xl p-1">SnapPass</h1>
        <div className="flex flex-col items-center justify-center h-full w-full">
            <div className=" w-full flex items-center justify-center rounded-2xl " >
                <div className="flex flex-row items-center justify-center h-full p-20  min-w-50 rounded-2xl" style={{boxShadow: "10px 10px 50px 50px rgba(0,0,0,0.3)"}}>
                <LoginForm/>
                </div>
            </div>
            <button className="mt-5 cursor-pointer" onClick={()=> setSignupOpen(true)} >Don't have an Account ?</button>
            <Modal isOpen={isSignupOpen} onClose={() => setSignupOpen(false)}>
                <SignupForm />
            </Modal>
        </div>
      </div>
    </div>
  );
}
