"use client";
import { useEffect, useRef, useState } from "react";

export default function LayoutHeader() {
  const [openMenuAnimation, setOpenMenuAnimation] = useState("");
  const [openMenu, setOpenMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const handleOpenMenu = () => {
    setOpenMenuAnimation("ease-out");
  }

  const handleCloseMenu = () => {
    setOpenMenuAnimation("reverse forwards");
  }

  useEffect(() => {
    if (!menuRef.current) return;

    if (openMenuAnimation === "ease-out") {
      setOpenMenu(true);  
      menuRef.current.style.animation = "openMenu 200ms ease-out";
      return;
    }
    else if (openMenuAnimation === "reverse forwards") {
      menuRef.current.style.animation = "";
      void menuRef.current.offsetHeight;
      menuRef.current.style.animation = "openMenu 200ms reverse forwards";
      setTimeout(() => {
        setOpenMenu(false);
      }, 200);
      return;
    }
  }, [openMenuAnimation]);

  return (
    <header style={{ backgroundColor: "#fff" ,width: "100%" }}>
      <nav className="s-header-nav">
        <div style={{ display: "flex", alignItems: "center" }}>
          <button onClick={handleOpenMenu}><i className="fa-solid fa-bars"></i></button>
          <button style={{ padding: "0 10px" }}><strong>WEBNAME</strong></button>
        </div>

        <div>
          <button><i className="fa-solid fa-magnifying-glass"></i></button>
          <button><i className="far fa-user"></i></button>
          <button><i className="fa-regular fa-heart"></i></button>
          <button><i className="fa-solid fa-shopping-bag"></i></button>
        </div>




      </nav>
      <div ref={menuRef} style={{ display: openMenu ? "block" : "none" }} className="s-md-menu">
          <p>hello, World</p>
          <button onClick={handleCloseMenu}><i className="fa-solid fa-close"></i></button>
      </div>
    </header>
  )
}