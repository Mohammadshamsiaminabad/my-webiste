"use client";
// react
import { useState } from "react";
// my components
import OTBInput from "../components/OTPInput";
// main context
import { useMainContext } from "../mainContext";
// apollo client
// import { useMutation } from "@apollo/client";
// import { AUTHORIZATION } from "../lib/apollo-client";

export default function RegisterAuthoriazation() {
  // const [authorization, { data, loading, error }] = useMutation(AUTHORIZATION);
  const { email } = useMainContext();
  const [send, setSend] = useState(false);


  const handleSend = async () => {
    try {
      setSend(true);
      console.log(email);
      // await authorization({ variables: { email, code: otp } });
    } catch (err) {
      console.error("server internal error\n", err);
      alert(err);
    }
  }
  return (
    <main>
      <div dir="rtl" className="fill-window">
        <div className="authorization-container"> 
          <h3 className="text-center">به شما یک کد صحت سنجی فرستادیم لطفا کد را وارد کنید.</h3>
          <OTBInput length={6} onComplete={handleSend} />
          <button style={send ? { opacity: 0.4, cursor: "not-allowed" } : {}}>ارسال</button>
        </div>
      </div>
    </main>
  )
}
