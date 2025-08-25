import Link from "next/link";
import Image from "next/image";
import { SexCategoryType } from "../types/SexCategory"

const categories: SexCategoryType[] = [
  {
    sex: "women",
    image: "/model-woman.avif",
    materials: [
      { text: "t-shirt", href: "#" },
      { text: "pants", href: "#" },
      { text: "shoes", href: "#" },
      { text: "beach wear", href: "#" }
    ]
  },
  {
    sex: "man",
    image: "/model-man.webp",
    materials: [
      { text: "t-shirt", href: "#" },
      { text: "pants", href: "#" },
      { text: "shoes", href: "#" },
    ]
  },
  {
    sex: "child",
    image: "/model-children.jpg",
    materials: [
      { text: "t-shirt", href: "#" },
      { text: "pants", href: "#" },
      { text: "shoes", href: "#" },
    ]
  },
  {
    sex: "animal",
    image: "/model-animal.jpg",
    materials: [
      { text: "t-shirt", href: "#" },
      { text: "shoes", href: "#" },

    ]
  }
]

export default function SexCategory() {

  return (
    <div className="clothes-category-container">
      {categories.map((category, index) => (
        <section className="clothes-category-box" key={index}>
          <h3>{category.sex}</h3>
          <article>
            <h4>clothes</h4>
            <ul>
              {category.materials.map((material, index) => (
                <li key={index}><Link href={material.href}>{material.text}</Link></li>
              ))}
            </ul>
          </article>
          <Image width={200} height={200} alt="sm" src={category.image} />
        </section>
      ))}
    </div>
  )
}