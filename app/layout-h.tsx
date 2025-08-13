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