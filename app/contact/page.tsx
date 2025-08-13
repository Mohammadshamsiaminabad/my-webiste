import InputBox from "../components/InputBox";

export default function Contact() {
  return (
    <main>
      <div dir="rtl" className="contact-container">
        <div className="container-1">
          <h2 className="text-lg">تماس بگیرید</h2>
          <p className="paragraph">ما دوست داریم از شما بشنویم. فرم را پر کنید و به زودی با شما تماس خواهیم گرفت.</p>      
          <InputBox type="text">
            <h2 className="text-lg">نام شما</h2>  
          </InputBox>
          <InputBox type="email">
            <h2 className="text-lg">ایمیل شما</h2>
          </InputBox>
          <InputBox type="text">
            <h2 className="text-lg">موضوع</h2>
          </InputBox>
          <InputBox type="textarea">
            <h2 className="text-lg">پیام</h2>
          </InputBox>
          <button>ارسال پیام</button>
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
    </main>
  )
}