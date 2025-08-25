// Next JS
import Link from "next/link";

const FooterContainersData = [
  {main_text: "خدمات",links: [{label: "توسعه وبسایت",href: "/"},{label: "توسعه برنامه موبایل", href: "/"}, {label: "برنامه های ترکیبی", href: "/"}, {label: "طراحی ui/ux", href: "/"}]},
  {main_text: "شرکت",links: [{label: "درباره ما",href: "/about"},{label: "ارتباط باما", href: "/contact"}, {label: "پروژه ها", href: "/projects"}, {label: "وبلاگ ها", href: "/blogs"}]},
  {main_text: "ما را در فضای مجازی دنبال کنید",links: [{label: "توییتر",href: "#"},{label: "اینستاگرام", href: "#"}, {label: "گیت‌هاب", href: "#"}, {label: "لینکدین", href: "#"}]},
];

interface Link {
  label: string;
  href: string;
}

interface FooterLinkProps {
  main_text: string;
  links: Link[];
}

function FooterContainer(props: FooterLinkProps) {
  const { main_text, links } = props;

  return (
    <div dir="rtl" className="footer-container">
      <h2>{main_text}</h2>
      <ul>
        {links.map((link, index) => (
          <li key={index}><Link href={link.href}>{link.label}</Link></li>
        ))}
      </ul>
    </div>
  )
}

export default function FooterContainers() {
  return (
    <div style={{ marginTop: "30px" }} className="footer-bottom">
      {FooterContainersData.map((container, index) => (
        <FooterContainer key={index} {...container} />
      ))}
    </div>
  );
}
