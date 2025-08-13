"use client";
// React
import { useRef, useEffect, useState } from "react";
// Next JS
import Image from "next/image";

const WebsiteProjectsData = [{img: "/img-1.jpg", label: "وبسایت فروشگاهی", href: "/shop-web"}, {img: "/img-2.jpg", label: "وبسایت شخصی"}, {img: "/img-3.jpg", label: "وبسایت موزیک"}, {img: "/img-5.webp", label: "وبسایت اخباری"}];
const GameProjectsData = [{img: "/img-3.jpg", label: "بازی مار" }, {img: "/img-6.webp", label: "بازی پنگ" }, {img: "/img-5.webp", label: "بازی پکمن" }];
const MobileProjectsData = [{img: "/img-1.jpg", label: "اپلیکیشن فروشگاهی"}, {img: "/img-1.jpg", label: "اپلیکیشن کتاب"}, {img: "/img-1.jpg", label: "اپلیکیشن موزیک"}, {img: "/img-1.jpg", label: "اپلیکیشن اخباری"}];

interface projectProps {
  img: string;
  label: string;
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
  }, [projects.length]);

 
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
              <button>نمایش</button>
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
  }, [data.length]);

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

// kjnbjndkfnb??