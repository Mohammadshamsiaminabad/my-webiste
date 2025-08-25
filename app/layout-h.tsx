"use client";
// React
import { useState, useRef, useEffect } from "react";
// Next JS
import Image from "next/image";
import Link from "next/link";

const menu_links = [{label: "خدمات", href: "/"}, {label: "پروژه ها", href: "/projects"}, {label: "وبلاگ ها", href: "/blogs"}, {label: "ارتباط باما", href: "/contact"}, {label: "درباره ما", href: "/about"}];

export default function HeaderLayout() {
  const [menuClose, setMenuClose] = useState<boolean>(true);
  const [menuAnimation, setMenuAnimation] = useState<string>("");
  const smallMenuRef = useRef<HTMLDivElement | null>(null);


  useEffect(() => {
    if (!smallMenuRef.current) return;
    if (menuAnimation === "rf") {
      const el = smallMenuRef.current;
      el.style.animation = "none";
      void el.offsetHeight;
      smallMenuRef.current.style.animation = "menu-scale 200ms reverse forwards";
      setTimeout(() => {
        setMenuClose(true);
      }, 220);
      return;
    } else if (menuAnimation == "f") {
      setMenuClose(false);
      smallMenuRef.current.style.animation = "menu-scale 200ms forwards";
    }
  }, [menuAnimation]);

  return (
    <header>
      <div className="header">
        <div className="me">
          <Image width={48} height={48} src="/me.png" alt="محمد شمسی" />
          <div>
            <h2>برنامه نویسی با محمد</h2>
            <p>ساخت متنوع ترین وبسایت ها</p>
          </div>
        </div>
        <button onClick={() => setMenuAnimation("f")}>
          <i className="fa-solid fa-bars"></i>
        </button>
        <div className="menu-container">
          {menu_links.map((link, index) => (
            <div className="link" key={index}>
              <Link href={link.href}>{link.label}</Link>
              <div className="link-bottom"></div>
            </div>
          ))}
        </div>
        <div dir="rtl" ref={smallMenuRef} style={{ display: menuClose ? "none" : "block" }} className="small-menu-container">
          <button style={{ width: "fit-content" }} onClick={() => setMenuAnimation("rf")}><i className="fa-solid fa-close"></i></button>

          {menu_links.map((link, index) => (
            <button key={index}>
              <a href={link.href}>{link.label}</a>
            </button>
          ))}
        </div>
      </div>
    </header>
  )
}

// "use client";
// // React
// import { useState, useRef, useEffect } from "react";
// // Next JS
// import Image from "next/image";
// import Link from "next/link";

// const menu_links = [
//   { label: "خدمات", href: "/" },
//   { label: "پروژه‌ها", href: "/projects" },
//   { label: "وبلاگ‌ها", href: "/blogs" },
//   { label: "ارتباط با ما", href: "/contact" },
//   { label: "درباره ما", href: "/about" },
// ];

// export default function HeaderLayout() {
//   const [menuClose, setMenuClose] = useState<boolean>(true);
//   const [menuAnimation, setMenuAnimation] = useState<string>("");
//   const smallMenuRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     if (!smallMenuRef.current) return;
//     if (menuAnimation === "rf") {
//       const el = smallMenuRef.current;
//       el.style.animation = "none";
//       void el.offsetHeight;
//       smallMenuRef.current.style.animation =
//         "menu-scale 200ms reverse forwards";
//       setTimeout(() => {
//         setMenuClose(true);
//       }, 220);
//       return;
//     } else if (menuAnimation == "f") {
//       setMenuClose(false);
//       smallMenuRef.current.style.animation = "menu-scale 200ms forwards";
//     }
//   }, [menuAnimation]);

//   return (
//     <header role="banner">
//       <div className="header" dir="rtl">
//         {/* لوگو و نام برند */}
//         <div className="me">
//           <Link href="/" aria-label="صفحه اصلی - برنامه نویسی با محمد">
//             <Image
//               width={48}
//               height={48}
//               src="/me.png"
//               alt="محمد شمس - توسعه‌دهنده وب و طراح سایت"
//             />
//           </Link>
//           <div>
//             <h1>برنامه نویسی با محمد</h1>
//             <p>ساخت متنوع‌ترین وبسایت‌ها و اپلیکیشن‌ها</p>
//           </div>
//         </div>

//         {/* دکمه باز کردن منوی موبایل */}
//         <button
//           onClick={() => setMenuAnimation("f")}
//           aria-label="باز کردن منوی ناوبری"
//           aria-expanded={!menuClose}
//         >
//           <i className="fa-solid fa-bars"></i>
//         </button>

//         {/* منوی دسکتاپ */}
//         <nav className="menu-container" aria-label="منوی اصلی">
//           {menu_links.map((link, index) => (
//             <div className="link" key={index}>
//               <Link href={link.href}>{link.label}</Link>
//               <div className="link-bottom"></div>
//             </div>
//           ))}
//         </nav>

//         {/* منوی موبایل */}
//         <nav
//           dir="rtl"
//           ref={smallMenuRef}
//           style={{ display: menuClose ? "none" : "block" }}
//           className="small-menu-container"
//           aria-label="منوی موبایل"
//         >
//           <button
//             style={{ width: "fit-content" }}
//             onClick={() => setMenuAnimation("rf")}
//             aria-label="بستن منوی ناوبری"
//           >
//             <i className="fa-solid fa-close"></i>
//           </button>

//           {menu_links.map((link, index) => (
//             <Link key={index} href={link.href} className="mobile-menu-link">
//               {link.label}
//             </Link>
//           ))}
//         </nav>
//       </div>
//     </header>
//   );
// }
