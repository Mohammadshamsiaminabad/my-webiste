const servicesData = [
  {main_text: "توسعه وبسایت", description: "توسعه‌دهندگان ماهر ما وب‌سایت‌های واکنش‌گرا و زیبایی را متناسب با نیازهای کسب‌وکار شما طراحی می‌کنند. چه یک صفحه ورود ساده باشد و چه یک سایت کامل شرکتی، ما با استفاده از جدیدترین ابزارها، اطمینان حاصل می‌کنیم که در همه دستگاه‌ها به راحتی کار می‌کند."},
  {main_text: "توسعه اپلیکیشن موبایل", description: "با خدمات توسعه اپلیکیشن موبایل ما، در هر زمان با مشتریان خود در ارتباط باشید. ما اپلیکیشن‌های iOS و اندروید کاربرپسند و با امکانات فراوان ایجاد می‌کنیم تا مخاطبان شما را جذب کرده و حضور موبایلی برند شما را ارتقا دهیم."},
  {main_text: "طراحی ui/ux", description: "طراحی عالی با کاربر شروع می‌شود. متخصصان UI/UX ما بر ایجاد طرح‌هایی تمرکز دارند که هم زیبا و هم آسان برای استفاده باشند و تعادل کاملی بین سبک و عملکرد برای دستیابی به نتایج مطلوب ایجاد کنند."},
  {main_text: "توسعه وب اپلیکیشن", description: "با استفاده از برنامه‌های وب سفارشی، کسب و کار خود را ساده کنید. ما از چارچوب‌های مدرن و روش‌های چابک برای ایجاد راه‌حل‌های ایمن، کارآمد و پویا استفاده می‌کنیم که بهره‌وری را افزایش داده و گردش کار را ساده می‌کنند."}
];

interface ServiceProps {
  main_text: string;
  description: string;
};

function Service(props: ServiceProps) {
  const { main_text, description } = props;
  return (
    <section dir="rtl" className="service-container">
      <h2 className="text-xl">{main_text}</h2>
      <p className="paragraph">{description}</p>
    </section>
  );
}


export default function Services() {

  return (
    <div className="services-container">
      {servicesData.map((service, index) => (
        <Service key={index} {...service} />
      ))}
    </div>

  )
}