// Next JS
import Image from "next/image";
import Link from "next/link";
// my Components
import Services from "./components/services";

export default function Home() {
  return (
    <main className="text-center">
      <h1 dir="rtl" className="main-text">✨ طراحی, 🚀 ساخت & 🚚 انتشار</h1>
      <p style={{  margin: "20px", maxWidth: "860px" }} className="paragraph text-center res-text">به وبسایت برنامه نویسی محمد شمس خوش آمدید! 🌟 ما اینجا هستیم تا ایده های شما را عملی کنیم. با طراحی های خیره کننده ✨ برای ساختن نرم افزار قوی 🚀 و انتشار آن به صورت یکپارچه 🚚، ما اینجا هستیم تا به کسب و کار شما کمک کنیم تا بدرخشد. بیایید با هم چیزی شگفت‌انگیز خلق کنیم! 🎉</p>
      <button style={{ marginTop: "30px" }} className="main-btn top-btn"><a href="/contact">ارتباط با ما</a></button>
      <button style={{ background: "transparent", color: "var(--foreground)", border: "1px solid var(--foreground)" }} className="main-btn top-btn"><a href="#services">دیدن خدمات ما</a></button>
      <div className="mt-8">
        <p className="paragraph text-center">کاری که ما انجام میدیم</p>
        <h2 className="text-center text-xl">خدمات تخصصی</h2>
        <p className="paragraph text-center res-text">راهکارهای سفارشی متناسب با موفقیت خرید و فروش اینترنتی شما</p>
      </div>
      <div id="services">
        <Services />
      </div>
      <div dir="rtl" className="costomer-reviews mt-8">
        <p className="paragraph text-center res-text">&quot;ما با ایده‌ای برای اپلیکیشن موبایل خود به برنامه نویسی با محمد مراجعه کردیم و کار آنها واقعاً فوق‌العاده بوده است. ما عاشق همکاری با تیم آنها هستیم و همیشه تحت تأثیر کیفیت کارشان قرار می‌گیریم. آنها دائماً کار را به موقع تحویل می‌دهند و با توجه به جزئیات و حرفه‌ای‌گری، فراتر از انتظارات ما عمل می‌کنند. از شما متشکریم که هر پروژه را به یک تجربه روان و لذت‌بخش تبدیل می‌کنید!&quot;</p>
        <div className="costomer-container mt-8">
          <Image width={64} height={64} src="/man.jpg" alt="Seteve Potter" />
          <div className="desc">
            <h2>استیو پاتر</h2>
            <p>مدیر ارشد فناوری، آپزلو</p>
          </div>
        </div>
      </div>

      <div className="lorem-container mt-8">
        <h2 className="text-lg">آماده تا حضور فروش اینترنتی خود را ارتقا دهید؟</h2>
        <p style={{ color: "var(--normalize-box)" }} className="paragraph">با برنامه‌نویسی محمد به رویای خود جامه عمل بپوشانید. با متخصصان ما همکاری کنید و پروژه موفق بعدی خود را همین امروز خلق کنید!</p>
        <button><Link href="#">بریم شروع کنیم</Link></button>
    </div>
    </main>
  );
}