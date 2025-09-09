"use client";
import { useState } from "react";
import InputBox from "../components/InputBox";

export default function ClientContact() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSendEmail = async () => {
    return;
  }

  return (
    <div dir="rtl" className="contact-container">
      <div className="container-1">
        <h2 className="text-lg">تماس بگیرید</h2>
        <p className="paragraph">ما دوست داریم از شما بشنویم. فرم را پر کنید و به زودی با شما تماس خواهیم گرفت.</p>      
        <InputBox type="text" value={name} setValue={setName}>
          <h3 className="text-lg">نام شما</h3>  
        </InputBox>
        <InputBox type="email" value={email} setValue={setEmail}>
          <h2 className="text-lg">ایمیل شما</h2>
        </InputBox>
        <InputBox type="text" value={subject} setValue={setSubject}>
          <h2 className="text-lg">موضوع</h2>
        </InputBox>
        <InputBox type="textarea" value={message} setValue={setMessage}>
          <h2 className="text-lg">پیام</h2>
        </InputBox>
        <button onClick={handleSendEmail}>ارسال پیام</button>
      </div>
      <div dir="rtl" className="container-2">
        <div className="info-box">
          <h2>ایران</h2>
          <p>تبریز / شهرک اندیشه</p>
        </div>
        <div className="info-box">
          <h2>ایمیل ما</h2>
          <p>mohammadshamsi8686@gmail.com</p>
        </div>
      </div>
    </div>
  )
}