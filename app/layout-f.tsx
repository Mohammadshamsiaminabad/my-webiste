"use client";
// React States
import { useState } from "react";
// Next JS
import Image from "next/image";
import { useRouter } from "next/navigation";
// my components
import FooterContainers from "./components/FooterContainers";
// mainContext
import { useMainContext } from "./mainContext";
// apollo client
// import { useMutation } from "@apollo/client";
// import { REGISTER } from "./lib/apollo-client";

export default function FooterLayout() {
  // const [register, { data, loading, error }] = useMutation(REGISTER);
  const { email, setEmail } = useMainContext();
  const router = useRouter();

  const handleAuthorization = async () => {
    // try {
    //   if (!email.trim()) {
    //     return;
    //   }
    //   const result = await register({ variables: { email } });
    //   const res = result.data.register;
    //   if (res.code === 500) {
    //     throw new Error(res.message);
    //   }
    //   router.push("/register-authorization");
    // } catch (err) {
    //   console.error(err);
    //   alert(err);
    // }

  };

  return (
    <footer className="footer">
      <div dir="rtl" className="register-now mt-8">
        <h2 className="text-lg">همین الان ثبت نام کنید</h2>
        <p className="paragraph">برای دریافت آخرین اخبار، مقالات، منابع و الهامات طراحی، مشترک شوید.</p>
        <div className="register-box">
          <input
            type="email"
            placeholder="ادرس ایمیل"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
          <button onClick={handleAuthorization} className="main-btn py-2">ثبت‌نام</button>
        </div>

      </div>
      <FooterContainers />
      <div className="me">
        <Image width={48} height={48} src="/me.png" alt="محمد شمسی" />
        <div>
          <h2>برنامه نویسی با محمد</h2>
          <p>ساخت متنوع ترین وبسایت ها</p>
        </div>
      </div>
      <p className="text-center text-lg">© 2025 - برنامه نویسی با محمد</p>
    </footer>
  )
}