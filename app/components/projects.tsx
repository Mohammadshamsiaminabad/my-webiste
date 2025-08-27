"use client";
// React
import { useRef, useEffect, useState } from "react";
// Next JS
import Image from "next/image";
import Link from "next/link";

const WebsiteProjectsData = [{img: "/img-1.jpg", label: "وبسایت فروشگاهی", href: "/projects/example/shop-web"}, {img: "/img-2.jpg", label: "وبسایت شخصی", href: "projects/example/my-website"}, {img: "/img-3.jpg", label: "وبسایت موزیک", href: "/projects/example/music-website" }, {img: "/img-5.webp", label: "وبسایت اخباری", href: "/projects/example/news-website" }];
const GameProjectsData = [{img: "/img-3.jpg", label: "بازی مار", href: "" }, {img: "/img-6.webp", label: "بازی پنگ", href: "" }, {img: "/img-5.webp", label: "بازی پکمن", href: "" }];
const MobileProjectsData = [{img: "/img-1.jpg", label: "اپلیکیشن فروشگاهی", href: ""}, {img: "/img-1.jpg", label: "اپلیکیشن کتاب", href: "" }, {img: "/img-1.jpg", label: "اپلیکیشن موزیک", href: "" }, {img: "/img-1.jpg", label: "اپلیکیشن اخباری", href: ""}];

interface projectProps {
  img: string;
  label: string;
  href: string;
}

interface ProjectsProps {
  main_text: string;
  projects: projectProps[];
  delay: number;
}

function Projects(props: ProjectsProps) {
  const { main_text, projects, delay } = props;
  const [pageCount, setPageCount] = useState<number>(1);
  const projectContainerRef = useRef<HTMLDivElement | null>(null);
  const pageRef = useRef(1);

  useEffect(() => {
    if (!projectContainerRef.current) return;
    const interval = setInterval(() => {
      setTimeout(() => {
        const nextPage = pageRef.current < projects.length ? pageRef.current + 1 : 1;
        pageRef.current = nextPage;
        projectContainerRef.current?.scrollTo({
          left: -(nextPage - 1) * projectContainerRef.current.clientWidth,
          top: 0,
          behavior: "smooth"
        });
        }, delay);
    }, 5000);

    return () => clearInterval(interval);
  }, [projects.length, delay]);

 
  return (
    <div className="waa-projects-container">
      <h2 className="main-text text-lg">{main_text}</h2>

      <div
        dir="rtl" 
        ref={projectContainerRef}
        className="projects-container"
        onScrollEnd={(event) => {
          setPageCount(Math.floor(-event.currentTarget.scrollLeft / event.currentTarget.clientWidth) + 1);
        }} >
        {projects.map((project, index) => (
          <div key={index} className="project">
            <div className="gradient"></div>
            <Image width={100} height={100} src={project.img} alt={project.img} />
            <div className="child">
              <h2 className="text-lg">{project.label}</h2>
              <Link href={project.href}><button>نمایش</button></Link>
            </div>
          </div>
        ))}
      </div>

      <div className="points">
        {projects.map((_, index) => (
          <div
            key={index}
            style={{
              backgroundColor: index === pageCount - 1 ? "#fff" : "transparent"
            }}
            className="point"
          ></div>
        ))}
      </div>
    </div>
  
  );
}

function GameProjects(props: {data: projectProps[], delay: number}) {
  const { data, delay } = props;
  const pageRef = useRef<number>(0);
  const gameProjectContainer = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeout(() => {
        const nextPage = pageRef.current < data.length - 2 ? pageRef.current + 1: 0;
        pageRef.current = nextPage;
        gameProjectContainer.current?.scrollTo({
          left: -nextPage * gameProjectContainer.current.clientWidth / 2,
          top: 0,
          behavior: "smooth",
        });
      }, delay);
    }, 5000);

    return () => clearInterval(interval);
  }, [data.length, delay]);

  return (
    <div ref={gameProjectContainer} className="game-project-container">
      {props.data.map((project, index) => (
        <div className="game-project" key={index}>
          <div className="gradient"></div>
          <Image width={100} height={100} src={project.img} alt={project.img} />
          <p className="paragraph">{project.label}</p>
        </div>
      ))}
    </div>
  )
}

export default function ProjectContainer() {
  return (
    <div className="projects-box">
      <Projects main_text="وبسایت ها" projects={WebsiteProjectsData} delay={0} />
      <GameProjects data={GameProjectsData} delay={200} />
      <Projects main_text="اپلیکیشن ها" projects={MobileProjectsData} delay={400} />
      <Projects main_text="اپلیکیشن ها" projects={MobileProjectsData} delay={600} />
    </div>
  )
}

// "use client";
// import { useEffect, useRef, useState } from "react";
// import Image from "next/image";

// interface ProjectProps {
//   img: string;
//   label: string;
//   href?: string;
// }

// interface CarouselProps {
//   main_text: string;
//   projects: ProjectProps[];
//   interval?: number;
// }

// function Carousel({ main_text, projects, interval = 5000 }: CarouselProps) {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const [currentPage, setCurrentPage] = useState(0);

//   useEffect(() => {
//     const id = setInterval(() => {
//       if (!containerRef.current) return;
//       const nextPage = (currentPage + 1) % projects.length;
//       setCurrentPage(nextPage);
//       containerRef.current.scrollTo({
//         left: nextPage * containerRef.current.clientWidth,
//         behavior: "smooth",
//       });
//     }, interval);

//     return () => clearInterval(id);
//   }, [currentPage, projects.length, interval]);

//   return (
//     <div className="waa-projects-container">
//       <h2 className="main-text text-lg">{main_text}</h2>
//       <div ref={containerRef} className="projects-container" dir="rtl">
//         {projects.map((project, index) => (
//           <div key={index} className="project">
//             <div className="gradient"></div>
//             <Image width={100} height={100} src={project.img} alt={project.label} />
//             <div className="child">
//               <h2 className="text-lg">{project.label}</h2>
//               {project.href && <a href={project.href}><button>نمایش</button></a>}
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="points">
//         {projects.map((_, index) => (
//           <div
//             key={index}
//             className="point"
//             style={{ backgroundColor: currentPage === index ? "#fff" : "transparent" }}
//           ></div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default function ProjectContainer() {
//   const WebsiteProjects = [
//     { img: "/img-1.jpg", label: "وبسایت فروشگاهی", href: "/shop-web" },
//     { img: "/img-2.jpg", label: "وبسایت شخصی" },
//     { img: "/img-3.jpg", label: "وبسایت موزیک" },
//     { img: "/img-5.webp", label: "وبسایت اخباری" },
//   ];

//   const GameProjects = [
//     { img: "/img-3.jpg", label: "بازی مار" },
//     { img: "/img-6.webp", label: "بازی پنگ" },
//     { img: "/img-5.webp", label: "بازی پکمن" },
//   ];

//   const MobileProjects = [
//     { img: "/img-1.jpg", label: "اپلیکیشن فروشگاهی" },
//     { img: "/img-1.jpg", label: "اپلیکیشن کتاب" },
//     { img: "/img-1.jpg", label: "اپلیکیشن موزیک" },
//     { img: "/img-1.jpg", label: "اپلیکیشن اخباری" },
//   ];

//   return (
//     <div className="projects-box">
//       <Carousel main_text="وبسایت ها" projects={WebsiteProjects} />
//       <Carousel main_text="بازی ها" projects={GameProjects} interval={4000} />
//       <Carousel main_text="اپلیکیشن ها" projects={MobileProjects} interval={4500} />
//     </div>
//   );
// }
