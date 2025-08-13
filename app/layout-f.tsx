// Next JS
import Image from "next/image";
// my components
import FooterContainers from "./components/FooterContainers";

export default function FooterLayout() {
  return (
    <footer className="footer">
      <div dir="rtl" className="register-now mt-8">
        <h2 className="text-lg">همین الان ثبت نام کنید</h2>
        <p className="paragraph">برای دریافت آخرین اخبار، مقالات، منابع و الهامات طراحی، مشترک شوید.</p>
        <div className="register-box">
          <input type="email" placeholder="ادرس ایمیل" />
          <button className="main-btn py-2">ثبت‌نام</button>
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