import ProjectContainer from "../components/projects";

export const metadata = {
  title: "لیست پروژه های محمد شمسی",
  description: "مشاهده نمونه‌کارها و پروژه‌های من در حوزه توسعه وب با Next.js، React.js، بک‌اند و API. تجربه واقعی از طراحی و پیاده‌سازی."
};

export default function Projects() {
  return (
    <main dir="rtl">
      <ProjectContainer />
      <p className="paragraph res-text">شرکت برنامه نویسی با محمد برای شما مشتریان عزیز چند تا پروژه اماده کرده  تا اعتماد شما را جلب کند</p>
    </main>
  )
}