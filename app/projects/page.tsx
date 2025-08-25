import ProjectContainer from "../components/projects";

export const metadata = {
  title: "لیست پروژه های من",
  description: "لیست پروژه های من",
};

export default function Projects() {
  return (
    <main dir="rtl">
      <ProjectContainer />
      <p className="paragraph res-text">شرکت برنامه نویسی با محمد برای شما مشتریان عزیز چند تا پروژه اماده کرده  تا اعتماد شما را جلب کند</p>
    </main>
  )
}