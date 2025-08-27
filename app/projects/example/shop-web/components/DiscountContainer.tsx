import Image from "next/image";
import { DiscountContainerType } from "../types/DiscountContainer";

const DiscountContainerList: DiscountContainerType = {
  precent: 50,
  components: [
    {
      label: "men's clothes",
      img: "/men's-clothes.avif",
      price: 150,
      score: 3.6,
      view: 230,
    },
    {
      label: "women's clothes",
      img: "/women's-clothes.jpg",
      price: 400,
      score: 3.6,
      view: 230,
    },
    {
      label: "men's suit",
      img: "/men's-suit.jpg",
      price: 270,
      score: 3.6,
      view: 230,
    },
    {
      label: "men's shoes",
      img: "/men's-shoes.jpg",
      price: 160,
      score: 3.6,
      view: 230,
    },
    {
      label: "women's shoes",
      img: "/women's-shoes.jpg",
      price: 240,
      score: 3.6,
      view: 230,
    },
  ]
}

export default function DiscountContainer() {
  const { precent, components } = DiscountContainerList;

  return (
    <div className="discount-commudity-container">
      <h3>&quot;Discount Clothes {precent}%&quot;</h3>
      <div className="discount-container">
        {components.map((component, index) => (
          <section className="clothes-box" key={index}>
            <h5>{component.label}</h5>
            <p className="price"><del>{component.price}$</del> {component.price * (precent / 100)}$</p>
            <span className="view">{component.view} <i className="fa-solid fa-eye"></i></span>
            <span className="score"><i className="fa-solid fa-star"></i> {component.score}</span>
            <Image width={200} height={200} alt={component.label} src={component.img} />
          </section>
        ))}
      </div>
    </div>
  )
}