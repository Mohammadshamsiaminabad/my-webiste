"use client";
import Image from "next/image";
import FooterContainers from "./components/FooterContainers";
import { useMainContext } from "./mainContext";

export default function FooterLayout() {
  const { email, setEmail } = useMainContext();

  const handleAuthorization = async () => {
    console.log("hello");
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